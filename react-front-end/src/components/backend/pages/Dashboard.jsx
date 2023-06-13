import React from "react";
import avater_2 from './../../../assets/backend/assets/images/users/avatar-2.jpg';
import avater_3 from './../../../assets/backend/assets/images/users/avatar-3.jpg';
import avater_4 from './../../../assets/backend/assets/images/users/avatar-4.jpg';
import avater_6 from './../../../assets/backend/assets/images/users/avatar-6.jpg';
//Apex chart
import 'react-apexcharts/dist/react-apexcharts';
import './../../../assets/backend/assets/js/pages/dashboard.init.js';
export default function Dashboard(){

    return (
        <div>
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Dashboard</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Upzet</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex text-muted">
                    <div className="flex-shrink-0 me-3 align-self-center">
                      <div id="radialchart-1" className="apex-charts" dir="ltr" />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1">Users</p>
                      <h5 className="mb-3">2.2k</h5>
                      <p className="text-truncate mb-0"><span className="text-success me-2"> 0.02% <i className="ri-arrow-right-up-line align-bottom ms-1" /></span> From previous</p>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3 align-self-center">
                      <div id="radialchart-2" className="apex-charts" dir="ltr" />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1">Views per minute</p>
                      <h5 className="mb-3">50</h5>
                      <p className="text-truncate mb-0"><span className="text-success me-2"> 1.7% <i className="ri-arrow-right-up-line align-bottom ms-1" /></span> From previous</p>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex text-muted">
                    <div className="flex-shrink-0 me-3 align-self-center">
                      <div id="radialchart-3" className="apex-charts" dir="ltr" />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1">Bounce Rate</p>
                      <h5 className="mb-3">24.03 %</h5>
                      <p className="text-truncate mb-0"><span className="text-danger me-2"> 0.01% <i className="ri-arrow-right-down-line align-bottom ms-1" /></span> From previous</p>
                    </div>
                  </div>                                        
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex text-muted">
                    <div className="flex-shrink-0  me-3 align-self-center">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                          <i className="ri-group-line" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="mb-1">New Visitors</p>
                      <h5 className="mb-3">435</h5>
                      <p className="text-truncate mb-0"><span className="text-success me-2"> 0.01% <i className="ri-arrow-right-up-line align-bottom ms-1" /></span> From previous</p>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Overview</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div>
                        <button type="button" className="btn btn-soft-secondary btn-sm">
                          ALL
                        </button>
                        <button type="button" className="btn btn-soft-primary btn-sm">
                          1M
                        </button>
                        <button type="button" className="btn btn-soft-secondary btn-sm">
                          6M
                        </button>
                        <button type="button" className="btn btn-soft-secondary btn-sm active">
                          1Y
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div id="mixed-chart" className="apex-charts" dir="ltr" />
                  </div>
                </div>
                {/* end card-body */}
                <div className="card-body border-top">
                  <div className="text-muted text-center">
                    <div className="row">
                      <div className="col-4 border-end">
                        <div>
                          <p className="mb-2"><i className="mdi mdi-circle font-size-12 text-primary me-1" /> Expenses</p>
                          <h5 className="font-size-16 mb-0">$ 8,524 <span className="text-success font-size-12"><i className="mdi mdi-menu-up font-size-14 me-1" />1.2 %</span></h5>
                        </div>
                      </div>
                      <div className="col-4 border-end">
                        <div>
                          <p className="mb-2"><i className="mdi mdi-circle font-size-12 text-light me-1" /> Maintenance</p>
                          <h5 className="font-size-16 mb-0">$ 8,524 <span className="text-success font-size-12"><i className="mdi mdi-menu-up font-size-14 me-1" />2.0 %</span></h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div>
                          <p className="mb-2"><i className="mdi mdi-circle font-size-12 text-danger me-1" /> Profit</p>
                          <h5 className="font-size-16 mb-0">$ 8,524 <span className="text-success font-size-12"><i className="mdi mdi-menu-up font-size-14 me-1" />0.4 %</span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex  align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="card-title">Social Source</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <select className="form-select form-select-sm mb-0 my-n1">
                        <option>May</option>
                        <option>April</option>
                        <option>March</option>
                        <option>February</option>
                        <option>January</option>
                        <option>December</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div id="radialBar-chart" className="apex-charts" dir="ltr" />
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="social-source text-center mt-3">
                        <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-primary font-size-18">
                            <i className="ri  ri-facebook-circle-fill text-white" />
                          </span>
                        </div>
                        <h5 className="font-size-15">Facebook</h5>
                        <p className="text-muted mb-0">125 sales</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="social-source text-center mt-3">
                        <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-info font-size-18">
                            <i className="ri  ri-twitter-fill text-white" />
                          </span>
                        </div>
                        <h5 className="font-size-15">Twitter</h5>
                        <p className="text-muted mb-0">112 sales</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="social-source text-center mt-3">
                        <div className="avatar-xs mx-auto mb-3">
                          <span className="avatar-title rounded-circle bg-danger font-size-18">
                            <i className="ri ri-instagram-line text-white" />
                          </span>
                        </div>
                        <h5 className="font-size-15">Instagram</h5>
                        <p className="text-muted mb-0">104 sales</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Order Stats</h5>
                  <div>
                    <ul className="list-unstyled">
                      <li className="py-3">
                        <div className="d-flex">
                          <div className="avatar-xs align-self-center me-3">
                            <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                              <i className="ri-checkbox-circle-line" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">Completed</p>
                            <div className="progress progress-sm animated-progess">
                              <div className="progress-bar bg-success" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="py-3">
                        <div className="d-flex">
                          <div className="avatar-xs align-self-center me-3">
                            <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                              <i className="ri-calendar-2-line" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">Pending</p>
                            <div className="progress progress-sm animated-progess">
                              <div className="progress-bar bg-warning" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="py-3">
                        <div className="d-flex">
                          <div className="avatar-xs align-self-center me-3">
                            <div className="avatar-title rounded-circle bg-light text-primary font-size-18">
                              <i className="ri-close-circle-line" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">Cancel</p>
                            <div className="progress progress-sm animated-progess">
                              <div className="progress-bar bg-danger" role="progressbar" style={{width: '19%'}} aria-valuenow={19} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className="text-center">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-2">
                          <p className="text-muted mb-2">Completed</p>
                          <h5 className="font-size-16 mb-0">70</h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-2">
                          <p className="text-muted mb-2">Pending</p>
                          <h5 className="font-size-16 mb-0">45</h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-2">
                          <p className="text-muted mb-2">Cancel</p>
                          <h5 className="font-size-16 mb-0">19</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Notifications</h4>
                  <div className="pe-3" data-simplebar style={{maxHeight: '287px'}}>
                    <a href="#" className="text-body d-block">
                      <div className="d-flex py-3">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <img className="rounded-circle avatar-xs" alt="" src={avater_2} />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">Scott Elliott</h5>
                          <p className="text-truncate mb-0">
                            If several languages coalesce
                          </p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          20 min ago
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-body d-block">
                      <div className="d-flex py-3">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <div className="avatar-xs">
                            <span className="avatar-title bg-soft-primary rounded-circle text-primary">
                              <i className="mdi mdi-account-supervisor" />
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">Team A</h5>
                          <p className="text-truncate mb-0">
                            Team A Meeting 9:15 AM
                          </p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          9:00 am
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-body d-block">
                      <div className="d-flex py-3">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <img className="rounded-circle avatar-xs" alt="" src={avater_3} />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">Frank Martin</h5>
                          <p className="text-truncate mb-0">
                            Neque porro quisquam est
                          </p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          8:54 am
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-body d-block">
                      <div className="d-flex py-3">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <div className="avatar-xs">
                            <span className="avatar-title bg-soft-primary rounded-circle text-primary">
                              <i className="mdi mdi-email-outline" />
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">Updates</h5>
                          <p className="text-truncate mb-0">
                            It will be as simple as fact
                          </p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          27-03-2020
                        </div>
                      </div>
                    </a>
                    <a href="#" className="text-body d-block">
                      <div className="d-flex py-3">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <img className="rounded-circle avatar-xs" alt="" src={avater_4} />
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <h5 className="font-size-14 mb-1">Terry Garrick</h5>
                          <p className="text-truncate mb-0">
                            At vero eos et accusamus et
                          </p>
                        </div>
                        <div className="flex-shrink-0 font-size-13">
                          27-03-2020
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-3">Revenue by Location</h5>
                  <div>
                    <div id="usa" style={{height: '226px'}} />
                  </div>
                  <div className="text-center mt-4">
                    <a href="#" className="btn btn-primary btn-sm">View More</a>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Latest Transaction</h4>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col" style={{width: '50px'}}>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheckall" />
                              <label className="form-check-label" htmlFor="customCheckall" />
                            </div>
                          </th>
                          <th scope="col" style={{width: '60px'}} />
                          <th scope="col">ID &amp; Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck1" />
                              <label className="form-check-label" htmlFor="customCheck1" />
                            </div>
                          </td>
                          <td>
                            <img src={avater_2} alt="user" className="avatar-xs rounded-circle" />
                          </td>
                          <td>
                            <p className="mb-1 font-size-12">#AP1234</p>
                            <h5 className="font-size-15 mb-0">David Wiley</h5>
                          </td>
                          <td>02 Nov, 2019</td>
                          <td>$ 1,234</td>
                          <td>1</td>
                          <td>
                            $ 1,234
                          </td>
                          <td>
                            <i className="mdi mdi-checkbox-blank-circle text-success me-1" /> Confirm
                          </td>
                          <td>
                            <button type="button" className="btn btn-outline-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck2" />
                              <label className="form-check-label" htmlFor="customCheck2" />
                            </div>
                          </td>
                          <td>
                            <div className="avatar-xs">
                              <span className="avatar-title rounded-circle bg-soft-primary text-success">
                                W
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1 font-size-12">#AP1235</p>
                            <h5 className="font-size-15 mb-0">Walter Jones</h5>
                          </td>
                          <td>04 Nov, 2019</td>
                          <td>$ 822</td>
                          <td>2</td>
                          <td>
                            $ 1,644
                          </td>
                          <td>
                            <i className="mdi mdi-checkbox-blank-circle text-success me-1" /> Confirm
                          </td>
                          <td>
                            <button type="button" className="btn btn-outline-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck3" />
                              <label className="form-check-label" htmlFor="customCheck3" />
                            </div>
                          </td>
                          <td>
                            <img src={avater_3} alt="user" className="avatar-xs rounded-circle" />
                          </td>
                          <td>
                            <p className="mb-1 font-size-12">#AP1236</p>
                            <h5 className="font-size-15 mb-0">Eric Ryder</h5>
                          </td>
                          <td>05 Nov, 2019</td>
                          <td>$ 1,153</td>
                          <td>1</td>
                          <td>
                            $ 1,153
                          </td>
                          <td>
                            <i className="mdi mdi-checkbox-blank-circle text-danger me-1" /> Cancel
                          </td>
                          <td>
                            <button type="button" className="btn btn-outline-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck4" />
                              <label className="form-check-label" htmlFor="customCheck4" />
                            </div>
                          </td>
                          <td>
                          <img className="rounded-circle avatar-xs" alt="" src={avater_6} />
                          </td>
                          <td>
                            <p className="mb-1 font-size-12">#AP1237</p>
                            <h5 className="font-size-15 mb-0">Kenneth Jackson</h5>
                          </td>
                          <td>06 Nov, 2019</td>
                          <td>$ 1,365</td>
                          <td>1</td>
                          <td>
                            $ 1,365
                          </td>
                          <td>
                            <i className="mdi mdi-checkbox-blank-circle text-success me-1" /> Confirm
                          </td>
                          <td>
                            <button type="button" className="btn btn-outline-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="customCheck5" />
                              <label className="form-check-label" htmlFor="customCheck5" />
                            </div>
                          </td>
                          <td>
                            <div className="avatar-xs">
                              <span className="avatar-title rounded-circle bg-soft-primary text-success">
                                R
                              </span>
                            </div>
                          </td>
                          <td>
                            <p className="mb-1 font-size-12">#AP1238</p>
                            <h5 className="font-size-15 mb-0">Ronnie Spiller</h5>
                          </td>
                          <td>08 Nov, 2019</td>
                          <td>$ 740</td>
                          <td>2</td>
                          <td>
                            $ 1,480
                          </td>
                          <td>
                            <i className="mdi mdi-checkbox-blank-circle text-warning me-1" /> Pending
                          </td>
                          <td>
                            <button type="button" className="btn btn-outline-success btn-sm">Edit</button>
                            <button type="button" className="btn btn-outline-danger btn-sm">Cancel</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
        </div>
    )
}