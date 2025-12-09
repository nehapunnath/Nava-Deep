import { useState, useEffect } from 'react';
import { 
  FaGraduationCap, FaBook, FaUsers, FaTrophy, FaArrowLeft, FaArrowRight, 
  FaCalendarAlt, FaMapMarkerAlt, FaChalkboardTeacher, FaStar, FaAward, 
  FaUserGraduate, FaFlask, FaMusic, FaFutbol, FaPalette, FaQuoteLeft, 
  FaLightbulb, FaHistory, FaHeart, FaShieldAlt, FaBrain, FaHandsHelping,
  FaSeedling, FaRocket, FaGem, FaSpinner
} from 'react-icons/fa';
import { fetchCarousel, fetchGallery } from '../services/GalleryApi'; // Import API functions
import n1 from '../assets/n1.jpeg';
import n2 from '../assets/n2.jpeg';
import n3 from '../assets/n3.jpeg';
import n4 from '../assets/n4.jpeg';
import n5 from '../assets/n5.jpeg';
import n6 from '../assets/n6.jpeg';
import n7 from '../assets/n7.jpeg';
import n8 from '../assets/n8.jpeg';
import n9 from '../assets/n9.jpeg';
import n10 from '../assets/n10.jpeg';
import n11 from '../assets/n11.jpeg';
import n12 from '../assets/n12.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch carousel and gallery data on component mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch both carousel and gallery data in parallel
        const [carouselRes, galleryRes] = await Promise.all([
          fetchCarousel(),
          fetchGallery()
        ]);

        if (carouselRes.success) {
          setCarouselData(carouselRes.carousel || []);
        } else {
          console.error('Failed to load carousel:', carouselRes.error);
          setCarouselData(getDefaultCarousel()); // Fallback to default data
        }

        if (galleryRes.success) {
          setGalleryData(galleryRes.gallery || []);
        } else {
          console.error('Failed to load gallery:', galleryRes.error);
          setGalleryData(getDefaultGallery()); // Fallback to default images
        }
      } catch (err) {
        console.error('Network error:', err);
        setError('Failed to load gallery data. Please check your connection.');
        // Use fallback data
        setCarouselData(getDefaultCarousel());
        setGalleryData(getDefaultGallery());
      } finally {
        setLoading(false);
        setIsVisible(true);
      }
    };

    loadData();
  }, []);

  // Default carousel data in case API fails
  const getDefaultCarousel = () => [
    {
      id: 1,
      image: n3,
      title: "Welcome to Nava Deep School",
      subtitle: "Excellence in Education Since 1988",
      highlight: "Nurturing Tomorrow's Leaders Today",
      badge: "Premier Educational Institution",
      color: "blue"
    },
    {
      id: 2,
      image: n4,
      title: "Modern Learning Environment",
      subtitle: "State-of-the-art Facilities",
      highlight: "Innovative Teaching Methods",
      badge: "Future Ready Education",
      color: "green"
    },
    {
      id: 3,
      image: n2,
      title: "Holistic Development",
      subtitle: "Nurturing Future Leaders",
      highlight: "Academic & Co-curricular Excellence",
      badge: "All-Round Excellence",
      color: "purple"
    }
  ];

  // Default gallery images in case API fails
  const getDefaultGallery = () => [
    { id: 1, image: n6, title: "School Campus" },
    { id: 2, image: n7, title: "Student Activities" },
    { id: 3, image: n5, title: "Sports Events" },
    { id: 4, image: n8, title: "Science Lab" },
    { id: 5, image: n9, title: "Classroom" },
    { id: 6, image: n10, title: "Library" },
    { id: 7, image: n11, title: "Art Class" },
    { id: 8, image: n12, title: "Playground" }
  ];

  // Use carousel data from API or fallback
  const carouselImages = carouselData.length > 0 ? carouselData : getDefaultCarousel();

  // Use gallery data from API or fallback
  const galleryImages = galleryData.length > 0 ? galleryData : getDefaultGallery();

  const features = [
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Qualified Faculty",
      description: "Experienced and dedicated teaching staff committed to student success",
      stats: "50+ Certified Teachers",
      color: "from-blue-500 to-cyan-500",
      bgColor: "blue"
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: "Modern Curriculum",
      description: "CBSE curriculum enhanced with innovative teaching methodologies",
      stats: "Smart Digital Classes",
      color: "from-green-500 to-emerald-500",
      bgColor: "green"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Personal Attention",
      description: "Small class sizes ensuring individual focus and growth",
      stats: "25:1 Student Ratio",
      color: "from-purple-500 to-pink-500",
      bgColor: "purple"
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Sports & Arts",
      description: "Comprehensive co-curricular programs for holistic development",
      stats: "15+ Sports Disciplines",
      color: "from-amber-500 to-orange-500",
      bgColor: "amber"
    }
  ];

  const achievements = [
    { 
      icon: <FaAward className="text-2xl" />, 
      number: "100%", 
      text: "Board Results",
      subtitle: "Consistent Excellence",
      color: "from-yellow-400 to-amber-500"
    },
    { 
      icon: <FaUserGraduate className="text-2xl" />, 
      number: "2000+", 
      text: "Alumni Network",
      subtitle: "Global Community",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      icon: <FaChalkboardTeacher className="text-2xl" />, 
      number: "35+", 
      text: "Years Experience",
      subtitle: "Trusted Legacy",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: <FaStar className="text-2xl" />, 
      number: "50+", 
      text: "Awards Won",
      subtitle: "Recognized Excellence",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const programs = [
    {
      icon: <FaFlask className="text-3xl" />,
      title: "Science Labs",
      description: "Well-equipped laboratories for physics, chemistry, and biology with modern equipment and safety protocols",
      color: "blue"
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Performing Arts",
      description: "Music, dance, and drama programs to foster creative expression and artistic talent",
      color: "green"
    },
    {
      icon: <FaFutbol className="text-3xl" />,
      title: "Sports Academy",
      description: "Professional coaching in cricket, basketball, swimming, and athletics with modern facilities",
      color: "purple"
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Visual Arts",
      description: "Drawing, painting, and craft workshops for artistic development and creative thinking",
      color: "red"
    }
  ];

  const legacyHighlights = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "The New Light",
      description: "Nava Deep, meaning 'New Light', emerged as a ray of hope bringing strength to handle life's obstacles through education.",
      color: "amber"
    },
    {
      icon: <FaHistory className="text-3xl" />,
      title: "Humble Beginnings",
      description: "Started as Lovely Baby Care Center in a small rented property at Basavanapura Main Road.",
      color: "orange"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Visionary Founders",
      description: "Built on the vision of Mrs. Lovely Bheemaiah and Mr. Bheemaiah, supported by Founder Late Smt. C.G. Nanjamma.",
      color: "red"
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Growth & Expansion",
      description: "Transformed from a care center to a full-fledged educational institution with continuous growth.",
      color: "green"
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
  }, [carouselImages.length]);

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      blue: type === 'bg' ? 'from-blue-500 to-blue-700' : 
            type === 'text' ? 'text-blue-600' : 'border-blue-200',
      green: type === 'bg' ? 'from-green-500 to-green-700' : 
             type === 'text' ? 'text-green-600' : 'border-green-200',
      purple: type === 'bg' ? 'from-purple-500 to-purple-700' : 
              type === 'text' ? 'text-purple-600' : 'border-purple-200',
      amber: type === 'bg' ? 'from-amber-500 to-amber-700' : 
             type === 'text' ? 'text-amber-600' : 'border-amber-200',
      orange: type === 'bg' ? 'from-orange-500 to-orange-700' : 
              type === 'text' ? 'text-orange-600' : 'border-orange-200',
      red: type === 'bg' ? 'from-red-500 to-red-700' : 
           type === 'text' ? 'text-red-600' : 'border-red-200'
    };
    return colors[color] || colors.blue;
  };

  // Loading state
  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading gallery data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && carouselData.length === 0 && galleryData.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Content</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        {carouselImages.length > 0 ? (
          <>
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((slide, index) => (
                <div key={slide.id || index} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={slide.image} 
                    alt={slide.title || 'Carousel Slide'}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex items-center justify-center`}>
                    <div className="text-white text-center px-4 md:px-12 max-w-6xl">
                      {slide.badge && (
                        <div className="mb-8 flex justify-center">
                          <span className={`bg-${slide.color || 'blue'}-600/90 text-white px-8 py-4 rounded-full text-sm navigation-font tracking-widest uppercase border border-${slide.color || 'blue'}-400/50 backdrop-blur-sm animate-pulse`}>
                            {slide.badge}
                          </span>
                        </div>
                      )}
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 school-font leading-tight animate-fade-in-up">
                        {slide.title || 'Welcome to Nava Deep School'}
                      </h1>
                      <p className="text-xl md:text-2xl lg:text-3xl mb-8 navigation-font text-gray-200 animate-fade-in-up delay-200">
                        {slide.subtitle || 'Excellence in Education'}
                      </p>
                      {slide.highlight && (
                        <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in-up delay-400">
                          <div className="w-20 h-1 bg-gradient-to-r from-transparent to-white rounded-full"></div>
                          <p className="text-lg md:text-xl navigation-font text-white font-semibold bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                            {slide.highlight}
                          </p>
                          <div className="w-20 h-1 bg-gradient-to-l from-transparent to-white rounded-full"></div>
                        </div>
                      )}
                      <div className="flex justify-center space-x-8 animate-fade-in-up delay-600">
                        <div className="flex items-center space-x-3 text-gray-200 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                          <FaCalendarAlt className="text-blue-400 text-xl" />
                          <span className="navigation-font">Since 1988</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-200 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                          <FaMapMarkerAlt className="text-green-400 text-xl" />
                          <span className="navigation-font">Prime Location</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-200 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                          <FaChalkboardTeacher className="text-purple-400 text-xl" />
                          <span className="navigation-font">Expert Faculty</span>
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
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-white/30 shadow-2xl"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-white/30 shadow-2xl"
            >
              <FaArrowRight className="text-2xl" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white shadow-lg ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          // Fallback if no carousel data
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 school-font">Welcome to Nava Deep School</h1>
              <p className="text-xl md:text-2xl navigation-font">Excellence in Education Since 1988</p>
            </div>
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 school-font">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 navigation-font max-w-3xl mx-auto">
              Decades of excellence and countless success stories that make us proud
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-500 group"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:rotate-12`}>
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 school-font">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1 navigation-font">
                  {achievement.text}
                </div>
                <div className="text-sm text-gray-300 navigation-font">
                  {achievement.subtitle}
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
              {legacyHighlights.map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 school-font">{item.title}</h3>
                  <p className="text-gray-600 navigation-font">{item.description}</p>
                </div>
              ))}
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={n1}
                  alt="School Campus"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold school-font mb-1">35+</div>
                  <div className="text-xs navigation-font tracking-wide">Years of Excellence</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-5 rounded-2xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold school-font mb-1">100%</div>
                  <div className="text-xs navigation-font">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-sm navigation-font font-semibold shadow-lg">
                  About Our Institution
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 school-font leading-tight">
                Shaping Young Minds for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Brighter Future</span>
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
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="navigation-font text-sm text-gray-700">Safe Environment</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="navigation-font text-sm text-gray-700">Modern Facilities</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="navigation-font text-sm text-gray-700">Expert Faculty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm navigation-font font-semibold shadow-lg">
                Our Strengths
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 school-font">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Nava Deep?</span>
            </h2>
            <p className="text-xl text-gray-300 navigation-font max-w-3xl mx-auto">
              We provide a nurturing environment that fosters academic excellence, 
              character building, and overall personality development for every student.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-105 h-full">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 school-font text-center group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 navigation-font mb-6 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block bg-white/10 text-cyan-300 font-semibold navigation-font text-sm px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full text-sm navigation-font font-semibold shadow-lg">
                Special Programs
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 school-font">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Classroom Learning</span>
            </h2>
            <p className="text-xl text-gray-600 navigation-font max-w-3xl mx-auto">
              Our comprehensive programs ensure all-round development and exposure to diverse fields
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-4 border border-emerald-100 group-hover:border-emerald-200 h-full">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br from-${program.color}-100 to-${program.color}-50 group-hover:from-${program.color}-200 group-hover:to-${program.color}-100 transition-all duration-300`}>
                      {program.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 school-font text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 navigation-font leading-relaxed text-center">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 school-font">
              Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 navigation-font max-w-3xl mx-auto">
              Glimpses of life at Nava Deep School
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.slice(0, 8).map((image, index) => (
                <div key={image.id || index} className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image.image} 
                    alt={image.title || `Gallery Image ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            // Fallback gallery if no API data
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getDefaultGallery().slice(0, 8).map((image, index) => (
                <div key={image.id} className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={image.image} 
                    alt={image.title} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Show message if no gallery images */}
          {galleryImages.length === 0 && !loading && (
            <div className="text-center py-12">
              <FaImages className="text-6xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 navigation-font">No gallery images available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;