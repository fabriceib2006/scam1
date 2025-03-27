import React from "react";
import SideNavbar from "../components/sidenav";
import DashboardV3 from "../components/dashboard1";

class UserDashboard extends React.Component {
    render(){
        return (
            <div className="flex h-screen">
                <SideNavbar />
                <DashboardV3 />
            </div>
        );
    }
}
export default UserDashboard;