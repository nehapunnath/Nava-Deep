import { 
  FaBook, 
  FaFlask, 
  FaLaptop, 
  FaFutbol, 
  FaMusic, 
  FaPalette,
  FaTree,
//   FaShield,
  FaUserFriends,
  FaHeart,
  FaUtensils,
  FaBus,
  FaMicroscope,
  FaDesktop,
  FaBasketballBall,
  FaTheaterMasks,
  FaChalkboardTeacher,
  FaSeedling,
  FaFirstAid,
  FaWater,
  FaWifi,
  FaShieldAlt
} from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      category: 'Academic Facilities',
      icon: <FaBook className="text-4xl" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          title: 'Smart Classrooms',
          description: 'Digitally equipped classrooms with interactive whiteboards, projectors, and audio-visual learning aids',
          icon: <FaChalkboardTeacher className="text-2xl" />,
          features: ['Interactive Whiteboards', 'Digital Projectors', 'Audio Systems', 'Comfortable Seating']
        },
        {
          title: 'Well-stocked Library',
          description: 'Spacious library with extensive collection of books, reference materials, and digital learning resources',
          icon: <FaBook className="text-2xl" />,
          features: ['5000+ Books', 'Reference Section', 'Digital Library', 'Reading Room']
        },
        {
          title: 'Science Laboratories',
          description: 'Fully equipped modern laboratories for Physics, Chemistry, and Biology with latest equipment',
          icon: <FaFlask className="text-2xl" />,
          features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Demo Equipment']
        },
        {
          title: 'Computer Labs',
          description: 'State-of-the-art computer laboratories with high-speed internet and latest software',
          icon: <FaLaptop className="text-2xl" />,
          features: ['40+ Computers', 'Internet Access', 'Programming Tools', 'Multimedia Lab']
        }
      ]
    },
    {
      category: 'Sports & Recreation',
      icon: <FaFutbol className="text-4xl" />,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          title: 'Sports Complex',
          description: 'Comprehensive sports infrastructure for indoor and outdoor sports activities',
          icon: <FaBasketballBall className="text-2xl" />,
          features: ['Basketball Court', 'Cricket Ground', 'Football Field', 'Athletics Track']
        },
        {
          title: 'Indoor Games',
          description: 'Dedicated spaces for indoor sports and recreational activities',
          icon: <FaUserFriends className="text-2xl" />,
          features: ['Chess Room', 'Carrom Boards', 'Table Tennis', 'Yoga Studio']
        },
        {
          title: 'Play Areas',
          description: 'Safe and well-maintained play areas for different age groups',
          icon: <FaTree className="text-2xl" />,
          features: ['Junior Playground', 'Swings & Slides', 'Sand Pit', 'Climbing Equipment']
        }
      ]
    },
    {
      category: 'Creative Arts',
      icon: <FaPalette className="text-4xl" />,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          title: 'Art & Craft Room',
          description: 'Creative space for artistic expression with various art supplies and materials',
          icon: <FaPalette className="text-2xl" />,
          features: ['Painting Station', 'Clay Modeling', 'Craft Materials', 'Display Area']
        },
        {
          title: 'Music Room',
          description: 'Sound-proof room equipped with musical instruments for practice and performances',
          icon: <FaMusic className="text-2xl" />,
          features: ['Keyboard/Piano', 'Guitars', 'Tabla', 'Sound System']
        },
        {
          title: 'Dance & Drama',
          description: 'Spacious hall for dance practice, drama rehearsals, and performances',
          icon: <FaTheaterMasks className="text-2xl" />,
          features: ['Mirrored Walls', 'Sound System', 'Stage Area', 'Costume Storage']
        }
      ]
    },
    {
      category: 'Infrastructure & Amenities',
      icon: <FaShieldAlt className="text-4xl" />,
      color: 'from-amber-500 to-orange-500',
      items: [
        {
          title: 'Safe & Secure Campus',
          description: 'Comprehensive security measures ensuring complete safety of all students',
          icon: <FaShieldAlt className="text-2xl" />,
          features: ['CCTV Surveillance', 'Security Personnel', 'Secure Entry/Exit', 'Emergency Protocols']
        },
        {
          title: 'Medical Room',
          description: 'Well-equipped medical facility with trained staff for immediate healthcare needs',
          icon: <FaFirstAid className="text-2xl" />,
          features: ['First Aid Kit', 'Trained Nurse', 'Emergency Care', 'Health Checkups']
        },
        {
          title: 'Drinking Water',
          description: 'RO purified drinking water facilities available throughout the campus',
          icon: <FaWater className="text-2xl" />,
          features: ['RO Purifiers', 'Water Coolers', 'Regular Testing', 'Multiple Locations']
        },
        {
          title: 'Wi-Fi Campus',
          description: 'High-speed internet connectivity across the campus for digital learning',
          icon: <FaWifi className="text-2xl" />,
          features: ['High-speed Internet', 'Secure Network', 'Digital Resources', 'Online Learning']
        }
      ]
    },
    {
      category: 'Special Facilities',
      icon: <FaHeart className="text-4xl" />,
      color: 'from-red-500 to-pink-500',
      items: [
        {
          title: 'Auditorium',
          description: 'Spacious auditorium for assemblies, performances, and special events',
          icon: <FaTheaterMasks className="text-2xl" />,
          features: ['300+ Capacity', 'Stage Lighting', 'Sound System', 'Audio-Visual Equipment']
        },
        {
          title: 'Cafeteria',
          description: 'Hygienic and nutritious food service providing healthy meals and snacks',
          icon: <FaUtensils className="text-2xl" />,
          features: ['Hygienic Kitchen', 'Nutritious Menu', 'Comfortable Seating', 'Quality Standards']
        },
        {
          title: 'Transportation',
          description: 'Safe and reliable school bus service covering major routes in the city',
          icon: <FaBus className="text-2xl" />,
          features: ['GPS Tracking', 'Trained Drivers', 'Attendants', 'Route Coverage']
        },
        {
          title: 'Green Campus',
          description: 'Eco-friendly campus with gardens, green spaces, and environmental initiatives',
          icon: <FaSeedling className="text-2xl" />,
          features: ['Gardens', 'Green Spaces', 'Waste Management', 'Environmental Club']
        }
      ]
    }
  ];

  const facilityHighlights = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Safe & Secure',
      description: '24/7 security with CCTV surveillance and emergency protocols'
    },
    {
      icon: <FaFlask className="text-3xl" />,
      title: 'Modern Labs',
      description: 'State-of-the-art laboratories for hands-on learning experience'
    },
    {
      icon: <FaFutbol className="text-3xl" />,
      title: 'Sports Excellence',
      description: 'Comprehensive sports facilities for holistic development'
    },
    {
      icon: <FaTree className="text-3xl" />,
      title: 'Green Environment',
      description: 'Eco-friendly campus promoting environmental awareness'
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Facilities</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl navigation-font text-gray-200 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art infrastructure designed to provide the best learning environment 
              and support holistic development of every student.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {facilityHighlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 navigation-font text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities Sections */}
      <div className="space-y-16 py-16 bg-gray-50">
        {facilities.map((category, categoryIndex) => (
          <section key={categoryIndex} className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                  {category.icon}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.items.map((facility, facilityIndex) => (
                <div 
                  key={facilityIndex}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {facility.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 school-font">
                          {facility.title}
                        </h3>
                        <p className="text-gray-600 navigation-font leading-relaxed text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 navigation-font uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs navigation-font border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Additional Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-500/20 text-blue-200 px-6 py-3 rounded-full text-sm navigation-font font-semibold border border-blue-400/30">
                Special Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 school-font">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Classrooms</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-300 max-w-3xl mx-auto">
              Additional features that make Nava Deep a nurturing and inspiring learning environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  <FaTree className="text-2xl" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 school-font">Eco-Friendly Campus</h3>
              <p className="text-gray-300 navigation-font text-sm">
                Green spaces, gardens, and environmental conservation initiatives
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-green-500/20 text-green-300 group-hover:scale-110 transition-transform duration-300">
                  <FaHeart className="text-2xl" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 school-font">Child-Friendly</h3>
              <p className="text-gray-300 navigation-font text-sm">
                Safe, colorful, and engaging spaces designed for young learners
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform duration-300">
                  <FaDesktop className="text-2xl" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 school-font">Digital Learning</h3>
              <p className="text-gray-300 navigation-font text-sm">
                Technology integration across all learning spaces and activities
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300 group-hover:scale-110 transition-transform duration-300">
                  <FaUserFriends className="text-2xl" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 school-font">Community Spaces</h3>
              <p className="text-gray-300 navigation-font text-sm">
                Areas for collaboration, social interaction, and community events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Infrastructure at a Glance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Campus <span className="text-amber-600">Infrastructure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 school-font mb-2">25+</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Smart Classrooms</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  Digitally equipped learning spaces
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 school-font mb-2">5</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Science Labs</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  Modern laboratories for practical learning
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 school-font mb-2">2</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Computer Labs</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  With 40+ computer systems
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <div className="text-4xl font-bold text-red-600 school-font mb-2">300+</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Auditorium Capacity</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  For events and performances
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <div className="text-4xl font-bold text-amber-600 school-font mb-2">5000+</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Library Books</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  Extensive collection of resources
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
                <div className="text-4xl font-bold text-teal-600 school-font mb-2">15+</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 navigation-font">Sports Facilities</h3>
                <p className="text-gray-600 navigation-font text-sm">
                  Indoor and outdoor activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;