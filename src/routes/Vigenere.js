import React, { useState } from 'react'

export const Vigenere = () => {
    
    const [plainText, setPlainText] = useState('Hello World!');
    const [key, setKey] = useState('ASDAFWFWÖSLAD');
    const [chipher, setChipher] = useState('');

    const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const encrypt = () => {
        let result = '';

        for (let i = 0; i < plainText.length; i++) {
          const element = plainText[i];
          if(element === ' '){
            result += ' ';
          }else{
            let resIndex = ALPHA.indexOf(element.toUpperCase())+ALPHA.indexOf(key[i].toUpperCase())
            result+=ALPHA[resIndex>26 ? resIndex%26 : resIndex]
          }
        }

        setChipher(result);
      }

      const decrypt = () => {
        let result = '';

        for (let i = 0; i < chipher.length; i++) {
          const element = chipher[i];
          if(element === ' '){
            result += ' ';
          }else{
            let resIndex = ALPHA.indexOf(element.toUpperCase())-ALPHA.indexOf(key[i].toUpperCase())
            result+=ALPHA[resIndex]
          }
        }

        setPlainText(result);
      }
  return (
    
    <div>
         <div className='row border-b-2'>
        <h3 className='text-white font-bold text-5xl mt-10'>Ceasar Chipher</h3>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-10'>
            <div >
                <h1 className='text-white font-bold text-3xl mb-16'>Application</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-28'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-24'>Key</h3>
                        <h3 className='text-white font-bold text-right'>Chipher</h3>
                    </div>
                <div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 "  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} >defend the east wall of the castle</textarea>
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="text" value={key} onChange={e => setKey(e.target.value)}/>
                <div className='flex text-center  space-x-4 py-2'>
                    <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={encrypt} >Encrypt</button>
                    <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={decrypt} >Decrypt</button>
                </div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mt-2" rows="4" cols="50" spellCheck="false"  type="text" value={chipher} onChange={e => setChipher(e.target.value)}/>
                </div>
                </div>
            </div>
            <div>
                <h1 className='text-white font-bold text-3xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                It is named after Julius Caesar, who, according to Suetonius (Rome's most notable historian and biographer), used it with three slips to protect messages of military importance. Although Ceasar is the first recorded use of this scheme, similar types of ciphers are known to have been used before. <br/>
                Today, the Caesar Cipher Method is not preferred very often. Because even if it was safe at the time, the probability of decryption is 1/25 now.<br/>
                <strong>An encrypted message can be created by moving each letter in the main message forward by the key number specified in the message. In order to read the encrypted message, it is necessary to take each letter in the message back as much as the number of keys.<br/></strong>
                If we want to encrypt a word with Caesar encryption, the steps we need to follow are as follows:<br/>
                The order of each letter in the word in the alphabet is determined.<br/>
                Each letter in the original text is "wrapped" by the amount specified as the key, and the ciphertext is obtained.<br/>
                If the total number of letters is exceeded during scrolling, the mode is taken according to the alphabet length.
                <br/><br/>
                Encryption: <strong>C = P + K (mod 26)</strong> <br/>
                C: Cipher Text <br/>
                P: Plain Text <br/>
                K: Key

                </p>
            </div>
        </div>
        

    </div>

  )
}

export default Vigenere;