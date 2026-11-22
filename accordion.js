const buttons = Array.from(document.querySelectorAll("button.accordion"));

buttons.forEach((button, index) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const opening = panel.hidden;
    panel.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    button.classList.toggle("is-open", opening);
  });

  button.addEventListener("keydown", (event) => {
    let next;

    switch (event.key) {
      case "ArrowDown":
        next = (index + 1) % buttons.length;
        break;
      case "ArrowUp":
        next = (index - 1 + buttons.length) % buttons.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = buttons.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    buttons[next].focus();
  });
});
