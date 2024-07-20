document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");

  const closeBtn = document.querySelector(".close");

  // Function to open lightbox
  function openLightbox(imgElement) {
    lightboxImage.src = imgElement.src;
    lightboxCaption.textContent =
      imgElement.parentElement.querySelector(".caption").textContent;
    lightbox.style.display = "flex";
  }

  // Function to close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Event listener for search input
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    galleryItems.forEach((item) => {
      const caption = item.getAttribute("data-caption").toLowerCase();

      if (caption.includes(searchText)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Event listener for gallery images
  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    img.addEventListener("click", () => openLightbox(img));
  });

  // Event listener for lightbox close button
  closeBtn.addEventListener("click", closeLightbox);

  // Event listener to close lightbox when clicking outside the image
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
});
