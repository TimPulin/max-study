/*

  {
    firstName: string,
    lastName: string,
    country: string,
    continent: string,
    age: number,
    language: string,
  },
*/
// greeting

function greetDevelopers(list) {
  return list.map((person) => ({
    ...person,
    greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?`,
  }));
}

function createGreeting(name, language) {
  return `Hi ${name}, what do you like the most about ${language}?`;
}
