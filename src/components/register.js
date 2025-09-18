import React, { useState, useEffect, useRef } from "react";
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom'; // ⬅️ Add this import

// ✅ Step 0: Type Selection
const TypeSelection = ({ onSelect, onBack }) => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 md:px-8">
      {/* Floating orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl animate-pulse-slow opacity-60"></div>
      <div className="absolute top-10 right-20 w-72 h-72 bg-sky-400/30 rounded-full blur-2xl animate-pulse-slow animation-delay-1000 opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-fuchsia-400/20 rounded-full blur-2xl animate-pulse-slow animation-delay-2000 opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl p-6 md:p-10 bg-black/40 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] drop-shadow-lg mb-8">
          Choose Registration Type
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          {/* Individual Registration */}
          <div className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#8A2BE2]/30 flex flex-col transition-transform duration-300 hover:scale-105 hover:border-[#8A2BE2]">
            <h2 className="text-2xl font-bold mb-4 text-[#8A2BE2]">Individual 👤</h2>
            <p className="text-white/80 mb-6 flex-grow">
              Compete on your own and showcase your solo skills.
            </p>
            <button
              onClick={() => onSelect("individual")}
              className="px-6 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-lg font-bold text-white hover:opacity-90 transition-all shadow-md group-hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Register Individually</span>
            </button>
          </div>

          {/* Create Team */}
          <div className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#8A2BE2]/30 flex flex-col transition-transform duration-300 hover:scale-105 hover:border-[#8A2BE2]">
            <h2 className="text-2xl font-bold mb-4 text-[#8A2BE2]">Create Team 🧑‍🤝‍🧑</h2>
            <p className="text-white/80 mb-4 flex-grow">
              Form your own team by entering a team name.
            </p>
            <button
              onClick={() => onSelect("create")}
              className="px-6 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-lg font-bold text-white hover:opacity-90 transition-all shadow-md group-hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Create Team</span>
            </button>
          </div>

          {/* Join Team */}
          <div className="group bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-[#8A2BE2]/30 flex flex-col md:col-span-2 transition-transform duration-300 hover:scale-105 hover:border-[#8A2BE2]">
            <h2 className="text-2xl font-bold mb-4 text-[#8A2BE2]">Join Team 🤝</h2>
            <p className="text-white/80 mb-4 flex-grow">
              Join an existing team by entering the team name.
            </p>
            <button
              onClick={() => onSelect("join")}
              className="px-6 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] rounded-lg font-bold text-white hover:opacity-90 transition-all shadow-md group-hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Join Team</span>
            </button>
          </div>
        </div>
          {/* ✅ Back Button */}
        <button
          onClick={onBack}
          className="mt-4 py-3 px-6 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
    
  );
};

// ✅ Step 1: Registration Form
const RegistrationForm = ({ type, formData, onChange, onTeamMemberChange, onAddMember, onSubmit, onBack }) => {
  const [error, setError] = useState("");

  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    // Email validation for team leader
    if (!formData.email.endsWith("@vitstudent.ac.in")) {
      setError("Please enter a valid VIT student email (@vitstudent.ac.in).");
      return;
    }

    // Create team member validation
    if (type === "create") {
      // The leader is the first member, so we count them as 1
      const totalMembers = 1 + formData.teamMembers.filter((m) => m.trim() !== "").length;
      if (totalMembers < 3 || totalMembers > 5) {
        setError(`A team must have between 3 and 5 members (including the team leader). You currently have ${totalMembers}.`);
        return;
      }
      for (let memberEmail of formData.teamMembers) {
        if (memberEmail.trim() !== "" && !memberEmail.endsWith("@vitstudent.ac.in")) {
          setError("All team members must have a valid VIT email (@vitstudent.ac.in).");
          return;
        }
      }
    }

    setError("");
    onSubmit(e);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-10 px-4">
      <div className="relative z-10 bg-black/40 backdrop-blur-lg rounded-3xl p-6 md:p-10 w-full max-w-2xl border border-white/20 shadow-2xl">
        <h1 className="text-3xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] mb-6 text-center">
          Registration Details
        </h1>

        <form onSubmit={handleSubmitWithValidation}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-white/80 mb-2 font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-white/10 border border-[#8A2BE2]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-white/80 mb-2 font-medium">VIT Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="your.name@vitstudent.ac.in"
              className="w-full px-4 py-3 bg-white/10 border border-[#8A2BE2]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
              required
            />
          </div>

          {/* Team Info */}
          {type === "create" && (
            <>
              <div className="mb-4">
                <label className="block text-white/80 mb-2 font-medium">Team Name *</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={onChange}
                  placeholder="Enter your team name"
                  className="w-full px-4 py-3 bg-white/10 border border-[#8A2BE2]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
                  required
                />
              </div>
              <p className="text-white/70 mb-4 text-sm">Add 2 to 4 team members (maximum 5 members in total, including you).</p>

              {formData.teamMembers.map((member, index) => (
                <div key={index} className="mb-3">
                  <label className="block text-white/80 mb-2 font-medium">Team Member {index + 1} Email</label>
                  <input
                    type="email"
                    value={member}
                    onChange={(e) => onTeamMemberChange(index, e.target.value)}
                    placeholder={`member${index + 1}@vitstudent.ac.in`}
                    className="w-full px-4 py-3 bg-white/10 border border-[#8A2BE2]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
                    required={index < 2} // Make the first two team members mandatory
                  />
                </div>
              ))}

              {formData.teamMembers.length < 4 && (
                <button type="button" onClick={onAddMember} className="text-[#8A2BE2] mt-2 hover:text-white transition-colors">
                  + Add Another Member
                </button>
              )}
            </>
          )}

          {type === "join" && (
            <div className="mb-4">
              <label className="block text-white/80 mb-2 font-medium">Team Name to Join *</label>
              <input
                type="text"
                name="teamToJoin"
                value={formData.teamToJoin}
                onChange={onChange}
                placeholder="Enter the exact team name"
                className="w-full px-4 py-3 bg-white/10 border border-[#8A2BE2]/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] transition-colors"
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-all"
            >
              Back
            </button>

            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] text-white font-bold rounded-lg hover:opacity-90 transition-all relative overflow-hidden group shadow-md hover:shadow-lg"
            >
              <span className="relative z-10">Complete Registration</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ✅ Step 2: Registration Dashboard
const RegistrationDashboard = ({ type, formData, onEdit, onBack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const confirmEdit = () => {
    onEdit();
    setShowModal(false);
  };

  const getStatusText = () => {
    switch (type) {
      case 'individual':
        return 'Solo Participant';
      case 'create':
        return 'Team Leader';
      case 'join':
        return 'Team Member';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-10 px-4">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bungee text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] drop-shadow-lg">
            Registration Dashboard
          </h1>
          <p className="text-white/80 mt-2 text-lg">
            Welcome to Hackovation 2025! Your registration is confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-8">
          {/* Registration Status Card */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-[#8A2BE2]/30 shadow-2xl flex flex-col">
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 rounded-full bg-[#8A2BE2] mr-2"></span>
              <h2 className="text-2xl font-bold text-white">Registration Status</h2>
              <div className="ml-auto flex items-center bg-[#8A2BE2]/20 text-[#8A2BE2] rounded-full px-3 py-1 text-sm font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                {getStatusText()}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-indigo-700 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A2BE2]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white text-lg font-medium">{formData.fullName}</span>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-700 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A2BE2]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-white/80">{formData.email}</span>
            </div>
          </div>

          {/* Event Information Card */}
          <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-[#8A2BE2]/30 shadow-2xl flex flex-col">
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 rounded-full bg-[#8A2BE2] mr-2"></span>
              <h2 className="text-2xl font-bold text-white">Event Information</h2>
            </div>
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-indigo-700 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A2BE2]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-medium">Hackovation 2025</span>
                <span className="text-white/70 text-sm">Under Gravitas • VIT</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-700 p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A2BE2]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-medium">36 Hours</span>
                <span className="text-white/70 text-sm">Continuous Hackathon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-[#8A2BE2]/30 shadow-2xl w-full mb-8">
          <div className="flex items-center mb-4">
            <span className="h-2 w-2 rounded-full bg-[#8A2BE2] mr-2"></span>
            <h2 className="text-2xl font-bold text-white">Actions</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button onClick={handleEditClick} className="flex-1 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-md relative overflow-hidden group">
              <span className="relative z-10">Edit Registration</span>
            </button>
            <button className="flex-1 py-3 bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-md relative overflow-hidden group">
              <span className="relative z-10">Contact Support</span>
            </button>
          </div>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Registration deadline: [To be announced]</li>
            <li>You can edit your registration details until the deadline</li>
            <li>Check your email for important updates</li>
            <li>Join our Discord for announcements and networking</li>
          </ul>
        </div>

        {/* Important Notes Section */}
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-6 border border-[#8A2BE2]/30 shadow-2xl w-full">
          <div className="flex items-center mb-4">
            <span className="h-2 w-2 rounded-full bg-[#8A2BE2] mr-2"></span>
            <h2 className="text-2xl font-bold text-white">Important Notes</h2>
          </div>
          <ul className="list-disc list-inside text-white/70 space-y-2">
            <li>Keep checking your VIT email for hackathon updates</li>
            <li>Bring your laptop, charger, and student ID</li>
            <li>Food and refreshments will be provided</li>
            <li>Follow the code of conduct during the event</li>
            <li>Have fun and code responsibly! 🚀</li>
          </ul>
        </div>

        <button
          onClick={onBack}
          className="mt-4 py-3 px-6 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
        >
          Back
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-black/70 rounded-xl p-6 border border-[#8A2BE2]/30 w-full max-w-sm">
              <h3 className="text-xl font-bold text-white mb-4">Confirm Edit</h3>
              <p className="text-white/80 mb-6">
                Are you sure you want to edit your registration? You will be taken back to the registration form.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmEdit}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ✅ Main Component
const HackovationRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [registrationType, setRegistrationType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    teamName: "",
    teamToJoin: "",
    // Initialize with a few empty strings for team members
    teamMembers: ["", ""],
  });

  const navigate = useNavigate(); // ⬅️ Add this line to use the hook

  const threeRef = useRef(null);

  useEffect(() => {
    if (!threeRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e021a); // Set a dark purple background
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Improved rendering quality
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the canvas to the div using the ref
    threeRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });

    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);

    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    function animate() {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.00005;

      particleMesh.rotation.y = time * 0.5;

      particleMesh.position.x = mouseX * 0.5;
      particleMesh.position.y = -mouseY * 0.5;

      renderer.render(scene, camera);
    }
    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    return () => {
      // Clean up on component unmount
      if (threeRef.current && renderer.domElement) {
        threeRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize, false);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTeamMemberChange = (index, value) => {
    const newTeamMembers = [...formData.teamMembers];
    newTeamMembers[index] = value;
    setFormData({
      ...formData,
      teamMembers: newTeamMembers,
    });
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 4) { // Allow adding up to 4 members, for a total of 5.
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, ""],
      });
    }
  };

  const handleTypeSelection = (type) => {
    setRegistrationType(type);
    setCurrentStep(1);
    // Reset form data for new type selection
    setFormData({
      fullName: "",
      email: "",
      teamName: "",
      teamToJoin: "",
      teamMembers: ["", ""], // Start with 2 empty fields
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleEditRegistration = () => {
    setCurrentStep(1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      // ⬅️ Navigate to the home page if on the first step
      navigate('/');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <TypeSelection onSelect={handleTypeSelection} onBack={handleBack} />;
      case 1:
        return (
          <RegistrationForm
            type={registrationType}
            formData={formData}
            onChange={handleInputChange}
            onTeamMemberChange={handleTeamMemberChange}
            onAddMember={addTeamMember}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <RegistrationDashboard
            type={registrationType}
            formData={formData}
            onEdit={handleEditRegistration}
            onBack={handleBack}
          />
        );
      default:
        return <TypeSelection onSelect={handleTypeSelection} onBack={handleBack} />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Container for the Three.js canvas */}
      <div ref={threeRef} className="fixed inset-0 z-0"></div>

      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        {renderStep()}
      </div>
      <style>
        {`
        .font-bungee {
          font-family: 'Bungee', cursive;
        }
        .text-transparent {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        `}
      </style>
    </div>
  );
};

export default HackovationRegistration;
