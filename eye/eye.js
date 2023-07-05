/* eye js file for Watching Eyes project */
/* Most of this code was borrowed from MIT xPro via Emeritus Professional Certificate in Coding: Full Stack Development with MERN Bootcamp Module 9 course work and then adapted by me. */

let balls = document.getElementsByClassName("ball");
document.onmousemove = (event) => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};