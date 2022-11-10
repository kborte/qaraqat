import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import { useEffect, useState } from "react";
import { subtitles, wordInfo } from "../actions/words";
import { DefaultContext } from "../Context";


export const Player = () => {
    const [played, setPlayed] = useState(0);
    const [currentSubtitle, setCurrentSubtitle] = useState([]);
    const [definition, setDefinition] = useState({word: "", meaning: "", partOfSpeech: "", error: ""})
    const { id } = useContext(DefaultContext);
    const [sub, setSub] = useState([])

    useEffect(() => {
        subtitles(id).then((response) => {
            setSub(response.data);
            setCurrentSubtitle(response.data[0].text.split(" "));
        })}, [])

    useEffect(() => {
        let i = 0;
        while (parseInt(sub[i]?.start) <= played) {
            i++;
        }
        setCurrentSubtitle(sub[i ? i - 1 : i]?.text.split(' '))
    }, [played])

    const handleHover = (item) => {
        wordInfo(item).then((response) => setDefinition({word: item, meaning: response.data[0].meanings[0].definitions[0].definition, partOfSpeech: response.data[0].meanings[0].partOfSpeech}))
    }

    return (
        <div className='justify-center'>
        <ReactPlayer
            url={`https://youtu.be/${id}`}
            controls={true}
            onProgress={(progress) => {
                setPlayed(progress.playedSeconds);
            }}
        />
        <div className="subtitles">
            {currentSubtitle?.map((item, index) =>
                <div key={index} className="tooltip">
                    <span
                        onMouseEnter={() => handleHover(item)}
                    >{item} </span>
                    {definition?.word === item && 
                        <div className='tool'>
                            <span><b>{definition?.word}</b>: {definition?.partOfSpeech} - {definition?.meaning} {definition?.error}</span>
                            <button>Добавить в словарь</button>
                        </div>}
                </div>
            )}
        </div>
        </div>
    );
}
