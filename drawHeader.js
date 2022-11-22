const generateHeader = () => {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>${model.header.logo + model.header.name}</h1>
`;
};
