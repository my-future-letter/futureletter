import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, getDocs, serverTimestamp, runTransaction, orderBy } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-functions.js';
import { APP_CONFIG } from './config.js';
const app=initializeApp(APP_CONFIG.firebase);const auth=getAuth(app);const db=getFirestore(app);const functions=getFunctions(app);
const google=new GoogleAuthProvider();
export {app,auth,db,functions,google,signInWithPopup,signOut,onAuthStateChanged,doc,getDoc,setDoc,updateDoc,deleteDoc,collection,query,where,getDocs,serverTimestamp,runTransaction,orderBy,httpsCallable};
