export function fetchRandomColor() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ data: getRandomColor() }), 1000);
  });
}

function getRandomColor() {
  const colors = ['#693782', '#teal', 'blue', 'green', '#903456'];
  return colors[getRandomNumber(0, colors.length - 1)];
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
