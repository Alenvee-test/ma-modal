import React from 'react';

function AboutContent(props) {
    const {counter} = props
    
    return (
        <div className="customStyle">
            Counter value: {counter}
        </div>
    );
}

export default AboutContent;
