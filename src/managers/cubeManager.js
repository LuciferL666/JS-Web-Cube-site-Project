//file for creating cube
//const uniqid = require("uniqid"); // Generate uniq Id but it's necessary to install "npm i uniqid"
const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
  const newCube = {
    //id: (new Date()).getTime(), // We can take Id to date
    //id: uniqid() // Generate uniq Id but it's necessary to install "npm i uniqid"
    id: cubes.length + 1,
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
