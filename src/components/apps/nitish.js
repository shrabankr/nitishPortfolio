import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "Resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about nitish" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="Resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "Resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's Resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Nitish Mahato</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Data Scientist!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I am working as a<sup></sup><span className=" font-medium"> Data Scientist</span> in<a href="https://www.ford.com/" rel="noreferrer" target="_blank" className=" font-medium"> Ford Motor Company</a>.</li>
                <li className=" mt-3 list-pc">Previously worked on<sup></sup><span className=" font-medium"> Face Recognition Using Deep Learning</span> project as an intern in<a href="https://www.coriolis.co.in/" rel="noreferrer" target="_blank" className=" font-medium"> Coriolis Technologies Pvt. Ltd., Pune, India</a>.</li>
                {/* <li className=" mt-3 list-pc">I have completed <sup></sup><span className=" font-medium">M.Sc. Applications of Mathematics </span>from <a href="https://www.cmi.ac.in/" rel="noreferrer" target="_blank" className=" font-medium">Chennai Mathematical Institute, Chennai</a>.</li> */}
                {/* <li className=" list-pc">I have completed <sup></sup><span className=" font-medium">B.Sc. Mathematics </span>from <a href="https://www.jkcprl.ac.in/" rel="noreferrer" target="_blank" className=" font-medium">Jagannath Kishore College, Purulia, West Bengal</a>.</li> */}
               {/* <li className=" list-pc">I'm a 3<sup>rd</sup> year <span className=" font-medium">computer Science student</span> pursuing my Btech degree from <a href="https://www.pdpu.ac.in/" rel="noreferrer" target="_blank">PDEU, Gandhinagar</a>.</li> */}
                <li className=" mt-3 list-building">Also I enjoy building awesome AI/ML models & love solving  Optimization problems..</li>
                <li className=" mt-3 list-time">When I am not coding, I like to spend my time reading books,playing cricket or watching TV Series, <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"> YouTube videos.</a></li>
                {/* <li className=" mt-3 list-star">My areas of expertise are modelling, web applications, deep learning, optimization</li> */}
                {/* <li className=" mt-3 list-star">I have worked with a wide variety of Data Science projects involving Machine Learning, Deep Learning, Natural Language Processing, Statistical Modeling, Computer Vision, Optimization Techniques, Game Theory etc.</li> */}
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Chennai Mathematical Institute, Chennai
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2017 - 2019</div>
                    <div className=" text-sm md:text-base">M.Sc. Applications of Mathematics</div>
                    {/* <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.07/10 </div>  */}
                </li>

                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Jagannath Kishore College, Purulia, West Bengal
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2013 - 2017</div>
                    <div className=" text-sm md:text-base">B.Sc. Mathematics</div>
                    {/* <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.07/10 </div>  */}
                </li>

                {/*<li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> (GSEB)
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2016 - 2018</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 94.1%</div>
                </li> */}
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I have worked with a wide variety of Data Science projects involving Machine Learning, Deep Learning, Natural Language Processing, Statistical Modeling, Computer Vision, Optimization Techniques, Game Theory etc.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">modelling, web applications, deep learning, optimization!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-r-inactive?style=flat&logo=r&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek r" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="vivek c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="vivek python" />
                        <img className="m-1" src="https://img.shields.io/badge/matlab-0175C2?style=flat&logo=matlab&logoColor=white" alt="vivek matlab" />
                        <a href="https://www.google.com/search?q=is+Fortran+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-Fortran-%23E44D27?style=flat&logo=Fortran&logoColor=ffffff" alt="vivek Fortran" /></a>
                        <img src="https://img.shields.io/badge/-Mysql-%23CC6699?style=flat&logo=Mysql&logoColor=ffffff" alt="vivek Mysql" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="vivek git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Latex-FFCA28?style=flat&logo=Latex&logoColor=ffffff" alt="vivek Latex" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Kubernetes-blue?style=flat&logo=Kubernetes&logoColor=white" alt="vivek Kubernetes" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/-Tensorflow-%23F7DF1C?style=flat&logo=Tensorflow&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="vivek Tensorflow" />
                        <img className="m-1" src="https://img.shields.io/badge/QlikView-green?style=flat&logo=Dash&logoColor=QlikView" alt="vivek QlikView" />
                        <img className="m-1" src="https://img.shields.io/badge/scikitlearn-orange?style=flat&logo=scikitlearn&logoColor=white" alt="vivek scikitlearn" />
                        <img src="https://img.shields.io/badge/Dash-success?style=flat&logo=Dash&logoColor=white" alt="vivek Dash" className="m-1" />                        
                        <img src="https://img.shields.io/badge/Streamlit-0769AD?style=flat&logo=Streamlit&logoColor=white" alt="vivek Streamlit" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/pytorch-593D88?style=flat&logo=pytorch&logoColor=white" alt="vivek pytorch" />
                        <img className="m-1" src="https://img.shields.io/badge/Flask-lightgrey?style=flat&logo=Flask&logoColor=white" alt="vivek Flask" />                                                
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And ofcourse,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="vivek linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Face Recognition Using Deep Learning",
            date: "May - July 2018",
            link: "https://github.com/unbiased-96",
            description: [
                "Detect face in the image/video frames. Used Face Recognition python library to get face embeddings, which is a vector of 128 numbers. Calculated euclidean distance between known face embeddings and the detected face embeddings. Shortest distance taken as the best match. Technologies/science exposed to​ :Machine Learning, face recognition with images and CCTV.",
            ],
            domains: ["Python", "OpenCV", "Dlib", "pyttsx"]
        },
        {
            name: "Study of applications of Linear Algebra in Photogrammetry",
            date: "Jan - May 2018",
            link: "https://github.com/vivek9patel/flutter-banking-app",
            description: [
                "From 2D information to 3D representation",
            ],
            domains: ["Image Processing", "Edge detection", "Affine Transformation"]
        },


        
    ];

    const tag_colors = {
        "Image Processing": "yellow-300",
        "Edge detection": "red-600",
        "Affine Transformation": "red-500",
        "OpenCV": "yellow-400",
        "Dlib": "blue-400",
        "dart": "blue-500",
        "reapyttsx": "purple-500",
        "Python": "green-200",
        //"html5": "pink-600",
        //"sass": "pink-400",
        //"tensorflow": "yellow-600",
        //"django": "green-600",        
        //"codeforces-api": "gray-300",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Nitish-Mahato-Resume.pdf" title="Nitish Mahato Resume" frameBorder="0"></iframe>
    )
}