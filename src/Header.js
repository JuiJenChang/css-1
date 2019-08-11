import React, { Component } from 'react';
import { GoArrowDown } from "react-icons/go";
import { FaCodepen } from "react-icons/fa";
import './App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="top-content">
                    <div className="top-logo"><FaCodepen /></div>
                    <div className="top-title"><a>Download</a></div>
                    <div className="top-title"><a>Purchase</a></div>
                    <div className="top-title"><a>Support</a></div>
                </div>
                <div className="box-title">
                    <div className="boxed">
                        <h1><FaCodepen className="box-logo" /> Boxed</h1>
                    </div>
                    <div>
                        <h1>Simple <span className="redword">fast</span> backup</h1>
                    </div>
                    <div>
                        <p className="first-p">
                            Select a pair of folders and Bvckup 2 will make sure that one stays an exact copy of the other.
                            It is light, uncomplicated and really well designed. It is also incredibly fast.
                        </p>
                    </div>
                    <div>
                        <GoArrowDown className="godown" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;