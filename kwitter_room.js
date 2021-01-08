
//ADD YOUR FIREBASE LINKS HERE
			// Your web app's Firebase configuration
			var firebaseConfig = {
                        apiKey: "AIzaSyAXCLj__xQnYMLd9m2Q_d8ikjAnfnTk-5Q",
                        authDomain: "bloopbeepboo1.firebaseapp.com",
                        databaseURL: "https://bloopbeepboo1-default-rtdb.firebaseio.com",
                        projectId: "bloopbeepboo1",
                        storageBucket: "bloopbeepboo1.appspot.com",
                        messagingSenderId: "22412263267",
                        appId: "1:22412263267:web:ade86e50d2eae8dcf0dd56"
                      };
                      // Initialize Firebase
                      firebase.initializeApp(firebaseConfig);
                      
                      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      das

      //End code
      });});}
getData();
