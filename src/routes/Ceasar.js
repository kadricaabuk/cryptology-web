import React from 'react'
import { useState } from 'react';

function Ceasar() {

    const [plainText, setPlainText] = useState('ATTACKATONCE');
    const [shift, setShift] = useState(4);
    const [chipher, setChipher] = useState();

    const encrypt = () => {
        let result=""
        for (let i = 0; i < plainText.length; i++)
        {
            let char = plainText[i];
            if (char.toUpperCase(plainText[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + shift-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + shift-97) % 26 + 97);
                result += ch;
            }
        }
        setChipher(result)
    }

    const decrypt = () => {
        let result=""

        for (let i = 0; i < chipher.length; i++)
        {
            let char = chipher[i];
            if (char.toUpperCase(chipher[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) - shift - 65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) - shift - 97) % 26 + 97);
                result += ch;
            }
        }
        setPlainText(result)
    }

    return (
    
    <div>
        <div className='grid grid-cols-2 gap-4 pt-20'>
            <div >
                <h1 className='text-white font-bold text-5xl mb-16'>Application</h1>
                
            
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <h3 className='text-white font-bold text-right mb-8'>Plain Text</h3>
                        <h3 className='text-white font-bold text-right mb-24'>Shift</h3>
                        <h3 className='text-white font-bold text-right'>Chipher</h3>
                    </div>
                    <div>
                        <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 mb-2" type="text" value={plainText} onChange={e => setPlainText(e.target.value)}/>
                        <input className="bg-transparent border-white border-2 rounded-lg text-white p-2 my-2" type="number" value={shift} onChange={e => setShift(e.target.value)}/>
                        <div className='flex text-center pl-2 space-x-4 py-2'>
                            <button className='bg-white text-gray-700 p-3 rounded-lg font-bold' onClick={encrypt} >Encrypt</button>
                            <button className='bg-gray-800 text-white p-3 rounded-lg font-bold' onClick={decrypt} >Decrypt</button>
                        </div>
                        <textarea className="bg-transparent border-white border-2 rounded-lg text-white p-2" cols={23} rows="4" type="text" value={chipher} onChange={e => setChipher(e.target.value)}/>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div>
                <h1 className='text-white font-bold text-5xl mb-16'>Information</h1>
                <p className='text-white  text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus convallis tortor, id volutpat sem. Donec ut sapien vel augue lacinia condimentum non a magna. Fusce nec mauris sit amet tortor ornare congue. Curabitur at rutrum justo. Morbi id rutrum velit, pulvinar pharetra ligula. Nunc faucibus tellus libero, in volutpat turpis placerat sit amet. In ut mi eros. Nullam at enim metus. Phasellus eget purus ligula. Phasellus sed leo pulvinar, dictum odio eu, dictum velit. Mauris quis purus id magna tempus finibus. Cras volutpat imperdiet ante, vitae pulvinar tellus consequat sed. Cras vehicula tortor sit amet lectus ultrices lacinia. Quisque aliquet suscipit dictum.
                </p>
            </div>
        </div>
    </div>
    )
}

export default Ceasar
