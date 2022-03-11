const initState = {
  projects: null,
};
//recieved data and action from projectActions
const notifReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJ_NOTIF":
      console.log("created project notification");
      return state;
    case "CREATE_PROJ_NOTIF_ERROR":
      console.log("error", action.err);
      return state;
    case "CREATE_USER_NOTIF":
      console.log("created user notification");
      return state;
    case "CREATE_USER_NOTIF_ERROR":
      console.log("error", action.err);
      return state;
    default:
      return state;
  }
};

export default notifReducer;
