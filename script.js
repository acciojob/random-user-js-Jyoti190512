//your code here
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const userImage = document.getElementById('user-image');
  const userName = document.getElementById('user-name');
  const ageButton = document.querySelector('button[data-attr="age"]');
  const emailButton = document.querySelector('button[data-attr="email"]');
  const phoneButton = document.querySelector('button[data-attr="phone"]');
  const additionalInfo = document.getElementById('additional-info');
  const additionalContent = document.getElementById('additional-content');
  const getUserButton = document.getElementById('getUser');

  // Add event listeners to buttons
  ageButton.addEventListener('click', () => displayInfo('age'));
  emailButton.addEventListener('click', () => displayInfo('email'));
  phoneButton.addEventListener('click', () => displayInfo('phone'));
  getUserButton.addEventListener('click', getUser);

  // Display initial user info
  getUser();

  // Function to fetch user data from API
  function getUser() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        userImage.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
      });
  }

  // Function to display additional info based on button click
  function displayInfo(attr) {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        additionalInfo.style.display = 'block';
        switch (attr) {
          case 'age':
            additionalContent.textContent = `Age: ${user.dob.age}`;
            break;
          case 'email':
            additionalContent.textContent = `Email: ${user.email}`;
            break;
          case 'phone':
            additionalContent.textContent = `Phone: ${user.phone}`;
            break;
        }
      });
  }
});
