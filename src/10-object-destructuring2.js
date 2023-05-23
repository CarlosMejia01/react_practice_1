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
const detail = ({ username, email }) => {
	console.log(`The detail of the user ${username} with email ${email}`);
};

detail(user);