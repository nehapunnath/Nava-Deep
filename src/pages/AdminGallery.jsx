import { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSave, 
  FaTimes,
  FaImage,
  FaUpload,
  FaTimesCircle,
  FaSlidersH,
  FaImages
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const AdminGallery = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [showCarouselForm, setShowCarouselForm] = useState(false);
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [editingCarousel, setEditingCarousel] = useState(null);
  const [editingGallery, setEditingGallery] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [carouselFormData, setCarouselFormData] = useState({
    title: '',
    subtitle: '',
    highlight: '',
    badge: '',
    color: 'blue',
    image: null
  });

  const [galleryFormData, setGalleryFormData] = useState({
    title: '',
    category: 'campus',
    image: null
  });

  // Color options for carousel
  const colorOptions = [
    { value: 'blue', label: 'Blue', class: 'bg-blue-600' },
    { value: 'green', label: 'Green', class: 'bg-green-600' },
    { value: 'purple', label: 'Purple', class: 'bg-purple-600' },
    { value: 'amber', label: 'Amber', class: 'bg-amber-600' },
    { value: 'red', label: 'Red', class: 'bg-red-600' }
  ];

  // Category options for gallery
  const categoryOptions = [
    { value: 'campus', label: 'Campus' },
    { value: 'events', label: 'Events' },
    { value: 'sports', label: 'Sports' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'lab', label: 'Science Lab' },
    { value: 'arts', label: 'Arts' },
    { value: 'activities', label: 'Activities' }
  ];

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedCarousel = localStorage.getItem('adminCarousel');
    const savedGallery = localStorage.getItem('adminGallery');
    
    if (savedCarousel) {
      setCarouselImages(JSON.parse(savedCarousel));
    }
    if (savedGallery) {
      setGalleryImages(JSON.parse(savedGallery));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('adminCarousel', JSON.stringify(carouselImages));
  }, [carouselImages]);

  useEffect(() => {
    localStorage.setItem('adminGallery', JSON.stringify(galleryImages));
  }, [galleryImages]);

  // Convert File to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  // Handle carousel image upload
  const handleCarouselImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const base64Image = await fileToBase64(file);
      setCarouselFormData(prev => ({
        ...prev,
        image: base64Image
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  // Handle gallery image upload
  const handleGalleryImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const base64Image = await fileToBase64(file);
      setGalleryFormData(prev => ({
        ...prev,
        image: base64Image
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  // Remove carousel image
  const removeCarouselImage = () => {
    setCarouselFormData(prev => ({
      ...prev,
      image: null
    }));
  };

  // Remove gallery image
  const removeGalleryImage = () => {
    setGalleryFormData(prev => ({
      ...prev,
      image: null
    }));
  };

  // Handle carousel form input changes
  const handleCarouselInputChange = (e) => {
    const { name, value } = e.target;
    setCarouselFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle gallery form input changes
  const handleGalleryInputChange = (e) => {
    const { name, value } = e.target;
    setGalleryFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit carousel form
  const handleCarouselSubmit = (e) => {
    e.preventDefault();
    
    if (editingCarousel) {
      // Update existing carousel item
      setCarouselImages(prev => 
        prev.map(item => 
          item.id === editingCarousel.id 
            ? { ...carouselFormData, id: editingCarousel.id }
            : item
        )
      );
      setEditingCarousel(null);
    } else {
      // Add new carousel item
      const newItem = {
        ...carouselFormData,
        id: Date.now()
      };
      setCarouselImages(prev => [...prev, newItem]);
    }
    
    resetCarouselForm();
    setShowCarouselForm(false);
  };

  // Submit gallery form
  const handleGallerySubmit = (e) => {
    e.preventDefault();
    
    if (editingGallery) {
      // Update existing gallery item
      setGalleryImages(prev => 
        prev.map(item => 
          item.id === editingGallery.id 
            ? { ...galleryFormData, id: editingGallery.id }
            : item
        )
      );
      setEditingGallery(null);
    } else {
      // Add new gallery item
      const newItem = {
        ...galleryFormData,
        id: Date.now()
      };
      setGalleryImages(prev => [...prev, newItem]);
    }
    
    resetGalleryForm();
    setShowGalleryForm(false);
  };

  // Reset forms
  const resetCarouselForm = () => {
    setCarouselFormData({
      title: '',
      subtitle: '',
      highlight: '',
      badge: '',
      color: 'blue',
      image: null
    });
  };

  const resetGalleryForm = () => {
    setGalleryFormData({
      title: '',
      category: 'campus',
      image: null
    });
  };

  // Edit functions
  const editCarousel = (item) => {
    setCarouselFormData({
      title: item.title,
      subtitle: item.subtitle,
      highlight: item.highlight,
      badge: item.badge,
      color: item.color,
      image: item.image
    });
    setEditingCarousel(item);
    setShowCarouselForm(true);
  };

  const editGallery = (item) => {
    setGalleryFormData({
      title: item.title,
      category: item.category,
      image: item.image
    });
    setEditingGallery(item);
    setShowGalleryForm(true);
  };

  // Delete functions
  const deleteCarousel = (itemId) => {
    if (window.confirm('Are you sure you want to delete this carousel item?')) {
      setCarouselImages(prev => prev.filter(item => item.id !== itemId));
    }
  };

  const deleteGallery = (itemId) => {
    if (window.confirm('Are you sure you want to delete this gallery image?')) {
      setGalleryImages(prev => prev.filter(item => item.id !== itemId));
    }
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingCarousel(null);
    setEditingGallery(null);
    resetCarouselForm();
    resetGalleryForm();
    setShowCarouselForm(false);
    setShowGalleryForm(false);
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
              Admin <span className="text-blue-600">Gallery Management</span>
            </h1>
            <p className="text-lg text-gray-600 navigation-font max-w-2xl">
              Manage carousel images and gallery section for the home page
            </p>
          </div>

          {/* Carousel Section */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
                Home Page Carousel
              </h2>
              <button
                onClick={() => {
                  resetCarouselForm();
                  setShowCarouselForm(true);
                  setEditingCarousel(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 whitespace-nowrap"
              >
                <FaSlidersH />
                <span>Add Carousel Slide</span>
              </button>
            </div>

            {/* Carousel Form */}
            {showCarouselForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 school-font">
                  {editingCarousel ? 'Edit Carousel Slide' : 'Add New Carousel Slide'}
                </h3>
                
                <form onSubmit={handleCarouselSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={carouselFormData.title}
                        onChange={handleCarouselInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter slide title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Subtitle *
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={carouselFormData.subtitle}
                        onChange={handleCarouselInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter slide subtitle"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Highlight Text *
                      </label>
                      <input
                        type="text"
                        name="highlight"
                        value={carouselFormData.highlight}
                        onChange={handleCarouselInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter highlight text"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Badge Text *
                      </label>
                      <input
                        type="text"
                        name="badge"
                        value={carouselFormData.badge}
                        onChange={handleCarouselInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter badge text"
                      />
                    </div>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                      Color Theme *
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {colorOptions.map((color) => (
                        <button
                          key={color.value}
                          type="button"
                          onClick={() => setCarouselFormData(prev => ({ ...prev, color: color.value }))}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            carouselFormData.color === color.value 
                              ? 'border-gray-800 ring-2 ring-gray-300' 
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className={`w-full h-8 rounded-lg ${color.class}`}></div>
                          <span className="text-xs mt-1 text-gray-600 navigation-font">
                            {color.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div> */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 navigation-font">
                      Carousel Image *
                    </label>
                    
                    {/* Image Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="carousel-image-upload"
                        accept="image/*"
                        onChange={handleCarouselImageUpload}
                        disabled={uploading}
                        className="hidden"
                      />
                      <label
                        htmlFor="carousel-image-upload"
                        className={`cursor-pointer flex flex-col items-center justify-center space-y-3 ${
                          uploading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <FaUpload className="text-4xl text-gray-400" />
                        <div>
                          <p className="text-gray-600 font-semibold navigation-font">
                            {uploading ? 'Uploading...' : 'Click to upload image'}
                          </p>
                          <p className="text-gray-500 text-sm navigation-font mt-1">
                            PNG, JPG, JPEG (Recommended: 1920x1080)
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Preview Uploaded Image */}
                    {carouselFormData.image && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3 navigation-font">
                          Preview:
                        </h4>
                        <div className="relative max-w-2xl">
                          <img 
                            src={carouselFormData.image} 
                            alt="Carousel preview"
                            className="w-full h-48 object-cover rounded-xl shadow-md"
                          />
                          <button
                            type="button"
                            onClick={removeCarouselImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                          >
                            <FaTimesCircle className="text-sm" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      type="submit"
                      disabled={uploading || !carouselFormData.image}
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
                          <span>{editingCarousel ? 'Update Slide' : 'Save Slide'}</span>
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

            {/* Carousel Items List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carouselImages.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <FaImage className="text-gray-400 text-4xl" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className={`bg-${item.color}-600 text-white px-2 py-1 rounded-lg text-xs font-semibold`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 school-font line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                      {item.highlight}
                    </p>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className={`w-4 h-4 rounded-full bg-${item.color}-500`}></div>
                      <span className="text-xs text-gray-500 capitalize">{item.color}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => editCarousel(item)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => deleteCarousel(item.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {carouselImages.length === 0 && (
                <div className="col-span-3 text-center py-12 bg-white rounded-2xl shadow-lg">
                  <div className="text-gray-400 text-6xl mb-4">
                    <FaSlidersH className="inline" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No carousel slides added yet
                  </h3>
                  <p className="text-gray-500">
                    Click "Add Carousel Slide" to create your first carousel slide
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 school-font">
                Gallery Section
              </h2>
              <button
                onClick={() => {
                  resetGalleryForm();
                  setShowGalleryForm(true);
                  setEditingGallery(null);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 whitespace-nowrap"
              >
                <FaImages />
                <span>Add Gallery Image</span>
              </button>
            </div>

            {/* Gallery Form */}
            {showGalleryForm && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 school-font">
                  {editingGallery ? 'Edit Gallery Image' : 'Add New Gallery Image'}
                </h3>
                
                <form onSubmit={handleGallerySubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Image Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={galleryFormData.title}
                        onChange={handleGalleryInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                        placeholder="Enter image title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 navigation-font">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={galleryFormData.category}
                        onChange={handleGalleryInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 navigation-font"
                      >
                        {categoryOptions.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 navigation-font">
                      Gallery Image *
                    </label>
                    
                    {/* Image Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="gallery-image-upload"
                        accept="image/*"
                        onChange={handleGalleryImageUpload}
                        disabled={uploading}
                        className="hidden"
                      />
                      <label
                        htmlFor="gallery-image-upload"
                        className={`cursor-pointer flex flex-col items-center justify-center space-y-3 ${
                          uploading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <FaUpload className="text-4xl text-gray-400" />
                        <div>
                          <p className="text-gray-600 font-semibold navigation-font">
                            {uploading ? 'Uploading...' : 'Click to upload image'}
                          </p>
                          <p className="text-gray-500 text-sm navigation-font mt-1">
                            PNG, JPG, JPEG (Recommended: 800x600)
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Preview Uploaded Image */}
                    {galleryFormData.image && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-3 navigation-font">
                          Preview:
                        </h4>
                        <div className="relative max-w-md">
                          <img 
                            src={galleryFormData.image} 
                            alt="Gallery preview"
                            className="w-full h-48 object-cover rounded-xl shadow-md"
                          />
                          <button
                            type="button"
                            onClick={removeGalleryImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200"
                          >
                            <FaTimesCircle className="text-sm" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <button
                      type="submit"
                      disabled={uploading || !galleryFormData.image}
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
                          <span>{editingGallery ? 'Update Image' : 'Save Image'}</span>
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

            {/* Gallery Images List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <FaImage className="text-gray-400 text-4xl" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-lg text-xs capitalize">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 school-font line-clamp-2">
                      {item.title}
                    </h3>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => editGallery(item)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm"
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => deleteGallery(item.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {galleryImages.length === 0 && (
                <div className="col-span-4 text-center py-12 bg-white rounded-2xl shadow-lg">
                  <div className="text-gray-400 text-6xl mb-4">
                    <FaImages className="inline" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No gallery images added yet
                  </h3>
                  <p className="text-gray-500">
                    Click "Add Gallery Image" to add your first gallery image
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;