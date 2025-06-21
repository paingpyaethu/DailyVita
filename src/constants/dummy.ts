const ALL_CONCERNS = [
  'Sleep',
  'Immunity',
  'Stress',
  'Joint Support',
  'Digestion',
  'Mood',
  'Energy',
  'Hair, Skin, Nails',
  'Weight Loss',
  'Fitness',
  'Special Medical Condition',
];

const DIET_OPTIONS = [
  {key: 'None', description: 'No specific diet restrictions.'},
  {
    key: 'Vegan',
    description:
      'Does not eat any food derived from animals and who typically does not use other animal products.',
  },
  {key: 'Vegetarian', description: 'Avoids meat but may eat dairy and eggs'},
  {key: 'Pescatarian', description: 'Avoids meat but eats fish.'},
  {key: 'Strict Paleo', description: 'No processed food; whole foods only.'},
  {key: 'Ketogenic', description: 'Low-carb, high-fat diet.'},
  {
    key: 'Plant based',
    description: 'Primarily from plants; minimal animal products.',
  },
];

export {ALL_CONCERNS, DIET_OPTIONS};
