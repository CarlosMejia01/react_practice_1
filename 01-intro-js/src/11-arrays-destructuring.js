const users = ['pepe', 'ana', 'maria', 'juan', 'alice', 'sebastian', 'carlos', 'bastian'];

const [pepe, ana, maria, ...rest] = users;

console.log(pepe, ana, maria, ...rest);