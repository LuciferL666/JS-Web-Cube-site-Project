const Cube = require('../models/Cube')

//file for creating cube

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean();


  //TODO use mongoose to filter in the db
  if(search){
result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if(from){
result = result.filter(cube => cube.difficultyLevel >= Number(from));
  }

  if(to){
result = result.filter(cube => cube.difficultyLevel <= Number(to));
  }

  return result
}

exports.getOne = (cubeId) => Cube.findById(cubeId) // To take details of the cube 
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories')

exports.create = (cubeData) => {
const cube = new Cube(cubeData);

return cube.save();

};


exports.attachAccessory = async (cubeId, accessoryId) =>{
 return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } }); // first way 
//   const cube = await Cube.findById(cubeId);//second
//   cube.accessories.push(accessoryId);//second

// return cube.save();//second
 };

