import { useState, useEffect } from 'react';
import { FaGraduationCap, FaBook, FaUsers, FaTrophy, FaArrowLeft, FaArrowRight, FaPlayCircle, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaStar, FaAward, FaUserGraduate, FaChalkboardTeacher, FaFlask, FaMusic, FaFutbol, FaPalette, FaQuoteLeft, FaLightbulb, FaHistory, FaHeart } from 'react-icons/fa';
import n1 from '../assets/n1.jpeg'
import n2 from '../assets/n2.jpeg'
import n3 from '../assets/n3.jpeg'
import n4 from '../assets/n4.jpeg'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      id: 1,
      image: n3,
      title: "Welcome to Nava Deep School",
      subtitle: "Excellence in Education Since 1988",
      highlight: "Nurturing Tomorrow's Leaders Today"
    },
    {
      id: 2,
      image: n4,
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art Facilities",
      highlight: "Innovative Teaching Methods"
    },
    {
      id: 3,
      image: n2,
      title: "Holistic Development",
      subtitle: "Nurturing Future Leaders",
      highlight: "Academic & Co-curricular Excellence"
    }
  ];

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: "Qualified Faculty",
      description: "Experienced and dedicated teaching staff",
      stats: "50+ Teachers"
    },
    {
      icon: <FaBook className="text-4xl text-green-600" />,
      title: "Modern Curriculum",
      description: "CBSE curriculum with innovative teaching methods",
      stats: "Smart Classes"
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      title: "Personal Attention",
      description: "Small class sizes for individual focus",
      stats: "25:1 Ratio"
    },
    {
      icon: <FaTrophy className="text-4xl text-yellow-600" />,
      title: "Sports & Arts",
      description: "Comprehensive co-curricular activities",
      stats: "15+ Sports"
    }
  ];

  const achievements = [
    { icon: <FaAward />, number: "100%", text: "Board Results" },
    { icon: <FaUserGraduate />, number: "2000+", text: "Alumni Network" },
    { icon: <FaChalkboardTeacher />, number: "35+", text: "Years Experience" },
    { icon: <FaStar />, number: "50+", text: "Awards Won" }
  ];

  const programs = [
    {
      icon: <FaFlask className="text-3xl text-blue-500" />,
      title: "Science Labs",
      description: "Well-equipped laboratories for physics, chemistry, and biology with modern equipment"
    },
    {
      icon: <FaMusic className="text-3xl text-green-500" />,
      title: "Performing Arts",
      description: "Music, dance, and drama programs to foster creative expression"
    },
    {
      icon: <FaFutbol className="text-3xl text-purple-500" />,
      title: "Sports Academy",
      description: "Professional coaching in cricket, basketball, swimming, and athletics"
    },
    {
      icon: <FaPalette className="text-3xl text-red-500" />,
      title: "Visual Arts",
      description: "Drawing, painting, and craft workshops for artistic development"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex items-center justify-center">
                <div className="text-white text-center px-4 md:px-12 max-w-6xl">
                  <div className="mb-6 flex justify-center">
                    <span className="bg-blue-600/90 text-white px-6 py-3 rounded-full text-sm navigation-font tracking-wide uppercase">
                      Premier Educational Institution
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 school-font leading-tight animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 navigation-font text-gray-200 animate-fade-in-up delay-200">
                    {slide.subtitle}
                  </p>
                  <div className="flex justify-center items-center space-x-3 mb-8 animate-fade-in-up delay-400">
                    <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                    <p className="text-lg md:text-xl navigation-font text-blue-300 font-semibold">
                      {slide.highlight}
                    </p>
                    <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-center space-x-8 animate-fade-in-up delay-600">
                    <div className="flex items-center space-x-3 text-gray-200">
                      <FaCalendarAlt className="text-blue-400 text-xl" />
                      <span className="navigation-font text-lg">Since 1988</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-200">
                      <FaMapMarkerAlt className="text-green-400 text-xl" />
                      <span className="navigation-font text-lg">Prime Location</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-200">
                      <FaChalkboardTeacher className="text-purple-400 text-xl" />
                      <span className="navigation-font text-lg">Expert Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-white/30"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-white/30"
        >
          <FaArrowRight className="text-2xl" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-3xl text-yellow-300 bg-white/20 p-4 rounded-full">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold school-font mb-2">
                  {achievement.number}
                </div>
                <div className="navigation-font text-blue-100">
                  {achievement.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution of Nava Deep Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Our Legacy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 school-font">
              Evolution of <span className="text-amber-600">Nava Deep</span>
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex justify-center items-center space-x-4 text-amber-600">
                <FaQuoteLeft className="text-3xl opacity-50" />
                <p className="text-xl italic text-gray-700 navigation-font text-center">
                  "Education is the most powerful weapon which you can use to change the world"
                </p>
                <FaQuoteLeft className="text-3xl opacity-50 transform rotate-180" />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-amber-50 border border-amber-200">
                <div className="flex justify-center mb-4">
                  <FaLightbulb className="text-4xl text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">The New Light</h3>
                <p className="text-gray-600 navigation-font">
                  Nava Deep, meaning 'New Light', emerged as a ray of hope bringing strength to handle life's obstacles through education.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-200">
                <div className="flex justify-center mb-4">
                  <FaHistory className="text-4xl text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">Humble Beginnings</h3>
                <p className="text-gray-600 navigation-font">
                  Started as Lovely Baby Care Center in a small rented property at Basavanapura Main Road.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-red-50 border border-red-200">
                <div className="flex justify-center mb-4">
                  <FaHeart className="text-4xl text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">Visionary Founders</h3>
                <p className="text-gray-600 navigation-font">
                  Built on the vision of Mrs. Lovely Bheemaiah and Mr. Bheemaiah, supported by Founder Late Smt. C.G. Nanjamma.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 navigation-font leading-relaxed">
              <p className="text-lg mb-6">
                <span className="font-semibold text-amber-700">Nava Deep as the name rightly reflects, is the new light.</span> A ray of hope that brings immense strength to our self when each one of us are ravening to handle the obstacles of life. Education brings clarity to draft a vision that is hauled by the intricate mind.
              </p>

              <p className="text-lg mb-6">
                Those were the days when the field of education was so restrained and limited reach of schools to seek knowledge in and around the K.R. Puram vicinity laid restrictions for the young minds to enlighten themselves and equip themselves to prepare for the challenges of educated world.
              </p>

              <p className="text-lg mb-6">
                <span className="font-semibold text-amber-700">Nava Deep emerged with a broad vision by the stalwarts of education Mrs. Lovely Bheemaiah and Mr. Bheemaiah,</span> to bring education to the reach of children thereby not depending broadly on the schools farther the K.R. Puram vicinity.
              </p>

              <p className="text-lg mb-6">
                The brain child of Mrs. Lovely Bheemaiah grew wings with the support of <span className="font-semibold text-amber-700">Late Smt. C.G. Nanjamma, the founder of this great institution,</span> who will always be remembered for that one impeccable decision to live forever in this world by contributing to the field of education and make our students better prepared for the challenges of tomorrow.
              </p>

              <p className="text-lg mb-6">
                Nava Deep started with the small piece of land that was gifted by our Founder Late Smt. C.G. Nanjamma. But a mere piece of land to start with without any shelter would have been impossible. <span className="font-semibold text-amber-700">Nava Deep commenced its operation in a small rented property at Basavanapura Main road, then when it was named as Lovely baby care center.</span> That was strongly caressed and groomed by Mrs. Lovely Bheemaiah, who was popularly known as Lovely Miss by many children who even now remember this great visionary by that name.
              </p>

              <p className="text-lg mb-6">
                It was then when the time had come to extend its wings, a new transformation drew light to name the institution as Nava Deep in its own plot and over years Nava Deep grew stronger with its intent to extend the sections year after year. <span className="font-semibold text-amber-700">Since then, every year many naive minds get transformed into a splendid treasure</span> that builds a strong foundation for the growth of our country.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl border-l-4 border-amber-500">
                <p className="text-lg font-semibold text-amber-800 text-center school-font">
                  Our journey is an ongoing process. We customize our aims, methods, and teaching styles to meet global demands and challenges that a student has to face in everyday life with a genuine emphasis on values and awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={n1}
                alt="School Campus"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold school-font mb-2">35+</div>
                  <div className="text-sm navigation-font tracking-wide">Years of Excellence</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold school-font mb-1">100%</div>
                  <div className="text-xs navigation-font">Results</div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                  About Our Institution
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 school-font leading-tight">
                Shaping Young Minds for a <span className="text-blue-600">Brighter Future</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 navigation-font leading-relaxed">
                Established in 1988, Nava Deep School has been a beacon of excellence in education, 
                nurturing young minds to become responsible global citizens. Our commitment to 
                holistic development ensures every student reaches their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-8 navigation-font leading-relaxed">
                With state-of-the-art infrastructure, experienced faculty, and a curriculum that 
                balances academic excellence with co-curricular activities, we provide an 
                environment where students can thrive and excel in all aspects of life.
              </p>
              {/* <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300 navigation-font font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Discover Our Campus
                </button>
               
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Our Strengths
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 school-font">
              Why Choose <span className="text-blue-600">Nava Deep?</span>
            </h2>
            <p className="text-xl text-gray-600 navigation-font max-w-3xl mx-auto">
              We provide a nurturing environment that fosters academic excellence, 
              character building, and overall personality development for every student.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 school-font group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 navigation-font mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-blue-600 font-semibold navigation-font text-sm">
                    {feature.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Special Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 school-font">
              Beyond <span className="text-green-600">Classroom Learning</span>
            </h2>
            <p className="text-xl text-gray-600 navigation-font max-w-3xl mx-auto">
              Our comprehensive programs ensure all-round development and exposure to diverse fields
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 group-hover:from-green-100 group-hover:to-blue-100 transition-all duration-300">
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 school-font group-hover:text-green-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 navigation-font leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;