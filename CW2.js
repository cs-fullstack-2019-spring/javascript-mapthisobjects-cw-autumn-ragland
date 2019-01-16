//Use .filter to create an array of pet objects that only holds the hamsters.
// let hamsters = []; // new array to hold objects

let pets = [
{
  name: 'Spot',
  type: 'Hamster'
},
{
  name: 'Harry',
  type: 'Hamster'
},
{
  name: 'Kitty',
  type: 'Cat'
}
];

function types (object)
{
  return (object.type === 'Hamster');
}

let hamsters = pets.filter(types);


for (var i=0;i<hamsters.length;i++)
{
    console.log(hamsters[i])
}


