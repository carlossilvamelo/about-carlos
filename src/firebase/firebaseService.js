import firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCxz71vCa31XGfOSFLSNtdQrIdFzDroYEo",
    authDomain: "newagent-c5a3f.firebaseapp.com",
    databaseURL: "https://newagent-c5a3f.firebaseio.com",
    projectId: "newagent-c5a3f",
    storageBucket: "newagent-c5a3f.appspot.com",
    messagingSenderId: "388883873474",
    appId: "1:388883873474:web:46424683c8b70e793ec55b",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export async function getTokenAndMsg() {
    await messaging
        .getToken({
            vapidKey:
                "BKerqvjjTxSOv8av-MXPEQ5tlRf1sexL2yU7OTxkF6OY4IRvTGYzIl7kl0Bf-z0XPRsTqdovqztUqdOMn9e5pt0",
        })
        .then((currentToken) => {
            if (currentToken) {
                console.log("currentToken", currentToken);
                // Send the token to your server and update the UI if necessary
                // ...
            } else {
                // Show permission request UI
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                // ...
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // ...
        });

        
        messaging.onMessage((payload) => {
            console.log("Message received. ", payload);
        });
}

