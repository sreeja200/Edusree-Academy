import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAo2SoYcIoV-d8iK82MY6f-Teln6FQznPI",
    authDomain: "loginform-d0ee9.firebaseapp.com",
    projectId: "loginform-d0ee9",
    storageBucket: "loginform-d0ee9.firebasestorage.app",
    messagingSenderId: "205207340124",
    appId: "1:205207340124:web:b066d78e1cb29b726e5299",
    measurementId: "G-PHLLSJJ70P"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const gs=document.getElementById('googleBtn');
gs.addEventListener("click", function(){
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location.href = "grand.html";
    
  }).catch((error) => {
      const errorMessage = error.message;
  console.error("Google Sign-In Error:", errorMessage);
  alert("Google Sign-In Failed: " + errorMessage);
});
})
