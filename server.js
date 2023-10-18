const express = require('express');
const cluster = require('cluster');
const os = require('os');
const net = require('net');
const { connectAndSaveSignalHmu, connectAndSavePointHmu, connectAndSaveTrackHmu, sendvalueTocloud } = require('./implementation');
const JSONStream = require('JSONStream');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    // Create a master process that forks worker processes
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    const app = express();
    const PORT_HTTP = process.env.PORT || 3000;
    const PORT_TCP = 9090;
    const HOST_TCP = '192.168.1.26';

    // No need for the router and HTTP endpoints

    // Create a TCP server to handle incoming TCP requests
    const tcpServer = net.createServer((socket) => {
        socket.write('acknowledged\r\n');

        // Create a JSONStream parser
        const parser = JSONStream.parse(/\}\s*\{/);
        socket.pipe(parser);

        parser.on('data', (jsonData) => {
            processDataAndSave(jsonData);
        });

        parser.on('error', (err) => {
            console.error('Error parsing JSON data:', err);
        });

        // Handle socket errors, including ECONNRESET
        socket.on('error', (err) => {
            if (err.code === 'ECONNRESET') {
                console.error('Connection was reset by the client.');
                // You can add custom handling for this error as needed.
            } else {
                console.error('Socket error:', err);
            }
        });

    });

    tcpServer.listen(PORT_TCP, HOST_TCP, () => {
        console.log(`TCP Worker ${process.pid} listening on ${HOST_TCP}:${PORT_TCP}`);
    });

    async function processDataAndSave(data) {
        if (isValidDataStructure(data)) {
            const currentDateTime = new Date().toLocaleString();
            console.log(`Last data received on: ${currentDateTime}`);
            console.log('Board:', data.communication_board.deviceId);

            if (data.communication_board.SignalHmu) {
                try {
                    const saveSignalHmu = await connectAndSaveSignalHmu(data.communication_board.SignalHmu);
                    //console.log(saveSignalHmu);
                } catch (error) {
                    console.error('Error inserting SignalHmu data:', error);
                }
            } else {
                console.error('SignalHmu data is missing or incorrect');
            }

            if (data.communication_board.PointHmu) {
                try {
                    const savePointHmu = await connectAndSavePointHmu(data.communication_board.PointHmu);
                    //console.log(savePointHmu);
                } catch (error) {
                    console.error('Error inserting PointHmu data:', error);
                }
            } else {
                console.error('PointHmu data is missing or incorrect');
            }

            if (data.communication_board.TrackHmu) {
                try {
                    const saveTrackHmu = await connectAndSaveTrackHmu(data.communication_board.TrackHmu);
                    //console.log(saveTrackHmu);
                } catch (error) {
                    console.error('Error inserting TrackHmu data:', error);
                }
            } else {
                console.error('TrackHmu data is missing or incorrect');
            }
        } else {
            console.error('Invalid or incomplete JSON data structure:', data);
        }
    }

    function isValidDataStructure(data) {
        return (
            data &&
            data.communication_board &&
            data.communication_board.deviceId
        );
    }
}