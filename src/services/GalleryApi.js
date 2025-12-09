// src/api/GalleryApi.js
import base_urls from "./base_urls";

const getMultipartHeaders = () => ({});

export const fetchCarousel = async () => {
  try {
    const response = await fetch(`${base_urls}/admin/carousel`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to load carousel");
    return { success: true, carousel: data };
  } catch (error) {
    console.error("fetchCarousel error:", error);
    return { success: false, error: error.message };
  }
};

export const saveCarousel = async (carouselData, carouselId = null) => {
  const isUpdate = !!carouselId;
  const url = isUpdate
    ? `${base_urls}/admin/carousel/${carouselId}`
    : `${base_urls}/admin/carousel`;

  const formData = new FormData();
  formData.append("title", carouselData.title || '');
  formData.append("subtitle", carouselData.subtitle || '');
  formData.append("highlight", carouselData.highlight || '');
  formData.append("badge", carouselData.badge || '');
  formData.append("color", carouselData.color || "blue");

  console.log('Saving carousel:', {
    isUpdate,
    title: carouselData.title,
    subtitle: carouselData.subtitle,
    highlight: carouselData.highlight,
    badge: carouselData.badge,
    color: carouselData.color,
    hasImage: carouselData.image instanceof File
  });

  if (carouselData.image instanceof File) {
    formData.append("image", carouselData.image);
  }

  try {
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: getMultipartHeaders(),
      body: formData,
    });

    const data = await response.json();
    console.log('Carousel save response:', data);
    
    if (!response.ok) {
      throw new Error(data.error || "Failed to save carousel slide");
    }

    return { success: true, item: data };
  } catch (error) {
    console.error("saveCarousel error:", error);
    return { success: false, error: error.message };
  }
};

export const deleteCarousel = async (carouselId) => {
  try {
    const response = await fetch(`${base_urls}/admin/carousel/${carouselId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to delete carousel slide");

    return { success: true, message: data.message };
  } catch (error) {
    console.error("deleteCarousel error:", error);
    return { success: false, error: error.message };
  }
};

// ===================== GALLERY IMAGES =====================

export const fetchGallery = async () => {
  try {
    const response = await fetch(`${base_urls}/admin/gallery`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to load gallery");
    return { success: true, gallery: data };
  } catch (error) {
    console.error("fetchGallery error:", error);
    return { success: false, error: error.message };
  }
};

// src/api/GalleryApi.js - Updated saveGallery function
export const saveGallery = async (galleryData, galleryId = null) => {
  const isUpdate = !!galleryId;
  const url = isUpdate
    ? `${base_urls}/admin/gallery/${galleryId}`
    : `${base_urls}/admin/gallery`;

  const formData = new FormData();
  
  // Gallery now only needs image, no title or category
  if (galleryData.image instanceof File) {
    formData.append("image", galleryData.image);
  }

  console.log('=== FRONTEND GALLERY DEBUG ===');
  console.log('Gallery data:', galleryData);
  console.log('Has image file:', galleryData.image instanceof File);
  console.log('======================');

  try {
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: getMultipartHeaders(),
      body: formData,
    });

    const data = await response.json();
    console.log('Gallery save response:', data);
    
    if (!response.ok) {
      throw new Error(data.error || "Failed to save gallery image");
    }

    return { success: true, item: data };
  } catch (error) {
    console.error("saveGallery error:", error);
    return { success: false, error: error.message };
  }
};

export const deleteGallery = async (galleryId) => {
  try {
    const response = await fetch(`${base_urls}/admin/gallery/${galleryId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to delete gallery image");

    return { success: true, message: data.message };
  } catch (error) {
    console.error("deleteGallery error:", error);
    return { success: false, error: error.message };
  }
};