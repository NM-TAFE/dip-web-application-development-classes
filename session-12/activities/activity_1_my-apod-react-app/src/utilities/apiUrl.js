export const buildApiUrl = (parameters) => {
  const apiKey = "YOUR_API_KEY";

  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  for (const key in parameters) {
    apiUrl += `&${key}=${parameters[key]}`;
  }

  return apiUrl;
};
