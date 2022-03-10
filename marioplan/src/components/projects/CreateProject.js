import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  //project data
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      //get div id and value
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    //pass project data to mapDispatchToProps
    this.props.createProject(this.state);
    //redirect to dashboard
    this.props.history.push('/');
  };
  render() {
    const { auth } = this.props;
    //redirect user if not logged in
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
//check if user is logged in or not
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

//action has been called
const mapDispatchToProps = (dispatch) => {
  return {
    //pass action and project(state) data
    createProject: (project) => dispatch(createProject(project)),
  };
};
//null first because there is no mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
