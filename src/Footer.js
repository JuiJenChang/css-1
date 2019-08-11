import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-1">
                    <button>Console</button>
                    <button>Assets</button>
                    <button>Shortcuts</button>
                </div>
                <div className="footer-2">
                    <button>Export</button>
                    <button>Share</button>
                </div>
            </div>
        );
    }
}

export default Footer;