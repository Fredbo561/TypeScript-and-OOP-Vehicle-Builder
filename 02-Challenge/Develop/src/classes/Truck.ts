// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  
  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
    ){
      super();

      this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }


  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
   if (vehicle.make && vehicle.model && vehicle.weight  <= this.towingCapacity) {
    console.log(`The ${vehicle.make} ${vehicle.model} is being towed.`)
  } else {
    console.log(`The ${vehicle.make} ${vehicle.model} is too heavy to be towed.`)
  }
    // interface AbleToTow {
    //   tow(vehicle: Truck | Motorbike | Car): void;
    // }
    
    // class Truck implements AbleToTow {
    //   towingCapacity: number;
    //   make: string;
    //   model: string;
    
      // constructor(make: string, model: string, towingCapacity: number) {
      //   this.make = make;
      //   this.model = model;
      //   this.towingCapacity = towingCapacity;
      // }
    
      // tow(vehicle: Truck | Motorbike | Car): void {
        // Retrieve vehicle details if they exist
        // const vehicleMake = vehicle.make || 'Unknown make';
        // const vehicleModel = vehicle.model || 'Unknown model';
        // const vehicleWeight = vehicle instanceof Truck ? vehicle.weight : vehicle instanceof Motorbike ? vehicle.weight : vehicle instanceof Car ? vehicle.weight : 0;
    
        // console.log(`Attempting to tow ${vehicleMake} ${vehicleModel}`);
    
        // Check if the vehicle's weight is within the towing capacity
      //   if (vehicleWeight <= this.towingCapacity) {
      //     console.log(`The ${vehicleMake} ${vehicleModel} is being towed.`);
      //   } else {
      //     console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
      //   }
      // }
    // }
    
    
    // class Motorbike {
    //   make: string;
    //   model: string;
    //   weight: number;
    
    //   constructor(make: string, model: string, weight: number) {
    //     this.make = make;
    //     this.model = model;
    //     this.weight = weight;
    //   }
    // }
    
    // class Car {
    //   make: string;
    //   model: string;
    //   weight: number;
    
    //   constructor(make: string, model: string, weight: number) {
    //     this.make = make;
    //     this.model = model;
    //     this.weight = weight;
    //   }
    // }
    
    // class Truck extends AbleToTow {
    //   towingCapacity: number;
    //   make: string;
    //   model: string;
    //   weight: number;
    
    //   constructor(make: string, model: string, weight: number, towingCapacity: number) {
    //     super();
    //     this.make = make;
    //     this.model = model;
    //     this.weight = weight;
    //     this.towingCapacity = towingCapacity;
    //   }
    // }
    
  // }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  //  override printDetails(): void {
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Wheels: ${this.wheels}`);
    }
  }
  
  // }
// Export the Truck class as the default export
export default Truck;
