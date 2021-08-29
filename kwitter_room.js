var firebaseConfig = {
    apiKey: "AIzaSyCRwZyd5JeJHo3v2erUAJi6P2XXlgraKgA",
    authDomain: "class-test-7f0c3.firebaseapp.com",
    databaseURL: "https://class-test-7f0c3-default-rtdb.firebaseio.com",
    projectId: "class-test-7f0c3",
    storageBucket: "class-test-7f0c3.appspot.com",
    messagingSenderId: "1036933914607",
    appId: "1:1036933914607:web:f76a5afbf1c7ef91b4e01a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  
    user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
    user_name = localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData= childSnapshot.val(); if(childKey!="purpose"){
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
     name = message_data['name'];
     message=message_data['message'];
     like=message_data['like'];
     name_with_tag="<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag="<h4>" + message + "<img class='message_h4'>" +message+"</h4>";
     like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
     span_with_tag="<span class='glyphicon gluphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
     row=name_with_tag + message_with_tag + like_button + span_with_tag;
     document.getElementById("output").innerHTML +=row;
    }
        });
      });
    
    }
    
    getData();

    function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  function send(){
    msg=document.getElementById("msg").value;
    
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
    like:0
    });
    document.getElementById("msg").value="";
    }
    
    function updateLike(message_id){
    console.log("clicked on like button-" + message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=number(likes)+1;
     console.log(updated_likes);
     firebase.database().ref(room_name).child(message_id).update({
       like: updated_likes
     });
    }