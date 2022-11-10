import React, {useContext, useState} from 'react';
import { DefaultContext } from "../Context";
import { TextField, Button } from '@mui/material';

export const Translate = () => {

    const { translate } = useContext(DefaultContext);
    const [answer, setAnswer] = useState(new Array(translate?.answer?.length + 1).join(" "));

    const handleCheck = () => {
        console.log(answer === translate?.answer);
    }

    return (
        <div className='justify-center'>
            <h1>{translate?.word}</h1>
            <div className='answer'>
                {translate?.answer?.split("").map((item, index) => 
                    // <input
                    //     type="text"
                    //     key={index}
                    //     maxLength={1}
                    //     className="letter"
                    //     onChange={(event) => {
                    //         if (event.target.value) {
                    //             setAnswer(answer.slice(0, index) + event.target.value + answer.slice(index + 1))
                    //         } else {
                    //             setAnswer(answer.slice(0, index) + " " + answer.slice(index + 1))
                    //         }
                    //         console.log(answer);
                    //     }}
                    // />
                    <TextField sx={{
                        marginRight: "0.5rem",
                        borderColor: "#433373",
                        width: "3rem"
                      }} variant="outlined" width="20px" key={index} maxLength={1} onChange={(event) => {
                        if(event.target.value) {
                            if (event.target.value) {
                                setAnswer(answer.slice(0, index) + event.target.value + answer.slice(index + 1))
                            } else {
                                setAnswer(answer.slice(0, index) + " " + answer.slice(index + 1))
                            }
                            console.log(answer);
                        }
                    }}/>
            )}
            </div>
            <Button sx={{borderRadius: "0.5rem", marginTop: "1rem"}} variant="contained" onClick={() => handleCheck()}>CHECK</Button>
        </div>
    )
}
