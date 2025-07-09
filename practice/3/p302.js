const TARGET_ROLE = "developer";

function findDevelopers(teams) {
  isInputValid(teams);

  return teams
    .values()
    .flatMap((team) => team.members)
    .filter((member) => member.role === TARGET_ROLE)
    .map((member) => member.name)
    .toArray()
    .sort((a, b) => a.localeCompare(b, "en"));
}

function isInputValid(teams) {
  validateArray(teams, "teams");

  teams.forEach(
    (team) =>
      hasProperty(team, "members") &&
      validateArray(team.members, "members") &&
      team.members.forEach(
        (member) => hasProperty(member, "name") && hasProperty(member, "role")
      )
  );
}

function validateArray(arr, key) {
  if (!Array.isArray(arr))
    throw new Error(`${key} should be array, got ${arr}`);
  return true;
}

function hasProperty(obj, key) {
  if (!obj.hasOwnProperty(key))
    throw new Error(`${obj} should have property ${key}`);
  return true;
}
