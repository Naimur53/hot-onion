import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'
const initializeAppAuthetication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAppAuthetication;