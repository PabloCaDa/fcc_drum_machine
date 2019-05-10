import React from 'react'

const DrumPads = (props) => {
    document.onkeydown = function(e) {
        if (props.keys.includes(e.key.toUpperCase()) && props.power) {
            const pad = document.getElementById(e.key.toUpperCase()).parentElement;
            pad.click();
            pad.setAttribute('style', "color:black; border: 1px solid var(--main-secondary-color); background: var(--main-secondary-color)")
            setTimeout(() => pad.removeAttribute('style'),100)
        }
    };

    return (
    <div className="drum__pads">
        {props.keys.map((key,index) => (
            <div className="drum-pad" id="props.bank[index].name" key={key} onClick={props.playSound}>
                <audio
                    name={`${props.bank? props.bank[index].name: ''}`}
                    id={key}
                    className="clip"
                    src={`${props.bank? props.bank[index].sound: ''}`}
                    {...props.power ? {} : {muted: true }}
                >
                </audio>
                {key}
            </div>
        ))}
    </div>
  )
}

export default DrumPads
