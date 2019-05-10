import React, { Component } from 'react'
import './Content.css'

import { KEYS, BANK1, BANK2 } from '../../constants'
import DrumPads from './DrumPads/DrumPads';
import DrumControls from './DrumControls/DrumControls';

const contentStyle = {
    backgroundColor: 'var(--main-title-text-color)',
    color: 'var(--main-text-color)',
    minHeight:'80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
}

const bankSelectorLeftStyle = {
    float: 'left'
}
const bankSelectorRightStyle = {
    float: 'right'
}
export default class Content extends Component {
    state = {
        power: true,
        keys: KEYS,
        bank1: BANK1,
        bank2: BANK2,
        activeBank: BANK1,
        display: '',
        volume: '50',
        bankSelectorStyle: bankSelectorLeftStyle
    }

    switchPower = () => {
        this.setState({
            power: !this.state.power,
            display:'',
        })
    }

    playSound = (e) => {
        const audio = e.target.querySelector('audio');
        audio.currentTime= 0;
        audio.play();
        this.display(audio);
    }

    display = (audio) => {
        this.setState({display: audio.getAttribute('name')})
    }

    changeVolume = (e) => {
        this.setState({volume: e.target.value});
        const newVolume= e.target.value/100;
        const audio = document.querySelectorAll('audio');
        audio.forEach(sound => sound.volume = newVolume);
    }

    switchBank = () => {
        if(this.state.activeBank === this.state.bank1) this.setState({activeBank: this.state.bank2, bankSelectorStyle: bankSelectorRightStyle})
        else this.setState({activeBank: this.state.bank1, bankSelectorStyle: bankSelectorLeftStyle})
    }

    render() {
        const power = this.state.power;
        const display = this.state.display;
        const volume = this.state.volume
        const bankSelectorStyle = this.state.bankSelectorStyle
        return (
            <div id="drum-machine" style={contentStyle} >
                <div className="drum__box">
                    <DrumControls
                        power={power}
                        display={display}
                        volume={volume}
                        switchPower={this.switchPower}
                        switchBank={this.switchBank}
                        changeVolume={this.changeVolume}
                        bankSelectorStyle={bankSelectorStyle}
                    />
                    <DrumPads
                        keys={this.state.keys}
                        bank={this.state.activeBank}
                        power={power}
                        playSound={this.playSound}
                    />
                </div>
            </div>
        )
    }
}

