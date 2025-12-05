import { useState, useEffect } from 'react';
import { 
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
  FaSpinner
} from 'react-icons/fa';
import { fetchAllEvents, fetchUpcomingEvents } from '../services/EventApi'; 

const Events = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load real events from backend
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const [memorableRes, upcomingRes] = await Promise.all([
          fetchAllEvents(),
          fetchUpcomingEvents()
        ]);

        if (memorableRes.success) {
          // Sort by date (newest first) — optional
          const sortedEvents = memorableRes.events.sort((a, b) => {
            const dateA = new Date(a.date.split(' ').reverse().join('-'));
            const dateB = new Date(b.date.split(' ').reverse().join('-'));
            return dateB - dateA;
          });
          setEvents(sortedEvents);
        } else {
          console.error("Failed to load memorable events:", memorableRes.error);
        }

        if (upcomingRes.success) {
          setUpcomingEvents(upcomingRes.events);
        } else {
          console.error("Failed to load upcoming events:", upcomingRes.error);
        }
      } catch (err) {
        setError("Failed to load events. Please try again later.");
        console.error("Load events error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

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

  // Loading State
  if (loading) {
    return (
      <div className="pt-28 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-6xl text-blue-600 animate-spin mx-auto mb-6" />
          <p className="text-2xl text-gray-700 navigation-font">Loading Events...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="pt-28 min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-2xl text-red-600 font-bold mb-4">Oops!</p>
          <p className="text-gray-700">{error}</p>
        </div>
      </div>
    );
  }

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
            <div className="relative h-80 md:h-96 bg-gray-200 rounded-t-3xl overflow-hidden">
              <img 
                src={selectedEvent.images[currentSlide] || '/placeholder-event.jpg'} 
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm">
                <FaArrowLeft className="text-xl" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm">
                <FaArrowRight className="text-xl" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {selectedEvent.images?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>

              <button onClick={closeEventDetail} className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full backdrop-blur-sm">
                X
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 school-font">
                {selectedEvent.title}
              </h2>
              <div className="flex items-center space-x-3 text-gray-600 mb-6">
                <FaCalendarAlt className="text-blue-500 text-xl" />
                <span className="font-semibold text-gray-800">{selectedEvent.date}</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Memorable Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
              Past Events 2025
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4 mb-6 school-font">
              Our <span className="text-blue-600">Memorable Events 2025</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Relive the wonderful moments from our school events in 2025.
            </p>
          </div>

          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No memorable events yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {events.map((event) => (
                <div 
                  key={event.id}
                  onClick={() => openEventDetail(event)}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    {event.images?.[0] ? (
                      <img 
                        src={event.images[0]} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FaCalendarAlt className="text-6xl text-gray-400" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 school-font group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <FaCalendarAlt className="text-blue-500" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
              Coming Soon - 2025
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-4 mb-6 school-font">
              <span className="text-green-600">Upcoming Events 2025</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming events!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {upcomingEvents.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No upcoming events scheduled yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:border-green-300 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 school-font">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FaCalendarAlt className="text-green-500" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                      </div>
                      <div className="bg-green-500 text-white px-4 py-2 rounded-xl font-semibold">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;