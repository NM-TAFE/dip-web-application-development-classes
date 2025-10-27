## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# NASA Astronomy Picture of the Day (APOD) Next.js App

This Next.js application allows you to fetch and display NASA's Astronomy Picture of the Day (APOD) based on user-defined parameters such as date, date range, count, and whether to include video thumbnails.

## Features

- Fetch APOD data for a specific date.
- Fetch APOD data for a range of dates.
- Fetch a random count of APOD entries.
- Include video thumbnails in the results.

## Installation

1. Clone the repository:

```
git clone https://github.com/your-username/nasa-apod-next.git
cd nasa-apod-next

npm install

npm install bulma
```

# NASA Astronomy Picture of the Day (APOD) Next.js App

This Next.js application allows you to fetch and display NASA's Astronomy Picture of the Day (APOD) based on user-defined parameters such as date, date range, count, and whether to include video thumbnails.

## Features

- Fetch APOD data for a specific date.
- Fetch APOD data for a range of dates.
- Fetch a random count of APOD entries.
- Include video thumbnails in the results.

## File Structure

nasa-apod-next/
├── components/
│ ├── ApodContent.js
│ └── ApodForm.js
├── pages/
│ ├── index.js
├── public/
├── styles/
│ ├── globals.css
├── README.md
├── package.json
└── next.config.js

- components/
- ApodForm.js: Component for the form to input parameters.
- ApodContent.js: Component to display the fetched APOD data.
- pages/
- index.js: Main application page.
- styles/
- globals.css: Custom styles for the application.

## Dependencies

Next.js: A React framework for production.
Bulma: A modern CSS framework based on Flexbox.
Fetch API: Used to fetch data from the NASA APOD API.
