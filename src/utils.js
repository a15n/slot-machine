export const reelOneElements = ['coffee-maker', 'teapot', 'espresso-machine'];
export const reelTwoElements = ['coffee-filter', 'tea-strainer', 'espresso-tamper'];
export const reelThreeElements = ['coffee-grounds', 'loose-tea', 'espresso-beans'];

export const spin = () => {
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
    return {isWinner: true, winnerType: 'coffee', winningArray: arr};
  } else if (eachContains(arr, 'tea')) {
    return {isWinner: true, winnerType: 'tea', winningArray: arr};
  } else if (eachContains(arr, 'espresso')) {
    return {isWinner: true, winnerType: 'espresso', winningArray: arr};
  }
  return {isWinner: false, winnerType: null, winningArray: arr};
}
