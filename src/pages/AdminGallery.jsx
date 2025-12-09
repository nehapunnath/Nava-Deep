import { useState, useEffect } from 'react';
import { 
  FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage, 
  FaUpload, FaTimesCircle, FaSlidersH, FaImages 
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import {
  fetchCarousel, saveCarousel, deleteCarousel,
  fetchGallery, saveGallery, deleteGallery
} from '../services/GalleryApi'; 

const AdminGallery = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showCarouselForm, setShowCarouselForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editingCarousel, setEditingCarousel] = useState(null);
  const [editingGallery, setEditingGallery] = useState(null);
  const [errors, setErrors] = useState({});

  // Carousel form - removed color field
  const [carouselFormData, setCarouselFormData] = useState({
    title: '', subtitle: '', highlight: '', badge: '', image: null
  });

  // Gallery form - removed title and category fields, only needs image
  const [galleryFormData, setGalleryFormData] = useState({
    image: null
  });

  const MAX_CAROUSEL = 3;
  const MAX_GALLERY = 8;

  // Removed colorOptions since we don't need color field anymore

  // Validate Carousel Form
  const validateCarouselForm = () => {
    const newErrors = {};
    
    if (!carouselFormData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!carouselFormData.subtitle.trim()) {
      newErrors.subtitle = 'Subtitle is required';
    }
    if (!carouselFormData.highlight.trim()) {
      newErrors.highlight = 'Highlight text is required';
    }
    if (!carouselFormData.badge.trim()) {
      newErrors.badge = 'Badge text is required';
    }
    if (!editingCarousel && !carouselFormData.image) {
      newErrors.carouselImage = 'Image is required for new slides';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Gallery Form
  const validateGalleryForm = () => {
    const newErrors = {};
    
    // Only validate image for new gallery items
    if (!editingGallery && !galleryFormData.image) {
      newErrors.galleryImage = 'Image is required for new gallery items';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fetch data on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [carouselRes, galleryRes] = await Promise.all([
        fetchCarousel(),
        fetchGallery()
      ]);

      if (carouselRes.success) setCarouselImages(carouselRes.carousel || []);
      else alert('Failed to load carousel: ' + carouselRes.error);

      if (galleryRes.success) setGalleryImages(galleryRes.gallery || []);
      else alert('Failed to load gallery: ' + galleryRes.error);
    } catch (err) {
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  // Handle image selection (File object)
  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    if (type === 'carousel') {
      setCarouselFormData(prev => ({ ...prev, image: file }));
      setErrors(prev => ({ ...prev, carouselImage: '' }));
    } else {
      setGalleryFormData(prev => ({ ...prev, image: file }));
      setErrors(prev => ({ ...prev, galleryImage: '' }));
    }
    e.target.value = '';
  };

  // Remove image
  const removeImage = (type) => {
    if (type === 'carousel') {
      setCarouselFormData(prev => ({ ...prev, image: null }));
      setErrors(prev => ({ ...prev, carouselImage: '' }));
    } else {
      setGalleryFormData(prev => ({ ...prev, image: null }));
      setErrors(prev => ({ ...prev, galleryImage: '' }));
    }
  };

  // Submit Carousel
  const handleCarouselSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateCarouselForm()) {
      return;
    }

    setSaving(true);
    try {
      const result = await saveCarousel(carouselFormData, editingCarousel?.id);
      if (result.success) {
        await loadData(); // Refresh from server
        resetCarouselForm();
        setShowCarouselForm(false);
        setEditingCarousel(null);
        setErrors({});
        alert(editingCarousel ? 'Carousel updated!' : 'Carousel added!');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (err) {
      alert('Failed to save carousel');
    } finally {
      setSaving(false);
    }
  };

  // Submit Gallery
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateGalleryForm()) {
      return;
    }

    setSaving(true);
    try {
      // For gallery, we only send the image
      const result = await saveGallery(galleryFormData, editingGallery?.id);
      if (result.success) {
        await loadData();
        resetGalleryForm();
        setShowGalleryForm(false);
        setEditingGallery(null);
        setErrors({});
        alert(editingGallery ? 'Gallery image updated!' : 'Gallery image added!');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (err) {
      alert('Failed to save gallery image');
    } finally {
      setSaving(false);
    }
  };

  // Delete Carousel
  const handleDeleteCarousel = async (id) => {
    if (!window.confirm('Delete this carousel slide?')) return;

    const result = await deleteCarousel(id);
    if (result.success) {
      setCarouselImages(prev => prev.filter(item => item.id !== id));
      alert('Deleted successfully');
    } else {
      alert('Delete failed: ' + result.error);
    }
  };

  // Delete Gallery
  const handleDeleteGallery = async (id) => {
    if (!window.confirm('Delete this gallery image?')) return;

    const result = await deleteGallery(id);
    if (result.success) {
      setGalleryImages(prev => prev.filter(item => item.id !== id));
      alert('Deleted successfully');
    } else {
      alert('Delete failed: ' + result.error);
    }
  };

  // Edit handlers
  const startEditCarousel = (item) => {
    setCarouselFormData({
      title: item.title,
      subtitle: item.subtitle,
      highlight: item.highlight,
      badge: item.badge,
      image: null
    });
    setEditingCarousel(item);
    setShowCarouselForm(true);
    setErrors({});
  };

  const startEditGallery = (item) => {
    setGalleryFormData({
      image: null
    });
    setEditingGallery(item);
    setShowGalleryForm(true);
    setErrors({});
  };

  // Reset forms
  const resetCarouselForm = () => {
    setCarouselFormData({ title: '', subtitle: '', highlight: '', badge: '', image: null });
    setEditingCarousel(null);
    setErrors(prev => ({ ...prev, title: '', subtitle: '', highlight: '', badge: '', carouselImage: '' }));
  };

  const resetGalleryForm = () => {
    setGalleryFormData({ image: null });
    setEditingGallery(null);
    setErrors(prev => ({ ...prev, galleryImage: '' }));
  };

  const cancelForm = () => {
    resetCarouselForm();
    resetGalleryForm();
    setShowCarouselForm(false);
    setShowGalleryForm(false);
    setErrors({});
  };

  // Helper function to clear error when user starts typing
  const handleInputChange = (field, value, type) => {
    if (type === 'carousel') {
      setCarouselFormData(prev => ({ ...prev, [field]: value }));
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    // For gallery, we don't have text fields anymore
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-600">Loading gallery data...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 school-font">
            Admin <span className="text-blue-600">Gallery Management</span>
          </h1>
          <p className="text-lg text-gray-600 navigation-font">
            Manage carousel slides (max 3) and gallery images (max 8)
          </p>
        </div>

        {/* CAROUSEL SECTION */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
              Home Page Carousel ({carouselImages.length}/{MAX_CAROUSEL})
            </h2>
            {carouselImages.length < MAX_CAROUSEL && (
              <button
                onClick={() => { resetCarouselForm(); setShowCarouselForm(true); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <FaPlus /> Add Slide
              </button>
            )}
          </div>

          {/* Carousel Form */}
          {showCarouselForm && (
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border">
              <h3 className="text-2xl font-bold mb-6">
                {editingCarousel ? 'Edit' : 'Add'} Carousel Slide
              </h3>
              <form onSubmit={handleCarouselSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      name="title" 
                      placeholder="Title *" 
                      value={carouselFormData.title}
                      onChange={(e) => handleInputChange('title', e.target.value, 'carousel')}
                      className={`w-full px-4 py-3 border rounded-xl ${errors.title ? 'border-red-500' : ''}`} 
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                  </div>
                  
                  <div>
                    <input 
                      name="subtitle" 
                      placeholder="Subtitle *" 
                      value={carouselFormData.subtitle}
                      onChange={(e) => handleInputChange('subtitle', e.target.value, 'carousel')}
                      className={`w-full px-4 py-3 border rounded-xl ${errors.subtitle ? 'border-red-500' : ''}`} 
                    />
                    {errors.subtitle && <p className="text-red-500 text-sm mt-1">{errors.subtitle}</p>}
                  </div>
                  
                  <div>
                    <input 
                      name="highlight" 
                      placeholder="Highlight Text *" 
                      value={carouselFormData.highlight}
                      onChange={(e) => handleInputChange('highlight', e.target.value, 'carousel')}
                      className={`w-full px-4 py-3 border rounded-xl ${errors.highlight ? 'border-red-500' : ''}`} 
                    />
                    {errors.highlight && <p className="text-red-500 text-sm mt-1">{errors.highlight}</p>}
                  </div>
                  
                  <div>
                    <input 
                      name="badge" 
                      placeholder="Badge Text *" 
                      value={carouselFormData.badge}
                      onChange={(e) => handleInputChange('badge', e.target.value, 'carousel')}
                      className={`w-full px-4 py-3 border rounded-xl ${errors.badge ? 'border-red-500' : ''}`} 
                    />
                    {errors.badge && <p className="text-red-500 text-sm mt-1">{errors.badge}</p>}
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Image {editingCarousel ? '(Optional)' : '*'}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 'carousel')}
                    className={`w-full px-4 py-3 border rounded-xl ${errors.carouselImage ? 'border-red-500' : ''}`}
                  />
                  {errors.carouselImage && <p className="text-red-500 text-sm mt-1">{errors.carouselImage}</p>}
                  
                  {carouselFormData.image ? (
                    <div className="mt-3 relative inline-block">
                      <img src={URL.createObjectURL(carouselFormData.image)} alt="preview"
                        className="h-32 rounded-lg object-cover" />
                      <button type="button" onClick={() => removeImage('carousel')}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                        <FaTimesCircle />
                      </button>
                      <p className="text-sm text-green-600 mt-1">New image selected</p>
                    </div>
                  ) : editingCarousel && editingCarousel.image ? (
                    <div className="mt-3">
                      <img src={editingCarousel.image} alt="current" className="h-32 rounded-lg object-cover" />
                      <p className="text-sm text-gray-500 mt-1">Using existing image</p>
                    </div>
                  ) : null}
                </div>

                <div className="flex gap-4">
                  <button type="submit" disabled={saving}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">
                    {saving ? 'Saving...' : <><FaSave /> {editingCarousel ? 'Update' : 'Save'}</>}
                  </button>
                  <button type="button" onClick={cancelForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Carousel List */}
          <div className="grid md:grid-cols-3 gap-6">
            {carouselImages.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <FaImage className="text-4xl text-gray-400" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title || 'Untitled'}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle || 'No subtitle'}</p>
                  <div className="mt-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {item.highlight || 'No highlight'}
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">
                      {item.badge || 'No badge'}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button onClick={() => startEditCarousel(item)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm">Edit</button>
                    <button onClick={() => handleDeleteCarousel(item.id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
              Gallery Images ({galleryImages.length}/{MAX_GALLERY})
            </h2>
            {galleryImages.length < MAX_GALLERY && (
              <button
                onClick={() => { resetGalleryForm(); setShowGalleryForm(true); }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
              >
                <FaPlus /> Add Image
              </button>
            )}
          </div>

          {/* Gallery Form */}
          {showGalleryForm && (
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border">
              <h3 className="text-2xl font-bold mb-6">
                {editingGallery ? 'Edit' : 'Add'} Gallery Image
              </h3>
              <form onSubmit={handleGallerySubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">
                    Image {editingGallery ? '(Optional)' : '*'}
                  </label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleImageChange(e, 'gallery')}
                    className={`w-full px-4 py-3 border rounded-xl ${errors.galleryImage ? 'border-red-500' : ''}`} 
                  />
                  {errors.galleryImage && <p className="text-red-500 text-sm mt-1">{errors.galleryImage}</p>}
                  
                  {galleryFormData.image ? (
                    <div className="mt-3">
                      <img src={URL.createObjectURL(galleryFormData.image)} alt="preview"
                        className="h-48 rounded-lg object-cover" />
                      <p className="text-sm text-green-600 mt-1">New image selected</p>
                    </div>
                  ) : editingGallery && editingGallery.image ? (
                    <div className="mt-3">
                      <img src={editingGallery.image} alt="current" className="h-48 rounded-lg object-cover" />
                      <p className="text-sm text-gray-500 mt-1">Using existing image</p>
                    </div>
                  ) : null}
                </div>

                <div className="flex gap-4">
                  <button type="submit" disabled={saving}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
                    {saving ? 'Saving...' : editingGallery ? 'Update Image' : 'Save Image'}
                  </button>
                  <button type="button" onClick={cancelForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt="Gallery image" className="w-full h-48 object-cover" />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <FaImages className="text-4xl text-gray-400" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex gap-2">
                    <button onClick={() => startEditGallery(item)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-xs">Edit</button>
                    <button onClick={() => handleDeleteGallery(item.id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg text-xs">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminGallery;