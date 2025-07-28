class CustomForm extends HTMLElement {
  constructor() {
    super();

    // Attach shadow DOM
    this.attachShadow({ mode: "open" });

    // Create a template for the component
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
      body {
        font-family: sans-serif;
        margin: 20px;
        padding: 0;
      }
    
      .hidden {
        display: none;
      }
    
      .error {
        color: red;
      }
      
      button {
        margin-top: 10px;
      }
      </style>
        <form id="form">
          <h2>City quiz</h2>
          <p>What city is located on two continents?</p>
          <textarea id="textarea"></textarea>
          <br />
          <button id="button" disabled>Submit</button>
          <p id="loading" class="hidden">Loading...</p>
          <p id="error" class="error hidden"></p>
        </form>
        <h1 id="success" class="hidden">That's right!</h1>
      `;

    // Attach the template content to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Bind elements
    this.form = this.shadowRoot.getElementById("form");
    this.textarea = this.shadowRoot.getElementById("textarea");
    this.button = this.shadowRoot.getElementById("button");
    this.loadingMessage = this.shadowRoot.getElementById("loading");
    this.errorMessage = this.shadowRoot.getElementById("error");
    this.successMessage = this.shadowRoot.getElementById("success");

    // Bind methods to 'this' context
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  connectedCallback() {
    // Attach event listeners
    this.form.addEventListener("submit", this.handleFormSubmit);
    this.textarea.addEventListener("input", this.handleTextareaChange);
  }

  disconnectedCallback() {
    // Clean up event listeners when the element is removed from the DOM
    this.form.removeEventListener("submit", this.handleFormSubmit);
    this.textarea.removeEventListener("input", this.handleTextareaChange);
  }

  // Handle form submission
  async handleFormSubmit(element) {
    element.preventDefault();
    this.disable(this.textarea);
    this.disable(this.button);
    this.show(this.loadingMessage);
    this.hide(this.errorMessage);
    try {
      await this.submitForm(this.textarea.value);
      this.show(this.successMessage);
      this.hide(this.form);
    } catch (err) {
      this.show(this.errorMessage);
      this.errorMessage.textContent = err.message;
    } finally {
      this.hide(this.loadingMessage);
      this.enable(this.textarea);
      this.enable(this.button);

      // Reset form after 2 seconds if successful
      if (!this.errorMessage.textContent) {
        setTimeout(() => {
          this.hide(this.successMessage);
          this.show(this.form);
          this.textarea.value = "";
          this.disable(this.button);
        }, 2000);
      }
    }
  }

  // Handle textarea input change
  handleTextareaChange() {
    if (this.textarea.value.length === 0) {
      this.disable(this.button);
    } else {
      this.enable(this.button);
    }
  }

  // Utility methods
  hide(element) {
    element.classList.add("hidden");
  }

  show(element) {
    element.classList.remove("hidden");
  }

  enable(element) {
    element.disabled = false;
  }

  disable(element) {
    element.disabled = true;
  }

  // Simulate form submission
  submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === "istanbul") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 1500);
    });
  }
}

// Define the new element
customElements.define("custom-form", CustomForm);
