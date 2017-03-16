export const spin = () => {
  const reelOneElements = ['coffee maker', 'teapot', 'espresso machine']
  const reelTwoElements = ['coffee filter', 'tea strainer', 'espresso tamper']
  const reelThreeElements = ['coffee grounds', 'loose tea', 'espresso beans']
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)] 
  return [
    getRandomElement(reelOneElements),
    getRandomElement(reelTwoElements),
    getRandomElement(reelThreeElements),
  ];
}

export const eachContains = (arr, target) => arr.every(str => str.includes(target));

export const checkIfWinner = arr => {
  if (eachContains(arr, 'coffee')) {
    return true;
  } else if (eachContains(arr, 'tea')) {
    return true;
  } else if (eachContains(arr, 'espresso')) {
    return true;
  }
  return false;
}
