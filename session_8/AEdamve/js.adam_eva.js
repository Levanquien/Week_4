function Apple(weight,) {
    this.weight = weight;

    this.decrease = function () {
        return this.weight--
    };
    this.getWeight = function () {
        return this.weight
    }
}

let apple = new Apple(10);

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    
    this.iea = function (apple) {
        
    }
    }


let adam = new Human("Adam", "Male", 60);
let eva = new Human("Eva", "Famale", 47);