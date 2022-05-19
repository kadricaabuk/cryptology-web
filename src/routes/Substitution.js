import React from 'react';
import { useState } from 'react';
import GenerateIcon from '../components/icons/GenerateIcon'


function Substitution(){
    const [plainText, setPlainText] = useState('selam');
    const [chipherText, setChipherText] = useState('sdafsfada');
    const [key, setKey] = useState('qzprbcoifyvejthkasdgwnlxmu');
        
    const Encrypt = ()  => {
      let plaintext = plainText.toLowerCase();  
      let keyText = key.toLowerCase().replace(/[^a-z]/g,""); 
  
      if (plaintext.length < 1) {
        alert("please enter some plaintext (letters and numbers only)");
        return;
      }
      if (keyText.length !== 26) {
        //alert("key must be 26 characters in length");
        return;
      }
      let cText = "";
      var re = /[a-z]/;
      for (let i = 0; i < plaintext.length; i++) {
        if (re.test(plaintext.charAt(i)))
          cText += keyText.charAt(plaintext.charCodeAt(i) - 97);
        else cText += plaintext.charAt(i);
      }
      setChipherText(cText); 
    } 
  
    const GenRandKey = () => { 
      var keychars = "abcdefghijklmnopqrstuvwxyz"; 
      var chars = keychars.split(""); 
      let ret="";
      let lim = chars.length; 
  
      for(let i=0; i<lim; i++){ 
          let index = Math.floor(chars.length*Math.random()); 
          ret += chars[index]; 
          chars.splice(index,1); 
      } 
      console.log(ret)
      setKey(ret); 
    }
  
  
    const Decrypt = (f) => { 
      let cphrText = chipherText.toLowerCase();  
      let keyText = key.toLowerCase().replace(/[^a-z]/g, ""); 
  
      if(cphrText.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
      if(keyText.length !== 26){ alert("key must be 26 characters in length"); return; }
  
      let plnText = "";
      var re = /[a-z]/; 
  
      for(let i=0; i<cphrText.length; i++){ 
          if(re.test(cphrText.charAt(i))) plnText += String.fromCharCode(key.indexOf(cphrText.charAt(i))+97); 
          else  plnText += cphrText.charAt(i); 
      } 
  
      setPlainText(plnText); 
    } 
  
    return (
      <>
        <div className='grid grid-cols-2 gap-4 pt-20'>
          <div >
          <h1 className='text-white font-bold text-5xl mb-16'>Application</h1>
          <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-28'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-24'>Key</h3>
                        <h3 className='text-white font-bold text-right'>Chipher</h3>
                    </div>
                    <div>
                    <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2"  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} >defend the east wall of the castle</textarea>
                    
                    <div className='flex space-x-2'>
                      <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2" id="key" name="key" size="40" maxchars="25" value={key} type="text" onChange={event => setKey(event.target.value)}/> 
                      <button className='bg-white px-3 h-11 rounded-lg cursor-pointer' onClick={GenRandKey}>
                        <GenerateIcon/>
                      </button> 
                    </div>
                    
                    <div className='flex text-center space-x-4 py-2 mb-2'>
                        <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={Encrypt} >Encrypt</button>
                        <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={Decrypt} >Decrypt</button>
                    </div>    
                    <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2" id="c" name="c" rows="4" cols="50" value={chipherText} onChange={event => setChipherText(event.target.value)}></textarea>
                    </div>

                </div>
                
          </div>
          <div>
                <h1 className='text-white font-bold text-5xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus convallis tortor, id volutpat sem. Donec ut sapien vel augue lacinia condimentum non a magna. Fusce nec mauris sit amet tortor ornare congue. Curabitur at rutrum justo. Morbi id rutrum velit, pulvinar pharetra ligula. Nunc faucibus tellus libero, in volutpat turpis placerat sit amet. In ut mi eros. Nullam at enim metus. Phasellus eget purus ligula. Phasellus sed leo pulvinar, dictum odio eu, dictum velit. Mauris quis purus id magna tempus finibus. Cras volutpat imperdiet ante, vitae pulvinar tellus consequat sed. Cras vehicula tortor sit amet lectus ultrices lacinia. Quisque aliquet suscipit dictum.
                </p>
            </div>
        </div>
      
      </>
    );
}

export default Substitution