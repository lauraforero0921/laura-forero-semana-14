// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, addDoc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmMriWnttZcxk-VbYmbeINBcOlVzARRkA",
  authDomain: "to-do-list-7691d.firebaseapp.com",
  projectId: "to-do-list-7691d",
  storageBucket: "to-do-list-7691d.appspot.com",
  messagingSenderId: "859831244608",
  appId: "1:859831244608:web:1e0a22cea47c9086130ca5",
  measurementId: "G-8BX20P3WMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getTasks(){
    const allTasks =[]
    const querySnapshot = await getDocs(collection(db,"tasks"));
    querySnapshot.forEach((doc)=>{
        allTasks.push({...doc.data(), id: doc.id})
    });

    return allTasks;
}

export async function addTask(taskTitle){
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
          title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function editDocument(title,id){

await setDoc(doc(db, "tasks", id), {
  title: title,
  completed: true,
});

}