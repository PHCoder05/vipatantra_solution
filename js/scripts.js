document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌗';
  });

  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
});

// about
document.getElementById('vision-btn').addEventListener('mouseenter', function() {
  document.getElementById('vision-overlay').style.display = 'flex';
  setTimeout(function() {
    document.getElementById('vision-overlay').style.opacity = '1';
    document.getElementById('vision-overlay').style.transform = 'scale(1)';
  }, 10);
});

document.getElementById('vision-btn').addEventListener('mouseleave', function() {
  document.getElementById('vision-overlay').style.opacity = '0';
  document.getElementById('vision-overlay').style.transform = 'scale(0.8)';
  setTimeout(function() {
    document.getElementById('vision-overlay').style.display = 'none';
  }, 300);
});

document.getElementById('mission-btn').addEventListener('mouseenter', function() {
  document.getElementById('mission-overlay').style.display = 'flex';
  setTimeout(function() {
    document.getElementById('mission-overlay').style.opacity = '1';
    document.getElementById('mission-overlay').style.transform = 'scale(1)';
  }, 10);
});

document.getElementById('mission-btn').addEventListener('mouseleave', function() {
  document.getElementById('mission-overlay').style.opacity = '0';
  document.getElementById('mission-overlay').style.transform = 'scale(0.8)';
  setTimeout(function() {
    document.getElementById('mission-overlay').style.display = 'none';
  }, 300);
});


document.getElementById('viewPlanButton').addEventListener('mouseenter', function() {
  document.getElementById('packagesGrid').classList.remove('hidden');
  document.getElementById('packagesGrid').classList.add('visible');
});
document.addEventListener('DOMContentLoaded', () => {
  const viewPlanButton = document.getElementById('viewPlanButton');
  const packagesGrid = document.getElementById('packagesGrid');

  viewPlanButton.addEventListener('click', () => {
    // Toggle visibility for both mobile and desktop views
    packagesGrid.classList.toggle('visible');
    
    // Scroll to the packages grid in mobile view
    if (window.innerWidth <= 767) {
      if (packagesGrid.classList.contains('visible')) {
        packagesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Scroll to the packages grid in desktop view
    else {
      if (packagesGrid.classList.contains('visible')) {
        packagesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

document.addEventListener('scroll', () => {
  const imageSection = document.querySelector('.lg:flex.relative');
  const message = document.getElementById('message');
  const rect = imageSection.getBoundingClientRect();
  
  // Adjust the threshold value as needed
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
      message.classList.remove('hidden');
  } else {
      message.classList.add('hidden');
  }
});
