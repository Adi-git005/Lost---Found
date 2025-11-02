document.addEventListener("DOMContentLoaded", function() {
    const searchContainer = document.querySelector(".search-container");
    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", () => {
      searchContainer.classList.toggle("active");
      const input = searchContainer.querySelector(".search-input");
      if (searchContainer.classList.contains("active")) {
        input.focus();
      } else {
        input.value = "";
      }
    });
  });