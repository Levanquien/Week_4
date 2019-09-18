function ElectricLamp(status) {
    this.status = status;

    this.setStatus = function (status) {
        this.status = status
    };
    this.getStatus = function () {
      return  this.status
    }
}



function SwitchButton(status) {
    this.status = status;

    this.buttonOn_Off = function (lam) {

        if (this.status) {
            lam.setStatus(this.status);
        }else {
            lam.setStatus(this.status);
        }
    }

}
let lamp = new ElectricLamp(false);
let button = new SwitchButton(true);
button.buttonOn_Off(lamp);
