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
        <h3>plainText</h3>
        <input type="text" value={plainText} onChange={e => setPlainText(e.target.value)}/>
        <h3>shift</h3>
        <input type="number" value={shift} onChange={e => setShift(e.target.value)}/>
        <button onClick={encrypt} >Encrypt</button>
        <button onClick={decrypt} >Decrypt</button>
        <h3>chipher</h3>
        <input type="text" value={chipher} onChange={e => setChipher(e.target.value)}/>
    </div>
    )
}

export default Ceasar
