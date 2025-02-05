import React from 'react'
import { IKContent, IKImage, IKUpload } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publickey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

const authenticator = async () =>{
    try{
        const response = await fetch('http://localhost:3000/api/upload');
        
        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${error.text}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token};
    } catch (error){
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};
const Upload = () => {

    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("success", res);
    };

    const onUploadProgress = progress => {
        console.log("Progress", progress)
    }
  return (
   <IKContent
      urlEndpoint={urlEndpoint}
      publickey={publickey}
      authenticator={authenticator}
    >
        <IKUpload
            fileName="test-upload.png"
            onError={onError}
            onSuccess={onSuccess}
        />
    </IKContent>
  )
}

export default Upload;