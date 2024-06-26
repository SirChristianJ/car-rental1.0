//const Users = require('../dbmodels/User');
const profile = document.getElementById('profile-review');
const username = document.getElementById('userprofile');
const logout = document.getElementById('logout');

/* const user = Users.findOne({email:'krispenwah@gmail.com'});
username.innerHTML = user.first_name;
profile.appendChild(username); */

logout.onclick = () => {
    window.location.href = 'http://localhost:8080/logout';
};

