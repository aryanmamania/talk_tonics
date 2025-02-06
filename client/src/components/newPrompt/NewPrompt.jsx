import React, { useEffect, useRef, useState } from 'react'
import "./newPromp.css"
import Upload from '../uploads/Upload';
import { IKImage } from 'imagekitio-react';
import model from "../../lib/gemini"
import Markdown from "react-markdown"

const NewPrompt = () => {


  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const{ img, setImg} = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData: {},     
  })

    const endRef = useRef(null)

    useEffect(()=>{
      endRef.current.scrollIntoView({ behaviour:"smooth" });
    }, [question, answer,img.dbData]);

  const add = async (text)=>{ 

    setQuestion(text)


    const result = await chat.sendMessage(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);
    const response = await result.response;
    setAnswer(response.text())
    setImg({
      isLoading:false,
      error:"",
      dbData:{},
      aiData: {},   
    });

    const chat = model.startChat({
      history:[
        {
          role: "user",
          parts: [{ text: "hiiii"}]
        },
        {
          role: "model",
          parts: [{ text: "hello back"}],
        },
      ],
      generationConfig: {

      }
    })
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()

    const text =  e.target.text.value;
    if(!text) return;

    add(text); 
  }

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
    {question && <div className='message user'>{question}</div> }
    {answer && <div className='message'><Markdown>{answer}</Markdown></div> }
    <div className="endChat" ref={endRef}></div>
        <form className='newForm' onSubmit={handleSubmit}>
            <Upload setImg={setImg}/>
            <input id="file" type="file" multiple={false} hidden />
            <input type="text" name="text" placeholder='Ask Anything'/>
            <button>
                <img src="/arrow.png" alt="" />
            </button>
        </form>
    </>
  )
}

export default NewPrompt