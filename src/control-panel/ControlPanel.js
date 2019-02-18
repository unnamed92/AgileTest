import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        const { changeStyle, changeWeight, changeUnderline,
            weight, style , underline} = this.props;
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" className={weight && 'selected'}
                        onClick={() => changeWeight()}><b>B</b></button>
                    <button className="format-action" type="button" className={style && 'selected'}
                        onClick={() => changeStyle()}><i>I</i></button>
                    <button className="format-action" type="button" className={underline && 'selected'}
                        onClick={() => changeUnderline()}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
