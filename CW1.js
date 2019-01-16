//Use .map to create a new array of objects where each object has a property for
// petnumber and pettype based on the elements in the array. Print the new array of objects.

let arr = ["dog","cat","pig","hamster"];
for (var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
function categorize(value,index)
{
    let newObj = {};

    newObj.petNumber = index;
    newObj.petType = value;

    return newObj
}
let pet_objects = arr.map(categorize);
for(var i=0;i<pet_objects.length;i++)
{
    console.log(pet_objects[i])
}