import { useState } from 'react';
import { FaBook, FaGraduationCap, FaFlask, FaUsers,FaLaptop, FaChartLine,FaStar,FaAward,FaUserGraduate,FaCalendarAlt,FaClipboardList,FaMicroscope,FaPalette,FaMusic,FaFutbol,FaChess,FaLanguage,FaCalculator,FaAtom,FaHistory,FaGlobeAmericas,FaSeedling,FaBrain,FaHandsHelping,FaBookOpen,FaDesktop,FaBasketballBall,FaTree,FaChalkboardTeacher} from 'react-icons/fa';

const Academics = () => {
  const academicLevels = [
    {
      id: 'primary',
      name: 'Primary School',
      grades: 'Classes 1-5',
      icon: <FaSeedling className="text-5xl" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      description: 'Building strong foundations through interactive and engaging learning methods',
      focus: [
        'Literacy and Numeracy Skills',
        'Environmental Studies',
        'Creative Arts & Crafts',
        'Physical Education',
        'Moral Science & Values',
        'Basic Computer Skills'
      ],
      highlights: [
        'Play-way learning methodology',
        'Activity-based curriculum',
        'Phonics and language development',
        'Mathematics through games',
        'Environmental awareness'
      ]
    },
    {
      id: 'middle',
      name: 'Middle School',
      grades: 'Classes 6-8',
      icon: <FaBrain className="text-5xl" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description: 'Developing critical thinking and analytical skills across diverse subjects',
      focus: [
        'Mathematics & Sciences',
        'Social Studies & History',
        'Languages (English, Hindi, Kannada)',
        'Computer Education',
        'Arts & Music',
        'Life Skills'
      ],
      highlights: [
        'Project-based learning',
        'Scientific temperament development',
        'Language proficiency enhancement',
        'Digital literacy skills',
        'Creative expression'
      ]
    },
    {
      id: 'secondary',
      name: 'Secondary School',
      grades: 'Classes 9-10',
      icon: <FaGraduationCap className="text-5xl" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      description: 'Preparing for board examinations with comprehensive subject knowledge and career orientation',
      focus: [
        'Science Stream (Physics, Chemistry, Biology)',
        'Mathematics & Computer Science',
        'Social Sciences',
        'Language & Literature',
        'Commerce Fundamentals',
        'IT Applications'
      ],
      highlights: [
        'Board exam preparation',
        'Career counseling sessions',
        'Competitive exam guidance',
        'Practical laboratory work',
        'Research project opportunities'
      ]
    }
  ];

  const curriculumFeatures = [
    {
      id: 'cbse',
      name: 'CBSE Curriculum',
      description: 'Following the Central Board of Secondary Education pattern with innovative teaching methodologies and global standards',
      features: [
        'Nationally recognized and standardized curriculum',
        'Continuous and Comprehensive Evaluation (CCE)',
        'Focus on conceptual understanding and application',
        'Regular updates with latest educational trends',
        'All-India standardized evaluation system'
      ],
      advantages: [
        'Easy migration across schools in India',
        'Strong foundation for competitive examinations',
        'Balanced approach to academics and co-curricular',
        'Digital learning integration and e-resources',
        'Holistic development focus'
      ]
    }
  ];

  const subjects = [
    {
      category: 'Languages',
      icon: <FaLanguage className="text-3xl" />,
      color: 'blue',
      items: ['English', 'Hindi', 'Kannada', 'Sanskrit', 'English Literature']
    },
    {
      category: 'Mathematics & IT',
      icon: <FaCalculator className="text-3xl" />,
      color: 'green',
      items: ['Mathematics', 'Advanced Mathematics', 'Computer Science', 'Information Technology', 'Data Handling']
    },
    {
      category: 'Sciences',
      icon: <FaAtom className="text-3xl" />,
      color: 'purple',
      items: ['Physics', 'Chemistry', 'Biology', 'Environmental Science', 'General Science']
    },
    {
      category: 'Humanities & Social Sciences',
      icon: <FaGlobeAmericas className="text-3xl" />,
      color: 'amber',
      items: ['History', 'Geography', 'Civics', 'Economics', 'Business Studies', 'Political Science']
    },
    {
      category: 'Creative & Performing Arts',
      icon: <FaPalette className="text-3xl" />,
      color: 'pink',
      items: ['Art Education', 'Music', 'Dance', 'Theatre', 'Craft', 'Drawing & Painting']
    },
    {
      category: 'Physical & Health Education',
      icon: <FaFutbol className="text-3xl" />,
      color: 'red',
      items: ['Sports', 'Yoga', 'Health Education', 'Physical Training', 'Games']
    }
  ];

  const teachingMethodology = [
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: 'Interactive Learning',
      description: 'Student-centered approach with group discussions, debates, collaborative projects, and peer learning sessions'
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: 'Technology Integration',
      description: 'Smart classrooms, digital resources, online learning platforms, and multimedia content for enhanced understanding'
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: 'Experiential Learning',
      description: 'Hands-on experiments, field trips, practical applications, and real-world problem solving approaches'
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Progressive Assessment',
      description: 'Regular evaluations, constructive feedback, improvement plans, and personalized learning paths'
    }
  ];

  const facilities = [
    {
      icon: <FaBookOpen className="text-4xl" />,
      title: 'Well-stocked Library',
      description: 'Extensive collection of books, reference materials, journals, periodicals, and digital learning resources with dedicated reading spaces',
      features: ['5000+ Books', 'Reference Section', 'Digital Library', 'Reading Room']
    },
    {
      icon: <FaMicroscope className="text-4xl" />,
      title: 'Science Laboratories',
      description: 'Fully equipped modern laboratories for Physics, Chemistry, and Biology with latest equipment and safety measures',
      features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Demo Room']
    },
    {
      icon: <FaDesktop className="text-4xl" />,
      title: 'Computer Labs',
      description: 'State-of-the-art computer laboratories with high-speed internet, latest software, and individual workstations',
      features: ['40+ Computers', 'Internet Access', 'Programming Tools', 'Multimedia Lab']
    },
    {
      icon: <FaBasketballBall className="text-4xl" />,
      title: 'Sports Facilities',
      description: 'Comprehensive sports infrastructure including indoor and outdoor facilities for various sports and physical activities',
      features: ['Basketball Court', 'Cricket Ground', 'Indoor Games', 'Yoga Studio']
    }
  ];

  const academicCalendar = [
    {
      term: 'First Term',
      period: 'April - September',
      icon: <FaTree className="text-3xl" />,
      events: [
        'Academic Year Commencement',
        'Unit Test I Assessments',
        'Annual Sports Day Celebration',
        'Mid-term Examinations',
        'Independence Day Events',
        'Teachers Day Celebration'
      ]
    },
    {
      term: 'Second Term',
      period: 'October - March',
      icon: <FaCalendarAlt className="text-3xl" />,
      events: [
        'Unit Test II Assessments',
        'Science Exhibition & Fair',
        'Annual Day Celebration',
        'Final Examinations',
        'Republic Day Events',
        'Annual Result Declaration'
      ]
    }
  ];

  const achievements = [
    {
      icon: <FaAward className="text-3xl" />,
      number: '100%',
      title: 'Board Results',
      description: 'Consistent outstanding performance in CBSE examinations'
    },
    {
      icon: <FaUserGraduate className="text-3xl" />,
      number: '95%+',
      title: 'First Class',
      description: 'Students achieving distinction in board exams'
    },
    {
      icon: <FaStar className="text-3xl" />,
      number: '50+',
      title: 'Scholarships',
      description: 'Merit scholarships awarded to deserving students'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      number: '35+',
      title: 'Years Excellence',
      description: 'Legacy of academic excellence since establishment'
    }
  ];

  const specialPrograms = [
    {
      title: 'Remedial Classes',
      description: 'Extra support for students needing additional help in specific subjects',
      benefits: ['Individual attention', 'Customized learning plans', 'Regular progress tracking']
    },
    {
      title: 'Enrichment Programs',
      description: 'Advanced learning opportunities for gifted and talented students',
      benefits: ['Advanced curriculum', 'Research projects', 'Competition preparation']
    },
    {
      title: 'Career Guidance',
      description: 'Comprehensive career counseling and stream selection assistance',
      benefits: ['Career assessment', 'Stream selection guidance', 'College preparation']
    }
  ];

  return (
    <div className="pt-28"> 
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 school-font">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Academics</span> at Nava Deep
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl navigation-font text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Nurturing young minds through comprehensive education, innovative teaching methods, 
              and a commitment to holistic development since 1988.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 school-font">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 navigation-font text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Levels - Sequential Display */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Academic Structure
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Our <span className="text-green-600">Academic Programs</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed for different age groups and learning needs
            </p>
          </div>

          {/* Sequential Academic Levels */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {academicLevels.map((level, index) => (
              <div 
                key={level.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-500 hover:shadow-xl"
              >
                <div className="md:flex items-stretch">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-center text-center">
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-2xl mb-6`}>
                      {level.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 school-font">
                      {level.name}
                    </h3>
                    <p className="text-blue-600 navigation-font font-semibold text-lg mb-4">
                      {level.grades}
                    </p>
                    <p className="text-gray-600 navigation-font leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4 school-font border-b pb-2">
                          Curriculum Focus
                        </h4>
                        <div className="space-y-3">
                          {level.focus.map((item, focusIndex) => (
                            <div key={focusIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} flex-shrink-0`}></div>
                              <span className="text-gray-700 navigation-font text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4 school-font border-b pb-2">
                          Key Highlights
                        </h4>
                        <div className="space-y-3">
                          {level.highlights.map((item, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${level.color} flex-shrink-0`}></div>
                              <span className="text-gray-700 navigation-font text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Curriculum
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              <span className="text-purple-600">CBSE Curriculum</span> Excellence
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Following the Central Board of Secondary Education pattern with innovative teaching methodologies
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 school-font">
                    CBSE Curriculum
                  </h3>
                  <p className="text-gray-700 navigation-font leading-relaxed mb-6">
                    {curriculumFeatures[0].description}
                  </p>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 school-font">Key Features</h4>
                  <div className="space-y-3">
                    {curriculumFeatures[0].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 navigation-font text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 school-font">Student Advantages</h4>
                  <div className="space-y-3">
                    {curriculumFeatures[0].advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 navigation-font text-sm">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Subjects
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Comprehensive <span className="text-blue-600">Subject Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Diverse range of subjects catering to different interests and career aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                <div className={`flex items-center space-x-3 mb-4 ${
                  category.color === 'blue' ? 'text-blue-500' :
                  category.color === 'green' ? 'text-green-500' :
                  category.color === 'purple' ? 'text-purple-500' :
                  category.color === 'amber' ? 'text-amber-500' :
                  category.color === 'pink' ? 'text-pink-500' : 'text-red-500'
                }`}>
                  {category.icon}
                  <h3 className="text-lg font-bold text-gray-800 school-font">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((subject, subIndex) => (
                    <div key={subIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        category.color === 'blue' ? 'bg-blue-500' :
                        category.color === 'green' ? 'bg-green-500' :
                        category.color === 'purple' ? 'bg-purple-500' :
                        category.color === 'amber' ? 'bg-amber-500' :
                        category.color === 'pink' ? 'bg-pink-500' : 'bg-red-500'
                      }`}></div>
                      <span className="text-gray-700 navigation-font text-sm">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Teaching Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Innovative <span className="text-amber-600">Teaching Methodology</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Modern pedagogical approaches that make learning engaging, effective, and enjoyable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachingMethodology.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-200 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-2xl bg-amber-100 text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 school-font">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 navigation-font leading-relaxed text-sm">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm navigation-font font-semibold border border-blue-400/30">
                Facilities
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 school-font">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Facilities</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-300 max-w-3xl mx-auto">
              State-of-the-art infrastructure supporting comprehensive learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-cyan-300 flex-shrink-0">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white school-font mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-gray-300 navigation-font leading-relaxed text-sm mb-3">
                      {facility.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {facility.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Special Programs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Additional <span className="text-green-600">Learning Support</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Specialized programs to cater to diverse learning needs and enhance academic performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">
                  {program.title}
                </h3>
                <p className="text-gray-600 navigation-font text-sm mb-4">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-gray-700 navigation-font text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Academic Schedule
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Academic <span className="text-red-600">Calendar</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Structured academic year with balanced distribution of learning and co-curricular activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {academicCalendar.map((term, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-2xl bg-red-100 text-red-600">
                      {term.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 school-font">{term.term}</h3>
                  <p className="text-red-600 navigation-font font-semibold">{term.period}</p>
                </div>
                <div className="space-y-3">
                  {term.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                      <span className="text-gray-700 navigation-font text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;