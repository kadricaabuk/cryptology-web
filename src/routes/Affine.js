import React from 'react'
import { useState } from 'react';
function Affine() {

    const [a, setA] = useState(5);
    const [b, setB] = useState(8);
    const [plainText, setPlainText] = useState('Hello World');
    const [cipherText, setCipher] = useState("");
    
    const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const ALPHA_LENGTH = ALPHA.length

    const encrypt = () => {
        setCipher("")
        for (let i = 0; i < plainText.length; i++) {
            const element = plainText[i];
            const elementIndex = ALPHA.indexOf(element.toUpperCase())
            if(element === ' '){
                setCipher(prev => prev += " ")
            }else{
                setCipher(prev => prev += ALPHA[(((elementIndex)*a)+b)%ALPHA_LENGTH])
            }
        }
    }

    const decrypt = () => {
        setPlainText("")
        for (let i = 0; i < cipherText.length; i++) {
            const element = cipherText[i];
            const elementIndex = ALPHA.indexOf(element.toUpperCase())
            const z = (ALPHA_LENGTH+1)/a
            console.log(Math.round(z))
            if(element === ' '){
                setPlainText(prev => prev += " ")
            }else{
                let index = Math.round(z)*(elementIndex+b)
                console.log(index)
                console.log(ALPHA[index%ALPHA_LENGTH])
                setPlainText(prev => prev += ALPHA[index%ALPHA_LENGTH])
            }
        }
    }
    
  return (
    <>  
        
        <div className='row border-b-2'>
        <h3 className='text-white font-bold text-5xl mt-10'>Affine Chipher</h3>
        </div>
        <div className='grid grid-cols-2 gap-4 mt-10'>
            <div >
                <h1 className='text-white font-bold text-3xl mb-16'>Application</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-28 mt-1'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-8'>A</h3>
                        <h3 className='text-white font-bold text-right mb-24'>B</h3>
                        <h3 className='text-white font-bold text-right'>Cipher</h3>
                    </div>
                <div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 "  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} />
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="number" value={a} onChange={e => setA(e.target.value)}/>
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="number" value={b} onChange={e => setB(e.target.value)}/>
                <div className='flex text-center  space-x-4 py-2'>
                    <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={encrypt} >Encrypt</button>
                    <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={decrypt} >Decrypt</button>
                </div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mt-2" rows="4" cols="50" spellCheck="false"  type="text" value={cipherText} onChange={e => setCipher(e.target.value)}/>
                </div>
                </div>
            </div>
            <div>
                <h1 className='text-white font-bold text-3xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                    The purpose of this encryption method is to use the linear function y=ax+b, which is known as the equation of the line in geometry, in the encryption process. Accordingly, x denotes the message to be encrypted (plain text), y denotes the encrypted message (cipher text), and the pair a and b form the key. <br/>
                    <strong>Encryption function for a single letter E(x) = (ax+b) mod m <br/></strong>
                    Where m is the size of the alphabet. The value a must be chosen so that a and m are prime between them. <br/> <strong> Deciphering; D(x) = a -1 (xb) mod m </strong><br/>
                    Here a -1 is the modular product inverse of a modulo m. <br/>
                    If cryptoanalysis of the cipher can discover the plaintext of the ciphertext character (frequency analysis, brute force, guess or otherwise), the key is obtained by solving a simultaneous equation.

                </p>
            </div>
        </div>
    </>
  )
}

export default Affine