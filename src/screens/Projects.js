import React from 'react'
import "./Project.css"
export default function Projects() {
  return (
    <div>
        <h1 className='maintitle'>Projects</h1>
        <div className='cont'>
            <div className="card">
                <div className="img">
                    <img src={require("../imgs/amer.jpg")} />
                </div>
                <div className="content">
                    <div className="title">
                        Amer Academy
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_amer-academy-used-technologies-html-css-activity-7099363644387278848-TqIF?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>


            <div className="card">
                <div className="img">
                    <img src={require("../imgs/pizza.jpg")} />
                </div>
                <div className="content">
                    <div className="title">
                        Custom Pizza
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_custom-pizza-used-technologies-html-css-activity-7162749822792404992-E8Jy?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>



            <div className="card">
                <div className="img">
                    <img src={require("../imgs/center.jpg")} />
                </div>
                <div className="content">
                    <div className="title">
                        Center Managment System
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_freelancing-webdevelopment-reactjs-activity-7213464878504693760-2pav?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>



            <div className="card">
                <div className="img">
                    <img src={require("../imgs/animo.jpg")} />
                </div>
                <div className="content">
                    <div className="title">
                        Center Managment System
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_animogamedev-activity-7097158849899507712-Vg49?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="img">
                    <img src={require("../imgs/social.png")} />
                </div>
                <div className="content">
                    <div className="title">
                        Social media platform
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_social-media-website-used-technologies-activity-7096429890782003200--yN5?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>

            <div className="card">
                <div className="img">
                    <img src={require("../imgs/store.png")} />
                </div>
                <div className="content">
                    <div className="title">
                        e-commerce website
                    </div>
                    <a href="https://www.linkedin.com/posts/mahmoud-shaban-amer_social-media-website-used-technologies-activity-7096429890782003200--yN5?utm_source=share&utm_medium=member_desktop" target="_blank">
                        <button>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
