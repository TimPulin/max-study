function incrementAge(person) {
  // const copyPerson = Object.assign({}, person);
  // copyPerson.age += 1;
  // return copyPerson;
  return { ...person, age: copyPerson.age + 1 };
}
