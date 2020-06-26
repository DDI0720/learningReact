import * as firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from './Firebase-config.js'

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default {database};