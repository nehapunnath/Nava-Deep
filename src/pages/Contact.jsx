import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaBus,
  FaSchool
} from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "School Address",
      details: [
        "1st Cross road, Gayathri layout,",
        "Basavanapura Main Road,",
        "K. R. Puram,",
        "Bangalore - 560036"
      ],
      color: "from-green-500 to-emerald-500",
      highlight: true
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone Numbers",
      details: [
        "+91-9886734812",
        "+91-7975375427"
      ],
      color: "from-blue-500 to-cyan-500",
      highlight: true
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 8:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      color: "from-amber-500 to-orange-500"
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
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Nava Deep</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl navigation-font text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have. 
              Reach out to us through any of the following channels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Contact Information
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us. We're always happy to hear from parents, students, and visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div 
                key={index} 
                className={`text-center group ${
                  contact.highlight ? 'transform hover:scale-105 transition-transform duration-300' : ''
                }`}
              >
                <div className={`bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border-2 ${
                  contact.highlight ? 'border-blue-300 shadow-2xl' : 'border-gray-200'
                } h-full relative overflow-hidden`}>
                  
                  {contact.highlight && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                      IMPORTANT
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${contact.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      contact.highlight ? 'ring-4 ring-blue-200' : ''
                    }`}>
                      {contact.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 school-font ${
                    contact.highlight ? 'text-blue-700 text-2xl' : 'text-gray-800'
                  }`}>
                    {contact.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {contact.details.map((detail, detailIndex) => (
                      <p 
                        key={detailIndex} 
                        className={`navigation-font text-sm leading-relaxed ${
                          contact.highlight 
                            ? 'text-blue-800 font-semibold text-base bg-blue-50 px-3 py-2 rounded-lg border border-blue-200'
                            : 'text-gray-600'
                        }`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map & Directions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm navigation-font font-semibold">
                Visit Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 school-font">
              Our <span className="text-green-600">Location</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-300">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <div className="bg-white rounded-2xl p-6 border border-blue-200 mb-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 school-font text-center">
                      📍 School Address
                    </h3>
                    <div className="text-center space-y-3">
                      <p className="text-blue-700 font-bold text-lg bg-blue-50 px-4 py-3 rounded-lg border-2 border-blue-300">
                        1st Cross road, Gayathri layout
                      </p>
                      <p className="text-blue-700 font-bold text-lg bg-blue-50 px-4 py-3 rounded-lg border-2 border-blue-300">
                        Basavanapura Main Road, K. R. Puram
                      </p>
                      <p className="text-blue-700 font-bold text-lg bg-blue-50 px-4 py-3 rounded-lg border-2 border-blue-300">
                        Bangalore - 560036
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FaBus className="text-green-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">By Bus</h4>
                        <p className="text-gray-600 text-sm">
                          Take any bus going towards K.R. Puram. Get down at Basavanapura bus stop. 
                          The school is located at 1st Cross road, Gayathri layout.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-red-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Landmarks</h4>
                        <p className="text-gray-600 text-sm">
                          Located in Gayathri layout, Basavanapura Main Road, K.R. Puram. 
                          Easily accessible from all major areas in East Bangalore.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 min-h-[400px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-white rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                      <FaMapMarkerAlt className="text-red-500 text-6xl mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-blue-800 mb-2 school-font">
                        Find Us on Map
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mb-4">
                        <p className="text-blue-700 font-semibold text-sm">
                          1st Cross road, Gayathri layout<br />
                          Basavanapura Main Road, K.R. Puram<br />
                          Bangalore - 560036
                        </p>
                      </div>
                      <a 
                        href="https://maps.google.com/?q=1st+Cross+road+Gayathri+layout+Basavanapura+Main+Road+K.R.+Puram+Bangalore+560036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <FaMapMarkerAlt />
                        <span>Open in Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm navigation-font font-semibold border border-blue-400/30">
                Quick Contact
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 school-font">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connect?</span>
            </h2>
            <p className="text-lg md:text-xl navigation-font text-gray-300 max-w-3xl mx-auto">
              Feel free to reach out to us during our working hours. We're here to assist you with admissions, 
              information, and any other queries you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                CALL NOW
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 school-font text-center">
                📞 Call Us Directly
              </h3>
              <div className="text-center space-y-4">
                <a 
                  href="tel:+91-9886734812"
                  className="block text-3xl font-bold text-cyan-300 hover:text-cyan-200 transition-colors duration-300 bg-cyan-900/30 py-4 rounded-2xl border-2 border-cyan-400/50 hover:border-cyan-300 hover:scale-105 transform transition-all duration-300"
                >
                  +91-9886734812
                </a>
                <a 
                  href="tel:+91-7975375427"
                  className="block text-3xl font-bold text-cyan-300 hover:text-cyan-200 transition-colors duration-300 bg-cyan-900/30 py-4 rounded-2xl border-2 border-cyan-400/50 hover:border-cyan-300 hover:scale-105 transform transition-all duration-300"
                >
                  +91-7975375427
                </a>
                <p className="text-cyan-200 text-sm mt-4 font-semibold">
                  Available during office hours for immediate assistance
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-400/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                VISIT US
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 school-font text-center">
                📍 Visit Our Campus
              </h3>
              <div className="text-center space-y-4">
                <div className="bg-green-900/30 py-4 rounded-2xl border-2 border-green-400/50">
                  <p className="text-green-300 font-bold text-lg">
                    1st Cross road, Gayathri layout
                  </p>
                  <p className="text-green-300 font-bold text-lg">
                    Basavanapura Main Road
                  </p>
                  <p className="text-green-300 font-bold text-lg">
                    K. R. Puram, Bangalore - 560036
                  </p>
                </div>
                <p className="text-green-200 text-sm font-semibold">
                  We welcome visitors during office hours. Please call ahead for appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;