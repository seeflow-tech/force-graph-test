// Define the number of nodes
let Nodes = 100;

const data = {
  nodes: [...Array(Nodes).keys()].map((i) => ({
    id: i,
    lable: i,
    group: i
  })),
  links: [...Array(Nodes).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: Math.round(Math.random() * (id - 1)),
      target: id
    }))
};

export default data;
