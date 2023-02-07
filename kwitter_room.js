
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCpMjUHdEMXvKTWBwHqikpCJtN3znHqGwU",
      authDomain: "kwitter-db-356d4.firebaseapp.com",
      databaseURL: "https://kwitter-db-356d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-db-356d4",
      storageBucket: "kwitter-db-356d4.appspot.com",
      messagingSenderId: "630734928528",
      appId: "1:630734928528:web:264840fabe06d0c4d67615"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();


console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
like_button = "<button class= 'btn btn-warning' id=" +firebase_message_id+"value"+ like + "onclick= 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like";+ like+ "</span></button><hr>";

row = name_with_tag + message_with_tag +like_button+ span_with_tag;
document.getElementById("output").innerHTML += row;

function addRoom() { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}

function updateLike()
{
      console.log("Clicked on like button -" + message_data);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}