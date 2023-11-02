import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function SignalHmuHistory() {
  return (
    <div className="content-wrapper" style={{ minHeight: '817px' }} id="liveData">
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6 module-name">
                        <h1>Signal HMU</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <Link to="/"><button type="button" className="btn btn-info">Back</button></Link>
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
                        <div>
                        <div className="card-body table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Device ID</th>
                                        <th>Voltage Channels V1</th>
                                        <th>Voltage Channels V2</th>
                                        <th>Voltage Channels V3</th>
                                        <th>Current Channels I1</th>
                                        <th>Current Channels I2</th>
                                        <th>Current Channels I3</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="live-data"></tbody>
                                {/* <tbody>
                                    <tr>
                                        <td>SIGNAL123</td>
                                        <td>2023-05-04</td>
                                        <td>16:34:26</td>
                                        <td>230</td>
                                        <td>2</td>
                                        <td>OK</td>
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

        {/* History content  */}
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">History</h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{width:'200px'}} id="graph-btn">
                                        {/* <Link to="/signalhmugraph" className="float-right" style={{marginLeft:'100px', marginTop:'3px' }} id="DEV_001">Graph View</Link> */}
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
                                        <th>Voltage Channels V1</th>
                                        <th>Voltage Channels V2</th>
                                        <th>Voltage Channels V3</th>
                                        <th>Current Channels I1</th>
                                        <th>Current Channels I2</th>
                                        <th>Current Channels I3</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody id="history-data"></tbody>
                                {/* <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SIGNAL123</td>
                                        <td>2023-05-04</td>
                                        <td>16:34:26</td>
                                        <td>230</td>
                                        <td>2</td>
                                        <td>OK</td>
                                        <td>2</td>
                                        <td>OK</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SIGNAL123</td>
                                        <td>2023-05-04</td>
                                        <td>16:34:26</td>
                                        <td>230</td>
                                        <td>2</td>
                                        <td>OK</td>
                                        <td>2</td>
                                        <td>OK</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SIGNAL123</td>
                                        <td>2023-05-04</td>
                                        <td>16:34:26</td>
                                        <td>230</td>
                                        <td>2</td>
                                        <td>OK</td>
                                        <td>2</td>
                                        <td>OK</td>
                                    </tr>
                                </tbody> */}
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

export default SignalHmuHistory
