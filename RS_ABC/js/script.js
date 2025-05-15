document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu-link");
  const sections = document.querySelectorAll(".menu-section");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Hapus aktif dari semua link & section
      links.forEach((l) => l.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active-section"));

      // Tambahkan aktif ke link dan section yang diklik
      link.classList.add("active");
      const target = link.getAttribute("data-target");
      document.getElementById(target).classList.add("active-section");
    });
  });
});
