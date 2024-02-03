/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Daniel Zeniff Espitia Ramirez",
    photo: "images/me.jpg",
    favoriteFoods: [
      'Rice',
      'Burger',
      'Ice Cream',
      'Pizza',
      'Hot Dog'
    ],
    hobbies: ['Watch Anime', 'Sleep', 'Study courses', 'Reading Manga'],
    placesLived: []
  };
  
  myProfile.placesLived.push({
    place: 'Maracaibo, Zulia, VE',
    length: '3 years',
  });
  
  document.querySelector('#name').textContent = myProfile.name;
  
  document.querySelector('#photo').src = myProfile.photo;
  
  document.querySelector('#photo').alt = myProfile.photo;
 
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
