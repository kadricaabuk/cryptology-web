import React, { useState } from 'react';
//import { inv } from 'mathjs';


let x =[[5, -2, 2, 7],[1, 0, 0, 3],[-3, 1, 5, 0],[3, -1, -9, 4]];

console.log(x);


const Hill = () => {
    const [plainText, setPlainText] = useState('');
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

        <div className='grid grid-cols-2 gap-4 pt-20'>
            <div >
                <h1 className='text-white font-bold text-5xl mb-16'>Application</h1>
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
                <h1 className='text-white font-bold text-5xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus convallis tortor, id volutpat sem. Donec ut sapien vel augue lacinia condimentum non a magna. Fusce nec mauris sit amet tortor ornare congue. Curabitur at rutrum justo. Morbi id rutrum velit, pulvinar pharetra ligula. Nunc faucibus tellus libero, in volutpat turpis placerat sit amet. In ut mi eros. Nullam at enim metus. Phasellus eget purus ligula. Phasellus sed leo pulvinar, dictum odio eu, dictum velit. Mauris quis purus id magna tempus finibus. Cras volutpat imperdiet ante, vitae pulvinar tellus consequat sed. Cras vehicula tortor sit amet lectus ultrices lacinia. Quisque aliquet suscipit dictum.
                </p>
            </div>
        </div>
    </>
  )
}

export default Hill