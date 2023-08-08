let currentlyExpandedBox = null;
let currentlyCheckedRadio = null;

function toggleBoxContent(boxNumber) {
  const boxContent = document.getElementById(`box-content-${boxNumber}`);

  if (currentlyExpandedBox && currentlyExpandedBox !== boxContent) {
    currentlyExpandedBox.style.maxHeight = "0";

    // Reset the border color of the previously expanded box
    const previousBox = currentlyExpandedBox.closest(".box");
    if (previousBox) {
      previousBox.style.borderColor = "#ccc"; // Change to the color
      previousBox.style.backgroundColor = "transparent";
    }

    // Uncheck the previously checked radio button
    if (currentlyCheckedRadio) {
      currentlyCheckedRadio.checked = false;
    }
  }

  const radio = document.getElementById(`radio-${boxNumber}`);
  if (radio) {
    radio.checked = true; // Activate the radio button
    currentlyCheckedRadio = radio; // Store the currently  radio button
  }

  const currentHeight = boxContent.clientHeight;
  const contentHeight = boxContent.scrollHeight;
  const newHeight = currentHeight === 0 ? contentHeight : 0;
  boxContent.style.maxHeight = `${newHeight}px`;

  // Change the border color of the current box
  const box = boxContent.closest(".box");
  if (box) {
    box.style.borderColor = newHeight === 0 ? "#ccc" : "#009951"; // Change the color of border
    box.style.backgroundColor =
      newHeight === 0 ? "transparent" : "rgba(218,235,247,1)";
  }

  currentlyExpandedBox = boxContent.style.maxHeight === "0" ? null : boxContent;
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});

function buttonClicked() {}
