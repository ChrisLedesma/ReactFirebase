import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    //pass project data to projectList
    const { projects, auth, notifications } = this.props;
    //redirect user if not logged in
    if (!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
          {/* project list area*/}
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          {/* notification area*/}
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    //get project data from rootReducer -> projectReducer
    projects: state.firestore.ordered.projects,
    notifications: state.firestore.ordered.notifications,
    //check if user is logged in or not
    auth: state.firebase.auth
  };
};
//connect needed data from mapStateToProps to Dashboard
export default compose(
  connect(mapStateToProps),
  //select which collection from db to use
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 4, orderBy: ['createdAt', 'desc']}
  ])

)(Dashboard);
