import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
// Create the first node

// Define the number of tier one nodes
let TierOneNodes = 50;
let TierTwoNodes = 30;

let originNodeId = nanoid();
let originNode = {
  id: originNodeId,
  label: "The Master Node",
  group: originNodeId
};

let nodes = [];
let links = [];

// starting from tier one here
for (let j = 0; j < TierOneNodes; j++) {
  nodes.push({ id: j, lable: faker.company.name(), group: j });
  links.push({
    source: originNodeId,
    target: j
  });
  // for each tier one node let's create some second tier nodes
  for (let k = 0; k < TierTwoNodes; k++) {
    // each node needs a unique id
    let id = nanoid();

    nodes.push({
      id,
      lable: faker.company.name(),
      group: id
    });

    links.push({
      source: j,
      target: id
    });
  }
}

const data = {
  nodes: [originNode, ...nodes],
  links: [...links]
};

// Create tier one nodes

// Create the links from the first node the tier one nodes

export default data;
