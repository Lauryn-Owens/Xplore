import React, { useState } from 'react';

import '../componentStyles/components/navigationsToggle.css';

// style={{width:'20px',height:'20px',border:'2px solid green',backgroundColor:'white'}}

export default function NotificationsToggle() {
    const[onOff, setOnOff] = useState(true);

    function onClickToggleHandler(){
        setOnOff(!onOff);
    }
    return (
        <section 
        style={{backgroundColor: !onOff ? 'var(--foundation_pry_p_75)' : 'var(--foundation_pry_p_300)'}}
        className="toggle_container">
            <button
            style={{left: onOff ? '27px' : '0'}}
                onClick={() => {
                    onClickToggleHandler();
                }}
                className="toggle_container--circle"></button>
        </section>
    )
}