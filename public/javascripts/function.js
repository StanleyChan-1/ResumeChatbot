const item = document.querySelector("#intent-type-select");
const btn = document.querySelector("#intent-type-btn");
const panel = document.querySelector("#chatbot-respones-panel");
btn.onclick = (event) => {
  event.preventDefault();
  switch (item.value) {
    case "info":
      {
        panel.innerHTML = `    <div class="chatbot-respones-field">
        <label>Title</label>
        <input type="text" name="title" value="" placeholder="Info item title">
    </div>
    <div class="chatbot-respones-field">
        <label>Subtitle</label>
        <input type="text" name="subtitle" value="" placeholder="Info item subtitle">
    </div>
    <div class="chatbot-respones-field">
        <label>Image Source</label>
        <input type="text" name="rawUrl" value="" placeholder="https://example.com/images/logo.png">
    </div>
    <div class="chatbot-respones-field">
        <label>Action Link</label>
        <input type="text" name="actionLink" value="" placeholder="https://example.com">
    </div>`;
      }
      break;
    case "description":
      {
        panel.innerHTML = `
    <div class="chatbot-respones-field">
        <label>Title</label>
        <input type="text" name="title" value="">
    </div>
    <div class="chatbot-respones-field">
        <label>Text</label>
        <input type="text" name="text" value="">
        </div>
    `;
      }
      break;
    case "image":
      {
        panel.innerHTML = `    <div class="chatbot-respones-field">
        <label>Image source</label>
        <input type="url" name="rawUrl" value="" placeholder="https://example.com/images/logo.png">
    </div>
    <div class="chatbot-respones-field">
        <label>Alt text for image</label>
        <input type="text" name="accessibilityText" value="" placeholder="Example logo">
    </div>`;
      }
      break;
    case "button":
      {
        panel.innerHTML = `    <div class="chatbot-respones-field">
        <label>Icon type</label>
        <input type="url" name="type" value="chevron_right" placeholder="chevron_right">
    </div>

    <div class="chatbot-respones-field">
        <label>Icon color</label>
        <input type="color" name="color" value="">
    </div>

    <div class="chatbot-respones-field">
        <label>Button text</label>
        <input type="text" name="text" value="" placeholder="Button text">
    </div>

    <div class="chatbot-respones-field">
        <label>Link</label>
        <input type="url" name="link" value="" placeholder="https://example.com">
    </div>`;
      }
      break;
    case "list":
      {
        panel.innerHTML = `    <div class="chatbot-respones-field">
        <label>Title</label>
        <input type="text" name="title" value="" placeholder="List item title">
    </div>

    <div class="chatbot-respones-field">
        <label>Subtitle</label>
        <input type="text" name="subtitle" value="" placeholder="List item subtitle">
    </div>`;
      }
      break;
    case "accordtion":
      {
        panel.innerHTML = `    <div class="chatbot-respones-field">
        <label>Title</label>
        <input type="text" name="title" value="" placeholder="List item title">
    </div>

    <div class="chatbot-respones-field">
        <label>Subtitle</label>
        <input type="text" name="subtitle" value="" placeholder="List item subtitle">
    </div>

    <div class="chatbot-respones-field">
        <label>Image Source</label>
        <input type="url" name="rawUrl" value="" placeholder="https://example.com/images/logo.png">
    </div>

    <div class="chatbot-respones-field">
        <label>Text</label>
        <input type="text" name="subtitle" value="" placeholder="Accordion text">
    </div>`;
      }
      break;
    case "suggestion chip":
      {
      }
      break;

    default: {
      console.log("none");
    }
  }
};

// <label>Title</label>
// <input type="text" name="title" value="<%= chatbotRespone.title %> ">
// <label>Text</label>
// <input type="text" name="text" value="<%= chatbotRespone.text %> "></input>
