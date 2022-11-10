import React from 'react';
import NavButton from "./common/NavButton.jsx"
import berry from ".././res/berry.png"

const data = [
    {
        label: "Listening",
        href: "/listening",
        level: 7,
        icon: "headphones"
    },
    {
        label: "Grammar",
        href: "/grammar",
        level: 4,
        icon: "feather"
    },
    {
        label: "Translation",
        href: "/translate",
        level: 3,
        icon: "type"
    },
    {
        label: "Definition",
        href: "/definition",
        level: 7,
        icon: "message-circle"
    },
    {
        label: "Write a word",
        href: "/writeword",
        level: 3,
        icon: "edit-3"
    }
]

export const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='align-center'>
                <img src={berry} alt="logo" style={{height: "5rem", width: "5rem"}}></img>
                <h2 color='#433373'>QARAQAT</h2>
            </div>
            {data.map((item, index) => 
                <NavButton key={index} item={item}/>
            )}
        </div>
    )
}
