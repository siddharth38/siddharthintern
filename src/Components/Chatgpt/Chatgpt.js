import React from 'react';
import { useState } from 'react';

import { Configuration, OpenAIApi } from "openai";
import Routine from '../../Pages/Routine/Routine';


  
const Chatgpt = () => {


    const configuration = new Configuration({
        apiKey: "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"
      });
      const openai = new OpenAIApi(configuration);
     
      const [result, setResult] = useState("");
      const [input, setInput] = useState("");
      // console.log(import.meta.env.VITE_Open_AI_Key);
      
    
      const doStuff = async () => {
       try{ let object = { 
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            prompt: "How Plan My diet" };
    
        const response = await openai.createCompletion(object);
    
        setResult(response.data.choices[0].text);}

        catch(error){
            console.log(error);
        }
      };
    return <div>

      <Routine   doStuff ={ doStuff }   result={result} />


    </div>;}




export default Chatgpt;