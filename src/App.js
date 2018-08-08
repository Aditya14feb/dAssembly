import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main_container">
        
        <div className="main_contents">
          <div className="projects">
            <div className="project_category">
              <h1>PROJECT 1: BUILD A PERSONAL WEBSITE</h1>
              <h2>Your friend Anna wants you to make a website for her</h2>
                <div className="project_contents">
                  <div className="project_part">
                    <a><span className="checkbox"></span> <span classname="project_part_name">1. Make the headline and inputs </span> </a>
                    <a><span className="checkbox"></span> <span classname="project_part_name">2. Style the background and text </span></a>
                    <a><span className="checkbox"></span> <span classname="project_part_name">3. Add a background image and logo </span></a>
                    <a><span className="checkbox"></span> <span classname="project_part_name">4. Build your own personal website </span> <span className="theme"></span></a>
                  </div>
                  <div className="project_screenshot"> 
                    <div className="screenshot_header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="screenshot_image"></div>
                  </div>
                </div>
            </div>
          </div>
          <div className="aside">

          </div>
        </div>

      </div>
    );
  }
}

export default App;
