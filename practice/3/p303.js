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
  return list.map((person) => {
    const greeting = createGreeting(person.firstName, person.language);
    return {
      ...person,
      greeting,
    };
  });
}

function createGreeting(name, language) {
  return `Hi ${name}, what do you like the most about ${language}?`;
}
