const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 6th!";
  gif.src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMThncW9nZXUzMnhjaDVkdzFwNzJzMHcxZGUydXlrZjEzZ3NrZ3I2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/37jFFYnA5FrlH5fKKg/giphy.gif";

  setTimeout(() => {
    window.location.href = "yes.html";
  }, 4000);
});

noBtn.addEventListener("mouseenter", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 20;
  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
