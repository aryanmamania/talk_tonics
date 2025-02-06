import React, { useRef } from 'react'
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
const Upload = ({setImg}) => {

    const IKUploadRef = useRef(null)

    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("success", res);
        setImg(prev=({...prev,isLoading:false, dbData: res }))
    };

    const onUploadProgress = progress => {
        console.log("Progress", progress);
    };

    const onUploadStart = evt =>{
        const file = evt.target.file[0] 


        const  reader = new FileReader()
        reader.onloadend = () =>{
            setImg(prev=({...prev,isLoading:true, aiData:{
                inlineData:{
                    data: reader.result.split(",")[1],
                    mimeType: file.type, 
                }
            }  }))
        }
      reader.readAsDataURL(file)
    };

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
            useUniqueFileName={true}
            onUploadProgress={onUploadProgress}
            onUploadStart={onUploadStart}
            style={{display:"none"}}
            ref={IKUploadRef}
        />
        {
            <label onClick={()=> IKUploadRef.current.click()}>
                <img src="/attachment.png" alt='' />
            </label>
        }
    </IKContent>
  )
}

export default Upload;