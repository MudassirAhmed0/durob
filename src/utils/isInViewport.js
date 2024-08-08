export const isInViewport = (element, offset = 300) => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top + offset >= 0 &&
    rect.top + offset <= windowHeight &&
    rect.left >= 0 &&
    rect.right <= windowWidth
  );
};
