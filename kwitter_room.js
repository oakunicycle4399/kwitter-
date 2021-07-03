
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDtDK9YzwNhbPgl0g1c4DrWGODykj9w8Qk",
      authDomain: "kwitter-e85bd.firebaseapp.com",
      databaseURL: "https://kwitter-e85bd-default-rtdb.firebaseio.com",
      projectId: "kwitter-e85bd",
      storageBucket: "kwitter-e85bd.appspot.com",
      messagingSenderId: "990252984093",
      appId: "1:990252984093:web:b642825623114b201d23f4",
      measurementId: "G-S4SWFM6REZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding roomname"
      });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname"+Room_names);
row="<div class='room_name' id="+Room_names+"  onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
  
}