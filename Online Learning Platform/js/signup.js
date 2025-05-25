console.log("✅ JavaScript file loaded");

// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
  
  
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
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
//submit button
  const submit = document.getElementById('submitBtn');
  submit.addEventListener("click", function (event) {
  event.preventDefault()
  const text = document.getElementById('fullnameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value.trim();

   if (!text || !email || !password) {
    alert("Please fill in all fields.");
    return; // Stop further execution
  }

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...");
    window.location.href = "grand.html";
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
     // Friendly message for known errors
      let message = "";

      switch (errorCode) {
        case "auth/email-already-in-use":
          message = "This email is already registered. Please log in instead.";
          break;
        case "auth/invalid-email":
          message = "The email address is not valid.";
          break;
        case "auth/weak-password":
          message = "Password should be at least 6 characters.";
          break;
        case "auth/missing-password":
          message = "Password field cannot be empty.";
          break;
        case "auth/missing-email":
          message = "Email field cannot be empty.";
          break;
        default:
          message = error.message; // fallback
      }

      alert("Error: " + message);
    // ..
  });

  })
