import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Button } from '@mui/material';
import { getDownloadURL,ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';

import { storage } from '../../../../../../api/firebase/firebaseConfig';

const UploadImage = () => {
  const [file, setFile] = useState<any>(null);
  const [percent, setPercent] = useState(0);

  const handeOnChange = (event: any) => {
    console.log(event.target.files[0], 'event.target.files[0]');
    setFile(event.target.files[0]);
  };
  const handleUpload = () => {
    if (!file) {
      alert('Please upload an image first!');
      return;
    }
    const storageRef = ref(storage, `/${file.name}`); 
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot: any) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); 
        setPercent(percent);
        if (percent === 100) {
          console.log('Upload sucessfully');
        }
      },
      (err: any) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      },
    );
  };

  return (
    <>
      <input type="file" onChange={handeOnChange} accept="image/*"/>
      <Button variant="contained" color="success" onClick={handleUpload}>
        <AddPhotoAlternateIcon />
      </Button>
    </>
  );
};

export default UploadImage;
