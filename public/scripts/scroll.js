document.addEventListener("DOMContentLoaded", () => {
  let scrollPosition = 0;

  window.addEventListener("wheel", (e) => {
    e.preventDefault();

    const viewportHeight = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - viewportHeight;

    if (e.deltaY > 0) {
      scrollPosition = Math.min(scrollPosition + viewportHeight, maxScroll);
    } else if (e.deltaY < 0) {
      scrollPosition = Math.max(scrollPosition - viewportHeight, 0);
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  });
});
