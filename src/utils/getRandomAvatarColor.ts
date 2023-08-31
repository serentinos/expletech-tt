const colors = [
  '#3f51b5',
  '#673ab7',
  '#2196f3',
  '#00897b',
  '#039be5',
  '#ef6c00',
  '#ff5722',
];

export const getRandomColor = () => {
  const max = colors.length - 1;
  const index = Math.floor(Math.random() * (max + 1));

  return colors[index];
}