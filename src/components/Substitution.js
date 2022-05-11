import React from 'react';
import { useState } from 'react';


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
      <h1>Substitution</h1>
        <h3>PLAIN TEXT</h3>
        <textarea id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} >defend the east wall of the castle</textarea>
  
        <h3>KEY</h3>
        <input id="key" name="key" size="25" maxchars="25" value={key} type="text" onChange={event => setKey(event.target.value)}/> 
        <input name="genKey" value="Generate Random Key" onClick={GenRandKey} type="button" /> 
        <input name="btnEn" value="v Encrypt v" onClick={Encrypt} type="button" /> 
        <input name="btnDe" value="^ Decrypt ^" onClick={Decrypt} type="button" />
        
        <h3>CHIPHER TEXT</h3>
        <textarea id="c" name="c" rows="4" cols="50" value={chipherText} onChange={event => setChipherText(event.target.value)}></textarea>
      </>
    );
}

export default Substitution