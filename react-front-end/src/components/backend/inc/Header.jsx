import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useRemoveUserId from "../../Hooks/useRemoveUserId";
import bitbucket from './../../../assets/backend/assets/images/brands/bitbucket.png';
import dribbble from './../../../assets/backend/assets/images/brands/dribbble.png';
import dropbox from './../../../assets/backend/assets/images/brands/dropbox.png';
import github from './../../../assets/backend/assets/images/brands/github.png';
import mail_chimp from './../../../assets/backend/assets/images/brands/mail_chimp.png';
import slack from './../../../assets/backend/assets/images/brands/slack.png';
import germany from './../../../assets/backend/assets/images/flags/germany.jpg';
import italy from './../../../assets/backend/assets/images/flags/italy.jpg';
import russia from './../../../assets/backend/assets/images/flags/russia.jpg';
import spain from './../../../assets/backend/assets/images/flags/spain.jpg';
import us from './../../../assets/backend/assets/images/flags/us.jpg';
import logo_dark from './../../../assets/backend/assets/images/logo-dark.png';
import logo_light from './../../../assets/backend/assets/images/logo-light.png';
import logo_sm from './../../../assets/backend/assets/images/logo-sm.png';
import avater_2 from './../../../assets/backend/assets/images/users/avatar-2.jpg';
import avatar_3 from './../../../assets/backend/assets/images/users/avatar-3.jpg';
import avatar_4 from './../../../assets/backend/assets/images/users/avatar-4.jpg';
export default function Header(){
    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/logout').then(response => {
            console.log(response)
            if(response.data.status === 200){
                useRemoveUserId();
                Swal.fire('Success',response.data.message,'success')
                navigate('/auth/login',{
                    replace: true
                })
            }
        })
    }
    return (
        <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box text-center">
                            <a href="https://movieflex.xyz" target="_blank" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo_sm} alt="logo-sm-dark" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src={logo_dark} alt="logo-dark" height="24"/>
                                </span>
                            </a>

                            <a href="https://movieflex.xyz" target="_blank" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logo_sm} alt="logo-sm-light" height="22"/>
                                </span>
                                <span className="logo-lg">
                                    <img src={logo_light} alt="logo-light" height="24" style={{height: '24px'}}/>
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="ri-search-line"></span>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-search-line"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
                    
                                <form className="p-3">
                                    <div className="mb-3 m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..."/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="" src={us} alt="Header Language" height="16"/>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                    
                                <a href="#" className="dropdown-item notify-item">
                                    <img src={spain} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                                </a>

                                <a href="#" className="dropdown-item notify-item">
                                    <img src={germany} alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                                </a>

                                <a href="#" className="dropdown-item notify-item">
                                    <img src={italy} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Italian</span>
                                </a>

                                <a href="#" className="dropdown-item notify-item">
                                    <img src={russia} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                                </a>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-apps-2-line"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                <div className="px-lg-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={github} alt="Github"/>
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={bitbucket} alt="bitbucket"/>
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={dribbble} alt="dribbble"/>
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={dropbox} alt="dropbox"/>
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={mail_chimp} alt="mail_chimp"/>
                                                <span>Mail Chimp</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src={slack} alt="slack"/>
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                <i className="ri-fullscreen-line"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ri-notification-3-line"></i>
                                <span className="noti-dot"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{maxHeight: '230px'}}>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                        <i className="ri-shopping-cart-line"></i>
                                                    </span>
                                                </div>
                                            </div>                                
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img src={avatar_3} className="rounded-circle avatar-xs" alt="user-pic"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-xs">
                                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                                        <i className="ri-checkbox-circle-line"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img src={avatar_4} className="rounded-circle avatar-xs" alt="user-pic"/>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top">
                                    <div className="d-grid">
                                        <a className="btn btn-sm btn-link font-size-14 text-center" href="#">
                                            <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src={avater_2}
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ms-1">Kevin</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#"><i className="ri-user-line align-middle me-1"></i> Profile</a>
                                <a className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle me-1"></i> My Wallet</a>
                                <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end mt-1">11</span><i className="ri-settings-2-line align-middle me-1"></i> Settings</a>
                                <a className="dropdown-item" href="#"><i className="ri-lock-unlock-line align-middle me-1"></i> Lock screen</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" onClick={(e) => logoutSubmit(e)} href="#"><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i className="mdi mdi-cog"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </header>
    )
}