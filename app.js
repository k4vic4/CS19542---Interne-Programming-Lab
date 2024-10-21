document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate login success
    const email = document.getElementById('email').value;
    document.getElementById('profileName').textContent = 'Alumni Name';
    document.getElementById('profileEmail').textContent = email;
  
    // Show profile and alumni list
    document.getElementById('login').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('alumniList').style.display = 'block';
  });
  
  document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('alumniList').style.display = 'none';
    document.getElementById('login').style.display = 'block';
  });
  