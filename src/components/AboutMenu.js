import React from 'react';

function AboutMenu(props) {
    const {counter, setCounter, setIsVisable} = props;

    return (
        <div className="customStyle">
            Menu component
            <button onClick={() => setCounter(counter + 1)}>
                add +1
            </button>
            <button onClick={() => setIsVisable(true)}>
                open modal window
            </button>
        </div>
    );
}

export default AboutMenu;
