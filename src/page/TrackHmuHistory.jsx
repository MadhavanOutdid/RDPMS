import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function TrackHmuHistory() {
  return (
    <div className="content-wrapper" style={{ minHeight: '817px' }} id="liveData">
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6 module-name">
                        <h1>TCK HMU</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <Link to="/trackhmu" ><button type="button" className="btn btn-info">Back</button></Link>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        {/* Live content */}
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Live Data's</h3>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Device ID</th>
                                            <th>DC Feedend Voltage</th>
                                            <th>DC Relayend Voltage</th>
                                            <th>DC Feedend Current</th>
                                            <th>DC Relayend Current</th>
                                            <th>Input Voltage of Battery Charger</th>
                                            <th>Output Current of Battery Charger</th>
                                            <th>Charging Voltage</th>
                                            <th>Discharging Voltage</th>
                                            <th>Charging Current</th>
                                            <th>Discharging Current</th>
                                            <th>Incoming TPR Voltage</th>
                                            <th>Outgoing TPR Voltage</th>
                                        </tr>
                                    </thead>
                                    <tbody id="live-data"></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* History content */}
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card"> 
                            <div className="card-header">
                                <h3 className="card-title">History</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width:'200px'}} id="graph-btn">
                                        {/* <Link to="/trackhmugraph" className="float-right" style={{marginLeft:'100px', marginTop:'3px'}} id="DEV_001">Graph View</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card-body table-responsive">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{width:'10px'}}>Sl.no</th>
                                                <th>Device ID</th>
                                                <th>DC Feedend Voltage</th>
                                                <th>DC Relayend Voltage</th>
                                                <th>DC Feedend Current</th>
                                                <th>DC Relayend Current</th>
                                                <th>Input Voltage of Battery Charger</th>
                                                <th>Output Current of Battery Charger</th>
                                                <th>Charging Voltage</th>
                                                <th>Discharging Voltage</th>
                                                <th>Charging Current</th>
                                                <th>Discharging Current</th>
                                                <th>Incoming TPR Voltage</th>
                                                <th>Outgoing TPR Voltage</th>
                                            </tr>
                                        </thead>
                                        <tbody id="history-data"></tbody>
                                        {/* <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>TCK789</td>
                                                <td>2023-05-04</td>
                                                <td>16:34:26</td>
                                                <td>240V</td>
                                                <td>245V</td>
                                                <td>2A</td>
                                                <td>3A</td>
                                                <td>220V</td>
                                                <td>1.5A</td>
                                                <td>235V</td>
                                                <td>225V</td>
                                                <td>1A</td>
                                                <td>0.5A</td>
                                                <td>250V</td>
                                                <td>255V</td>
                                            </tr>
                                        </tbody>  */}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default TrackHmuHistory
