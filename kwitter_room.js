
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBBmEbAb3TRYqp08yZZFKtxrOFVNiEdzdY",
      authDomain: "kwitter-a8473.firebaseapp.com",
      databaseURL: "https://kwitter-a8473-default-rtdb.firebaseio.com",
      projectId: "kwitter-a8473",
      storageBucket: "kwitter-a8473.appspot.com",
      messagingSenderId: "405196333467",
      appId: "1:405196333467:web:4984de975b4faafc44c13e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " +user_name +" !";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname-" +Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name" , name);
 window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
