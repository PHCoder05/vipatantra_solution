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

