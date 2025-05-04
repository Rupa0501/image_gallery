const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Open lightbox when an image is clicked
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

// Open lightbox function
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = galleryItems[currentIndex].src;
  lightbox.style.display = "flex";
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Previous and next buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
  lightboxImg.src = galleryItems[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
  lightboxImg.src = galleryItems[currentIndex].src;
});
