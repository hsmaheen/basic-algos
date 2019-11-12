class Graph {
  adjacentList: {};
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vtx) {
    if (!this.adjacentList[vtx]) {
      this.adjacentList[vtx] = [];
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

  removeVertex(v1) {
    while (this.adjacentList[v1].length > 0) {
      const edge = this.adjacentList[v1].shift();
      this.removeEdge(v1, edge);
    }
    delete this.adjacentList[v1];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("New York");
graph.addVertex("London");
graph.addEdge("London", "New York");
graph.addEdge("Tokyo", "London");
graph.addEdge("Tokyo", "New York");
graph.removeEdge("Tokyo", "New York");
graph.removeVertex("Tokyo");
console.log("====>", graph.adjacentList);
