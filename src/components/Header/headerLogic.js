export const attachScrollListener = () => {
  const header = document.getElementById("header");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.backgroundColor = "hsl(0,0%,60%,0.2)";
    } else {
      header.style.backgroundColor = "var(--bg-color)";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
