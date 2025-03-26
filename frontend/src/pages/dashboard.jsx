import React, { Component } from "react";
import { Route } from "react-router-dom";
import sidebarImage from "../component/Dashboarda/img/sidebar-3.jpg";
import "../component/Dashboarda/dash.css";

import BasePage from "./Base";
import DashboardLayout from "../component/Dashboarda/Dashboard";
import { useAuth } from "../context/AuthContext";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: sidebarImage,
      color: "black",
      hasImage: true,
    };
    this.mainPanel = React.createRef();
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      const element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.mainPanel.current.scrollTop = 0;
    }
  }

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        <BasePage toggleHeader={true} toggleSidebar={true} toggleFooter={false}>
          <div className="wrapper">
            <div className="main-panel" ref={this.mainPanel}>
              <div className="content">
                <DashboardLayout/>
              </div>
            </div>
          </div>
        </BasePage>
      </>
    );
  }
}

export default Dashboard;
