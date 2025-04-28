// script.js

// Toggle Sidebar
const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

if (sidebarToggleBtn) {
  sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-collapsed");
  });
}

// Toggle Search Box
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");

if (searchIcon && searchBox) {
  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("show-search-box");
  });
}

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  });
}

// Dropdown Menu Toggle
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector("a");
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
});
