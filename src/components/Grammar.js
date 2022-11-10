import React, {useContext, useState} from 'react';
import { DefaultContext } from "../Context";
import { Draggable } from "react-drag-reorder";
import Button from '@mui/material/Button';

export const Grammar = () => {

    const { words, shuffle } = useContext(DefaultContext);
    const [sentence, setSentence] = useState(shuffle(words))

    const getChangedPos = (currentPos, newPos) => {
        let arr = JSON.parse(JSON.stringify(sentence));
        let temp = arr[currentPos];
        arr[currentPos] = arr[newPos];
        arr[newPos] = temp;
        setSentence(arr);
    };

    const handleCheck = () => {
        let s = true;
        for (let i = 0; i < words?.length; i++) {
            if (words[i] !== sentence[i]) {
                s = false;
                break;
            }
        }
        console.log(s);
    }

    return (
        <div className='justify-center'>
            <div className="container" style={{marginBottom: "1rem"}}>
                {sentence && 
                    <Draggable onPosChange={(curp, newp) => getChangedPos(curp, newp)}>
                        {sentence.map((item, index) => 
                            <Button sx={{borderColor: "#433373", marginRight: "0.5rem"}} variant="outlined" key={index} className="card">
                                <span>{item}</span>
                            </Button>
                        )}
                    </Draggable>
                }
            </div>
            <Button variant="contained" onClick={() => handleCheck()}>Check</Button>
        </div>
    )
}
