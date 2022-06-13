    // close CV
    const closeBtn = document.querySelector('.closecv');
    const resume = document.querySelector('article');
    closeBtn.addEventListener('click', () => {
        resume.classList.toggle('hidden');
    });
    const cvLink = document.querySelector('.resume');
    cvLink.addEventListener('click', () => {
        resume.classList.toggle('hidden');
    });
    
    // Link nav section with page section

    document.addEventListener('click', (e) => {
        if(e.target.classList.value === 'projects'){
            document.querySelector('#projects').scrollIntoView({behavior:'smooth'});
        } else if (e.target.classList.value === 'logo'){
            document.querySelector('#projects').scrollIntoView({behavior:'smooth'});
        } else if (e.target.classList.value === 'technologies'){
            document.querySelector('#technologies').scrollIntoView({behavior:'smooth'});
        } else if (e.target.classList.value === 'about'){
            document.querySelector('#about').scrollIntoView({behavior:'smooth'});
        };
    });

    // Start animation when its visible on viewport

    function scrollTrigger(selector) {
        let elements = document.querySelectorAll(selector);
        elements = Array.from(elements);
        elements.forEach(element => {
          addObserver(element);
        });
      };
    function addObserver(element, options){
      let observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.innerHTML += `
                <p class="line1 line"><span class="bluecolor">let</span><span class="whitecolor"> MyTechStack </span><span class="redcolor">= </span><span class="yellowcolor">{ </span></p>
                <p class="line2 line"><span class="yellowcolor">HTML5: </span><span class="yellowcolor">'pokrocily'</span><span class="redcolor">, </span></p>
                <p class="line3 line"><span class="yellowcolor">CSS3: </span><span class="yellowcolor">'pokrocily'</span><span class="redcolor">, </span></p>
                <p class="line4 line"><span class="yellowcolor">Javascript: </span><span class="yellowcolor">'zaklady'</span><span class="redcolor">, </span></p>
                <p class="line5 line"><span class="yellowcolor">Git: </span><span class="yellowcolor">'zaklady'</span><span class="redcolor">, </span></p>
                <p class="line6 line"><span class="yellowcolor">TailwindCSS: </span><span class="yellowcolor">'zaklady'</span><span class="redcolor">, </span></p>
                <p class="line7 line"><span class="yellowcolor">}</span>;  </p>
          `;
          observer.unobserve(entry.target);
        }
      });
    },options);
    observer.observe(element);
    }
    scrollTrigger('.tech-text', {
        threshold: 0.5
    });

    // slide cards 

    let cards = document.getElementsByClassName('card-container');
    let dotss = document.getElementsByClassName('dot');
    let currentCard = 0;

    document.getElementById('nextbtn').addEventListener('click', () => {
        changeSlide(currentCard + 1),changeColors();
    });
    document.getElementById('prevbtn').addEventListener('click', () => {
        changeSlide(currentCard - 1),changeColors();
    });

    function changeSlide(moveTo) {
        if (moveTo >= cards.length) {moveTo = 0;};
        if (moveTo < 0) {moveTo = cards.length - 1;};

        cards[currentCard].classList.toggle('active');
        dotss[currentCard].classList.toggle('active');
        cards[moveTo].classList.toggle('active');
        dotss[moveTo].classList.toggle('active');

        currentCard = moveTo;
    }

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (currentCard !== index) {
                changeSlide(index);
            };
        });
    });

    // set dot colors
    
    changeColors = () => {
        document.querySelectorAll('.dot').forEach((dot, index) =>{
            if (dot.classList.contains('active') && index === 0){
                dot.setAttribute('style', 'background:linear-gradient(315deg,#ffbc00,#ff0058);');
            } else if (!dot.classList.contains('active') && index === 0) {
                dot.removeAttribute('style');
            } else if (dot.classList.contains('active') && index === 1) {
                dot.setAttribute('style', 'background:linear-gradient(315deg,#03a9f4,#ff0058);');
            } else if (!dot.classList.contains('active') && index === 1) {
                dot.removeAttribute('style');
            };
        });
    };
    

    // Mobile nav
    openCloseMenu = () => {
        const navbtn = document.querySelector('.mobilenav');
        const nav = document.querySelector('nav');
        const clicked = document.querySelectorAll('li');

        clicked.forEach(click => {
            click.addEventListener('click', () => {
            nav.classList.toggle('show');
            navbtn.classList.toggle('active');
            });
        });
        
        navbtn.addEventListener('click', () => {
        nav.classList.toggle('show');
        navbtn.classList.toggle('active');
        });
    }
    
    setTimeout(openCloseMenu(),1000);