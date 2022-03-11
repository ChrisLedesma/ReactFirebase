import React from "react";
import moment from "moment";

const NotificationSummary = ({ item }) => {
  return (
    // single card
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="pink-text">
          {item.userFirstName} {item.userLastName}
        </div>
        <span> {item.content}</span>
        <div className="grey-text note-date">
          {moment(item.createdAt.toDate()).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default NotificationSummary;
