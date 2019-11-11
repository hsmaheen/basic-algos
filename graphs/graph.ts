class Graph {
  adjacentList: {};
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacentList[v1].push(v2);
    this.adjacentList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacentList[v1] = this.adjacentList[v1].filter(v => v !== v2);
    this.adjacentList[v2] = this.adjacentList[v2].filter(v => v !== v1);
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("New York");
graph.addVertex("London");
graph.addEdge("Tokyo", "London");
graph.addEdge("Tokyo", "New York");
graph.removeEdge("Tokyo", "New York");
console.log("====>", graph.adjacentList);
