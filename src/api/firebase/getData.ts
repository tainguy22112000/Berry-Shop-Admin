
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

// export async function get() {
//   const querySnapshot = await getDocs(collection(db, "orders"));
//   const data: any = [];
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     // console.log(doc.id, " => ", doc.data());
//     data.push(doc.data());
//   }); 
//   return data;
// }


export function get() {
  return new Promise((resolve, reject) => {
    const data: any = [];
    setTimeout(async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      }); 
      resolve(data);
    }, 300);
  })
}

// export function get() {
//   setTimeout(async () => {
//     const querySnapshot = await getDocs(collection(db, "orders"));
//     const data: any = [];
//     querySnapshot.forEach((doc) => {
//       data.push(doc.data());
//     }); 
//   }, 1000)
// }
