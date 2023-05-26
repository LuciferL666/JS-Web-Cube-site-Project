//file for creating cube
const uniqid = require("uniqid"); // Generate uniq Id but it's necessary to install "npm i uniqid"
const cubes = [];

exports.getAll = () => cubes.slice();

exports.getOne = (cubeId) => cubes.find(c => c.id == cubeId) // To take details of the cube 

exports.create = (cubeData) => {
  const newCube = {
    //id: (new Date()).getTime(), // We can take Id to date
    //id: cubes.length + 1,
    id: uniqid(), // Generate uniq Id but it's necessary to install "npm i uniqid"
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
