class Car {
  drive() {
    console.log("Driving...");
  }
}
class Bike {
  ride() {
    console.log("Riding...");
  }
}

function useVehicle(v: Car | Bike) {
  if (v instanceof Car) {
    v.drive();
  } else {
    v.ride();
  }
}
