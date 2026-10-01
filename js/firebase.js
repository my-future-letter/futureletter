import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, addDoc, deleteDoc, serverTimestamp, limit } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
const firebaseConfig={apiKey:"AIzaSyBqil8O32ovay-Tg2n9ygE0_1taFa0o8c",authDomain:"my-future-letter.firebaseapp.com",projectId:"my-future-letter",storageBucket:"my-future-letter.firebasestorage.app",messagingSenderId:"1020034669734",appId:"1:1020034669734:web:c55b80e98d894ad371e867",measurementId:"G-LW6CXVXCXD"};
const app=initializeApp(firebaseConfig); const auth=getAuth(app); const db=getFirestore(app); const provider=new GoogleAuthProvider();
export {app,auth,db,provider,signInWithPopup,onAuthStateChanged,signOut,doc,getDoc,setDoc,updateDoc,collection,query,where,getDocs,addDoc,deleteDoc,serverTimestamp,limit};
