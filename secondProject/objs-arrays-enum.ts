const person: {
  name: string;
  age: number;
} = {
  name: 'Kurao',
  age: 12,
};

let category: string[];
category = ['ngebom'];

let category2: any[]; //this is shit, any is bad for our health
category2 = ['ngebom', 1];

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

for (const tag of product.tags) {
  console.log(tag.toUpperCase());
}
console.log(person.name);
console.log(product.price);

//   const person = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.ADMIN,
//   };
enum Permission {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  permission: any;
} = {
  name: 'kurao',
  age: 20,
  hobbies: ['turu'],
  role: [1, 'brawl'],
  permission: Permission.ADMIN,
};

const person3 = {
  name: 'kurao',
  age: 20,
  hobbies: ['turu'],
  role: [1, 'brawl'],
  permission: Permission.ADMIN,
};

if (person3.permission === Permission.AUTHOR) {
  console.log('is author');
}
// person2.role[1] = 10
// person2.role = [0, "anjau", 6]
