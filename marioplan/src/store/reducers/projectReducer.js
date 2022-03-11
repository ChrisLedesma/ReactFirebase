const initState = {
  projects: null
};
//recieved data and action from projectActions
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
