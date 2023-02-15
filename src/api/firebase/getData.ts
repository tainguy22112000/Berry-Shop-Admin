
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export function get() {
  return new Promise((resolve, reject) => {
    const datas: any = [];
    setTimeout(async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      querySnapshot.forEach((doc) => {
        const dataObject = {
          id: doc.id,
          ...doc.data(),
        }
        datas.push(dataObject);
      }); 
      resolve(datas);
    }, 300);
  })
}
