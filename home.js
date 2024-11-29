/*section*/
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  const windowHeight = window.innerHeight;

  function checkSection() {
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();

          if (rect.top < windowHeight * 1.00) {
              section.classList.add("reveal");
          }
      });
  }

  window.addEventListener("scroll", checkSection);
  checkSection(); // Check for visible sections on page load
});


/*header*/
const left = document.getElementById("left-side");

const handleMove = e => {
  left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);


 // JavaScript to toggle between hover images
 document.addEventListener("DOMContentLoaded", function () {
  const iStockImage = document.getElementById("i-stock");
  const booksImage = document.getElementById("books");
  const micro3Image = document.getElementById("micro3");
  const micro4Image = document.getElementById("micro4");

  const imageContainer = document.querySelector(".image-container");

  imageContainer.addEventListener("mousemove", function (e) {
    const containerRect = imageContainer.getBoundingClientRect();

    const x = e.clientX - containerRect.left; // Mouse X position relative to container
    const y = e.clientY - containerRect.top;  // Mouse Y position relative to container

    // Determine which corner the mouse is in
    const topCorner = y < containerRect.height / 2;
    const leftCorner = x < containerRect.width / 2;

    iStockImage.style.display = topCorner && leftCorner ? "block" : "none";
    booksImage.style.display = !topCorner && leftCorner ? "block" : "none";
    micro3Image.style.display = !topCorner && !leftCorner ? "block" : "none";
    micro4Image.style.display = topCorner && !leftCorner ? "block" : "none";
  });

  imageContainer.addEventListener("mouseleave", function () {
    // Reset when the mouse leaves the container
    iStockImage.style.display = "none";
    booksImage.style.display = "none";
    micro3Image.style.display = "none";
    micro4Image.style.display = "none";
  });
});

//

