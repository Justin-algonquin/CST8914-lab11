const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((button, index) => {
  const panel = document.getElementById(
    button.getAttribute("aria-controls")
  );

  button.addEventListener("click", () => {
    const isExpanded =
      button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.classList.toggle("is-open", !isExpanded);
    panel.hidden = isExpanded;
  });

  // Additional keyboard navigation between accordion headers.
  button.addEventListener("keydown", (event) => {
    let targetIndex;

    switch (event.key) {
      case "ArrowDown":
        targetIndex = (index + 1) % accordionBtns.length;
        break;

      case "ArrowUp":
        targetIndex =
          (index - 1 + accordionBtns.length) % accordionBtns.length;
        break;

      case "Home":
        targetIndex = 0;
        break;

      case "End":
        targetIndex = accordionBtns.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    accordionBtns[targetIndex].focus();
  });
});
