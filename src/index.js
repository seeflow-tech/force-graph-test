import ForceGraph3D from "3d-force-graph";
import data from "./data/dynamicData";

console.log(data);

const element = document.getElementById("3d-graph");

const graph = ForceGraph3D()(element).graphData(data);

// set arrow
graph.linkDirectionalArrowLength(0).linkDirectionalArrowRelPos(1);

graph.nodeLabel("label");
graph.nodeAutoColorBy("group");
graph.backgroundColor("black");
// curve
graph.linkCurvature(0).linkCurveRotation(0);

// Fix the node position after dragging and dropping
graph.onNodeDragEnd((node) => {
  node.fx = node.x;
  node.fy = node.y;
  node.fz = node.z;
});

// highlight start
let highlightNode = null;
let highlightLink = null;

graph.nodeColor((node) =>
  node === highlightNode ? "rgb(255,255,255,1)" : "rgba(5, 137, 255, 1)"
);
graph.linkWidth((link) => (link === highlightLink ? 2 : 1));
graph.linkDirectionalParticles((link) => (link === highlightLink ? 2 : 0));
graph.linkDirectionalParticleWidth(2);
graph.onNodeHover((node) => {
  // hover events mouseenter and mouseleave
  if (node) {
    // mouse enter
    highlightNode = node;
  } else {
    // mouse leave
    highlightNode = null;
  }
  updateHighlight();
});
graph.onLinkHover((link) => {
  // hover event mouseenter and mouseleave
  if (link) {
    // mouse enter
    highlightLink = link;
  } else {
    // mouse leave
    highlightLink = null;
  }
  updateHighlight();
});

// Manual update
function updateHighlight() {
  graph.nodeColor(graph.nodeColor());
  graph.linkWidth(graph.linkWidth());
  graph.linkDirectionalParticles(graph.linkDirectionalParticles());
}

// highlight end
