//    // Import the functions you need from the SDKs you need
//    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
//    import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
//    import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 
 
//    // TODO: Add SDKs for Firebase products that you want to use
//    // https://firebase.google.com/docs/web/setup#available-libraries
 
//    // Your web app's Firebase configuration
//    const firebaseConfig = {
//      apiKey: "AIzaSyCXBGMm7r4hyXDZyMO9dqLs7GtSJVAqf28",
//    authDomain: "seceret-santa-final.firebaseapp.com",
//    databaseURL: "https://seceret-santa-final-default-rtdb.firebaseio.com",
//    projectId: "seceret-santa-final",
//    storageBucket: "seceret-santa-final.appspot.com",
//    messagingSenderId: "944958327538",
//    appId: "1:944958327538:web:3e500a10e3ed2e18f19e6b"
//    };
 
//    // Initialize Firebase
//    const app = initializeApp(firebaseConfig);
//  const database = getDatabase(app);
//  const auth = getAuth();
// login.addEventListener('click' ,(e) =>{
//    var email = document.getElementById("email").value
//    var password = document.getElementById("password").value

// signInWithEmailAndPassword(auth, email, password)


//  .then((userCredential) => {
//    // Signed in 

//    const user = userCredential.user;
//    const dt = new Date();
//    console.log(dt)
//    console.log(auth.currentUser)
//    update(ref(database, 'users/' + user.uid),{
//      lastlogin:dt,

//      })
//      sessionStorage.setItem("name", user.email);
//      window.location.href = "home.html";

//    // ...
//  })
//  .catch((error) => {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//   alert(errorCode)

//    // ..
//  });
// })