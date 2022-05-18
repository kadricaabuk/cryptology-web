import React from 'react'
import { useState } from 'react';
function Affine() {

    const ALPHA = ['A','B','C','Ç','D','E','Ë','F','G','H','I','J','K','L','M','N'];
    
    const [a, setA] = useState();
    const [b, setB] = useState();
    const [word, setWord] = useState();


    const encrypt = () => {
        let res;
        for (var i = 0; i < word.length; i++) {
    
            var alphaIndex = ALPHA.indexOf(word[i]);
    
            var troublesome = (a * alphaIndex + b) % ALPHA.length;
    
            res = word.substring(0, i) + ALPHA[troublesome] + word.substring(i + 1);
        }
        console.log(res)
        return res;
    }
    
    const decrypt = () => {
        
        let res;
        let s;
            for (var i = 0; i < word.length; i++) {
                s %= ALPHA.length;
    
                //Bruteforce the modular invert of the a
    
                for (var j = 1; j < ALPHA.length; j++) {
                    if ((s * j) % ALPHA.length === 1)
                        var invert = j;
                }
    
                var alphaIndex = ALPHA.indexOf(word[i]);
    
                var troublesome = (invert * (alphaIndex - b)) % ALPHA.length;
                if (troublesome < 0)
                    troublesome += ALPHA.length;
                res = word.substring(0, i) + ALPHA[troublesome] + word.substring(i + 1);
            }
            console.log(res)
            return res;

    }
  return (
    <>  
        <div className='flex space-x-4 p-3 items-center'>
            <h3 className='text-white font-bold'>Word</h3>
            <input className="bg-transparent border-white border-2 rounded-lg text-white p-2" type="text" value={word} onChange={e => setWord(e.target.value)} />  
        </div>

        <div className='flex space-x-4 p-3 items-center'>
        <h3 className='text-white font-bold'>A</h3>
        <input className="bg-transparent border-white border-2 rounded-lg text-white p-2" type="number" value={a} onChange={e => setA(e.target.value)}/>
        </div>
        <div className='flex space-x-4 p-3 items-center'>
        <h3 className='text-white font-bold'>B</h3>
        <input className="bg-transparent border-white border-2 rounded-lg text-white p-2" type="number" value={b} onChange={e => setB(e.target.value)}/>
        </div>
        <div className='flex space-x-4 p-3 items-center'>
            <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={encrypt} >Encrypt</button>
            <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={decrypt} >Decrypt</button>
        </div>
        {/* <h3>chipher</h3> */}
        {/* <input type="text" value={chipher} onChange={e => setChipher(e.target.value)}/> */}
    </>
  )
}

export default Affine