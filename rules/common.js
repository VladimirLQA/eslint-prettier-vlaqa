export default {
  'no-this-before-super': 'error',
  'no-useless-catch': 'off',
  'max-nested-callbacks': [
    'error',
    {
      max: 5,
    },
  ],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    },
  ],
  'no-lonely-if': ['error'],
  'no-unneeded-ternary': ['error'],
  'no-nested-ternary': ['error'],
  'operator-assignment': ['error', 'always'],
};
