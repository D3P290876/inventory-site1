import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = { 
  apiKey: "AIzaSyCvmUNwm6ggtIME72gQdq33Re0A5mgdVbc",
  authDomain: "top-gs-inv.firebaseapp.com",
  databaseURL: "https://top-gs-inv-default-rtdb.firebaseio.com/",
  projectId: "top-gs-inv" };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);