import React from 'react'

const DrumControls = (props) => {
  return (
    <div className="drum__controls">
        <div className={`drum__controls-power metal radial ${props.power? 'on':'off'}`}
            onClick={props.switchPower}
        >
            <i className="fas fa-power-off"></i>
        </div>
        <div id="display" className="drum__controls-display">
            <p>{props.power? props.display:''}</p>
        </div>
        <div className="drum__controls-volumen">
            <input 
            type="range"
            name="volume"
            step='10'
            min='0'
            max='100'
            value={props.volume}
            onChange={props.changeVolume}
            {...props.power ? {} : {disabled: true }}/>
            <div className="drum__controls-volumen_display">
                <p>{props.power? `${props.volume} %`:''} </p>
            </div>
        </div>
        <div className="drum__controls-bank">
            Bank 1
            <div className="drum__controls-bank_selector" onClick={props.switchBank}>
                <div className="drum__controls-bank_button" style={props.bankSelectorStyle}></div>
            </div>
            Bank 2
        </div>
    </div>
  )
}

export default DrumControls
