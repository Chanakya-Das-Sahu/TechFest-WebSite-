// import React, { useState } from "react";

// const App = () => {
//   const [selectedActivity, setSelectedActivity] = useState(null);

//   const activityDescriptions = {
//     "Lamp Lighting & Inauguration HODs' Speech": `The tech fest starts with a formal ceremony where dignitaries light a lamp to symbolize knowledge and progress. The Heads of Departments (HODs) will deliver speeches to motivate students and explain the importance of the event.`,
//     "Robo War": `A competition where students build and control robots to battle against each other. The robot that remains functional the longest wins.`,
//     "Drone Racing": `Participants fly drones through an obstacle course as fast as possible. The one who completes the course in the shortest time wins.`,
//     "CAD Design Competition": `Students use Computer-Aided Design (CAD) software to create 3D models of structures, machines, or objects. Best design wins!`,
//     "Tech Treasure Hunt": `A fun problem-solving game where participants follow clues to find hidden technical items or solutions across the campus.`,
//     "Bridge Design Challenge": `Participants design and build small-scale bridges using materials like wood or cardboard. The strongest and most efficient design wins.`,
//     "Tech Quiz": `A quiz competition covering various topics in technology, science, and engineering.`,
//     "Project Expo": `Students showcase their technical projects, innovations, or research work to judges and visitors.`,
//     "Idea Pitching": `Students present innovative ideas in front of a panel. The best and most feasible idea gets selected.`,
//     "Business Plan Competition": `Participants create and present business models for startups or products. The best plan with market potential wins.`,
//     "Gaming & AI Challenge": `A gaming competition featuring popular video games and AI-based problem-solving tasks.`,
//     "Coding Contest": `A competitive programming event where students solve coding problems within a time limit.`,
//     "TED-X Talks": `Inspiring talks by speakers from different fields to share ideas and experiences.`,
//     "Innovation Challenge": `A competition where participants come up with creative technological solutions to real-world problems.`,
//     "Tech Charades": `A fun game where participants act out technical terms or concepts while others guess them.`,
//     "TechnoRhythm (Cultural Performances)": `A blend of technology and entertainment, featuring musical or dance performances with a tech theme.`,
//     "Tech Fest Honours & Closing Ceremony": `Closing ceremony where winners of different events are awarded and the festival concludes.`,
//   };

//   return (
//     <div>
//       {/* Schedule Section */}
//       <section className="bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100 py-8 shadow-lg">
//         <div className="container mx-auto">
//           <h2 className="text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
//             Tech Fest Schedule
//           </h2>
//           <div className="space-y-8">
//             {[
//               {
//                 day: "Day 1: Inauguration & Competitions",
//                 activities: [
//                   { time: "10:00 AM - 10:45 AM", activity: "Lamp Lighting & Inauguration HODs' Speech", location: "Main Auditorium" },
//                   { time: "10:45 AM - 11:30 AM", activity: "Robo War", location: "Open Ground" },
//                   { time: "11:30 AM - 12:15 PM", activity: "Drone Racing", location: "Open Ground" },
//                   { time: "1:00 PM - 1:45 PM", activity: "CAD Design Competition", location: "Lab" },
//                   { time: "1:45 PM - 2:30 PM", activity: "Tech Treasure Hunt", location: "Campus" },
//                 ],
//               },
//               {
//                 day: "Day 2: Creativity & Problem Solving",
//                 activities: [
//                   { time: "10:00 AM - 10:45 AM", activity: "Bridge Design Challenge", location: "Workshop" },
//                   { time: "10:45 AM - 11:30 AM", activity: "Tech Quiz", location: "Hall" },
//                   { time: "11:30 AM - 12:30 PM", activity: "Project Expo", location: "Expo Hall" },
//                   { time: "1:00 PM - 2:00 PM", activity: "Idea Pitching", location: "Seminar Room" },
//                   { time: "2:00 PM - 3:30 PM", activity: "Business Plan Competition", location: "Seminar Room" },
//                 ],
//               },
//               {
//                 day: "Day 3: Tech, Fun & Closing Ceremony",
//                 activities: [
//                   { time: "10:00 AM - 10:45 AM", activity: "Gaming & AI Challenge", location: "Lab" },
//                   { time: "10:45 AM - 11:30 AM", activity: "Coding Contest", location: "Gaming Zone" },
//                   { time: "11:30 AM - 12:30 PM", activity: "TED-X Talks", location: "Seminar Hall" },
//                   { time: "1:00 PM - 1:45 PM", activity: "Innovation Challenge", location: "Lab" },
//                   { time: "1:45 PM - 2:30 PM", activity: "Tech Charades", location: "Hall" },
//                   { time: "2:30 PM - 3:00 PM", activity: "TechnoRhythm (Cultural Performances)", location: "Main Stage" },
//                   { time: "3:00 PM - 3:30 PM", activity: "Tech Fest Honours & Closing Ceremony", location: "Auditorium" },
//                 ],
//               },
//             ].map((daySchedule, index) => (
//               <div key={index}>
//                 <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
//                   {daySchedule.day}
//                 </h3>
//                 <table className="w-full bg-white bg-opacity-90 shadow-md rounded-lg">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
//                       <th className="py-2 px-4">Time</th>
//                       <th className="py-2 px-4">Activity</th>
//                       <th className="py-2 px-4">Location</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {daySchedule.activities.map((activity, idx) => (
//                       <tr
//                         key={idx}
//                         className="border-b hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
//                         onClick={() => setSelectedActivity(activity.activity)}
//                       >
//                         <td className="py-2 px-4">{activity.time}</td>
//                         <td className="py-2 px-4">{activity.activity}</td>
//                         <td className="py-2 px-4">{activity.location}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ))}
//           </div>

//           {selectedActivity && (
//             <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
//               <h3 className="text-lg font-bold mb-2">Activity Description</h3>
//               <p className="text-gray-700">{activityDescriptions[selectedActivity]}</p>
//               <button
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={() => setSelectedActivity(null)}
//               >
//                 Close
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;



import React from "react";

const TechFest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900">
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white text-center font-bold text-xl shadow-md sticky top-0">TechFest Navbar</nav>

      <section className="text-center py-20 min-h-screen flex flex-col justify-center items-center animate-fade-in">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">TechFest 2025</h1>
        <p className="text-2xl text-gray-700 mt-4">MATS University | March 10-12, 2025 | 10:00 AM - 6:00 PM</p>
      </section>

      <section className="py-6 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Description of Activities</h2>
        <p className="text-lg mt-2 text-gray-700">TechFest 2025 will feature various engaging activities including:</p>
        <ul className="mt-4 text-gray-700 list-disc list-inside">
          <li>Workshops on cutting-edge technologies</li>
          <li>Competitive Coding Challenges</li>
          <li>Robotics and AI Exhibitions</li>
          <li>Startup Pitch Events</li>
          <li>Networking Sessions with Industry Experts</li>
          <li>Gaming Competitions</li>
          <li>Technical Quiz and Paper Presentations</li>
        </ul>
      </section>

      <section className="py-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Director</h2>
        <div className="w-1/3 mx-auto bg-gradient-to-r from-gray-100 to-gray-300 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
          <img src="/director.jpg" alt="Director" className="rounded-full w-32 mx-auto border-4 border-blue-500" />
          <p className="text-xl mt-2 font-semibold">Dr. John Doe</p>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800">Faculty & Student Coordinators</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-1/6 bg-gradient-to-r from-gray-200 to-gray-400 p-4 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <img src={`/coordinator${i + 1}.jpg`} alt={`Coordinator ${i + 1}`} className="rounded-full w-16 mx-auto border-2 border-purple-500" />
              <p className="mt-2 font-semibold">Coordinator {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Schedule</h2>
        <div className="mt-4 space-y-6">
          {["Day 1", "Day 2", "Day 3"].map((day, i) => (
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
                  {[
                    ["10:00 AM - 12:00 PM", "Workshop", "Hall A"],
                    ["12:30 PM - 02:30 PM", "Coding Competition", "Lab 1"],
                    ["03:00 PM - 05:00 PM", "Guest Lecture", "Auditorium"]
                  ].map((event, j) => (
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

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center p-4 mt-6 shadow-lg">
        &copy; 2025 MATS University. All Rights Reserved.
      </footer>
    </div>
  );
};

export default TechFest;
