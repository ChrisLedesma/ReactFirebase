import React from "react";
import NotificationSummary from "./notificationSummary";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      {notifications &&
        notifications.map((item) => {
          return <NotificationSummary item={item} key={item.id} />;
        })}
    </div>
  );
};

export default Notifications;
