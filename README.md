# 🌦️ SkyCast — Premium Weather Dashboard

A modern, responsive, and feature-rich Weather Dashboard built with **React**, **Vite**, **Tailwind CSS**, and the **OpenWeather API**. SkyCast delivers real-time weather information, 5-day forecasts, air quality insights, and a beautiful glassmorphism UI with dynamic weather backgrounds.

🔗 **Live Demo:**https://skycast-by-harsh.vercel.app

---

## 📸 Preview

> Add screenshots of your application here.

| Home Page | Forecast | Air Quality |
|-----------|-----------|-------------|
| ![Home](./screenshots/home.png) | ![Forecast](./screenshots/forecast.png) | ![AQI](./screenshots/aqi.png) |

---

## ✨ Features

- 🔍 Search weather by city
- 📍 Current location weather (Geolocation)
- 🌡️ Real-time temperature & feels like
- 💧 Humidity
- 🌬️ Wind speed
- 📊 Pressure
- 👀 Visibility
- 🌅 Sunrise & Sunset
- 🌤️ Weather icons
- 📅 Current date & time
- 📆 5-Day Weather Forecast
- 🌫️ Air Quality Index (AQI)
- 🌙 Dark / Light Mode
- 💎 Glassmorphism UI
- 🎨 Dynamic weather backgrounds
- ⚡ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 💾 Recent searches (Local Storage)
- ⚠️ Loading & Error handling

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- Lucide React Icons

### API

- OpenWeather API

### Deployment

- Vercel

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── WeatherDetails.jsx
│   ├── Forecast.jsx
│   ├── ForecastCard.jsx
│   ├── AirQuality.jsx
│   ├── Loader.jsx
│   ├── EmptyState.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── hooks/
│   └── useWeather.js
│
├── services/
│   └── weatherApi.js
│
├── utils/
│   └── weatherBackground.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Rathore95688/weather-dashboard.git
```

### Navigate to the project

```bash
cd weather-dashboard
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
VITE_OPENWEATHER_API_KEY=YOUR_API_KEY
```

### Start the development server

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🎯 Learning Outcomes

This project helped me improve my understanding of:

- React Hooks
- Custom Hooks
- API Integration
- Axios
- Context API
- Responsive UI Design
- Component-Based Architecture
- State Management
- Local Storage
- Error Handling
- Deployment with Vercel

---

## 🔮 Future Improvements

- ⭐ Favorite Cities
- 📊 Weather Charts
- 🌍 Multiple Languages
- 🔔 Weather Alerts
- 🗺️ Interactive Weather Map
- 📈 Hourly Forecast
- 🌡️ UV Index

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## 👨‍💻 Author

**Harsh Rathore**

- GitHub: https://github.com/Rathore95688
- LinkedIn: https://www.linkedin.com/in/harsh-rathore-772124294

---

## ⭐ Show Your Support

If you liked this project, consider giving it a ⭐ on GitHub!
