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

    this.spaek = function () {
        return "Hello!! My name: " + this.name +", My gender: "+ this.gender+ ", My weight: " + this.weight
    };
    
    this.ieaApple = function (apple) {
        if (apple.weight>0){
            apple.decrease();
            this.weight++;
            return ;
        }
        return "Hết táo"
    }
    }


let adam = new Human("Adam", "Male", 60);
let eva = new Human("Eva", "Famale", 47);