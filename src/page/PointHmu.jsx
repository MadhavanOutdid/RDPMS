import React, { useEffect } from 'react';

// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function PointHmu() {
    
    // Data pase
    useEffect(() => {
        const event = new CustomEvent('reloadPage', { detail: 'Point HMU' });
        window.dispatchEvent(event);
    }, []);

  return (
	<div className="content-wrapper" style={{ minHeight: '817px' }} id="main-dashboard">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right" id="mod">
                            <li className="breadcrumb-item">Dashboard</li>
                            <li className="breadcrumb-item active dash-head" id="Point Machines">Point HMU</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        {/*  Top Header-box content */}
        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-6">
                        <div className="small-box bg-info">
                            <div className="inner">
                                <div id="total-devices"></div>
                                <p>Total Device's</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <a className="small-box-footer" id="view-all">View <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="small-box bg-success">
                            <div className="inner">
                                <div id="active-devices"></div>
                                <p>Active Device's</p>
                            </div>
                            <div className="icon">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <a className="small-box-footer" id="view-active">View <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <div id="inactive-devices"></div>
                                <p>Inactive Device's</p>
                            </div>
                             <div className="icon">
                                <i className="fas fa-exclamation-circle"></i>
                            </div>
                            <a className="small-box-footer" id="view-inactive">View <i className="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                </div>

                {/* Device List */}
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title dash-head">Point HMU</h3>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{width:'200px'}}>
                                            <input type="text" name="table_search" className="form-control float-right srchFld" placeholder="Search Devices"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body table-responsive p-0" style={{height:'300px'}}>
                                    <table className="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>Sl.No</th>
                                                <th>Device Name</th>
                                                <th>Created On</th>
                                                <th>Status</th>
                                                <th style={{textAlign:'center'}}>View Live Data</th>
                                            </tr>
                                        </thead>
                                        <tbody id="device-data">
                                            {/* <tr>
                                                <td>1</td>
                                                <td>k</td>
                                                <td>b</td>
                                                <td><span className="badge bg-success">Active</span></td>
                                                <td><Link to="/pointhmuhistory"><button type="button" className="btn btn-block btn-primary">View</button></Link></td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default PointHmu
