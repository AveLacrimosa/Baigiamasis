// main form
const mainDiv = document.getElementById("mainDiv");
const form = document.createElement("div");
form.classList.add("form");
mainDiv.appendChild(form);

const email = document.createElement("p");
email.classList.add("text");
email.innerText = "Email adress";
form.appendChild(email);

const labelEmail = document.createElement("input");
labelEmail.classList.add("email");
labelEmail.id = 'userEmail'
labelEmail.innerHTML = "asdf";
labelEmail.type = "text";
labelEmail.placeholder = "Enter your email";
form.appendChild(labelEmail);

const passwd = document.createElement("p");
passwd.classList.add("text");
passwd.innerHTML = "Password";
form.appendChild(passwd);

const labelPasswd = document.createElement("input");
labelPasswd.classList.add("passwd");
labelPasswd.innerText = "asdf";
labelPasswd.type = "text";
labelPasswd.placeholder = "Enter your password";
form.appendChild(labelPasswd);

const loginBtn = document.createElement("button");
loginBtn.classList.add("loginBtn");
loginBtn.innerHTML = "Login";
loginBtn.type = "submit";
loginBtn.name = "formBtn";
form.appendChild(loginBtn);

const logoutBtn = document.createElement("button");
logoutBtn.classList.add("logoutBtn");
logoutBtn.innerHTML = "Logout";
logoutBtn.type = "submit";
logoutBtn.name = "formBtn";
form.appendChild(logoutBtn);

//db
import { firebaseConfig } from "./firebase";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebaseapp-auth.js"

//initialize firebase, database
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth;

//new user 

const registerNewUser = () => {
    const email = document.getElementById
}