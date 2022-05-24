import React, { useState } from 'react'

function Permutation() {
  const [cipherText, setCipherText] = useState('');
  const [plainText, setPlainText] = useState('Hello World!');
  const [key, setKey] = useState('');

  const Encrypt = () => {
    const keyLength = key.length;

    let newTxt = '';
    for (let i = 0; i < plainText.length; i += keyLength) {
      let cipherBlock = plainText.slice(i, i + keyLength);
      let newStrArr = []
      for (let j = 0; j < keyLength; j++) {
        newStrArr.splice(j, 0, cipherBlock[Number(key[j]) - 1]);
      }
      let newStr = newStrArr.join('');
      newTxt += newStr;
    }

    setCipherText(newTxt);
  }

  const Decrypt = () => {
    const keyLength = key.length;
    let newTxt = '';
    for (let i = 0; i < cipherText.length; i += keyLength) {
      let cipherBlock = cipherText.slice(i, i + keyLength);         
      let newStrArr = []
  
      for (let j = 0; j < keyLength; j++) {

        newStrArr.splice(Number(key[j]) - 1, 0, cipherBlock[j]);        
        
      }
      let newStr = newStrArr.join('');
      
      newTxt += newStr;
    }

    setPlainText(newTxt);
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
                      <h3 className='text-white font-bold text-right'>Cipher Text</h3>
                  </div>
                  <div>
                  <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2"  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} >defend the east wall of the castle</textarea>
                  
                  <div className='flex space-x-2'>
                    <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2" id="key" name="key" size="48" maxchars="25" value={key} type="text" onChange={event => setKey(event.target.value)}/> 
                  </div>
                  
                  <div className='flex text-center space-x-4 py-2 mb-2'>
                      <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={Encrypt} >Encrypt</button>
                      <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={Decrypt} >Decrypt</button>
                  </div>    
                  <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2" id="c" name="c" rows="4" cols="50" value={cipherText} onChange={event => setCipherText(event.target.value)}></textarea>
                  </div>

              </div>
              
        </div>
        <div>
          <h1 className='text-white font-bold text-5xl mb-16'>Information</h1>
          <p className='text-white  text-base'>
          Shift is the simplest encryption algorithm used. All possible possible number of keys can be up to 26. Of the 26 possible solutions, the key is easiest to find and the 46 most hassle-free can be found through an extensive key search. <br/><br/> Wide key search can also be called Brute Force here. In this method, on average, the key is found in 26/2 steps. This means that with today's technology, it will only take a few minutes to perform cryptanalysis. For example, let our cleartext be “CRYPTOSYSTEM” and our key is K=7. Then our ciphertext becomes: JYFWAVZFZALT.
          </p>
        </div>
      </div>
    </>
  )
}

export default Permutation