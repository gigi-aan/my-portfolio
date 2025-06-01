document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".carousel-item");
  let current = 0;
  const total = items.length;
  const intervalTime = 2500;

  function showItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  showItem(current);

  setInterval(() => {
    current = (current + 1) % total;
    showItem(current);
  }, intervalTime);

  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navbar .link").forEach(link => {
      if (link.getAttribute("href").split("/").pop() === currentPage) {
          link.classList.add("active");
      }
  });
});
