// Section showing-up animation script
const aniSections = document.querySelectorAll(".ani-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("section-transition", entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      return;
    }
  });
});

aniSections.forEach((s) => observer.observe(s));

$("#exampleModal").on("hide.bs.modal", function () {
  document.getElementById("close-modal-btn").classList.toggle("hide");
});

function closeModal() {
  $("#exampleModal").modal("hide");
}

function showModal() {
  document.getElementById("close-modal-btn").classList.toggle("hide");
}
