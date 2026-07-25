document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontaktForm");
  const notice = document.getElementById("kontaktNotice");

  if (!form || !notice) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple Frontend-Validierung
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const msg = form.elements["nachricht"].value.trim();
    const consent = form.elements["consent"].checked;

    if (!name || !email || !msg || !consent) {
      notice.style.display = "block";
      notice.textContent = "Bitte fülle alle Pflichtfelder aus und bestätige die Einwilligung.";
      return;
    }

    notice.style.display = "block";
    notice.textContent = "Danke! Wir melden uns in Kürze.";
    form.reset();
  });
});
