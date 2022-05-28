import React, { useState } from 'react'

export const Vigenere = () => {
    
    const [plainText, setPlainText] = useState('Hello World!');
    const [key, setKey] = useState('ASDAFWFWÖSLAD');
    const [chipher, setChipher] = useState('');

    const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const encrypt = () => {
        let result = '';
        let emptyStringsCount = (plainText.split(" ").length - 1);
        for (let i = 0; i < (plainText.length-emptyStringsCount); i++) {
          const element = plainText[i];
          if(element === ' '){
            result += ' ';
          }else{
            let resIndex = ALPHA.indexOf(element.toUpperCase())+ALPHA.indexOf(key[i].toUpperCase())
            let res = ALPHA[resIndex>26 ? resIndex%26 : resIndex]
            result += res;
          }
        }
        setChipher(result);
      }

      const decrypt = () => {
        let result = '';
        let emptyStringsCount = (chipher.split(" ").length - 1);
        for (let i = 0; i < chipher.length-emptyStringsCount; i++) {
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
        <h3 className='text-white font-bold text-5xl mt-10'>Autokey Vigenere Chipher</h3>
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
                In the Autokey Vigenere encryption method, a part of the plaintext is also included in the encryption so that the key does not repeat itself. By bringing the keyword to the beginning, the plaintext is shifted by the keyword.
                <br/><br/>
                For example, the keyword seval is:<br/>
                <strong>Plain Text:</strong> veri guvenligi  <br/>
                <strong>Password:</strong> seva lverguve<br/>
                <strong>Ciphertext:</strong> öıoi sşcüysgen<br/>
                <br/><br/>
                We take the alphabetical order of these characters and shift each character by the alphabetic sequence number of the character in the password. For this, we can make use of the graph with the sequence numbers. In addition, we get the results of the numbers obtained when they are added according to (mod 29) in Turkish.
                </p>
            </div>
        </div>
        

    </div>

  )
}

export default Vigenere;