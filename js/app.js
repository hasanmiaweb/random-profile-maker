function randomProfile() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      const email = data.results[0].email;
      const genders = data.results[0].gender;
      let photos = (document.getElementById("photo").src =
        data.results[0].picture.large);

      let namess = data.results[0];
      namess = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

      document.getElementById("names").innerText = namess;
      document.getElementById("email").innerText = email;
      document.getElementById("gender").innerText = genders;
    });
}

setInterval(() => {
  randomProfile();
}, 2000);
