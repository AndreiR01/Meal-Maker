const menu = {
  _courses: {
    appertizers : [],
    mains : [],
    desserts :[]
  },

  get appertizers (){

  },
  set appertizers(appertizerIn){

  },
  get mains (){

  },
  set mains(mainIn){

  },
  get desserts (){

  },
  set desserts(dessertIn){

  },
  get courses () {
    return {
      appertizers:this._courses.appertizers,
      mains:this._courses.mains,
      desserts:this._courses.desserts
    };
  },

  addDishToCourse(courseName,dishName,dishPrice) {
    const dish = {
      _name:courseName,
      _price:dishPrice
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomNumber = Math.floor(Math.random() * dishes.length);
    return dishes[randomNumber];
  },

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const appertizers = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appertizer._price + desserts._price + appertizer._price;
    return `Your meal is ${appetizer._name},${appetizer._name} and
    ${appetizer._name} .Total price of your meal is ${totalPrice}.`;

  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 3.25);
menu.addDishToCourse('appetizers', 'Nachos for One', 5.30);
menu.addDishToCourse('appetizers', 'Garlic Bread', 4.25);
menu.addDishToCourse('appetizers', 'Olives', 3.25);
menu.addDishToCourse('mains', ' Mussels', 3.25);
menu.addDishToCourse('mains', 'Squid Rings', 5.30);
menu.addDishToCourse('mains', 'Beef', 4.25);
menu.addDishToCourse('mains', 'Chicken Salad', 3.25);
menu.addDishToCourse('desserts', 'Tiramisu', 3.25);
menu.addDishToCourse('desserts', 'Ice Cream', 5.30);
menu.addDishToCourse('desserts', 'Brownie', 4.25);
menu.addDishToCourse('desserts', 'Cheesecake', 3.25);
menu.generateRandomMeal();
