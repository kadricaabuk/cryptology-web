import React from 'react'
import { useState } from 'react';
function Affine() {

    const [a, setA] = useState();
    const [b, setB] = useState();
    const [plainText, setPlainText] = useState();
    const [chipherText, setChipher] = useState();
    
    const ALPHA = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const encrypt = () => {
        let result = '';
        for (let i = 0; i < plainText.length; i++) {
            const element = plainText[i];
            if(element === ' '){
                result += ' ';
            }else{
            let index = ALPHA.indexOf(element.toUpperCase());
            console.log(index)
            let resIndex = parseInt(a*(index+1))+parseInt(b)
            console.log(resIndex)
            result += ALPHA[(resIndex-1)%26]
            console.log(result)
            }
                //Şifreli mesajın oluşuturulması: b harfi için 2. harf olduğu kabul edilirse,
                //3×2 + 2 = 8 olarak bulunur yani karşılığı allfabenin 8. harfidir. Bu harf ‘h’ harfidir. 
        }
        setChipher(result)
    }

    const decrypt = () => {
        let result = '';
        for (let i = 0; i < chipherText.length; i++) {
            const element = chipherText[i];
            if(element === ' '){
                result += ' ';
            }else{
            let index = ALPHA.indexOf(element);
            console.log(index)
            let resIndex = parseInt(Math.pow(a,-1)*(index+1-parseInt(b)))
            console.log(resIndex)
            result += ALPHA[(resIndex-1)%26]
            console.log(result)
            }
                //Şifreli mesajın oluşuturulması: b harfi için 2. harf olduğu kabul edilirse,
                //3×2 + 2 = 8 olarak bulunur yani karşılığı allfabenin 8. harfidir. Bu harf ‘h’ harfidir. 
        }
        setPlainText(result)
    }
    
  return (
    <>  

        <div className='grid grid-cols-2 gap-4 pt-20'>
            <div >
                <h1 className='text-white font-bold text-5xl mb-16'>Application</h1>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-28 mt-1'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-8'>A</h3>
                        <h3 className='text-white font-bold text-right mb-24'>B</h3>
                        <h3 className='text-white font-bold text-right'>Chipher</h3>
                    </div>
                <div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 "  id="p" name="p" rows="4" cols="50" spellCheck="false" value={plainText} onChange={event => setPlainText(event.target.value)} />
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="number" value={a} onChange={e => setA(e.target.value)}/>
                <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2 w-[408px] " type="number" value={b} onChange={e => setB(e.target.value)}/>
                <div className='flex text-center  space-x-4 py-2'>
                    <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={encrypt} >Encrypt</button>
                    <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={decrypt} >Decrypt</button>
                </div>
                <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2 mt-2" rows="4" cols="50" spellCheck="false"  type="text" value={chipherText} onChange={e => setChipher(e.target.value)}/>
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

{/* 
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
        </div> */}
        {/* <h3>chipher</h3> */}
        {/* <input type="text" value={chipher} onChange={e => setChipher(e.target.value)}/> */}
    </>
  )
}

export default Affine