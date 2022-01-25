import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationAuth = () => {
    initializeApp(firebaseConfig);
}
export default initializationAuth;