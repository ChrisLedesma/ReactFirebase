export const createProjectNotif = (project) => {
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
        .collection("notifications")
        .add({
          //spread/separate properties(project.title and project.content) of project data
          content: "Added a project",
          userFirstName: profile.firstName,
          userLastName: profile.lastName,
          createdAt: new Date(),
        })
        .then(() => {
          dispatch({ type: "CREATE_PROJ_NOTIF", project });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_PROJ_NOTIF_ERROR", err });
        });
    };
  };

  export const createUserNotif = (newUser) => {
    //pause dispatch
    return (dispatch, getState, { getFirestore }) => {
      //make async call to database
  
      //set reference from firestore db
      const firestore = getFirestore();
      //reference firestore 'projects' collection and add data
      firestore
        .collection("notifications")
        .add({
          //spread/separate properties(project.title and project.content) of project data
          content: "Joined the clan",
          userFirstName: newUser.firstName,
          userLastName: newUser.lastName,
          createdAt: new Date(),
        })
        .then(() => {
          dispatch({ type: "CREATE_USER_NOTIF", newUser });
        })
        .catch((err) => {
          dispatch({ type: "CREATE_USER_NOTIF_ERROR", err });
        });
    };
  };