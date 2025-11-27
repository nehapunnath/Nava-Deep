import { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSave, 
  FaTimes,
  FaCalendarAlt,
  FaImage,
  FaUpload,
  FaTimesCircle
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showUpcomingForm, setShowUpcomingForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingUpcomingEvent, setEditingUpcomingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    images: []
  });
  const [upcomingFormData, setUpcomingFormData] = useState({
    title: '',
    date: ''
  });
  const [uploading, setUploading] = useState(false);

  // Load events from localStorage on component mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('adminEvents');
    const savedUpcomingEvents = localStorage.getItem('adminUpcomingEvents');
    
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
    if (savedUpcomingEvents) {
      setUpcomingEvents(JSON.parse(savedUpcomingEvents));
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('adminEvents', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('adminUpcomingEvents', JSON.stringify(upcomingEvents));
  }, [upcomingEvents]);

  // Convert File object to base64 string
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    if (files.length + formData.images.length > 3) {
      alert('You can only upload up to 3 images');
      return;
    }

    setUploading(true);
    
    try {
      const base64Images = await Promise.all(
        files.map(file => fileToBase64(file))
      );

      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...base64Images]
      }));
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Error uploading images. Please try again.');
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset file input
    }
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpcomingInputChange = (e) => {
    const { name, value } = e.target;
    setUpcomingFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingEvent) {
      // Update existing event
      setEvents(prev => 
        prev.map(event => 
          event.id === editingEvent.id 
            ? { ...formData, id: editingEvent.id }
            : event
        )
      );
      setEditingEvent(null);
    } else {
      // Add new event
      const newEvent = {
        ...formData,
        id: Date.now()
      };
      setEvents(prev => [...prev, newEvent]);
    }
    
    resetForm();
    setShowEventForm(false);
  };

  const handleUpcomingSubmit = (e) => {
    e.preventDefault();
    
    if (editingUpcomingEvent) {
      // Update existing upcoming event
      setUpcomingEvents(prev => 
        prev.map(event => 
          event.id === editingUpcomingEvent.id 
            ? { ...upcomingFormData, id: editingUpcomingEvent.id }
            : event
        )
      );
      setEditingUpcomingEvent(null);
    } else {
      // Add new upcoming event
      const newEvent = {
        ...upcomingFormData,
        id: Date.now()
      };
      setUpcomingEvents(prev => [...prev, newEvent]);
    }
    
    resetUpcomingForm();
    setShowUpcomingForm(false);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      description: '',
      images: []
    });
  };

  const resetUpcomingForm = () => {
    setUpcomingFormData({
      title: '',
      date: ''
    });
  };

  const editEvent = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      description: event.description,
      images: event.images || []
    });
    setEditingEvent(event);
    setShowEventForm(true);
  };

  const editUpcomingEvent = (event) => {
    setUpcomingFormData({
      title: event.title,
      date: event.date
    });
    setEditingUpcomingEvent(event);
    setShowUpcomingForm(true);
  };

  const deleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(event => event.id !== eventId));
    }
  };

  const deleteUpcomingEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this upcoming event?')) {
      setUpcomingEvents(prev => prev.filter(event => event.id !== eventId));
    }
  };

  const cancelEdit = () => {
    setEditingEvent(null);
    setEditingUpcomingEvent(null);
    resetForm();
    resetUpcomingForm();
    setShowEventForm(false);
    setShowUpcomingForm(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 school-font">
              Admin <span className="text-blue-600">Events Management</span>
            </h1>
            <p className="text-lg text-gray-600 navigation-font max-w-2xl">
              Manage memorable events and upcoming events for Nava Deep School
            </p>
          </div>

          {/* Memorable Events Section */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
                Memorable Events
              </h2>
              <button
                onClick={() => {
                  resetForm();
                  setShowEventForm(true);
                  setEditingEvent(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 whitespace-nowrap"
              >
                <FaPlus />
                <span>Add Event</span>
              </button>
            </div>

            {/* Event Form */}
            {showEventForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 school-font">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Event Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter event title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Event Date *
                      </label>
                      <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="e.g., 15 January 2025"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                      Event Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                      placeholder="Enter event description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 navigation-font">
                      Event Images (Upload up to 3 images)
                    </label>
                    
                    {/* Image Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="image-upload"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading || formData.images.length >= 3}
                        className="hidden"
                      />
                      <label
                        htmlFor="image-upload"
                        className={`cursor-pointer flex flex-col items-center justify-center space-y-3 ${
                          (uploading || formData.images.length >= 3) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <FaUpload className="text-4xl text-gray-400" />
                        <div>
                          <p className="text-gray-600 font-semibold navigation-font">
                            {uploading ? 'Uploading...' : 'Click to upload images'}
                          </p>
                          <p className="text-gray-500 text-sm navigation-font mt-1">
                            PNG, JPG, JPEG up to 3 images (Max 5MB each)
                          </p>
                          <p className="text-blue-600 text-sm navigation-font mt-1">
                            {formData.images.length}/3 images selected
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Preview Uploaded Images */}
                    {formData.images.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3 navigation-font">
                          Uploaded Images:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {formData.images.map((image, index) => (
                            <div key={index} className="relative group">
                              <img 
                                src={image} 
                                alt={`Preview ${index + 1}`}
                                className="w-full h-32 object-cover rounded-xl shadow-md"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              >
                                <FaTimesCircle className="text-sm" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      type="submit"
                      disabled={uploading}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      {uploading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <FaSave />
                          <span>{editingEvent ? 'Update Event' : 'Save Event'}</span>
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      disabled={uploading}
                      className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      <FaTimes />
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Events List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    {event.images && event.images.length > 0 ? (
                      <img 
                        src={event.images[0]} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <FaImage className="text-gray-400 text-4xl" />
                      </div>
                    )}
                    {event.images && event.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-lg text-xs">
                        +{event.images.length - 1} more
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 school-font line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <FaCalendarAlt className="text-blue-500" />
                      <span className="font-medium text-sm">{event.date}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => editEvent(event)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {events.length === 0 && (
                <div className="col-span-3 text-center py-12 bg-white rounded-2xl shadow-lg">
                  <div className="text-gray-400 text-6xl mb-4">
                    <FaCalendarAlt className="inline" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No events added yet
                  </h3>
                  <p className="text-gray-500">
                    Click "Add Event" to create your first memorable event
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
                Upcoming Events
              </h2>
              <button
                onClick={() => {
                  resetUpcomingForm();
                  setShowUpcomingForm(true);
                  setEditingUpcomingEvent(null);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 whitespace-nowrap"
              >
                <FaPlus />
                <span>Add Upcoming Event</span>
              </button>
            </div>

            {/* Upcoming Event Form */}
            {showUpcomingForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 school-font">
                  {editingUpcomingEvent ? 'Edit Upcoming Event' : 'Add New Upcoming Event'}
                </h3>
                
                <form onSubmit={handleUpcomingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Event Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={upcomingFormData.title}
                        onChange={handleUpcomingInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter event title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Event Date *
                      </label>
                      <input
                        type="text"
                        name="date"
                        value={upcomingFormData.date}
                        onChange={handleUpcomingInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="e.g., 30 January 2025"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      <FaSave />
                      <span>{editingUpcomingEvent ? 'Update Event' : 'Save Event'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      <FaTimes />
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Upcoming Events List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex-1">
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
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editUpcomingEvent(event)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold transition-all duration-300"
                          title="Edit Event"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteUpcomingEvent(event.id)}
                          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl font-semibold transition-all duration-300"
                          title="Delete Event"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {upcomingEvents.length === 0 && (
                  <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                    <div className="text-gray-400 text-6xl mb-4">
                      <FaCalendarAlt className="inline" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No upcoming events added yet
                    </h3>
                    <p className="text-gray-500">
                      Click "Add Upcoming Event" to create your first upcoming event
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;