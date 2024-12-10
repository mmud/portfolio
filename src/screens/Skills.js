import React from 'react'
import "./Project.css"
export default function Skills() {
  return (
    <div>
        <h1 className='maintitle'>Skills</h1>
        <div className='cont'>
            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/HTML.png")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        HTML
                    </div>
                </div>
            </div>

            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/CSS.png")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        CSS
                    </div>
                </div>
            </div>


            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/js.png")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        JavaScript
                    </div>
                </div>
            </div>

            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/R.png")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        React
                    </div>
                </div>
            </div>
            
            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/nodejs.png")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        Nodejs
                    </div>
                </div>
            </div>
            <div className="card nos">
                <div className="img">
                    <img src={require("../imgs/mongodb.jpg")} />
                </div>
                <div className="content">
                    <div className="title" style={{"textAlign":"center"}}>
                        Mongodb
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
