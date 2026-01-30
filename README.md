# 🎬 Netflix Clone (React + API)

## 📌 Project Overview
This project is a **Netflix website clone** built using **React.js**.  
It replicates the **UI design, layout, and dynamic movie listing** of Netflix by fetching data from an external **movie API**.

The project demonstrates modern frontend concepts such as **React components, hooks, API integration, and responsive design**.

---

## 🛠 Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- REST API (e.g. TMDB API)
- Axios / Fetch API
- React Hooks (useState, useEffect)

---

## ✨ Features
- Netflix-style homepage UI
- Dynamic movie and TV show listings
- Movie posters fetched from API
- Categories such as Trending, Popular, Top Rated
- Responsive design for different screen sizes
- Reusable React components

---

## 🔌 API Integration
- Movie data is fetched from a movie database API
- API calls handled using `useEffect`
- Data rendered dynamically in React components

Example:
```js
useEffect(() => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => setMovies(data.results));
}, []);
