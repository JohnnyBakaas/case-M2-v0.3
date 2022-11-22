const drawMain = () => {
  const nodeHeader = document.createElement("div");
  nodeHeader.setAttribute("id", "header");
  document.getElementById("app").appendChild(nodeHeader);

  if (true) {
    const nodeGenre = document.createElement("div");
    nodeGenre.setAttribute("id", "genre");
    document.getElementById("app").appendChild(nodeGenre);
  }

  const nodeMain = document.createElement("div");
  nodeMain.setAttribute("id", "main");
  document.getElementById("app").appendChild(nodeMain);
};
