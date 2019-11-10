
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

export function initApp() {
    const firebaseConfig = {
        apiKey: "AIzaSyBbL9-l8OUNZXAG-qWirFpd014HlK4T2PE",
        authDomain: "count-pushups.firebaseapp.com",
        databaseURL: "https://count-pushups.firebaseio.com",
        projectId: "count-pushups",
        storageBucket: "count-pushups.appspot.com",
        messagingSenderId: "1037237193738",
        appId: "1:1037237193738:web:794e50c7cb29109ec1a3f3"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      let db = firebase.database();
      window.dataValues = []
      db.ref("/pushups").once("value").then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(doc.val()) {
                window.dataValues.push(doc.val())
            }
        });
        console.log("los datos",window.dataValues)
      });

}

