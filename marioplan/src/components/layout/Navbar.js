import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from 'react-redux'; 

const Navbar = (props) => {
  const { auth } = props;
  //console.log(auth);
  //change links if user is logged in or not
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper yellow darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Chonkobo
        </Link>
        { links }
      </div>
    </nav>
  );
};
//pass auth to props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
