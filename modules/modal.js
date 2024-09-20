const modal = document.querySelector(".modal");

export function showMessage(title, message) {
  modal.querySelector(".modal-title").textContent = title;
  modal.querySelector(".modal-body>p").textContent = message;
  modal.classList.add("modal-show");

  const closeButtons = modal.querySelectorAll("[data-bs-dismiss='modal']");

  const hideModal = () => {
    modal.classList.remove("modal-show");
    for (const item of closeButtons) {
      item.removeEventListener("click", hideModal);
    }
  };

  for (const item of closeButtons) {
    item.addEventListener("click", hideModal);
  }
}
