const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Add interactive effects to intro text lines
const introLines = document.querySelectorAll('.intro-text div');

introLines.forEach((line, index) => {
  // Add click effect
  line.addEventListener('click', () => {
    line.style.transform = 'translateX(15px) scale(1.02)';
    line.style.background = 'rgba(255, 255, 255, 0.2)';
    
    setTimeout(() => {
      line.style.transform = '';
      line.style.background = '';
    }, 200);
  });
  
  // Add hover sound effect (visual feedback)
  line.addEventListener('mouseenter', () => {
    line.style.transition = 'all 0.2s ease';
  });
  
  // Add typing effect on hover
  line.addEventListener('mouseenter', () => {
    const text = line.textContent;
    line.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        line.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    typeWriter();
  });
  
  // Restore original text when mouse leaves
  line.addEventListener('mouseleave', () => {
    setTimeout(() => {
      const originalTexts = [
        "hey, i'm anannyashree — but most people just call me shree.",
        "i build things that scale, perform, and look good doing it.",
        "mostly backend with java and node.js, but i don't mind jumping into react when the ui needs love.",
        "big on clean architecture, automation, and systems that don't crash at 2 am."
      ];
      line.textContent = originalTexts[index];
    }, 100);
  });
});

// Balloon fly away functionality
const balloon = document.querySelector('.balloon');
if (balloon) {
  balloon.addEventListener('click', () => {
    balloon.classList.add('fly-away');
    
    // Reset balloon after animation
    setTimeout(() => {
      balloon.classList.remove('fly-away');
    }, 2000);
  });
}