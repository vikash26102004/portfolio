Console.log("Welcome to Vikash's Enhanced Portfolio!");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  if (!section.classList.contains('hero-section')) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  }
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  });
});

document.querySelectorAll('.skill-item').forEach(skill => {
  skill.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  skill.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

document.querySelectorAll('.btn, .cta-button').forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

function initTypingEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  const originalText = 'Electrical Engineering Student & Aspiring Developer';
  
  subtitle.textContent = originalText;
  
  subtitle.style.borderRight = '2px solid white';
  subtitle.style.animation = 'blink 1s infinite';
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      0%, 50% { border-right-color: white; }
      51%, 100% { border-right-color: transparent; }
    }
  `;
  document.head.appendChild(style);
  
  setTimeout(() => {
    subtitle.style.borderRight = 'none';
    subtitle.style.animation = 'none';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', initTypingEffect);

function toggleMobileMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('mobile-active');
}

function addScrollToTop() {
  const scrollButton = document.createElement('button');
  scrollButton.innerHTML = '↑';
  scrollButton.className = 'scroll-to-top';
  scrollButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s ease;
    opacity: 0;
    z-index: 1000;
  `;
  
  document.body.appendChild(scrollButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = '1';
    } else {
      scrollButton.style.opacity = '0';
    }
  });
  
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  scrollButton.addEventListener('mouseenter', () => {
    scrollButton.style.transform = 'translateY(-3px)';
    scrollButton.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.6)';
  });
  
  scrollButton.addEventListener('mouseleave', () => {
    scrollButton.style.transform = 'translateY(0)';
    scrollButton.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
  });
}

addScrollToTop();

function initParallax() {
  const shapes = document.querySelectorAll('.shape');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.3;
      shape.style.transform = `translateY(${rate * speed}px)`;
    });
  });
}

initParallax();

console.log('%c🚀 Portfolio loaded successfully!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS & JavaScript', 'color: #764ba2; font-size: 12px;');
console.log('%cBy Vikash Kumar Burnwal', 'color: #333; font-size: 12px;');