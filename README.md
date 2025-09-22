# 🚗 MotorHaus

A modern **Vite + React** web application that lets users **search cars**, view **detailed specifications** and **dealer information**, and manage a list of **favourite cars**.  

MotorHaus provides a smooth experience with **fast API calls**, an elegant UI, and persistent favourites so users can easily track the cars they love.  

---

## ✨ Features

- 🔎 **Search Cars** – Search cars by name, model, or brand.  
- 📡 **API Integration** – Fetch car details dynamically from MarketCheck API.  
- 📋 **Car Specifications** – View complete details and dealer info by clicking on a car.  
- ❤️ **Favourites** – Mark cars as favourites and access them anytime from the favourites page.  
- ⚡ **Vite + React** – Ultra-fast development and optimized production build.  

---
## 🔑 API Key Setup

This project uses the **MarketCheck Cars API** to fetch car data.  
To run the project, you’ll need your own API key:

1. Go to [MarketCheck API](https://marketcheck.com/) and **sign up**.  
2. Get your free API key from your dashboard.  
3. Create a `.env` file in the project root:  

   ```bash
   VITE_API_KEY=your_api_key_here

---
### 1️⃣ Clone the Repository
     ```bash
     git clone https://github.com/hashir-zahid/MotorHaus.git

     cd MotorHaus

     npm install

     VITE_API_KEY=your_api_key_here

     npm run dev

---


## 🧑‍💻 Usage Flow

- Enter a search term in the search bar (e.g., "Toyota Corolla").
- App fetches results from the MarketCheck API.
- Click on any car to view full specifications + dealer info.
- Mark a car as favourite ❤️.
- Visit the Favourites Page to see all saved cars.


## 🌟 Acknowledgements
- Vite
- React
- MarketCheck Cars API
- Fuse.js -> (if you used it for search)