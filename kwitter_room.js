
var firebaseConfig = {
      apiKey: "AIzaSyASqCeit2qEB-L_P4yRIMUdPKISESG87hI",
      authDomain: "kwitter-3cf68.firebaseapp.com",
      databaseURL: "https://kwitter-3cf68-default-rtdb.firebaseio.com",
      projectId: "kwitter-3cf68",
      storageBucket: "kwitter-3cf68.appspot.com",
      messagingSenderId: "16875317579",
      appId: "1:16875317579:web:c9260cc29da0a33f27e0ce"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"
function addRoom(){
      room_name =document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";}
      function redirectToRoomName(){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }
