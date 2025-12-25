# Basic Weather App ☀️🌧️

A simple and elegant weather application that allows users to check real-time weather conditions for any city around the world.

## Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- ☁️ Show weather conditions (e.g., Broken Clouds, Clear Sky)
- 💫 Beautiful glass-morphism UI with semi-transparent background
- ⚡ Real-time weather data from OpenWeatherMap API
- 📱 Fully responsive design with Tailwind CSS
- ❌ Error handling for invalid city names

## Technologies Used

- **HTML5** - Semantic structure and form elements
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Async/await for API calls and DOM manipulation
- **Font Awesome 7.0.1** - Search icon and weather icons
- **OpenWeatherMap API** - Free weather data API

## Project Structure

```
basic-weather-app/
│
├── index.html          # Main HTML file with Tailwind classes
├── style.css           # Custom CSS styles (if needed)
├── app.js              # JavaScript logic for API calls
└── assets/
    └── bg.jpg          # Background image for the app
```

## Setup Instructions

1. **Clone or download** the project files to your local machine

```bash
git clone <repository-url>
cd basic-weather-app
```

2. **Add background image**: Place your background image at `./assets/bg.jpg` (1920x1080 recommended)

3. **Get OpenWeatherMap API Key**: 
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Go to API Keys section
   - Copy your free API key
   - Open `app.js` and replace `YOUR_API_KEY` with your actual key

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

4. **Open the project**: Simply open `index.html` in your web browser (no server required)

## Usage

1. Open the application in your browser
2. Enter a city name in the search box (e.g., "Dhaka", "London", "New York")
3. Click the search icon (🔍) or press Enter
4. View the weather information displayed:
   - **City name** - Displayed in a rounded badge
   - **Temperature** - Shown in large font (°C)
   - **Weather condition** - Description like "Broken Clouds", "Clear Sky"
5. If the city is not found, an error message "City is not exists" will appear in red

## Files Overview

### index.html
The main HTML file containing:
- Full-screen background with blur effect using `bg-[url(./assets/bg.jpg)]`
- Centered weather card with `bg-black/60` for semi-transparent black background
- Search input with Font Awesome search icon
- Hidden result section that displays after successful search
- Tailwind CSS classes for responsive design

### style.css
Custom CSS file for additional styles not covered by Tailwind (currently minimal or empty as Tailwind handles most styling).

### app.js
JavaScript file handling:
- Event listeners for search button click and Enter key press
- Fetch API calls to OpenWeatherMap
- Temperature conversion from Kelvin to Celsius
- DOM manipulation to show/hide elements
- Error handling for invalid cities or network issues
- Display of city name, temperature, and weather conditions

### assets/bg.jpg
Background image providing visual appeal. Should be a high-quality image (weather-related themes work best).

## API Integration

The app uses **OpenWeatherMap Current Weather API**:

**API Endpoint:**
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}
```

**Response includes:**
- Temperature (converted from Kelvin to Celsius)
- Weather description
- City name
- Country code
- Humidity, wind speed, etc. (can be added)

**Rate Limit:** 60 calls/minute for free tier

## Key CSS Classes Used

- `h-screen w-full` - Full viewport height and width
- `bg-[url(./assets/bg.jpg)] bg-cover bg-no-repeat` - Background image styling
- `flex items-center justify-center` - Centering the weather card
- `bg-black/60` - Semi-transparent black background (60% opacity)
- `rounded-lg` - Rounded corners for the card
- `text-white` - White text color for contrast
- `hidden` - Initially hide result section until data is fetched

## Customization

### Change Background Image
Replace `./assets/bg.jpg` with your preferred image. Recommended sizes: 1920x1080 or higher.

### Modify Colors
Update Tailwind classes in `index.html`:
- Background opacity: `bg-black/60` → `bg-black/40` (more transparent)
- Text color: `text-white` → `text-gray-100`
- Border color: `border-gray-400` → `border-blue-400`

### Change App Name
Update line 10 in `index.html`:
```html
<h1 class="text-center text-2xl mb-4">Your App Name</h1>
```

### Add More Weather Data
In `app.js`, you can display additional data from the API response:
- Humidity: `data.main.humidity`
- Wind speed: `data.wind.speed`
- Pressure: `data.main.pressure`
- Feels like temperature: `data.main.feels_like`

## Browser Support

- ✅ Google Chrome (version 90+)
- ✅ Mozilla Firefox (version 88+)
- ✅ Safari (version 14+)
- ✅ Microsoft Edge (version 90+)
- ✅ Opera (version 76+)

## Error Handling

The app includes comprehensive error handling:

1. **Invalid City Names**: Displays "City is not exists" message in red
2. **Network Errors**: Catches fetch failures
3. **API Errors**: Handles 404 and other HTTP errors
4. **Empty Input**: Prevents search with empty city name

## Temperature Unit

Currently displays temperature in **Celsius (°C)**. The conversion formula used:
```javascript
const tempCelsius = (data.main.temp - 273.15).toFixed(0);
```

To add Fahrenheit support, use:
```javascript
const tempFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(0);
```

## Future Enhancements

- [ ] 5-day / 7-day weather forecast
- [ ] Hourly forecast with graphs
- [ ] Weather maps and radar
- [ ] Save favorite locations
- [ ] Temperature unit toggle (°C/°F)
- [ ] Geolocation support for automatic city detection
- [ ] Dark/Light mode toggle
- [ ] Weather alerts and notifications
- [ ] Humidity, wind speed, and pressure display
- [ ] Sunrise and sunset times
- [ ] Weather animations based on conditions

## API Reference

### OpenWeatherMap Current Weather Data

**Request:**
```
GET https://api.openweathermap.org/data/2.5/weather
```

**Parameters:**
- `q` - City name (required)
- `appid` - Your API key (required)
- `units` - Temperature units (optional: metric, imperial)

**Response Example:**
```json
{
  "name": "Dhaka",
  "main": {
    "temp": 299.15,
    "humidity": 78
  },
  "weather": [
    {
      "description": "broken clouds"
    }
  ]
}
```

## Troubleshooting

**Problem:** Weather data not loading
- **Solution:** Check if API key is correctly added in `app.js`

**Problem:** Background image not showing
- **Solution:** Verify `./assets/bg.jpg` path is correct and file exists

**Problem:** "City is not exists" error
- **Solution:** Check spelling of city name, try with country code (e.g., "Dhaka,BD")

**Problem:** CORS error in browser console
- **Solution:** Make sure you're using the correct API endpoint with HTTPS

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is open source and available under the MIT License. Free for personal and educational use.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

## Contact

For questions, suggestions, or bug reports, please open an issue in the repository or contact the developer.

---

**Created with ❤️ for learning and educational purposes**