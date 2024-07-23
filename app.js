// close CV
const closeBtn = document.querySelector(".closecv");
const resume = document.querySelector("article");
closeBtn.addEventListener("click", () => {
  resume.classList.toggle("hidden");
});
const cvLink = document.querySelector(".resume");
cvLink.addEventListener("click", () => {
  resume.classList.toggle("hidden");
});

// Link nav section with page section

document.addEventListener("click", (e) => {
  if (e.target.classList.value === "projects") {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  } else if (e.target.classList.value === "logo") {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  } else if (e.target.classList.value === "technologies") {
    document
      .querySelector("#technologies")
      .scrollIntoView({ behavior: "smooth" });
  } else if (e.target.classList.value === "about") {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  }
});

// Start animation when its visible on viewport

function scrollTrigger(selector) {
  let elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach((element) => {
    addObserver(element);
  });
}
function addObserver(element, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.innerHTML += `
                <p class="line1 line"><span class="bluecolor">let</span><span class="whitecolor"> MyTechStack </span><span class="redcolor">= </span><span class="yellowcolor">{ </span></p>
                <p class="line2 line"><span class="yellowcolor">&emsp; &emsp;HTML5: </span><span class="yellowcolor">'Intermediate'</span><span class="redcolor">, </span></p>
                <p class="line3 line"><span class="yellowcolor">&emsp; &emsp;CSS3: </span><span class="yellowcolor">'Intermediate'</span><span class="redcolor">, </span></p>
                <p class="line4 line"><span class="yellowcolor">&emsp; &emsp;JavaScript: </span><span class="yellowcolor">'Intermediate'</span><span class="redcolor">, </span></p>
                <p class="line5 line"><span class="yellowcolor">&emsp; &emsp;Next.js: </span><span class="yellowcolor">'Intermediate'</span><span class="redcolor">, </span></p>
                <p class="line6 line"><span class="yellowcolor">&emsp; &emsp;TailwindCSS: </span><span class="yellowcolor">'Intermediate'</span><span class="redcolor">, </span></p>
                <p class="line7 line"><span class="yellowcolor">}</span>;  </p>
          `;
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(element);
}
scrollTrigger(".tech-text", {
  threshold: 0.5,
});

// Mobile nav
openCloseMenu = () => {
  const navbtn = document.querySelector(".mobilenav");
  const nav = document.querySelector("nav");
  const clicked = document.querySelectorAll("li");

  clicked.forEach((click) => {
    click.addEventListener("click", () => {
      nav.classList.toggle("show");
      navbtn.classList.toggle("active");
    });
  });

  navbtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    navbtn.classList.toggle("active");
  });
};

setTimeout(() => openCloseMenu(), 1000);
