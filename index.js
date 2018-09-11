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
  let nodeToFind = document.querySelector('#grand-node');
  let nodeToCheck = nodeToFind.children[0]
  // While nodeToCheck isn't empty
  while (nodeToCheck){
    // iterates over every nodeToCheck and replace it by
    // nodeToFind (enqueue and dequeue what we need to check) 
    // Stop when there is no nodeToCheck left 
    nodeToFind = nodeToCheck
    nodeToCheck = nodeToFind.children[0]
  }
  // Return the last node we have checked
  return nodeToFind
}