import React, { useState, useEffect } from 'react';

// Main App Component for the Professional Portfolio Website
const App = () => {
  // State to manage the visibility and content of the PDF viewer modal
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  // Function to open the modal with the specified PDF URL
  const openPdfModal = (url) => {
    setPdfUrl(url);
    setShowPdfModal(true);
  };

  // Function to close the modal
  const closePdfModal = () => {
    setPdfUrl('');
    setShowPdfModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Data for the Portfolio ---
  const profile = {
    name: 'Dattatray Gejage',
    title: 'AI & Data Science Engineer · Python Developer . Software Engineer' ,
    // Corrected image path to the public folder
    photoUrl: '/img/datta.jpg',
    aboutMeImage: '/img/datta1.png',
    resumeUrl: '/pdf/Dattatrya Gejage_.pdf',
    aboutMe: 'I am a passionate AI & Data Science Engineer and Python Developer. My expertise lies in building intelligent systems and data-driven applications. I am a lifelong learner, dedicated to solving complex problems and creating impactful solutions.',
    contact: {
      email: 'dattatraygejage8@gmail.com',
      linkedin: 'linkedin.com/in/dattatryagejage',
      github: 'github.com/gejagedatta'
    }
  };

  // --- UPDATED SKILLS ARRAY ---
  const skills = [
    'Python', 'C/C++', 'PHP', 'HTML', 'CSS', 'JavaScript', 
    'React JS', 'Tailwind CSS', 'Django', 'Flask', 'Numpy', 'Pandas', 
    'Excel', 'Power Bi', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Data Science', 
    'Git', 'GitHub', 'Linux', 'Postman', 'Rest Apis', 'Canva', 'Figma', 
    'SQL (MySQL)'
  ];

  const timelineEvents = [
    {
      title: 'B.Tech (AI & Data Science)',
      description: 'DR.J.J.Magdum College of Engineering, Jaysingpur',
      date: '2022–2026',
      details: 'CGPA 8.44'
    },
    {
      title: 'Python Dev Intern',
      description: 'TechnoHack Edutake',
      date: 'June 2024',
      details: null
    },
    {
      title: 'AI Virtual Internship',
      description: 'TechSaksham',
      date: 'Feb–Mar 2025',
      details: null
    },
    {
      title: 'AI & Data Science Internship',
      description: 'BetterCode Technologies Pvt.Ltd.',
      date: 'Jul–Aug 2025',
      details: null
    },
  ];

  const projects = [
 
    {
      title: 'Dattatray Treasurer Portal',
      description: 'Automated departmental receipts & event management for student associations.',
      imageUrl: '/img/p3.png',
      videoUrl: 'https://www.linkedin.com/posts/dattatryagejage_proud-to-launch-a-solution-not-just-activity-7344346535175835648--T8c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAh4koB2u3vHv1Mu2jaynGhBKMbdm7uNQY' // Replace with your video URL
    },
    {
      title: 'AI Medical Diagnosis App',
      description: 'ML-powered prediction system; achieved 85% accuracy.',
      imageUrl: '/img/p4.png',
      videoUrl: '' // Replace with your video URL
    },
  ];

  const certificates = [
    {
      title: 'NumPy Mastery (Udemy)',
      pdfUrl: '/pdf/Numpy.pdf'
    },
    {
      title: 'Cyber Security (NIELIT)',
      pdfUrl: '/pdf/NIELIT.pdf'
    },
    {
      title: 'Databases and SQL for Data Science with Python By IBM (Coursera)',
      pdfUrl: '/pdf/Databases and SQL for Data Science IBM.pdf'
    },
    {
      title: 'AI For Everyone from DeepLearning.AI (Coursera)',
      pdfUrl: '/pdf/Coursera AI.pdf'
    },
    {
      title: 'Gen AI for Data Scientists (Coursera)',
      pdfUrl: '/pdf/Coursera Gen AI Data Scientists.pdf'
    },
    {
      title: 'Data Analysis in Python: Using Pandas DataFrames (Coursera)',
      pdfUrl: '/pdf/Data Analysis in Python Coursera.pdf'
    },
  
  ];

  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        .backdrop-blur-lg {
          backdrop-filter: blur(10px);
        }
        /* Fade-in animation for sections */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Hero image animation */
        @keyframes photoPop {
          0% { opacity: 0; transform: scale(0.8); }
          80% { opacity: 1; transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-photoPop {
          animation: photoPop 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        /* Skills and projects card animation */
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
            animation: scaleIn 0.5s ease-out forwards;
        }

        /* Pulse for background elements */
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
            animation: pulse 6s infinite ease-in-out;
        }
        /* About Me image animation */
        @keyframes slideInFromRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideInFromRight {
            animation: slideInFromRight 0.8s ease-out forwards;
        }
        .animate-float {
            animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Subtle animated VFX background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-tr from-blue-50 via-slate-100 to-cyan-100">
        <div className="absolute w-80 h-80 left-0 top-10 bg-blue-300/40 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 right-0 bottom-16 bg-cyan-200/40 blur-3xl rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm animate-fadeInUp">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-gray-800 tracking-wide hover:text-blue-600 transition duration-150">DG</a>
          
          {/* Mobile menu button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-blue-600 transition duration-150 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="#skills" className="text-gray-600 font-medium hover:text-blue-600 transition duration-150 relative group">
              Skills
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="text-gray-600 font-medium hover:text-blue-600 transition duration-150 relative group">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#certificates" className="text-gray-600 font-medium hover:text-blue-600 transition duration-150 relative group">
              Certificates
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-600 font-medium hover:text-blue-600 transition duration-150 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

        {/* Mobile navigation menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center py-4 space-y-3 bg-white/90">
            <a href="#skills" onClick={toggleMobileMenu} className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-150 py-2 w-full text-center">Skills</a>
            <a href="#projects" onClick={toggleMobileMenu} className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-150 py-2 w-full text-center">Projects</a>
            <a href="#certificates" onClick={toggleMobileMenu} className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-150 py-2 w-full text-center">Certificates</a>
            <a href="#contact" onClick={toggleMobileMenu} className="block text-gray-800 font-semibold hover:text-blue-600 transition duration-150 py-2 w-full text-center">Contact</a>
          </div>
        </div>
      </nav>
      {/* <br /> This was removed, as the 'pt-24' on the hero section is the correct fix */}

      {/* Hero Section */}
      {/* Set pt-24 (or similar) to push content below the fixed navbar */}
      <section id="hero" className="relative z-10 pt-24 flex flex-col items-center min-h-screen">
        <div className="rounded-full border-4 border-white shadow-lg overflow-hidden mb-6 bg-white animate-fadeInUp">
          <img
            src={profile.photoUrl}
            alt="Professional Photo"
            width="170" height="170"
            className="object-cover rounded-full w-[170px] h-[170px] transition-transform duration-500 ease-in-out hover:scale-105 shadow-xl animate-float"
            onError={(e) => { e.target.src = 'https://placehold.co/170x170/E5E7EB/4B5563?text=DG'; }}
          />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 animate-fadeInUp">{profile.name}</h1>
        <p className="mt-2 px-4 text-center text-base md:text-lg text-blue-700 tracking-wide animate-fadeInUp" style={{ animationDelay: '0.2s' }}>{profile.title}</p>

        <div className="z-10 relative mx-auto max-w-lg mt-10 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="shadow-xl rounded-2xl bg-white/80 ring-1 ring-blue-100 backdrop-blur-lg px-8 py-8 flex items-center gap-5 transition hover:scale-[1.01] animate-resumeIn">
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-cyan-300 shadow-lg animate-pulse-slow">
              <svg width="38" height="38" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="20" fill="url(#grad1)" />
                <path d="M16 28l5-5 5 5M21 17v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818cf8"/>
                    <stop offset="1" stopColor="#38bdf8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="text-gray-700 mb-3 text-lg font-medium">For my work and education details, download or view my resume:</div>
              
              <div className="flex flex-wrap gap-3">
  <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow transition-transform duration-150 hover:scale-105 hover:text-blue-100">View Resume</a>
  <a href={profile.resumeUrl} download className="inline-block px-5 py-2 font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-300 hover:bg-blue-200 transition">Download Resume</a>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 container mx-auto max-w-4xl animate-fadeInUp">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse min-h-[400px]">
            <div className="flex-shrink-0 mb-6 md:mb-0 animate-slideInFromRight h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden bg-yellow-200" style={{ animationDelay: '0.5s'}}>
                <img
                    src={profile.aboutMeImage}
                    alt="About Me"
                    className="object-contain w-full h-full rounded-xl shadow-lg animate-float"
                />
            </div>
            <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{profile.aboutMe}</p>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 container mx-auto max-w-4xl animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold shadow hover:bg-blue-200 transition animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 container mx-auto max-w-4xl animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 rounded-2xl border border-blue-100 shadow-xl p-6 transition-transform duration-300 hover:scale-[1.015] hover:shadow-2xl animate-scaleIn flex flex-col sm:flex-row gap-4" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-full sm:w-1/3 flex-shrink-0 rounded-lg overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg transition-transform duration-150 hover:scale-105 hover:text-blue-100">
                  View Demo (Video)
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-6 container mx-auto max-w-4xl animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white/80 rounded-2xl border border-blue-100 shadow-xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center animate-scaleIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{cert.title}</h3>
              <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-blue-500 transition duration-200">
                View PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section (Education & Experience) */}
      <section id="timeline" className="relative py-16 px-6 container mx-auto max-w-xl animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Timeline</h2>
        <ol className="relative border-l-4 border-blue-200 pl-8 space-y-8">
          {timelineEvents.map((event, index) => (
            <li key={index} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-10 border-4 border-white animate-pulse-slow"></div>
              <h3 className="font-bold text-lg text-blue-800">{event.title}</h3>
              <span className="text-sm text-gray-500">{event.description} ({event.date})</span>
              {event.details && <p className="text-blue-600 font-semibold mt-1">{event.details}</p>}
            </li>
          ))}
        </ol>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 px-6 bg-white overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 z-0 text-yellow-300/50">
          <svg className="w-full h-auto" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,160L48,160C96,160,192,160,288,170.7C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto max-w-lg z-10 relative bg-white/80 rounded-2xl shadow-xl border border-gray-100 p-8 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Get in Touch</h2>
          <div className="text-center text-gray-700 text-lg space-y-4">
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out to me through the channels below:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mt-6">
              <a href={`mailto:${profile.contact.email}`} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span>Email</span>
              </a>
              <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                <span>LinkedIn</span>
              </a>
              <a href={`https://${profile.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3S18.73.91 16.5 3c-2.6 0-3.9 4-3.9 4h-2.2c0 0-1.3-4-3.9-4a5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 5 12.33c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 12 21.13V25" /></svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <br/>
        <br/>
  
      </section>
      
 
       
      
      {/* PDF Viewer Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black opacity-70" onClick={closePdfModal}></div>
          <div className="bg-white w-full max-w-4xl h-[90vh] rounded-2xl shadow-lg z-10 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h4 className="text-xl font-bold text-gray-900">Document Viewer</h4>
              <button
                onClick={closePdfModal}
                className="text-gray-500 hover:text-gray-800 transition duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 p-4 overflow-hidden">
              <iframe
                src={pdfUrl}
                title="Document"
                className="w-full h-full border-0 rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
         {/* Footer */}
     {/* Footer */}
<footer className="text-center text-slate-500 py-6 mt-10 border-t border-gray-200">
        © {new Date().getFullYear()} Dattatray Gejage. All rights reserved.
      </footer> 

  {/* Back to top button */}
      <button 
        className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none"
        onClick={scrollTop}
        style={{ opacity: showScroll ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
        
    </div>
  );
};

export default App;
