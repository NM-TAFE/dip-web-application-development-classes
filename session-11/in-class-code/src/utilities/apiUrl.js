// Activity 5 Step 2 Split the new helper function out for outher modules to use it
export const buildApiUrl = (params) => {
  const apiKey = "GurS0wJyr12na3jhvOraArdY3bGr64N2ovBUUTh5";
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  for (const key in params) {
    apiUrl += `&${key}=${params[key]}`;
  }
  return apiUrl;
};
