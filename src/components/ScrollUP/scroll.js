export function attachScrollHandler() {
  const scroll = document.querySelector(".scrollup");

  const handleScrollUp = () => {
    if (window.scrollY >= 520) {
      scroll.classList.add("show-scroll");
    } else {
      scroll.classList.remove("show-scroll");
    }
  };

  window.addEventListener("scroll", handleScrollUp);

  return () => {
    window.removeEventListener("scroll", handleScrollUp);
  };
}
