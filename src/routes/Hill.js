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
        
        <div className="plaintext">
            <label htmlFor="">plaintext</label>
            <input type="text" name="plaintext" id="plaintext"  onChange={(e) => setPlainText(e.target.value)}/>
        </div>

        <div className="ciphertext">
            <label htmlFor="">ciphertext</label>
            <input type="text" name="ciphertext" id="ciphertext" value={cipherText}  onChange={(e) => setCipherText(e.target.value)}/>
        </div>

        <div className="key">
            <label htmlFor="">key</label>
            <input type="text" name="key" id="key" onChange={(e) => setKeyText(e.target.value)}/>
        </div>

        <div className="block">
            <label htmlFor="">block</label>
            <input type="number" name='block' id='block' onChange={(e) => setBlockSize(Number(e.target.value))} />
        </div>

        <button onClick={HillCipher}>encrypt</button>
        <button onClick={() => console.log("enes")}>decrypt</button>

        <div>ciphertext: {cipherText}</div>
        

    </>
  )
}

export default Hill