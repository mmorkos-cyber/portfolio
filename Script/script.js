const observer = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => e.target.classList.add('visible'), i * 80);
            }
            });
            }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


// FORMSPREE

window.formspree = window.formspree || function () {
  (formspree.q = formspree.q || []).push(arguments);
};

formspree("initForm", {
  formElement: "#contact-form",
  formId: "xojyajqr",
  disableAutoMessages: true
});



// Reset form after success
document.addEventListener("formspree:success", () => {
  const form = document.querySelector("#contact-form");
  if (form) form.reset();
});


//success message
document.addEventListener("formspree:success", () => {
  const successBox = document.querySelector("[data-fs-success]");
  if (successBox) {
    successBox.textContent = "✓ Message envoyé avec succès !";
  }
});


//error message
document.addEventListener("formspree:error", () => {
  const errorBox = document.querySelector("[data-fs-error]");
  if (errorBox) {
    errorBox.textContent = "Une erreur est survenue. Veuillez réessayer.";
  }
});