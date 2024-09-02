// Step 1: The export statement should be fixed
export const getUserInfo = (user) => {
  return `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
};

// Step 3 fix the map method & fix duplicated method
export const formatSkills = function (skills) {
  return skills.map(() => skill.touppercase());
};
