import React, { useState } from "react";
import clash1 from "../assets/clash1.png";
import clash2 from "../assets/clash2.png";
import clash3 from "../assets/clash3.png";

const Hackovation = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [registrationType, setRegistrationType] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState([""]);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: ""
  });
  const [registrationComplete, setRegistrationComplete] = useState(false);

  // Handle registration type selection
  const handleRegistrationType = (type) => {
    setRegistrationType(type);
    setCurrentPage("personal-info");
  };

  // Handle personal info form
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  // Validate VIT email
  const isValidVITEmail = (email) => {
    return email.endsWith("@vitstudent.ac.in");
  };

  // Handle team member addition
  const addTeamMember = () => {
    if (teamMembers.length < 4) { // Max 4 additional members (total 5 including you)
      setTeamMembers([...teamMembers, ""]);
    }
  };

  // Handle team member email change
  const handleTeamMemberChange = (index, value) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index] = value;
    setTeamMembers(newTeamMembers);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate personal info
    if (!personalInfo.fullName || !personalInfo.email) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (!isValidVITEmail(personalInfo.email)) {
      alert("Please enter a valid VIT email address");
      return;
    }
    
    // Validate team info if team registration
    if (registrationType === "team") {
      if (!teamName) {
        alert("Please enter a team name");
        return;
      }
      
      for (const member of teamMembers) {
        if (member && !isValidVITEmail(member)) {
          alert("Please enter valid VIT email addresses for all team members");
          return;
        }
      }
    }
    
    // If all validations pass
    setRegistrationComplete(true);
    setCurrentPage("dashboard");
  };

  // Reset registration to edit
  const handleEditRegistration = () => {
    setCurrentPage("personal-info");
  };

  // Render home page
  const renderHomePage = () => (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Floating orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      {/* Spark streaks */}
      <div className="absolute inset-0">
        <div className="w-[2px] h-full bg-pink-400/30 absolute left-1/4 animate-streak"></div>
        <div className="w-[2px] h-full bg-yellow-400/30 absolute left-1/2 animate-streak animation-delay-1000"></div>
        <div className="w-[2px] h-full bg-blue-400/30 absolute left-3/4 animate-streak animation-delay-2000"></div>
      </div>

      {/* Floating Clash Royale Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={clash1}
          alt="Character 1"
          className="absolute w-32 md:w-40 top-24 md:top-28 left-6 md:left-10 opacity-70 animate-float1"
        />
        <img
          src={clash2}
          alt="Character 2"
          className="absolute w-32 md:w-40 bottom-16 md:bottom-20 right-6 md:right-10 opacity-75 animate-float2"
        />
        <img
          src={clash3}
          alt="Character 3"
          className="absolute w-32 md:w-40 top-24 md:top-28 right-3 md:right-5 opacity-75 animate-float3"
        />
      </div>

      {/* Home content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-2xl mb-4 animate-fadeIn break-words">
          ⚔ Hackovation <br className="block md:hidden" /> 2.0
        </h1>
        <p className="text-white/90 text-base font-bold sm:text-lg md:text-xl mb-8 max-w-xl animate-fadeIn animation-delay-500">
          36 Hours of Coding, Creativity & Clash Royale Vibes! <br />
          Form your team, compete & conquer.
        </p>
        <button 
          onClick={() => setCurrentPage("registration-type")}
          className="px-8 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bungee rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn animation-delay-1000"
        >
          Register Now
        </button>
      </div>
    </section>
  );

  // Render registration type selection page
  const renderRegistrationTypePage = () => (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-10">
      {/* Background elements same as home */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 border border-purple-500/30 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 text-center">
          Choose Registration Type
        </h2>
        
        <div className="space-y-4 mb-6">
          <div 
            className={`p-4 rounded-xl cursor-pointer transition-all ${
              registrationType === "team" 
                ? "bg-gradient-to-r from-purple-700 to-pink-700 border-2 border-yellow-400" 
                : "bg-gray-800/70 hover:bg-gray-800 border border-gray-700"
            }`}
            onClick={() => setRegistrationType("team")}
          >
            <h3 className="font-bold text-white mb-2">Create Team</h3>
            <p className="text-gray-300 text-sm">Form your own team and lead the charge (3-5 members)</p>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => registrationType && handleRegistrationType(registrationType)}
            disabled={!registrationType}
            className={`px-6 py-2 rounded-full font-bold ${
              registrationType 
                ? "bg-gradient-to-r from-yellow-400 to-pink-500 text-white hover:scale-105 transition-transform" 
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );

  // Render personal information page
  const renderPersonalInfoPage = () => (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-10">
      {/* Background elements same as home */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 border border-purple-500/30 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 text-center">
          Registration Details
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-white font-bold mb-4">Personal Information</h3>
            
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={personalInfo.fullName}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-1">
                VIT Email *
              </label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              {personalInfo.email && !isValidVITEmail(personalInfo.email) && (
                <p className="text-red-400 text-xs mt-1">Please enter a valid VIT email address</p>
              )}
              <p className="text-gray-400 text-xs mt-1">Must be a valid VIT student email address</p>
            </div>
          </div>
          
          {registrationType === "team" && (
            <div className="mb-6">
              <h3 className="text-white font-bold mb-4">Team Information</h3>
              
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-1">
                  Team Name *
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentPage("registration-type")}
              className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              {registrationType === "team" ? "Add Team Members" : "Complete Registration"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  // Render team information page
  const renderTeamInfoPage = () => (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-10">
      {/* Background elements same as home */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 border border-purple-500/30 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 text-center">
          Team Information
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-1">
                Team Name *
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Team Members (VIT Emails)
              </label>
              <p className="text-gray-400 text-xs mb-3">Add team members by their VIT email addresses (max 5 total including you)</p>
              
              {teamMembers.map((member, index) => (
                <div key={index} className="mb-3">
                  <input
                    type="email"
                    value={member}
                    onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                    placeholder="teammate@vitstudent.ac.in"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {member && !isValidVITEmail(member) && (
                    <p className="text-red-400 text-xs mt-1">Please enter a valid VIT email address</p>
                  )}
                </div>
              ))}
              
              {teamMembers.length < 4 && (
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                >
                  <span className="mr-1">+</span> Add Member
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setCurrentPage("personal-info")}
              className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  // Render dashboard page
  const renderDashboardPage = () => (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-10">
      {/* Background elements same as home */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-yellow-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4 border border-purple-500/30 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-6 text-center">
          Registration Dashboard
        </h2>
        
        <p className="text-white text-center mb-8">
          Welcome to Hackovation 2025! Your registration is confirmed.
        </p>
        
        <div className="mb-8">
          <h3 className="text-white font-bold mb-4">Registration Status</h3>
          <ul className="bg-gray-800/50 rounded-lg p-4">
            <li className="text-white mb-2">
              <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2"></span>
              {personalInfo.fullName} ({personalInfo.email})
            </li>
            <li className="text-white">
              <span className="inline-block w-5 h-5 bg-green-500 rounded-full mr-2"></span>
              {registrationType === "team" ? `Team: ${teamName}` : "Solo Participant"}
            </li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-white font-bold mb-4">Event Information</h3>
          <ul className="bg-gray-800/50 rounded-lg p-4">
            <li className="text-white mb-2">Hackovation 2025</li>
            <li className="text-white mb-2">Under Gravitas - VIT</li>
            <li className="text-white">36 Hours Continuous Hackathon</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h3 className="text-white font-bold mb-4">Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEditRegistration}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:scale-105 transition-transform"
            >
              Edit Registration
            </button>
            <button className="px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4">Important Notes</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>• Registration deadline: To be announced</li>
            <li>• You can edit your registration details until the deadline</li>
            <li>• Check your email for important updates</li>
            <li>• Join our Discord for announcements and networking</li>
            <li>• Keep checking your VIT email for hackathon updates</li>
            <li>• Bring your laptop, charger, and student ID</li>
            <li>• Food and refreshments will be provided</li>
            <li>• Follow the code of conduct during the event</li>
            <li>• Have fun and code responsibly!</li>
          </ul>
        </div>
      </div>
    </section>
  );

  // Render the appropriate page based on current state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return renderHomePage();
      case "registration-type":
        return renderRegistrationTypePage();
      case "personal-info":
        return renderPersonalInfoPage();
      case "team-info":
        return renderTeamInfoPage();
      case "dashboard":
        return renderDashboardPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
      
      <style>
        {`
          @keyframes pulse-slow {
            0%,100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.3; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 10s ease-in-out infinite;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          @keyframes streak {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-streak {
            animation: streak 5s linear infinite;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          @keyframes float1 {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float1 {
            animation: float1 6s ease-in-out infinite;
          }
          @keyframes float2 {
            0%,100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(15px) translateX(10px); }
          }
          .animate-float2 {
            animation: float2 8s ease-in-out infinite;
          }
          @keyframes float3 {
            0%,100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(-15px); }
          }
          .animate-float3 {
            animation: float3 7s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Hackovation;