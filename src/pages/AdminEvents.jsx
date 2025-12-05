import { useState, useEffect } from 'react';
import { 
  FaPlus, FaEdit, FaTrash, FaSave, FaTimes,
  FaCalendarAlt, FaImage, FaUpload, FaTimesCircle
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import {
  fetchAllEvents, saveEvent, deleteEvent,
  fetchUpcomingEvents, saveUpcomingEvent, deleteUpcomingEvent
} from '../services/EventApi';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showUpcomingForm, setShowUpcomingForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingUpcomingEvent, setEditingUpcomingEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    images: [] // Will hold File objects (new) + string URLs (existing)
  });

  const [upcomingFormData, setUpcomingFormData] = useState({
    title: '',
    date: ''
  });

  // Load data from backend
  const loadData = async () => {
    setLoading(true);
    const [eventsRes, upcomingRes] = await Promise.all([
      fetchAllEvents(),
      fetchUpcomingEvents()
    ]);

    if (eventsRes.success) setEvents(eventsRes.events);
    if (upcomingRes.success) setUpcomingEvents(upcomingRes.events);

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = formData.images.filter(img => img instanceof File).length + files.length;

    if (totalImages > 3) {
      alert('You can only upload up to 3 images');
      return;
    }

    setFormData(prev => ({
      ...prev,
      images: [...prev.images.filter(img => !(img instanceof File)), ...files]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpcomingInputChange = (e) => {
    const { name, value } = e.target;
    setUpcomingFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit Memorable Event
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const result = await saveEvent(formData, editingEvent?.id || null);

    if (result.success) {
      await loadData(); // Refresh list
      setShowEventForm(false);
      resetForm();
      alert(editingEvent ? 'Event updated!' : 'Event added successfully!');
    } else {
      alert('Error: ' + result.error);
    }

    setSaving(false);
  };

  // Submit Upcoming Event
  const handleUpcomingSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const result = await saveUpcomingEvent(upcomingFormData, editingUpcomingEvent?.id || null);

    if (result.success) {
      await loadData();
      setShowUpcomingForm(false);
      resetUpcomingForm();
      alert(editingUpcomingEvent ? 'Updated!' : 'Upcoming event added!');
    } else {
      alert('Error: ' + result.error);
    }

    setSaving(false);
  };

  const resetForm = () => {
    setFormData({ title: '', date: '', description: '', images: [] });
    setEditingEvent(null);
  };

  const resetUpcomingForm = () => {
    setUpcomingFormData({ title: '', date: '' });
    setEditingUpcomingEvent(null);
  };

  const editEvent = (event) => {
    setFormData({
      title: event.title,
      date: event.date,
      description: event.description,
      images: event.images || [] // These are URLs (strings)
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

  const handleDeleteEvent = async (id) => {
    if (!window.confirm('Delete this event permanently?')) return;

    const result = await deleteEvent(id);
    if (result.success) {
      setEvents(prev => prev.filter(e => e.id !== id));
      alert('Event deleted');
    } else {
      alert('Error: ' + result.error);
    }
  };

  const handleDeleteUpcoming = async (id) => {
    if (!window.confirm('Delete this upcoming event?')) return;

    const result = await deleteUpcomingEvent(id);
    if (result.success) {
      setUpcomingEvents(prev => prev.filter(e => e.id !== id));
    } else {
      alert('Error: ' + result.error);
    }
  };

  const cancelForm = () => {
    resetForm();
    resetUpcomingForm();
    setShowEventForm(false);
    setShowUpcomingForm(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl text-gray-600">Loading events...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 lg:ml-0">
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 school-font">
              Admin <span className="text-blue-600">Events Management</span>
            </h1>
            <p className="text-lg text-gray-600 navigation-font max-w-2xl">
              Manage memorable events and upcoming events for Nava Deep School
            </p>
          </div>

          {/* Memorable Events */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
                Memorable Events
              </h2>
              <button
                onClick={() => { resetForm(); setShowEventForm(true); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <FaPlus /> Add Event
              </button>
            </div>

            {/* Form */}
            {showEventForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border">
                <h3 className="text-2xl font-bold mb-6 school-font">
                  {editingEvent ? 'Edit Event' : 'Add New Event'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Event Title *" required className="w-full px-4 py-3 border rounded-xl" />
                    <input type="text" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date (e.g. 15 Jan 2025) *" required className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" placeholder="Event Description *" required className="w-full px-4 py-3 border rounded-xl" />

                  <div>
                    <label className="block text-sm font-medium mb-3">Event Images (Max 3)</label>
                    <div className="border-2 border-dashed rounded-2xl p-8 text-center">
                      <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" id="img-input" />
                      <label htmlFor="img-input" className="cursor-pointer">
                        <FaUpload className="text-5xl text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-semibold">Click to upload</p>
                        <p className="text-sm text-gray-500">{formData.images.length}/3 selected</p>
                      </label>
                    </div>

                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {formData.images.map((img, i) => (
                          <div key={i} className="relative group">
                            <img
                              src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                              alt="preview"
                              className="w-full h-32 object-cover rounded-xl"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(i)}
                              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100"
                            >
                              <FaTimesCircle />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button type="submit" disabled={saving} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 disabled:opacity-50">
                      {saving ? 'Saving...' : <><FaSave /> {editingEvent ? 'Update' : 'Save'} Event</>}
                    </button>
                    <button type="button" onClick={cancelForm} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map(event => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 relative">
                    {event.images?.[0] ? (
                      <img src={event.images[0]} alt={event.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <FaImage className="text-6xl text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 school-font">{event.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
                      <FaCalendarAlt className="text-blue-500" /> {event.date}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{event.description}</p>
                    <div className="flex gap-2">
                      <button onClick={() => editEvent(event)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl flex justify-center gap-2">
                        <FaEdit /> Edit
                      </button>
                      <button onClick={() => handleDeleteEvent(event.id)} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl flex justify-center gap-2">
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold school-font">Upcoming Events</h2>
              <button onClick={() => { resetUpcomingForm(); setShowUpcomingForm(true); }} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                <FaPlus /> Add Upcoming
              </button>
            </div>

            {showUpcomingForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border">
                <form onSubmit={handleUpcomingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="title" value={upcomingFormData.title} onChange={handleUpcomingInputChange} placeholder="Title *" required className="w-full px-4 py-3 border rounded-xl" />
                    <input type="text" name="date" value={upcomingFormData.date} onChange={handleUpcomingInputChange} placeholder="Date *" required className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                  <div className="flex gap-4">
                    <button type="submit" disabled={saving} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                      {saving ? 'Saving...' : <><FaSave /> Save</>}
                    </button>
                    <button type="button" onClick={cancelForm} className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold school-font">{event.title}</h3>
                    <p className="text-gray-600 flex items-center gap-2 mt-2">
                      <FaCalendarAlt className="text-green-500" /> {event.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => editUpcomingEvent(event)} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteUpcoming(event.id)} className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;