console.log("Hello");
const faqNodes = document.querySelectorAll(".faq-question");

const handleClick = (e) => {
  const parent = e.target.parentNode;
  const current = document.querySelector(".active");
  faqNodes.forEach((element) => {
    element.parentNode.classList.remove("active");
  });
  if (parent !== current) {
    parent.classList.add("active");
  }
};

faqNodes.forEach((element) => {
  console.log("button clicked");
  element.addEventListener("click", handleClick);
});