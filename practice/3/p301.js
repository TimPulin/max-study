function incrementAge(person) {
  const copyPerson = Object.assign({}, person);
  copyPerson.age = person.age + 1;
  return copyPerson;
}
