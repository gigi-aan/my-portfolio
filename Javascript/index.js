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

  // Toast notification function
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Add clipboard functionality to li elements
  document.querySelectorAll('.header-items li').forEach(li => {
    li.addEventListener('click', async function() {
      const icon = this.querySelector('.contact-icon');
      const textToCopy = icon.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Add temporary success class for visual feedback
        this.classList.add('copied');
        // Show toast notification
        showToast();
        
        setTimeout(() => {
          this.classList.remove('copied');
        }, 1500);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });

  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navbar .link").forEach(link => {
      if (link.getAttribute("href").split("/").pop() === currentPage) {
          link.classList.add("active");
      }
  });
});
