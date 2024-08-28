// Step 1: The export statement should be fixed
export const getUserInfo = (user) => {
  return `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`;
};

export const formatSkills = (skills) => {
  return skills.map((skill) => skill.toUpperCase());
};
