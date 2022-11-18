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

    user_name=localStorage.getItem("user_name");
    user_name=localStorage.getItem("room_name");

    function send(){
var msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
var message=message_data['message'];
var likes=message_data['likes'];
name_with_tag="<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+" value ="+likes+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span></button><hr>";

var row=name_with_tag+message_with_tag+like_button+span_with_tag;    
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id) 
 console.log("clicked on like button - " + message_id);
 button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
   console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ 
      like : updated_likes });

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }

