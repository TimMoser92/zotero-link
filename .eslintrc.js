module.exports = {
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'eslint/no-console': false,
  },
};
