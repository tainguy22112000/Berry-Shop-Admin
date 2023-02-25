import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import { ItemType } from './dataType';
import { db } from './firebaseConfig';

export function addItem(itemType: ItemType, data: any) {
  const docRef = collection(db, itemType);
  addDoc(docRef, data)
    .then((docRef) => {
      console.log('Product has been added successfully');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function deleteItem(itemType: ItemType, id: any) {
  const docRef = doc(db, itemType, id);
  deleteDoc(docRef)
    .then(() => {
      console.log('Product successfully deleted!');
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateItem(itemType: ItemType, data: any, id: string) {
  const docRef = doc(db, itemType, id);
  updateDoc(docRef, { ...data })
    .then((_) => {
      console.log('Product has been updated successfully');
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function getAllItems(itemType: ItemType) {
  const datas: any = [];
  try {
    const querySnapshot = await getDocs(collection(db, itemType));
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

export async function getEachItem(itemType: ItemType, id: string) {
  try {
    const docRef = doc(db, itemType, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return {};
  } catch (error) {
    console.log(error);
  }
}