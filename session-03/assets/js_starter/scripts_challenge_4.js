// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  // Save the field to a variable
  let field = event.target;

  // Only save the field if it has an ID
  if (!field.id) return;

  // Save field to localStorage
  localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  // Get all of the fields in the form
  let fields = form.elements;

  // Loop through each one and remove it from storage
  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
  // Get all of the fields in the form
  let fields = form.elements;

  // Loop through each one and load saved data from storage
  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);
    if (!saved) continue;
    field.value = saved;
  }
}

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
