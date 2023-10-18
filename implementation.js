const { client, db } = require('./database.js');
const { ObjectId } = require('mongodb');
const axios = require('axios');

async function connectAndSaveSignalHmu(data) {
    return new Promise(async(resolve, reject) => {
        try {
            await client.connect();
            const collection = db.collection('signal_hmu');

            const result = await collection.insertOne({ data });

            if (result.acknowledged === true) {
                resolve('SignalData inserted successfully');
            } else {
                reject(new Error('SignalData not inserted.'));
                console.log(error);
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

async function connectAndSavePointHmu(data) {
    return new Promise(async(resolve, reject) => {
        try {
            await client.connect();
            const collection = db.collection('point_hmu');

            const result = await collection.insertOne({ data });

            if (result.acknowledged === true) {
                resolve('PointData inserted successfully');
            } else {
                reject(new Error('PointData not inserted.'));
                console.log(error);
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

async function connectAndSaveTrackHmu(data) {
    return new Promise(async(resolve, reject) => {
        try {
            await client.connect();
            const collection = db.collection('track_hmu');

            const result = await collection.insertOne({ data });

            if (result.acknowledged === true) {
                resolve('TrackData inserted successfully');
            } else {
                reject(new Error('TrackData not inserted.'));
                console.log(error);
            }
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
}

async function sendvalueTocloud(data) {
    return new Promise(async(resolve, reject) => {
        try {

            const cloudURL = 'http://localhost:6060/receive-data';
            const response = await axios.post(cloudURL, data);

            if (response.data.message === true) {
                resolve("Values sent to cloud successfully");
            } else {
                reject(new Error('Values not sent to cloud.'));
            }

        } catch (error) {
            console.error('Error sending data to cloud:', error);
            reject(error);
        }
    });
}

module.exports = { connectAndSaveSignalHmu, connectAndSavePointHmu, connectAndSaveTrackHmu, sendvalueTocloud };