import React, { useContext, useState } from 'react';
import { DefaultContext } from "../Context";
import { TextField, Button } from '@mui/material';

export const Definition = () => {

    const { synonym, shuffle } = useContext(DefaultContext);
    const [letters, setLetters] = useState(shuffle(synonym?.word.split("")));
    const [answer, setAnswer] = useState(new Array(synonym?.word?.length + 1).join(" "));
    const [dragged, setDragged] = useState("");

    return (
        <div className='justify-center'>
            <h2>{synonym?.synonym}</h2>
            <div className='container' style={{marginBottom: "1rem"}}>
                {letters?.map((item, index) => 
                    <TextField sx={{
                        marginRight: "0.5rem",
                        borderColor: "#433373",
                        width: "3rem"
                      }} 
                        variant="outlined" width="20px"
                    />
                )}
            </div>
            <div className='container'>
                {letters?.map((item, index) => 
                    <TextField sx={{
                        marginRight: "0.5rem",
                        borderColor: "#433373",
                        width: "3rem"
                        }}
                        inputProps={
                            { readOnly: true, }
                        }
                        variant="outlined" width="20px"
                        value={item}
                        draggable
                        onSelect={() => setDragged(item)}
                    />
                )}
            </div>
        </div>
    )
}