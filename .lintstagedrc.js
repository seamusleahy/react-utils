module.exports = {
  "packages/**/src/.+(ts|js)": ["eslint"],
  "**/*.+(js|jsx|ts|tsx|json|css)": ["prettier --write"],
};
