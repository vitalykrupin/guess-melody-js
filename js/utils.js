export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template.trim();
  return element.firstChild;
};

const mainEl = document.querySelector(`.main`);

export const renderScreen = (element) => {
  mainEl.innerHTML = ``;
  mainEl.appendChild(element);
};
