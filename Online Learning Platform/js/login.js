// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAo2SoYcIoV-d8iK82MY6f-Teln6FQznPI",
    authDomain: "loginform-d0ee9.firebaseapp.com",
    projectId: "loginform-d0ee9",
    storageBucket: "loginform-d0ee9.firebasestorage.app",
    messagingSenderId: "205207340124",
    appId: "1:205207340124:web:b066d78e1cb29b726e5299",
    measurementId: "G-PHLLSJJ70P"
  };
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth = getAuth(app);
//submit button
  const submit = document.getElementById('submitBtn');
  submit.addEventListener("click", function (event) {
  event.preventDefault()
  const text = document.getElementById('fullnameInput').value;
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert("Logging in...");
    window.location.href = "grand.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  })
