const ipInput = document.getElementById("textInputWrapper");
const locateBtn = document.getElementById("ui-btn");
import { SpeedInsights } from "@vercel/speed-insights/next"


injectSpeedInsights();

// Add a click event listener to the button
locateBtn.addEventListener("click", () => {
  // Disable the button and show a loading message
  locateBtn.disabled = true;
  locateBtn.textContent = "Loading...";

  // Get the IP address from the input element
  const ipAddress = ipInput.value;

  // Make the API request
  fetch(`https://api.hackertarget.com/ipgeo/?q=${ipAddress}`)
    .then((response) => {
      // If the response is not OK, show an error message
      if (!response.ok) {
        throw new Error("Error making API request");
      }
      // Wait for 5 seconds before showing the response
      return new Promise((resolve) => setTimeout(resolve, 5000));
    })
    .then((response) => response.text())
    .then((text) => {
      // Enable the button and show the response
      locateBtn.disabled = false;
      locateBtn.textContent = "Locate";
      console.log(text);
    })
    .catch((error) => {
      // Enable the button and show an error message
      locateBtn.disabled = false;
      locateBtn.textContent = "Locate";
      console.error(error);
    });
});
