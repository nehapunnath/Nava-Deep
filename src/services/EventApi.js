// src/api/eventApi.js
import base_urls from "./base_urls";

const getHeaders = () => ({
  "Content-Type": "application/json",
});

const getMultipartHeaders = () => ({
});


export const fetchAllEvents = async () => {
  try {
    const response = await fetch(`${base_urls}/admin/getallevents`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to load events");
    return { success: true, events: data };
  } catch (error) {
    console.error("fetchAllEvents error:", error);
    return { success: false, error: error.message };
  }
};

export const saveEvent = async (eventData, eventId = null) => {
  const isUpdate = !!eventId;
  const url = isUpdate
    ? `${base_urls}/admin/events/${eventId}`
    : `${base_urls}/admin/events`;

  const formData = new FormData();
  formData.append("title", eventData.title);
  formData.append("date", eventData.date);
  formData.append("description", eventData.description);

  // Separate: existing image URLs (strings) vs new files
  const existingImageUrls = eventData.images
    .filter(img => typeof img === 'string');
  
  const newImageFiles = eventData.images
    .filter(img => img instanceof File);

  // Send existing images as JSON string
  if (existingImageUrls.length > 0) {
    formData.append("existingImages", JSON.stringify(existingImageUrls));
  }

  // Send new files
  newImageFiles.forEach((file) => {
    formData.append("images", file);
  });

  try {
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      // Remove headers → let browser set multipart boundary
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to save event");

    return { success: true, event: data };
  } catch (error) {
    console.error("saveEvent error:", error);
    return { success: false, error: error.message };
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await fetch(`${base_urls}/admin/events/${eventId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to delete");

    return { success: true, message: data.message };
  } catch (error) {
    console.error("deleteEvent error:", error);
    return { success: false, error: error.message };
  }
};

// ===================== UPCOMING EVENTS =====================

export const fetchUpcomingEvents = async () => {
  try {
    const response = await fetch(`${base_urls}/admin/getupcoming`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to load upcoming events");
    return { success: true, events: data };
  } catch (error) {
    console.error("fetchUpcomingEvents error:", error);
    return { success: false, error: error.message };
  }
};

export const saveUpcomingEvent = async (eventData, eventId = null) => {
  const isUpdate = !!eventId;
  const url = isUpdate
    ? `${base_urls}/admin/upcoming/${eventId}`  // e.g., /admin/upcoming/-Nabc123
    : `${base_urls}/admin/upcoming`;

  try {
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: getHeaders(),
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Server responded with:', text); // Shows the full HTML in console
      throw new Error(`Server error ${response.status}: ${text.includes('<!DOCTYPE') ? 'Route not found (404 HTML)' : 'Unknown error'}`);
    }

    const data = await response.json();
    return { success: true, event: data };
  } catch (error) {
    console.error("saveUpcomingEvent error:", error);
    return { success: false, error: error.message };
  }
};

export const deleteUpcomingEvent = async (eventId) => {
  try {
    const response = await fetch(`${base_urls}/admin/upcoming/${eventId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to delete");

    return { success: true, message: data.message };
  } catch (error) {
    console.error("deleteUpcomingEvent error:", error);
    return { success: false, error: error.message };
  }
};