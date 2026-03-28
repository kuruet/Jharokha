# 🌄 Jharokha — Explore Jharkhand Like Never Before

> A modern, responsive travel web application to discover destinations, view itineraries, book local guides, and explore nearby places — all in one place.

<img width="1913" height="991" alt="image" src="https://github.com/user-attachments/assets/55523f58-7f23-49ae-9ee9-ec993ac10fb6" />


## 🚀 Live Demo
🔗 https://jharokha-six.vercel.app/

---

## ✨ Features

🌿 **Explore Destinations**
- Browse curated locations across Jharkhand
- Categorized (Waterfalls, Hills, Religious, etc.)

🧭 **Itinerary System**
- Day-wise travel plans
- Expandable & interactive timeline UI

👤 **Guide Booking System**
- Book local guides
- Booking confirmation UI with details

⭐ **Reviews System**
- Location-based user reviews
- Ratings + testimonials

📍 **Nearby Places**
- Discover nearby attractions
- Encourages deeper exploration

🎥 **AR/Preview Experience**
- Preview destinations before visiting

🎨 **Modern UI/UX**
- Fully responsive (mobile → desktop)
- Smooth animations & transitions
- Premium travel website feel

---

## 🧠 Tech Stack

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔁 React Router
- 🧩 Context API (Booking system)
- ☁️ Vercel (Deployment)

---

## 📁 Folder Structure

```bash
Jharokha/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── arvr/
│   │   │   └── ARPreviewModal.jsx
│   │   ├── booking/
│   │   │   └── BookingModal.jsx
│   │   ├── itinerary/
│   │   │   └── ItineraryTimeline.jsx
│   │   ├── location/
│   │   │   ├── LocationCard.jsx
│   │   │   ├── Reviews.jsx
│   │   │   └── NearbyPlaces.jsx
│   │
│   ├── context/
│   │   └── BookingContext.jsx
│   │
│   ├── data/
│   │   ├── locations.js
│   │   ├── itineraries.js
│   │   └── reviews.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LocationsPage.jsx
│   │   └── LocationDetailsPage.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── vercel.json
├── package.json
└── README.md
