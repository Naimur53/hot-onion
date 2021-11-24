import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'
const initializeAppAuthetication = () => {
    console.log(firebaseConfig);
    initializeApp(firebaseConfig);
}
export default initializeAppAuthetication;