const user = {
    username: 'charly',
    email: "charly@example.com",
    age: 20,
    ranking: 9,
};

// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

//Destructuring
const { username, ranking, age } = user;

console.log(`${username} is ${age} years old`);
console.log(ranking);