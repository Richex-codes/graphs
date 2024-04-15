const graph = {
    'A': { 'B': 4, 'C': 2 },
 
    'B': { 'A': 4, 'C': 5, 'D': 10 },
 
    'C': { 'A': 2, 'B': 5, 'D': 3 },
 
    'D': { 'B': 10, 'C': 3 }
 
 };


function Dijkstra(x) {
    const distances = {};
    let visited = new Set();

    for(let i in graph){
        distances[i] = Infinity;
    }
    
    distances[x] = 0;


    while(true){
      let closestNode = null;
      let shortestdistance = Infinity;

      for(let j in distances){
        if(!visited.has(j) && distances[j] < shortestdistance){
            closestNode = j;
            shortestdistance = distances[j]
        }
      }
      if(closestNode === null){
        break;
      }

      visited.add(closestNode);

      for(const k in graph[closestNode]){
        let totaldistance = distances[closestNode] + graph[closestNode][k];
        if(totaldistance < distances[k]){
            distances[k] = totaldistance;
        }
      }
  
    }
    return distances;
  
}

console.log(Dijkstra('A'))