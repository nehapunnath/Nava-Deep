import { useState } from 'react';
import { 
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Annual Sports Day 2025",
      date: "15 January 2025",
      description: "A day filled with exciting sports competitions, track events, and team games. Students showcased their athletic talents and sportsmanship in various competitions including track events, team sports, and cultural performances.",
      images: [
        "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1536922246289-88c42f957773?w=500&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Science Exhibition 2025",
      date: "28 February 2025",
      description: "Students showcased their innovative science projects and experiments. The exhibition featured working models, research projects, and innovative solutions demonstrating scientific temper and creativity among our young scientists.",
      images: [
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1581093458791-8a6a5d836b8c?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Annual Day Celebration",
      date: "20 March 2025",
      description: "An evening of cultural extravaganza featuring dance, music, drama, and talent performances by our students. The event celebrated the spirit of Nava Deep with spectacular performances and award ceremonies.",
      images: [
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Art & Craft Exhibition",
      date: "15 April 2025",
      description: "Showcasing the creative talents of our students through various art forms including painting, sculpture, craft, and digital art. The exhibition featured live demonstrations and impressive artwork displays.",
      images: [
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Graduation Ceremony",
      date: "25 May 2025",
      description: "Celebrating the achievements of our graduating students as they embark on their next academic journey. A memorable farewell for Class 10 students with certificate distribution and cultural programs.",
      images: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1535981767287-4f5836c5d21d?w=500&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Community Service Day",
      date: "5 June 2025",
      description: "Students participated in community service activities, spreading joy and making a positive impact in the local community through neighborhood cleanup, tree plantation, and charity initiatives.",
      images: [
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&h=300&fit=crop"
      ]
    }
  ];

  const upcomingEvents = [
    {
      id: 7,
      title: "Inter-School Competition",
      date: "30 January 2025"
    },
    {
      id: 8,
      title: "Republic Day Celebration",
      date: "26 January 2025"
    },
    {
      id: 9,
      title: "Annual Sports Day",
      date: "15 February 2025"
    },
    {
      id: 10,
      title: "Science Exhibition",
      date: "28 March 2025"
    },
    {
      id: 11,
      title: "Annual Day Function",
      date: "20 April 2025"
    }
  ];

  const nextSlide = () => {
    if (selectedEvent) {
      setCurrentSlide((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedEvent) {
      setCurrentSlide((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const openEventDetail = (event) => {
    setSelectedEvent(event);
    setCurrentSlide(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeEventDetail = () => {
    setSelectedEvent(null);
    setCurrentSlide(0);
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
           
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 school-font">
              Nava Deep <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Events 2025</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl navigation-font text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Celebrating achievements, fostering talents, and creating memorable experiences 
              through various events and activities throughout the academic year 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Image Carousel */}
            <div className="relative h-80 md:h-96 bg-gray-200 rounded-t-3xl overflow-hidden">
              <img 
                src={selectedEvent.images[currentSlide]} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              
              {/* Carousel Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <FaArrowLeft className="text-xl" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <FaArrowRight className="text-xl" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {selectedEvent.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Close Button */}
              <button 
                onClick={closeEventDetail}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                ✕
              </button>
            </div>

            {/* Event Details */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 school-font">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center space-x-3 text-gray-600 mb-4">
                  <FaCalendarAlt className="text-blue-500 text-xl" />
                  <span className="font-semibold text-gray-800">{selectedEvent.date}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Past Events 2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Our <span className="text-blue-600">Memorable Events 2025</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Relive the wonderful moments from our school events in 2025 that celebrate learning, creativity, and community spirit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                onClick={() => openEventDetail(event)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.images[0]} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 school-font group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <FaCalendarAlt className="text-blue-500" />
                    <span className="font-medium">{event.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Coming Soon - 2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              <span className="text-green-600">Upcoming Events 2025</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming events at Nava Deep School in 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 school-font">
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FaCalendarAlt className="text-green-500" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;