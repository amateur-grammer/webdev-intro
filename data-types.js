let userObject = {
    name: 'Adam',
    age: 28,
    favoriteFruits: ['mango', 'raspberry', 'blueberry'],
    car: {
      make: 'Honda',
      model: 'Civic',
      isFunctional: true
    },
    computer: [
      {
        manufacturer: 'Apple',
        type: 'laptop'
      },
      {
        manufacturer: 'Dell',
        type: 'laptop'
      }
    ]
  };
  
  console.log(userObject.favoriteFruits[2]); // ?
  console.log(userObject.car.isFunctional); // ?
  console.log(userObject.computer[0].manufacturer); // ?
  console.log(userObject.computer[1].manufacturer); // ?