const colorCreator = () => {
  const component = () => Math.floor(Math.random() * 255);
  return `rgb(${component()}, ${component()}, ${component()})`;
};
export default colorCreator;
