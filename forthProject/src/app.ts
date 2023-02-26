//bentuk 1
// type Admin = {
//   name: string;
//   privilages: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const expample1: ElevatedEmployee = {
//   name: 'Kurao',
//   privilages: ['Wibu'],
//   startDate: new Date(),
// };

//bentuk 2
interface Admin {
  name: string;
  privilages: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

interface ElevatedEmployee extends Employee, Admin {}

const expample1: ElevatedEmployee = {
  name: 'Kurao',
  privilages: ['Wibu'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addingNumber(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(addingNumber('1', '2'));

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name : ' + emp.name);

  if ('privilages' in emp) {
    console.log('Privilages : ' + emp.privilages);
  }
  if ('startDate' in emp) {
    console.log('StartDate : ' + emp.startDate);
  }
}

class Car {
  drive() {
    console.log('Driving.....');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck.....');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimel(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed: ' + speed);
  console.log('🚀 ~ file: app.ts:122 ~ moveAnimel ~ speed:', speed);
}
moveAnimel({ type: 'bird', flyingSpeed: 20 });

const paragraph = document.getElementById('message-output');
//const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

//const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there';
}
