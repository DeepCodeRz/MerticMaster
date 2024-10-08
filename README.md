# Metric/Imperial Unit Conversion

## Description
This project is a simple metric to imperial (and vice versa) unit converter, developed to practice JavaScript (ES6+) and improve front-end development skills. The application allows you to convert units for length, volume, and mass between metric and imperial systems.

The project showcases modern JavaScript techniques such as ES6 classes, arrow functions, and the use of `flatMap()` for data manipulation. It also features a responsive user interface with light and dark themes.

![App Screenshot](path/to/screenshot.png)

## Features
- Convert between:
  - Meters and Feet (Length)
  - Liters and Gallons (Volume)
  - Kilograms and Pounds (Mass)
- ES6+ JavaScript with clean and modular code
- Light/Dark theme toggle
- Simple, intuitive UI

## Technologies Used
- **HTML/CSS** for layout and styling
- **JavaScript (ES6)** for functionality
- **Responsive Design** for cross-device compatibility

## Usage
1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/metric-imperial-conversion.git
    ```
2. Navigate to the project directory:
    ```bash
    cd metric-imperial-conversion
    ```
3. Open `index.html` in your browser to start using the app.

## Code Highlights
The main functionality is handled by the `Measure` class, which calculates the conversions:

```javascript
class Measure {
    constructor(quantity) {
        this.quantity = quantity;
    }

    calculateMulti(value = 0) {
        return Math.round((this.quantity * value) * 1000) / 1000;
    }

    calculateDivide(value = 0) {
        return Math.round((this.quantity / value) * 1000) / 1000;
    }
}
