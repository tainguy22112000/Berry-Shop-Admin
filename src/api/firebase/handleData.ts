import { db } from './firebaseConfig';
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

export function addItem(data: any) {
  const docRef = collection(db, 'orders');
  addDoc(docRef, data)
    .then((docRef) => {
      console.log('Product has been added successfully');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteItem(id: any) {
  console.log('deleteItem');
}

export function updateItem(data: any, id: string) {
  const docRef = doc(db, 'orders', id);
  updateDoc(docRef, { ...data })
    .then((_) => {
      console.log('Product has been updated successfully');
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAllItems() {
  const datas: any = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'orders'));
    querySnapshot.forEach((doc) => {
      const dataObject = {
        id: doc.id,
        ...doc.data(),
      };
      datas.push(dataObject);
    });
    return datas;
  } catch (error) {
    console.log(error);
  }
}

export async function getEachItem(id: string) {
  try {
    const docRef = doc(db, 'orders', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return {};
  } catch (error) {
    console.log(error);
  }
}
