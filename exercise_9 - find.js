const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

// Using for loop to find the user with the name 'Alex'
let user;
for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}
console.log(user);

// Using find to find the user with the admin property of true
const admin = users.find(function (user) {
  return user.admin;
});

function Car(model) {
  this.model = model;
}

const cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

cars.find(function (car) {
  return car.model === 'Focus';
});
console.log(
  cars.find(function (car) {
    return car.model === 'Camaro';
  })
);

let posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

const comment = { postId: 1, content: 'Great Post' };
const postForComment = (post, comment) => {
  // return post.find(post => post.id === comment.postId);
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
};

console.log(postForComment(posts, comment));
