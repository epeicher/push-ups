
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

export function initApp() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBbL9-l8OUNZXAG-qWirFpd014HlK4T2PE',
        authDomain: "count-pushups.firebaseapp.com",
        databaseURL: "https://count-pushups.firebaseio.com",
        storageBucket: "bucket.appspot.com"
      });

      let db = firebase.database();
      db.ref("/pushups").once("value").then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}

