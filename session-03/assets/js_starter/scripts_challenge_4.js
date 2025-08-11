// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  // save the event target
  let field = event.target;

  localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  //
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
  //
}

// Load saved data from localStorage
function loadSaved() {}
// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
