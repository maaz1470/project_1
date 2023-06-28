import { Link } from "react-router-dom"
export default function LeftSidebar(){
    return (
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <Link to="/panel" className="waves-effect">
                    <i className="mdi mdi-home-variant-outline" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/category" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Category</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/brand" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Brand</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/product" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Product</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/order" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Order</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/slider" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Slider</span>
                  </Link>
                </li>
                <li>
                  <Link to="/panel/pages" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline" />
                    <span>Pages</span>
                  </Link>
                </li>
                
                
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
    )
}