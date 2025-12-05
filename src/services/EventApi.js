// src/api/eventApi.js
import base_urls from "./base_urls";

// No token, no headers — fully open
const getHeaders = () => ({
  "Content-Type": "application/json",
});

const getMultipartHeaders = () => ({
  // Don't set Content-Type for FormData — browser sets it automatically
});

// ===================== MEMORABLE EVENTS =====================

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

  // Only send new image files
  eventData.images.forEach((img) => {
    if (img instanceof File) {
      formData.append("images", img);
    }
  });

  try {
    const response = await fetch(url, {
      method: isUpdate ? "PUT" : "POST",
      headers: getMultipartHeaders(),
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