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
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message:msg,
        like:0 
    });
    document.getElementById("msg").value ="";
}