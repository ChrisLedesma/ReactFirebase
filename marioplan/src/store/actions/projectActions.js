export const createProject = (project) => {
  //pause dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database

    //set reference from firestore db
    const firestore = getFirestore();
    //get user profile
    const profile = getState().firebase.profile;
    //get user uid
    const authorId = getState().firebase.auth.uid;
    //reference firestore 'projects' collection and add data
    firestore
      .collection("projects")
      .add({
        //spread/separate properties(project.title and project.content) of project data
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
