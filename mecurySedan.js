
//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
  constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
    super(make, model, year, color, mileage)
    this.maximumPassengers = 5
    this.passenger = 0
    this.numberOfWheels = 4
    this.maximumSpeed = 160
    this.fuel = 10
    this.scheduleService = false;


  }

  loadPassenger(num){
    if (num + this.passenger < this.maximumPassengers){
      this.passenger = num;
      return this.passenger;
      console.log(this.model + " " + this.make + " not have enough space to take all passengers.")
    }
    else{
      console.log('no available room')
    }
  }

  start(){
   if(this.fuel >= 0){
      return this.started = true;
      console.log('engine on')
   }
   else{
    return this.started = false;
    console.log('low fuel')
   }
  }

  scheduleService(mileage){
    if (super(this.mileage) >= 30000 || this.scheduleService == false)
    {
      this.scheduleService = true;
      return this.scheduleService;
      console.log('maintenance')

    }
    else {

      console.log('drive safe')
    }
  }
}

let myCar = new Car('mercury, 'Sedan', '2019', 'white', 40000)

myCar.start()
myCar.loadPassenger(4)
myCar.stop()
myCar.checkService()

console.log(myCar)
