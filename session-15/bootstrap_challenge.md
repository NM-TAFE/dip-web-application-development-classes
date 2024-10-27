## 1. Install Bootstrap and Dependencies

```bash
npm install bootstrap
```

## 2. Import Bootstrap Styles

Import Bootstrap's CSS file globally.

1. Create a global CSS file (if it doesn’t already exist) in `app/globals.css` or in the root of your `styles` folder.
2. Import the Bootstrap CSS at the top of your `globals.css` file:

```css
/*styles/globals.css */

@import "~bootstrap/dist/css/bootstrap.min.css";bootstrap
```

or you can directly import Bootstrap in your layout component:

```javascript
/* app/layout.js */

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css"; // Optional for custom global styles

// add some bootstrap classes to test the install

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container">
        <nav className="nav">{/* Navigation components */}Navigation</nav>
        {children}
      </body>
    </html>
  );
}
```

## Installing react-bootstrap

**Dont forget to install and import bootstrap first**

```bash
npm install react-bootstrap
```

Pick your chosen component

```
"https://react-bootstrap.github.io/docs/components/carousel"
```

```javascript
/* components/Carousel.js*/
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
//https": react-bootstrap.github.io/docs/components/carousel

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
```

```javascript
// components/CarouselImage.js
import React from "react";
import Image from "react-bootstrap/Image";

function CarouselImage({ text }) {
  return (
    <Image
      // the encoding returns https://via.placeholder.com/800x400.png?text=First%20slide
      src={`https://via.placeholder.com/800x400.png?text=${encodeURIComponent(
        text
      )}`}
      alt={text}
      fluid
    />
  );
}

export default CarouselImage;
```

**Import this into the about route**
