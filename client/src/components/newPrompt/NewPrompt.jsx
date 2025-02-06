import React, { useEffect, useRef, useState } from 'react'
import "./newPromp.css"
import Upload from '../uploads/Upload';
import { IKImage } from 'imagekitio-react';
import model from "../../lib/gemini"

const NewPrompt = () => {


  const [question, setQuestion] = useState("")

  const{ img, setImg} = useState({
    isLoading:false,
    error:"",
    dbData:{} 
  })

    const endRef = useRef(null)

    useEffect(()=>{
      endRef.current.scrollIntoView({ behaviour:"smooth" });
    }, []);

  const add = async ()=>{
    const prompt = "Write a story on your own";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    console.log(text);
  };

  const handleSubmit = async (e)

  return (
    <>
    {img.isLoading && <div className=''>Loading...</div>}
    {img.dbData?.filepath && (
      <IKImage
      urlEndpoint= {import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
      path={img.dbdata?.filePath}
      width="380"
      transformation={[{ width:380}]}
      />
    )}
    <div className="endChat" ref={endRef}></div>
        <form className='newForm' onSubmit={handleSubmit}>
            <Upload setImg={setImg}/>
            <input id="file" type="file" multiple={false} hidden />
            <input type="text" placeholder='Ask Anything'/>
            <button>
                <img src="/arrow.png" alt="" />
            </button>
        </form>
    </>
  )
}

export default NewPrompt