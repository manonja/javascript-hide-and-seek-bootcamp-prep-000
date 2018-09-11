function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const target = document.querySelector('#nested .target');
  return target
}

function increaseRankBy(n){
  // Select all the li in ul.ranked-list 
    const rankedLis = document.querySelectorAll('ul.ranked-list li');
  // Increase the ranks by n in rankedLis
  for (let i = 0; i < rankedLis.length; i++){
   rankedLis[i].innerHTML = parseInt(rankedLis[i].innerHTML) + n

  }
}

function deepestChild(){
  let deepest;
  // Access all the divs in grand-node
  const deepDiv = document.querySelectorAll('div#grand-node div');
  // Find div.innerHTML === 'Boo'
  for (let i = 0; i < deepDiv.length; i++){
    const findDeepest = document.querySelectorAll('div');
  }
}