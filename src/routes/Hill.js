import React, { useState } from 'react';


let x =[[5, -2, 2, 7],[1, 0, 0, 3],[-3, 1, 5, 0],[3, -1, -9, 4]];


const Hill = () => {
    const [plainText, setPlainText] = useState('Hello World!');
    const [keyText, setKeyText] = useState('');
    const [blockSize, setBlockSize] = useState();
    const [cipherText, setCipherText] = useState('');


    
    
    const getKeyMatrix = (key,keyMatrix) => {
    let  k = 0;
    for (let i = 0; i < blockSize; i++)
    {
        for (let j = 0; j < blockSize; j++) {
                keyMatrix[i][j] = (key[k]).charCodeAt(0) % 65;
                /* const inverseKeyMatrix = inv(keyMatrix);
                console.log(inverseKeyMatrix); */
                k++;
            }
        }
    }
 
// Following function encrypts the message
    const encrypt= (cipherMatrix,keyMatrix,messageVector) => {
        let x, i, j;
        for (i = 0; i < blockSize; i++)
        {
            for (j = 0; j < 1; j++)
            {
                cipherMatrix[i][j] = 0;
            
                for (x = 0; x < blockSize; x++)
                {
                    cipherMatrix[i][j] +=
                        keyMatrix[i][x] * messageVector[x][j];
                }
            
                cipherMatrix[i][j] = cipherMatrix[i][j] % 26;
            }
        }
    }
 
    // Function to implement Hill Cipher
    const HillCipher = (crypto) => {
        // Get key matrix from the key string
        let keyMatrix = new Array(blockSize);   

        for(let i=0;i<blockSize;i++) {
            keyMatrix[i]=new Array(blockSize);
            for(let j=0;j<blockSize;j++)
                keyMatrix[i][j]=0;
        }
        /* if (crypto === "dencrypt") {
            getKeyMatrix(keyText, keyMatrix);
        }  */
        getKeyMatrix(keyText, keyMatrix);
            
        let messageVector = new Array(blockSize);        
        for (let i=0;i<blockSize;i++) {
            messageVector[i]=new Array(1);
            messageVector[i][0]=0;
        }
    
        // Generate vector for the message        
        let cipherText= '';
        for (let j = 0; j< plainText.length; j += blockSize) {            
            for (let i = 0; i < blockSize; i++) {
                messageVector[i][0] = plainText.charCodeAt(j + i) % 65;
            }            
            let cipherMatrix = new Array(blockSize);
            for(let i=0;i<blockSize;i++) {
                cipherMatrix[i]=new Array(1);
                cipherMatrix[i][0]=0;
            }
            encrypt(cipherMatrix, keyMatrix, messageVector);
            for (let i = 0; i < blockSize; i++) {
                cipherText += String.fromCharCode(cipherMatrix[i][0] + 65);
            }
        }       
        setCipherText(cipherText);
    }
    

  return (
    <>    
        <div className='row border-b-2'>
        <h3 className='text-white font-bold text-5xl mt-10'>Hill Chipher</h3>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-10'>
            <div >
                <h1 className='text-white font-bold text-3xl mb-16'>Application</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-28'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-10'>Key</h3>
                        <h3 className='text-white font-bold text-right mb-24'>Block</h3>
                        <h3 className='text-white font-bold text-right'>Chipher</h3>
                    </div>
                <div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 "  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} >defend the east wall of the castle</textarea>
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="text" value={keyText} onChange={e => setKeyText(e.target.value)}/>
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="number" name='block' id='block' onChange={(e) => setBlockSize(Number(e.target.value))} />
                <div className='flex text-center  space-x-4 py-2'>
                    <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={HillCipher} >Encrypt</button>
                    <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={HillCipher} >Decrypt</button>
                </div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mt-2" rows="4" cols="50" spellCheck="false"  type="text" value={cipherText} onChange={e => setCipherText(e.target.value)}/>
                </div>
                </div>
            </div>
            <div>
                <h1 className='text-white font-bold text-3xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                The Hill Cipher, discovered and used by Lester Hill in 1929, is a block cipher. In this encrypbrtion method, the encryption process is carried out by separating the plain text into blocks.<br/><br/>
                In Hill encryption, a matrix of coefficients is used as the encryption key. Our key space consists of mxm reversible matrices in the Zn^m ring, with n letters of the alphabet we are working with and block length m. Multiplying our key, which is the mxm matrix, by the row matrix corresponding to the numerical values of the letters in the plaintext, we obtain the row matrix corresponding to the numerical values of the ciphertext. This process is applied to all blocks to obtain the ciphertext.<br/><br/>
                Encryption function, with K being our key; <br/>
                <strong>E := e_k (x_1, x_2, …, x_m) =(x_1,…,x_m) * K , x_i € Z_26</strong>
                <br/><br/>

                Decyrption function;<br/>
                <strong>D := d_k(y_1,…,y_m) = (y_1,…,y_m) * K -1	, y_i € Z_26</strong><br/><br/>
                The Hill cipher is quite difficult to crack with a known ciphertext attack. On the other hand, it shows weakness in cases where the plain text is also known.

                </p>
            </div>
        </div>
    </>
  )
}

export default Hill