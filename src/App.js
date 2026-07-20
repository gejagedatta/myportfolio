import React, { useState, useEffect } from 'react';

// ======================================================
// Professional Portfolio Website
// Dattatrya Gejage
// Data Analyst | SQL Developer | Business Intelligence Analyst
// ======================================================

const App = () => { 

  // ==============================
  // State Management
  // ==============================

  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [showScroll, setShowScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ==============================
  // Scroll Button
  // ==============================

  const checkScrollTop = () => {

    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    }

    else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }

  };

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  useEffect(() => {

    window.addEventListener("scroll", checkScrollTop);

    return () => window.removeEventListener("scroll", checkScrollTop);

  }, []);

  // ==============================
  // PDF Viewer
  // ==============================

  const openPdfModal = (url) => {

    setPdfUrl(url);
    setShowPdfModal(true);

  };

  const closePdfModal = () => {

    setPdfUrl("");
    setShowPdfModal(false);

  };

  // ==============================
  // Mobile Navigation
  // ==============================

  const toggleMobileMenu = () => {

    setIsMobileMenuOpen(!isMobileMenuOpen);

  };

  // ======================================================
  // Profile Information
  // ======================================================

  const profile = {

    name: "Dattatrya Gejage",

    title: "Data Analyst • SQL Developer • Business Intelligence Analyst",

    photoUrl: "/img/datta.jpg",

    aboutMeImage: "/img/datta1.png",

    resumeUrl: "/pdf/Dattatrya_Gejage_Data_Analyst_Resume.pdf",

    aboutMe:

      "I am a B.Tech graduate in Artificial Intelligence & Data Science with practical experience in SQL, MySQL, Power BI, Python, Microsoft Excel, and Business Intelligence. I enjoy transforming raw business data into meaningful insights through ETL, data cleaning, data modeling, Power Query, and DAX. My Retail Intelligence Dashboard analyzes over 99K customer orders and ₹16.01 million in revenue using an end-to-end analytics workflow. I continuously strengthen my expertise in Data Analytics, Machine Learning, Deep Learning, and Generative AI by building practical projects focused on solving real business problems.",

    contact: {

      email: "dattatraygejage8@gmail.com",

      linkedin: "linkedin.com/in/dattatryagejage",

      github: "github.com/gejagedatta"

    }

  };
// ======================================================
// Skills
// ======================================================

const skills = [

'SQL',

'MySQL',

'PostgreSQL',

'Python',

'Power BI',

'DAX',

'Power Query',

'Microsoft Excel',

'Pandas',

'NumPy',

'Data Cleaning',

'Data Wrangling',

'Exploratory Data Analysis',

'Statistical Analysis',

'Data Visualization',

'Data Modeling',

'Business Intelligence',

'Dashboard Development',

'ETL',

'Machine Learning',

'Deep Learning',

'Generative AI',

'Scikit-Learn',

'Git',

'GitHub',

'Jupyter Notebook',

'Google Colab'

];

// ======================================================
// Education & Experience Timeline
// ======================================================

const timelineEvents = [

{
title:'B.Tech in Artificial Intelligence & Data Science',
description:'Dr. J. J. Magdum College of Engineering, Jaysingpur',
date:'2022 – 2026',
details:'CGPA : 8.53 / 10'
},

{
title:'Python Intern',
description:'TechnoHacks Solutions',
date:'Jun 2024 – Jul 2024',
details:null
},

{
title:'AI Virtual Intern',
description:'TechSaksham (Microsoft & SAP Initiative)',
date:'Feb 2025 – Mar 2025',
details:null
},

{
title:'AI & Data Science Intern',
description:'BetterCode Technologies Pvt. Ltd.',
date:'Jul 2025 – Aug 2025',
details:null
}

];

// ======================================================
// Projects
// ======================================================

const projects = [

{

title:'Retail Intelligence Dashboard',

description:
'Designed an end-to-end Business Intelligence solution using MySQL, SQL, Power BI, Power Query and DAX. Analysed 99K+ customer orders, 99K+ customers and ₹16.01 Million revenue through interactive KPI dashboards, revenue trends, customer insights and product performance analysis.',

imageUrl:'/img/retail_dashboard.png',

videoUrl:'https://github.com/gejagedatta/Retail-Intelligence-Dashboard'

},

{

title:'Customer Shopping Behavior Analysis',

description:
'Performed exploratory data analysis using Python, Pandas and SQL to identify customer purchasing patterns, segmentation and spending behaviour. Created insightful visualizations and business recommendations using Power BI.',

imageUrl:'/img/customer_analysis.png',

videoUrl:'https://github.com/gejagedatta'

},

{

title:'Sales Performance Analytics Dashboard',

description:
'Developed an interactive sales analytics dashboard using Power BI, DAX and Power Query to monitor revenue trends, average order value, top-performing product categories and customer purchasing behaviour.',

imageUrl:'/img/sales_dashboard.png',

videoUrl:'https://github.com/gejagedatta'

}

];

// ======================================================
// Certifications
// ======================================================

const certificates = [

{

title:'Database & SQL for Data Science with Python – IBM (Coursera)',

pdfUrl:'/pdf/Databases and SQL for Data Science IBM.pdf'

},

{

title:'Data Analysis in Python using Pandas DataFrames',

pdfUrl:'/pdf/Data Analysis in Python Coursera.pdf'

},

{

title:'Generative AI for Data Scientists – IBM',

pdfUrl:'/pdf/Coursera Gen AI Data Scientists.pdf'

},

{

title:'AI for Everyone – DeepLearning.AI',

pdfUrl:'/pdf/Coursera AI.pdf'

},

{

title:'Microsoft Excel Beginner to Advanced',

pdfUrl:'/pdf/Excel.pdf'

},

{

title:'Intermediate Python Programming',

pdfUrl:'/pdf/Intermediate Python.pdf'

},

{

title:'Deep Learning – IIT Ropar (NPTEL)',

pdfUrl:'/pdf/Deep Learning.pdf'

},

{

title:'Cyber Security Awareness – NIELIT',

pdfUrl:'/pdf/NIELIT.pdf'

}

];
{/* Hero Section */}

<section id="hero" className="relative z-10 pt-24 flex flex-col items-center min-h-screen">

  <div className="rounded-full border-4 border-white shadow-lg overflow-hidden mb-6 bg-white animate-fadeInUp">

    <img
      src={profile.photoUrl}
      alt="Professional Photo"
      width="170"
      height="170"
      className="object-cover rounded-full w-[170px] h-[170px] transition-transform duration-500 ease-in-out hover:scale-105 shadow-xl animate-float"
      onError={(e) => {
        e.target.src =
          "https://placehold.co/170x170/E5E7EB/4B5563?text=DG";
      }}
    />

  </div>

  <h1 className="text-4xl font-extrabold text-gray-800 animate-fadeInUp">

    {profile.name}

  </h1>

  <p
    className="mt-2 px-4 text-center text-base md:text-lg text-blue-700 tracking-wide animate-fadeInUp"
    style={{ animationDelay: "0.2s" }}
  >

    {profile.title}

  </p>

  <div
    className="z-10 relative mx-auto max-w-xl mt-10 animate-fadeInUp"
    style={{ animationDelay: "0.4s" }}
  >

    <div className="shadow-xl rounded-2xl bg-white/80 ring-1 ring-blue-100 backdrop-blur-lg px-8 py-8 flex items-center gap-5 transition hover:scale-[1.01]">

      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-200 to-cyan-300 shadow-lg animate-pulse-slow">

        <svg width="38" height="38" viewBox="0 0 44 44" fill="none">

          <circle cx="22" cy="22" r="20" fill="url(#grad1)" />

          <path
            d="M16 28l5-5 5 5M21 17v6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <defs>

            <linearGradient
              id="grad1"
              x1="0"
              y1="0"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >

              <stop stopColor="#818cf8" />

              <stop offset="1" stopColor="#38bdf8" />

            </linearGradient>

          </defs>

        </svg>

      </div>

      <div>

        <div className="text-gray-700 mb-3 text-lg font-medium">

          Explore my latest resume to view internships, analytics projects,
          certifications, technical skills, and hands-on Business Intelligence
          experience.

        </div>

        <div className="flex flex-wrap gap-3">

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow transition-transform duration-150 hover:scale-105 hover:text-blue-100"
          >

            View Resume

          </a>

          <a
            href={profile.resumeUrl}
            download
            className="inline-block px-5 py-2 font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-300 hover:bg-blue-200 transition"
          >

            Download Resume

          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* About Me Section */}

<section id="about" className="py-16 px-6 container mx-auto max-w-5xl animate-fadeInUp">

  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse">

    {/* Profile Image */}

    <div
      className="flex-shrink-0 mb-8 md:mb-0 animate-slideInFromRight h-[300px] w-[300px] md:h-[380px] md:w-[380px] rounded-full overflow-hidden"
      style={{ animationDelay: "0.5s" }}
    >

      <img
        src={profile.aboutMeImage}
        alt="About Me"
        className="object-contain w-full h-full rounded-xl shadow-lg animate-float"
      />

    </div>

    {/* About Content */}

    <div className="flex-1">

      <h2 className="text-3xl font-bold text-gray-900 mb-5">

        About Me

      </h2>

      <p className="text-lg text-gray-700 leading-8 text-justify">

        {profile.aboutMe}

      </p>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-5 mt-8">

        <div className="bg-blue-50 rounded-xl p-5 text-center shadow-sm border border-blue-100">

          <h3 className="text-3xl font-bold text-blue-700">

            99K+

          </h3>

          <p className="text-gray-600 font-medium mt-1">

            Orders Analysed

          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center shadow-sm border border-blue-100">

          <h3 className="text-3xl font-bold text-blue-700">

            ₹16.01M

          </h3>

          <p className="text-gray-600 font-medium mt-1">

            Revenue Analysed

          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center shadow-sm border border-blue-100">

          <h3 className="text-3xl font-bold text-blue-700">

            100K+

          </h3>

          <p className="text-gray-600 font-medium mt-1">

            Records Processed

          </p>

        </div>

        <div className="bg-blue-50 rounded-xl p-5 text-center shadow-sm border border-blue-100">

          <h3 className="text-3xl font-bold text-blue-700">

            3+

          </h3>

          <p className="text-gray-600 font-medium mt-1">

            Analytics Projects

          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Skills Section */}

<section
  id="skills"
  className="py-16 px-6 container mx-auto max-w-6xl animate-fadeInUp"
>

  <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">

    Technical Skills

  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Programming */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        Programming

      </h3>

      <div className="flex flex-wrap gap-2">

        {["Python","SQL"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

    {/* Databases */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        Databases

      </h3>

      <div className="flex flex-wrap gap-2">

        {["MySQL","PostgreSQL"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

    {/* Business Intelligence */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        Business Intelligence

      </h3>

      <div className="flex flex-wrap gap-2">

        {["Power BI","DAX","Power Query","Dashboard Development"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

    {/* Data Analysis */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        Data Analysis

      </h3>

      <div className="flex flex-wrap gap-2">

        {["Pandas","NumPy","EDA","Data Cleaning","Statistics","Data Modeling"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

    {/* Machine Learning */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        AI & Machine Learning

      </h3>

      <div className="flex flex-wrap gap-2">

        {["Machine Learning","Deep Learning","Generative AI","Scikit-Learn"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

    {/* Tools */}

    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-blue-700 mb-4">

        Tools

      </h3>

      <div className="flex flex-wrap gap-2">

        {["Excel","Git","GitHub","Jupyter Notebook","Google Colab"].map((skill,index)=>(

          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium"
          >

            {skill}

          </span>

        ))}

      </div>

    </div>

  </div>

</section>
{/* Projects Section */}

<section
  id="projects"
  className="py-16 px-6 container mx-auto max-w-6xl animate-fadeInUp"
>

  <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">

    Featured Projects

  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    {projects.map((project, index) => (

      <div
        key={index}
        className="bg-white rounded-2xl border border-blue-100 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
      >

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-52 object-cover"
        />

        <div className="p-6 flex flex-col flex-grow">

          <h3 className="text-2xl font-bold text-blue-800 mb-3">

            {project.title}

          </h3>

          <p className="text-gray-600 leading-7 flex-grow">

            {project.description}

          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-2 mt-5">

            {project.title === "Retail Intelligence Dashboard" && (
              <>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Power BI</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">MySQL</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">SQL</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">DAX</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Power Query</span>
              </>
            )}

            {project.title === "Customer Shopping Behavior Analysis" && (
              <>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Python</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Pandas</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">SQL</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Power BI</span>
              </>
            )}

            {project.title === "Sales Performance Analytics Dashboard" && (
              <>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Power BI</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Excel</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">DAX</span>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Power Query</span>
              </>
            )}

          </div>

          <div className="mt-6">

            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
            >

              View Project on GitHub

            </a>

          </div>

        </div>

      </div>

    ))}

  </div>

</section>
{/* Certificates Section */}

<section
  id="certificates"
  className="py-16 px-6 container mx-auto max-w-6xl animate-fadeInUp"
>

  <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">

    Certifications

  </h2>

  <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">

    Professional certifications completed in Data Analytics, SQL, Python,
    Power BI, Artificial Intelligence, Machine Learning, Deep Learning,
    Microsoft Excel, and Cyber Security.

  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {certificates.map((cert, index) => (

      <div
        key={index}
        className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 p-6 flex flex-col justify-between"
      >

        <div>

          <div className="flex justify-center mb-5">

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2A9 9 0 1112 3a9 9 0 019 9z"
                />

              </svg>

            </div>

          </div>

          <h3 className="text-lg font-bold text-center text-blue-800 leading-7">

            {cert.title}

          </h3>

        </div>

        <div className="mt-8">

          <a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
          >

            View Certificate

          </a>

        </div>

      </div>

    ))}

  </div>

</section>
{/* Timeline Section */}

<section
  id="timeline"
  className="relative py-16 px-6 container mx-auto max-w-5xl animate-fadeInUp"
>

  <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">

    Education & Experience

  </h2>

  <ol className="relative border-l-4 border-blue-200 pl-8 space-y-10">

    {timelineEvents.map((event, index) => (

      <li
        key={index}
        className="relative"
      >

        <div className="absolute w-5 h-5 bg-blue-600 rounded-full -left-[42px] border-4 border-white shadow"></div>

        <h3 className="text-xl font-bold text-blue-800">

          {event.title}

        </h3>

        <p className="text-gray-600">

          {event.description}

        </p>

        <p className="text-sm text-gray-500 mt-1">

          {event.date}

        </p>

        {event.details && (

          <p className="mt-2 text-blue-700 font-semibold">

            {event.details}

          </p>

        )}

      </li>

    ))}

  </ol>

</section>

{/* Contact */}

<section
  id="contact"
  className="py-16 px-6 bg-white"
>

  <div className="container mx-auto max-w-4xl">

    <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-10">

      <h2 className="text-3xl font-bold text-center text-blue-800 mb-5">

        Let's Connect

      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto leading-8">

        I am actively seeking opportunities as a Data Analyst,
        SQL Developer, Business Intelligence Analyst, MIS Executive,
        or Power BI Developer.

        Feel free to connect with me regarding internships,
        full-time opportunities, collaborations, or technical discussions.

      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {/* Email */}

        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-2xl border border-blue-100 shadow hover:shadow-xl transition p-6 text-center"
        >

          <h3 className="text-xl font-bold text-blue-700 mb-2">

            Email

          </h3>

          <p className="text-gray-600 break-all">

            {profile.contact.email}

          </p>

        </a>

        {/* LinkedIn */}

        <a
          href={`https://${profile.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-blue-100 shadow hover:shadow-xl transition p-6 text-center"
        >

          <h3 className="text-xl font-bold text-blue-700 mb-2">

            LinkedIn

          </h3>

          <p className="text-gray-600">

            View Profile

          </p>

        </a>

        {/* GitHub */}

        <a
          href={`https://${profile.contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-blue-100 shadow hover:shadow-xl transition p-6 text-center"
        >

          <h3 className="text-xl font-bold text-blue-700 mb-2">

            GitHub

          </h3>

          <p className="text-gray-600">

            View Repository

          </p>

        </a>

      </div>

    // </div>

</section>

{/* Footer */}

<footer className="bg-slate-900 text-white py-10 mt-12">

  <div className="container mx-auto text-center">

    <h2 className="text-2xl font-bold">

      Dattatrya Gejage

    </h2>

    <p className="mt-2 text-slate-300">

      Data Analyst • SQL Developer • Business Intelligence Analyst

    </p>

    <p className="mt-5 text-slate-400">

      SQL • Power BI • MySQL • Python • Excel • Machine Learning • Deep Learning • Generative AI

    </p>

    <p className="mt-8 text-sm text-slate-500">

      © {new Date().getFullYear()} Dattatrya Gejage.
      All Rights Reserved.

    </p>

  </div>

</footer>

{/* PDF Modal */}

{showPdfModal && (

<div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">

<div className="bg-white rounded-xl overflow-hidden w-11/12 h-[90vh]">

<div className="flex justify-between items-center px-6 py-4 border-b">

<h2 className="font-bold text-xl">

Resume Preview

</h2>

<button
onClick={closePdfModal}
className="text-2xl font-bold"
>

×

</button>

</div>

<iframe

src={pdfUrl}

title="Resume"

className="w-full h-full"

/>

</div>

</div>

)}

{/* Back To Top */}

<button

onClick={scrollTop}

style={{
opacity:showScroll?1:0
}}

className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"

>

↑

</button>

</div>

);

};

export default App;

