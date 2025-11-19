import { useState } from 'react';
import { FaQuoteLeft, FaHeart,FaUsers, FaGraduationCap,FaMapMarkerAlt,FaStar,FaHandshake,FaLightbulb,FaBullseye,FaEye,FaBrain,FaSeedling,FaRocket,FaShieldAlt} from 'react-icons/fa';
import founder1 from '../assets/founder1.jpeg';
import founder2 from '../assets/founder2.jpeg';
import founder3 from '../assets/founder3.jpeg';
import principal from '../assets/principal.jpeg';
import vicePrincipal from '../assets/viceprincipal.jpeg';
import n3 from '../assets/n3.jpeg';

const About = () => {
  const founders = [
    {
      id: 1,
      image: founder1,
      description: "A visionary educator who played a pivotal role in establishing Nava Deep's educational foundation and guiding its early growth.",
    },
    {
      id: 2,
      name: "Mrs. LOVELY BHEEMAIAH A ",
      image: founder2,
      description: "The heart and soul of Nava Deep, affectionately known as 'Lovely Miss' to generations of students. Her passion for education and child development shaped the institution's caring environment.",
    },
    {
      id: 3,
      image: founder3,
      description: "An instrumental figure in building the administrative framework and infrastructure that supported Nava Deep's expansion and development.",
    }
  ];

  const leadership = [
    {
      id: 1,
      name: "Sajan Bheemaiah.A.",
      role: "Principal",
      image: principal,
      experience: "25+ years in Education",
      message: `"Education is not just about acquiring knowledge; it's about building character, fostering creativity, and nurturing compassionate human beings. At Nava Deep, we strive to create an environment where every child discovers their unique potential and develops the confidence to face the world.

Our approach combines academic excellence with values-based education, ensuring that our students become not only successful professionals but also responsible citizens. The journey of education at Nava Deep is about lighting the lamp of knowledge that illuminates the path to a brighter future.

I am immensely proud of our dedicated faculty, supportive parents, and wonderful students who make Nava Deep a truly special place to learn and grow. Together, we are committed to providing an education that transforms lives and builds a better tomorrow."`,
      philosophy: "Holistic education that balances mind, body, and spirit",
      specialties: ["Curriculum Development", "Student Counseling", "Educational Innovation"]
    },
    {
      id: 2,
      name: "Devaki. M M",
      role: "Vice Principal",
      image: vicePrincipal,
      experience: "20+ years in Education",
      message: `"At Nava Deep, we believe that every child is unique and possesses immense potential waiting to be unlocked. Our mission is to provide a nurturing environment that encourages curiosity, critical thinking, and character development.

As Vice Principal, I am committed to ensuring that our academic programs are innovative and relevant, preparing students for the challenges of the 21st century. We focus on developing not just academic skills but also life skills that will serve our students well beyond the classroom.

The success of our alumni across various fields is a testament to the strong foundation they received at Nava Deep. We continue to evolve and adapt, ensuring that we provide the best possible education to shape the leaders of tomorrow. Our collaborative approach with parents and the community ensures that each student receives the support they need to thrive."`,
      philosophy: "Education should empower students to become lifelong learners",
      specialties: ["Academic Administration", "Sports Development", "Technology Integration"]
    }
  ];

  const missionVision = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <FaBullseye className="text-5xl" />,
      description: 'To provide a transformative educational experience that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      points: [
        'Deliver comprehensive education that balances academic rigor with co-curricular activities',
        'Foster a nurturing environment that encourages curiosity and critical thinking',
        'Instill strong moral values and social responsibility in every student',
        'Prepare students for the challenges and opportunities of the 21st century',
        'Develop lifelong learners who contribute positively to society'
      ]
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <FaEye className="text-5xl" />,
      description: 'To be a beacon of educational excellence that illuminates young minds, creating future leaders who will make a positive impact on the world.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      points: [
        'Create a learning ecosystem that inspires innovation and creativity',
        'Build a community of compassionate and confident individuals',
        'Establish global standards in education while preserving cultural values',
        'Nurture environmentally conscious and socially responsible citizens',
        'Be recognized as a premier institution for holistic development'
      ]
    },
    {
      id: 'philosophy',
      title: 'Our Philosophy',
      icon: <FaBrain className="text-5xl" />,
      description: 'Education is the light that dispels darkness. We believe in nurturing the whole child - mind, body, and spirit - to create balanced individuals ready to face life\'s challenges.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      points: [
        'Every child is unique and possesses innate potential',
        'Learning should be joyful, engaging, and meaningful',
        'Character building is as important as academic achievement',
        'Education should prepare students for life, not just examinations',
        'Collaboration between school, parents, and community is essential'
      ]
    }
  ];

  const values = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Excellence",
      description: "Commitment to highest standards of teaching and learning"
    },
    {
      icon: <FaHeart />,
      title: "Value-Based Education",
      description: "Developing character and ethical values in students"
    },
    {
      icon: <FaUsers />,
      title: "Holistic Development",
      description: "Nurturing physical, mental, and emotional growth"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Embracing new teaching methodologies and technologies"
    },
    {
      icon: <FaHandshake />,
      title: "Community Partnership",
      description: "Collaborating with parents and community for student success"
    },
    {
      icon: <FaStar />,
      title: "Excellence in Everything",
      description: "Striving for excellence in all aspects of education"
    }
  ];

  const educationalPillars = [
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Foundation Building",
      description: "Strong foundational knowledge in core subjects",
      color: "blue"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Skill Development",
      description: "21st century skills including critical thinking and communication",
      color: "green"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Character Formation",
      description: "Moral values, ethics, and social responsibility",
      color: "purple"
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Global Citizenship",
      description: "Awareness and responsibility towards global community",
      color: "amber"
    }
  ];

  return (
    <div className="pt-24"> 
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 min-h-[60vh] flex items-center"> 
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
          
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 school-font"> 
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Nava Deep</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl navigation-font text-gray-200 max-w-4xl mx-auto leading-relaxed"> 
              For over three decades, Nava Deep has been illuminating young minds with quality education, 
              shaping future leaders with values, knowledge, and character.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 bg-white"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Our Foundation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font"> 
              The <span className="text-amber-600">Visionaries</span> Behind Nava Deep
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto"> 
              Meet the extraordinary individuals whose vision and dedication brought Nava Deep to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12"> 
            {founders.map((founder) => (
              <div key={founder.id} className="text-center group">
                <div className="relative mb-4"> 
                  <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-amber-200 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"> {/* Slightly reduced image size */}
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 school-font">{founder.name}</h3> 
                <p className="text-gray-600 navigation-font mb-4 leading-relaxed text-sm md:text-base"> 
                  {founder.description}
                </p>
              </div>
            ))}
          </div>

          {/* Founding Story */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200"> 
            <div className="flex items-start space-x-4">
              <FaQuoteLeft className="text-amber-500 text-2xl mt-1 flex-shrink-0" /> 
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">The Birth of Nava Deep</h3> 
                <p className="text-gray-700 navigation-font leading-relaxed text-base md:text-lg"> 
                  Nava Deep, meaning 'New Light', was conceived as a beacon of hope and education in the K.R. Puram vicinity. 
                  What began as Lovely Baby Care Center in a small rented property has blossomed into a premier educational 
                  institution, touching thousands of young lives over the past 35 years.
                </p>
                <p className="text-gray-700 navigation-font leading-relaxed text-base md:text-lg mt-3"> 
                  The journey from a modest beginning to becoming a trusted name in education is a testament to the vision 
                  of our founders and the dedication of everyone associated with Nava Deep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font"> 
              Meet Our <span className="text-blue-600">Leadership Team</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto"> 
              Guided by experienced educators committed to academic excellence and student development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8"> 
            {leadership.map((leader) => (
              <div key={leader.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col">
                  <div className="p-6 bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center"> 
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4"> 
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 school-font text-center"> 
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 navigation-font font-semibold text-base mb-2 text-center"> 
                      {leader.role}
                    </p>
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs navigation-font font-semibold"> 
                      {leader.experience}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow"> 
                    <div className="mb-4"> 
                      <h4 className="text-base font-bold text-gray-800 mb-2 school-font">Educational Philosophy</h4> 
                      <p className="text-gray-600 navigation-font italic text-sm">
                        "{leader.philosophy}"
                      </p>
                    </div>

                    <div className="mb-4"> 
                      <h4 className="text-base font-bold text-gray-800 mb-2 school-font">Message</h4> 
                      <div className="text-gray-700 navigation-font leading-relaxed space-y-3 text-sm"> 
                        {leader.message.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-justify">{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy Section */}
      <section className="py-16 bg-white"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
            <div className="mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm navigation-font font-semibold">
                Our Guiding Principles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font"> 
              Mission, Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Philosophy</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto"> 
              The core principles that guide our educational approach and institutional direction
            </p>
          </div>

          {/* Mission, Vision & Philosophy in sequence */}
          <div className="space-y-8 max-w-6xl mx-auto"> 
            {missionVision.map((item) => (
              <div key={item.id} className={`rounded-3xl shadow-2xl overflow-hidden border ${item.bgColor}`}>
                <div className="md:flex items-stretch">
                  <div className="md:w-1/3 p-8 flex flex-col items-center justify-center text-center"> 
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-2xl mb-6`}> 
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 school-font"> 
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="md:w-2/3 p-8 bg-white"> 
                    <p className="text-lg text-gray-700 navigation-font leading-relaxed mb-6 text-justify">
                    </p>
                    <h4 className="text-xl font-bold text-gray-800 mb-4 school-font"> 
                      Key Focus Areas
                    </h4>
                    <div className="space-y-3"> 
                      {item.points.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3 group"> 
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div> {/* Reduced dot size */}
                          <p className="text-gray-700 navigation-font text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300"> {/* Adjusted font size */}
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Pillars Section */}
      <section className="py-16 bg-gray-50"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font"> 
              Pillars of <span className="text-green-600">Education</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto"> 
              The four foundational pillars that support our comprehensive educational framework
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> 
            {educationalPillars.map((pillar, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 h-full"> {/* Reduced padding */}
                  <div className={`flex justify-center mb-4 ${
                    pillar.color === 'blue' ? 'text-blue-500' :
                    pillar.color === 'green' ? 'text-green-500' :
                    pillar.color === 'purple' ? 'text-purple-500' : 'text-amber-500'
                  }`}>
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-white group-hover:scale-110 transition-transform duration-300"> 
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 school-font"> 
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 navigation-font leading-relaxed text-sm"> 
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 to-blue-900 text-white"> 
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"> 
            <div className="mb-4">
              <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm navigation-font font-semibold border border-purple-400/30">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 school-font"> 
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nava Deep</span> Ethos
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-300 max-w-3xl mx-auto"> 
              Core principles that guide our educational philosophy and daily practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 group" 
              >
                <div className="text-2xl text-yellow-300 mb-3 group-hover:scale-110 transition-transform duration-300"> 
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 school-font"> 
                  {value.title}
                </h3>
                <p className="text-gray-300 navigation-font leading-relaxed text-sm"> 
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Info Section */}
      <section className="py-16 bg-white"> 
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center"> 
            <div>
              <img 
                src={n3} 
                alt="Nava Deep School Campus"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="mb-4"> 
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                  Campus & Facilities
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 school-font"> 
                Our <span className="text-red-600">Learning Environment</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 navigation-font leading-relaxed"> 
                Nestled in the heart of K.R. Puram, Nava Deep School boasts a sprawling campus designed 
                to provide an ideal learning atmosphere. Our infrastructure supports both academic 
                excellence and co-curricular development.
              </p>
              
              <div className="space-y-3"> 
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl">
                  <FaMapMarkerAlt className="text-red-500 text-lg" /> 
                  <div>
                    <h4 className="font-semibold text-gray-800 navigation-font text-sm">Location</h4> 
                    <p className="text-gray-600 navigation-font text-sm">Basavanapura Main Road, K.R. Puram, Bangalore</p> 
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl">
                  <FaUsers className="text-blue-500 text-lg" /> 
                  <div>
                    <h4 className="font-semibold text-gray-800 navigation-font text-sm">Student Strength</h4> 
                    <p className="text-gray-600 navigation-font text-sm">2000+ students across primary and secondary levels</p> 
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl"> 
                  <FaGraduationCap className="text-green-500 text-lg" /> 
                  <div>
                    <h4 className="font-semibold text-gray-800 navigation-font text-sm">Faculty</h4> 
                    <p className="text-gray-600 navigation-font text-sm">50+ qualified and experienced teachers</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;