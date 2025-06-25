// Deeply update nested property
let config = {
  app: {
    theme: {
      color: "blue",
      font: "Arial"
    }
  }
};

// Change the color to "green" immutably.
const updatedColor={...config, app:{...config.app, theme:{...config.app.theme, color:"green"}}}
console.log(updatedColor)