
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD6DzY5fDrCu4J5hICBvq45oWBfYyzYHmM",
      authDomain: "kwitter-app-5f692.firebaseapp.com",
      projectId: "kwitter-app-5f692",
      storageBucket: "kwitter-app-5f692.appspot.com",
      messagingSenderId: "722359519736",
      appId: "1:722359519736:web:eb0069e82ef1cf32cbae0d"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
