document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active");
      });

      if (!isOpen) {
        item.classList.add("active");
      }
    });
  });
});
