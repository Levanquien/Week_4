function ElectricLamp(status) {
    this.status = status;

    this.lampOn = function () {
        this.status = true
    };
    this.lampOff = function () {
        this.status = false
    }
}

let lamp = new ElectricLamp(true);

function SwitchButton(status) {
    this.status = status;


    this.buttonOn = function (lam) {
        lam.lampOn();
        if (lam.lampOn) {
            this.status = true;
        }
    }
    this.buttonOff = function (lam) {
        lam.lampOff();
        if (lam.lampOff){
            this.status = false
        }
    }
}

let button = new SwitchButton(true);