import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel-container";
import FileZone from "./file-zone/FileZone-container";
import getMockText from './text.service';

class App extends Component {
    getText() {
        getMockText().then(function (result) {
            console.log(result);
        });
    }
    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel/>
                    <FileZone/>
                </main>
            </div>
        );
    }
}

export default App;
