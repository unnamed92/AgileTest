import React, { Component } from 'react';
import './FileZone.css';
var classNames = require('classnames');

class FileZone extends Component {
    applyStyle = (event) => {
        event.target.style.className = this.classNames
    }
    render() {
        const { style, weight, underline } = this.props;
        let textClasses = classNames({
            'bold': weight,
            'italic': style,
            'underline': underline
          });
        return (
            <div id="file-zone">
                <div id="file">
                    <div className={textClasses} onDoubleClick={this.applyStyle}>Hello world</div>
                </div>
            </div>
        );
    }
}

export default FileZone;
