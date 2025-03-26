import React, { useEffect, useState } from "react";
import logo from './logo.png'
import naac from './naac.png'
import innovationCouncil from './innovation.png'
import mseit from './mseit.png'
import backgroundImage from './background.jpg'

//      Faculty Images

import asha from './faculty_images/asha.jpg'
import one from './faculty_images/nayak.jpg'
import two from './faculty_images/dhapekar.jpg'
import three from './faculty_images/shankar.jpg'
import four from './faculty_images/bohidar.png'
import five from './faculty_images/khan.png'
import six from './faculty_images/kushwaha.jpeg'
import seven from './faculty_images/deshmukh.jpg'


//         Student Images

import s1 from './student_images/chanakya.jpg'
import s2 from './student_images/chandani.jpeg'
import s3 from './student_images/amith.jpg'

//         Activity Images 

import lamp from './activity_images/lamp.jpeg'
import robo from './activity_images/robo.jpeg'
import drone from './activity_images/drone.jpeg'
import cad from './activity_images/cada.jpeg'
import treasure from './activity_images/treasure.jpeg'
import bridge from './activity_images/bridge.jpeg'
import project from './activity_images/project.jpg'
import quiz from './activity_images/quiz.jpg'
import idea from './activity_images/idea.jpg'
import business from './activity_images/bussiness.jpeg'
import gaming from './activity_images/gaming.jpg'
import coding from './activity_images/coding.jpg'
import tedx from './activity_images/tedx.jpeg'
import innovation from './activity_images/innovation.jpeg'
import charades from './activity_images/charades.jpg'
import rhythm from './activity_images/rythm.jpeg'
import honours from './activity_images/award.jpg'



const FacultyCoordinators = () => {

    const [faculties, setFaculties] = useState([
        ['Dr. Virendra Nayak', one],
        ['Dr. N. K. Dhapekar', two],
        ['Dr. Ghanshyam Shankar', three],
        ['Dr. Shailendra Bohidar', four],
        ['Dr. Zubair Ahmed Khan', five],
        ['Dr. Akash Deep Kushwaha', six],
        ['Dr. Shailesh Deshmukh', seven]
    ])

    return (
        <section className="py-6">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Co-Convener's</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {faculties.map((faculty, i) => (
                    <div key={i} className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gradient-to-r from-blue-100 to-purple-200 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <img src={faculty[1]} alt={`Faculty ${i + 1}`} className="rounded-full w-16 mx-auto border-2 border-purple-500" />
                        <p className="mt-2 font-semibold">{faculty[0]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const StudentCoordinators = () => {
    const [students, setStudents] = useState([
        ['Amarjeet Dwivedi', ''],
        ['Chanakya Das Sahu', s1],
        ['Chandani Sahu', s2],
        ['Amith Raj VR', s3],
        ['M.Sujitha', ''],
        ['Ketarth Sawarkar', ''],
        ['Rajinesh Kumar', ''],
        ['Rahul Barik', ''],
        ['Priyansh Suryavanshi', ''],
        ['Sahil Singh', ''],
        ['Swasti Kumari', ''],
        ['Abhinav Patel', ''],
        ['Kumari Kshrija', ''],
        ['Yasmin Chandrakar', ''],
        ['Rishi Kumar Jena', ''],
        ['Mugagga Aslam', ''],
        ['Matilda Malanghane', ''],
    ])
    return (
        <section className="py-6">
            <h2 className="text-center text-3xl font-semibold text-gray-800">Student Co-ordinators</h2><br/>
            <div className="flex flex-wrap justify-center gap-6">
                {students.map((student, i) => (
                    <div key={i} className="lg:w-1/4 md:w-1/3 sm:1/2  bg-gradient-to-r from-blue-100 to-purple-200 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <img src={student[1]} alt={`Student ${i + 1}`} className="rounded-full w-16 mx-auto border-2 border-purple-500" />
                        <p className="mt-2 font-semibold">{student[0]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const TechFest = () => {

    const [days, setDays] = useState([
        [
            ["10:00 AM", "Inauguration Ceremony", "Carpet Ground Main Campus"],
            ["11:30 AM", "Drone Projection", "Carpet Ground Main Campus"],
            ["12:00 PM", "CAD Competition", "CAD LAB"],
            ["1:30 PM", "Treasure Hunt (For all)", "Main Campus"]
        ],
        // Day 2
        [
            ["10:00 AM", "Tech Quiz", "Conference Hall"],
            ["11:30 AM", "TED TALK", "Conference Hall"],
            ["1:30 PM", "Project Expo", "TBA"]
        ],
        // Day 3
        [
            ["10:00 AM", "Girls Cricket", "Carpet Ground Main Campus"],
            ["11:30 AM", "TUG Of WAR", "TBA"],
            ["2:00 PM", "Cultural Programme", "Carpet Ground Main Campus"]
        ]
    ])
 
    const [events, setEvents] = useState([
        ['Lamp Lighting & Inauguration & Speech of HODs', 'The tech fest starts with a formal ceremony where dignitaries light a lamp to symbolize knowledge and progress. The Heads of Departments (HODs) will deliver speeches to motivate students and explain the importance of the event.', lamp],
        ['Robo War', 'A competition where students build and control robots to battle against each other. The robot that remains functional the longest wins.', robo],
        ['Drone Racing', 'Participants fly drones through an obstacle course as fast as possible. The one who completes the course in the shortest time wins.', drone],
        ['CAD Design Competition', 'Students use Computer-Aided Design (CAD) software to create 3D models of structures, machines, or objects. Best design wins!', cad],
        ['Tech Treasure Hunt', 'A fun problem-solving game where participants follow clues to find hidden technical items or solutions across the campus.', treasure],
        ['Bridge Design Challenge', 'Participants design and build small-scale bridges using materials like wood or cardboard. The strongest and most efficient design wins.', bridge],
        ['Project Expo', 'Students showcase their technical projects, innovations, or research work to judges and visitors.', project],
        ['Tech Quiz', 'A quiz competition covering various topics in technology, science, and engineering.', quiz],
        ['Idea Pitching', 'Students present innovative ideas in front of a panel. The best and most feasible idea gets selected.', idea],
        ['Business Plan Competition', 'Participants create and present business models for startups or products. The best plan with market potential wins.', business],
        ['Gaming & AI Challenge', 'A gaming competition featuring popular video games and AI-based problem-solving tasks.', gaming],
        ['Coding Contest', 'A competitive programming event where students solve coding problems within a time limit.', coding],
        ['TED-X', 'Inspiring talks by speakers from different fields to share ideas and experiences.', tedx],
        ['Innovation Challenge', 'A competition where participants come up with creative technological solutions to real-world problems.', innovation],
        ['Tech Charades', 'A fun game where participants act out technical terms or concepts while others guess them.', charades],
        ['TechnoRhythm', 'A blend of technology and entertainment, featuring musical or dance performances with a tech theme.', rhythm],
        ['Tech Fest Honours', 'Closing ceremony where winners of different events are awarded and the festival concludes.', honours]
    ])

    const[remainingTime, setRemainingTime] = useState('');

//     useEffect(() => {

//     const calculateRemainingTime = () => {
 
//         const interval = setInterval(() => {

//         const targetDate = new Date(Date.UTC(2025, 2, 27, 10, 0, 0)).getTime();
//         const now = new Date().getTime();
//         const timeDiff = targetDate - now;

//         if (timeDiff <= 0){
//             clearInterval(interval);
//             return "00:00:00"
//         } 

//         const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
//         setRemainingTime(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);
//             }, 1000);

//     };
 
//     calculateRemainingTime();

// }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 text-gray-900">
            <nav className="bg-gradient-to-r from-blue-700 to-purple-700 p-4 text-white text-center font-bold text-xl shadow-md sticky top-0 left-0 z-10 w-full py-0.5 flex justify-between items-center">
                <img src={mseit} alt="MATS University" className="w-22 animate-fade-in" />
                <a 
                    href="https://mseit-techfest-2025-participate.netlify.app" 
                    className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-110" 
                    target="_blank" rel="noreferrer"
                >
                    Participate
                </a>
            </nav>

            <section
                className="relative text-center py-10 min-h-screen flex flex-col justify-around items-center animate-fade-in border inset-0 bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="animate-slide-in">
                    <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700 drop-shadow-lg">
                        TechFest 1.0 2025
                    </h1>
                    <p className="text-2xl text-blue-100 mt-4 drop-shadow-md">
                        MATS University | March 27-29, 2025 | 10:00 AM - 3:30 PM
                    </p>
                    <p 
                        className="text-4xl font-bold text-blue-200 mt-6 animate-pulse transition-transform transform-gpu"
                        style={{
                            animation: "pulse 1s infinite",
                        }}
                    >
                        {remainingTime}
                    </p>
                </div>

                <div className="w-full flex flex-wrap justify-center items-center gap-[100px] animate-fade-in">
                    <img src={logo} alt="MATS University" className="w-[200px] hover:scale-110 transition-transform" />
                    <img src={mseit} alt="MSEIT" className="w-[200px] hover:scale-110 transition-transform" />
                    <img src={innovationCouncil} alt="Innovation" className="w-[200px] hover:scale-110 transition-transform" />
                    <img src={naac} alt="NAAC Accredited" className="w-[200px] hover:scale-110 transition-transform" />
                </div>
            </section>

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-800 animate-slide-in">Convener</h2><br/>
                <div className="lg:w-1/3 sm:w-1/2 mx-auto bg-gradient-to-r from-blue-100 to-purple-200 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <img src={asha} alt="Director" className="rounded-full w-30 mx-auto border-4 border-blue-600" />
                    <p className="text-xl mt-2 font-semibold text-blue-900">Dr. Asha Ambhaikar</p>
                    <p className="text-blue-700 mt-2">Director, MSEIT</p>
                </div>
            </section>

            <FacultyCoordinators />
            <StudentCoordinators />

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-800 animate-slide-in">Schedule</h2>
                <div className="mt-4 space-y-6">
                    {days.map((day, i) => (
                        <div key={i} className="bg-gradient-to-r from-blue-100 to-purple-200 p-6 rounded-lg shadow-md hover:scale-105 transition-transform animate-fade-in">
                            <h3 className="font-bold text-xl text-blue-900">Day - {i+1} <br/> ( March {27 + i} , 2025 )</h3>
                            <br/>
                            <table className="w-full mt-2 border-collapse border border-blue-400">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                        <th className="border border-blue-400 p-2">Time</th>
                                        <th className="border border-blue-400 p-2">Activity</th>
                                        <th className="border border-blue-400 p-2">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {day.map((event, j) => (
                                        <tr key={j} className="odd:bg-blue-200 even:bg-purple-200">
                                            <td className="border border-blue-400 p-2">{event[0]}</td>
                                            <td className="border border-blue-400 p-2">{event[1]}</td>
                                            <td className="border border-blue-400 p-2">{event[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-blue-800 animate-slide-in">Event Descriptions</h2><br/>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, i) => (
                        <div key={i} className="bg-gradient-to-r from-blue-100 to-purple-200 p-6 rounded-lg shadow-md hover:scale-105 transition-transform animate-fade-in">
                            <img src={event[2]} alt={`event ${i + 1}`} className="w-full rounded-lg shadow-lg mb-4 hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-xl text-blue-900">{event[0]}</h3>
                            <p className="mt-2 text-blue-700">{event[1]}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div 
                className="fixed bottom-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => window.open("https://chanakya-das-sahu.netlify.app", "_blank")}
            >
                <img src={s1} alt="Chanakya Das Sahu" className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="text-sm font-semibold">Chanakya Das Sahu</span>
            </div>
            <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center p-4 mt-6 shadow-lg">
                &copy; 2025 MATS University. All Rights Reserved.
            </footer>
        </div>
    );
};

export default TechFest;
