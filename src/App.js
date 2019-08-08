import React, { Component } from 'react';
import { GoSearch } from "react-icons/go";
import { FaRocket } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import { FaCodepen } from "react-icons/fa";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
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
        <div className="title">
          <h1>What's <span className="redword">New</span></h1>
        </div>
        <div className="main-content">
          <div className="title">
            <FaRocket className="small-logo" />
            <h3 className="h3-title">Speed</h3>
            <span className="main-span">Complete backups faster</span>
            <p className="content-p">The app is very fast at bulk copying and it is even faster at updating.</p>
            <p className="content-p">
              Extensively optimized across the board Bvckup 2 goes out of its way to process every backup as quickly as possible.
            </p>
          </div>
          <div className="title">
            <GoSearch className="small-logo" />
            <h3 className="h3-title">Focus</h3>
            <span className="main-span">It does just one simple thing...</span>
            <p className="content-p">The app does not compress, encrypt or FTP files.</p>
            <p className="content-p">
              It's not a two-way sync nor is it a full system backup software.
              It does just one thing - it mirrors A to B.
            </p>
          </div>
          <div className="title">
            <FaRocket className="small-logo" />
            <h3 className="h3-title">Polish</h3>
            <span className="main-span">...and it does it really well</span>
            <p className="content-p">It's better to excel at one thing than to be average in many.</p>
            <p className="content-p">
              From the nuanced user interface to the high-performance core, the app is built to always favor quality over quantity.
            </p>
          </div>
        </div>
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
      </div>
    );
  }
}

export default App;
