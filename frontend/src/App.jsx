import React, { useState } from "react";
import logo from './logo.png'
import naac from './naac.png'
import innovation from './innovation.png'
import mseit from './mseit.png'
import backgroundImage from './background.jpg'
import asha from './faculty_images/asha.jpg'
// import one from './faculty_images/.jpg'
import two from './faculty_images/dhapekar.jpg'
// import three from './faculty_images/.jpg'
import four from './faculty_images/bohidar.png'
import five from './faculty_images/khan.png'
import six from './faculty_images/kushwaha.jpeg'
import seven from './faculty_images/deshmukh.jpg'
const FacultyCoordinators = () => {

    const[faculties,setFaculties] = useState([
        ['Dr. Virendra Nayak',''],
        ['Dr. N. K. Dhapekar',two],
        ['Dr. Ghanshyam Shankar',''],
        ['Dr. Shailendra Bohidar',four],
        ['Dr. Zubair Ahmed Khan',five],
        ['Dr. Akash Deep Kushwaha',six],
        ['Dr. Shailesh Deshmukh',seven]
    ])

    return (
        <section className="py-6">
            <h2 className="text-center text-3xl font-semibold text-gray-800">Faculty Coordinators</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {faculties.map((faculty, i) => (
                    <div key={i} className="w-1/6 bg-gradient-to-r from-gray-200 to-gray-400 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <img src={faculty[1]} alt={`Faculty ${i + 1}`} className="rounded-full w-16 mx-auto border-2 border-purple-500" />
                        <p className="mt-2 font-semibold">{faculty[0]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const StudentCoordinators = () => {
    // const[students,setStudents] = useState([
    //     []
    // ])
    return (
        <section className="py-6">
            <h2 className="text-center text-3xl font-semibold text-gray-800">Student Coordinators</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1/6 bg-gradient-to-r from-gray-200 to-gray-400 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                        <img src={`student${i + 1}.jpg`} alt={`Student ${i + 1}`} className="rounded-full w-16 mx-auto border-2 border-purple-500" />
                        <p className="mt-2 font-semibold">Student {i + 1}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const TechFest = () => {

    const [days,setDays] = useState([
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
 
    const [eventDes,setEventDes] = useState([
        ['Lamp Lighting & Inauguration & Speech of HODs', 'The tech fest starts with a formal ceremony where dignitaries light a lamp to symbolize knowledge and progress. The Heads of Departments (HODs) will deliver speeches to motivate students and explain the importance of the event.'],
        ['Robo War', 'A competition where students build and control robots to battle against each other. The robot that remains functional the longest wins.'],
        ['Drone Racing', 'Participants fly drones through an obstacle course as fast as possible. The one who completes the course in the shortest time wins.'],
        ['CAD Design Competition', 'Students use Computer-Aided Design (CAD) software to create 3D models of structures, machines, or objects. Best design wins!'],
        ['Tech Treasure Hunt', 'A fun problem-solving game where participants follow clues to find hidden technical items or solutions across the campus.'],
        ['Bridge Design Challenge', 'Participants design and build small-scale bridges using materials like wood or cardboard. The strongest and most efficient design wins.'],
        ['Project Expo', 'Students showcase their technical projects, innovations, or research work to judges and visitors.'],
        ['Tech Quiz', 'A quiz competition covering various topics in technology, science, and engineering.'],
        ['Idea Pitching', 'Students present innovative ideas in front of a panel. The best and most feasible idea gets selected.'],
        ['Business Plan Competition', 'Participants create and present business models for startups or products. The best plan with market potential wins.'],
        ['Gaming & AI Challenge', 'A gaming competition featuring popular video games and AI-based problem-solving tasks.'],
        ['Coding Contest', 'A competitive programming event where students solve coding problems within a time limit.'],
        ['TED-X', 'Inspiring talks by speakers from different fields to share ideas and experiences.'],
        ['Innovation Challenge', 'A competition where participants come up with creative technological solutions to real-world problems.'],
        ['Tech Charades', 'A fun game where participants act out technical terms or concepts while others guess them.'],
        ['TechnoRhythm', 'A blend of technology and entertainment, featuring musical or dance performances with a tech theme.'],
        ['Tech Fest Honours', 'Closing ceremony where winners of different events are awarded and the festival concludes.']
    ])
    

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900">
            <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white text-center font-bold text-xl shadow-md sticky top-0 left-0 z-10 w-full py-0.5">
                <img src={logo} alt="MATS University" className="w-16 " />



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
            
       

                <div>
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">TechFest 1.0 2025</h1>
                <p className="text-2xl text-white mt-4">MATS University | March 27-29, 2025 | 10:00 AM - 3:30 PM</p>
               </div>

                <div className='w-full flex  justify-center items-center gap-[100px]'>
                    <img src={logo} alt="MATS University" className="w-[200px]" />
                    <img src={mseit} alt="MSEIT" className="w-[200px]" />
                    <img src={innovation} alt="Innovation" className="w-[200px]" />
                    <img src={naac} alt="NAAC Accredited" className="w-[200px]" />
                </div>

            </section>

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Director</h2>
                <div className="w-1/3 mx-auto bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <img src={asha} alt="Director" className="rounded-full w-32 mx-auto border-4 border-blue-500" />
                    <p className="text-xl mt-2 font-semibold">Dr. Asha Ambhaikar</p>
                </div>
            </section>

            <FacultyCoordinators />
            <StudentCoordinators />

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Schedule</h2>
                <div className="mt-4 space-y-6">
                    {days.map((day, i) => (
                        <div key={i} className="bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                            <h3 className="font-bold text-xl">{day} - March {10 + i}</h3>
                            <table className="w-full mt-2 border-collapse border border-gray-400">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                        <th className="border border-gray-400 p-2">Time</th>
                                        <th className="border border-gray-400 p-2">Activity</th>
                                        <th className="border border-gray-400 p-2">Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {day.map((event, j) => (
                                        <tr key={j} className="odd:bg-gray-200 even:bg-gray-300">
                                            <td className="border border-gray-400 p-2">{event[0]}</td>
                                            <td className="border border-gray-400 p-2">{event[1]}</td>
                                            <td className="border border-gray-400 p-2">{event[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Event Descriptions</h2>
                <div className="mt-4 space-y-6">
                    {eventDes.map((description, i) => (
                        <div key={i} className="bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                            <h3 className="font-bold text-xl">{description[0]}</h3>
                            <p className="mt-2 text-gray-700">{description[1]}</p>
                        </div>
                    ))}
                </div>
            </section>


            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center p-4 mt-6 shadow-lg">
                &copy; 2025 MATS University. All Rights Reserved.
            </footer>
        </div>
    );
};

export default TechFest;
