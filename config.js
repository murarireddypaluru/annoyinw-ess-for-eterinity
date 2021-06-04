import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyD5NHlOxgotiGWIRxcEwz1zpXZ2z4MFPPc",
    authDomain: "teacherrollcall.firebaseapp.com",
    databaseURL: "https://teacherrollcall-default-rtdb.firebaseio.com",
    projectId: "teacherrollcall",
    storageBucket: "teacherrollcall.appspot.com",
    messagingSenderId: "424905044191",
    appId: "1:424905044191:web:995a72ffff224356e4b96a"
  };
  // Initialize Firebase
  if(! firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database()

  