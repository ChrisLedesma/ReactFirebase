const initState = {
  projects: [
    { id: "1", title: "dog", content: "pet da dog" },
    { id: "2", title: "cat", content: "pet da cat" },
    { id: "3", title: "tutel", content: "pet da tutel" },
  ],
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
