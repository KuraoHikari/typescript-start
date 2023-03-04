const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then((data) => {
  data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'kurao' }, { hikari: 'yeay' });
console.log(mergeObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['aaaa', ['skamslak']]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}
console.log('🚀 ~ file: app.ts:37 ~ extractAndConvert:', extractAndConvert({ name: 'kurao' }, 'name'));

class StorageData<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new StorageData<string>();
textStorage.addItem('Kurao');
textStorage.addItem('Hikari');
textStorage.removeItem('Kurao');
console.log(textStorage.getItems());

const numberStorage = new StorageData<number>();

interface CourseGoal {
  title: string;
  description: string;
  compleUntil: Date;
}

function createCourseGoal(title: string, description: string, compleUntil: Date) {
  let courseGoalObj: Partial<CourseGoal> = {};
  courseGoalObj.title = title;
  courseGoalObj.description = description;
  courseGoalObj.compleUntil = compleUntil;
  return courseGoalObj as CourseGoal;
}

const namesMe: Readonly<string[]> = ['Kurao', 'Hikari'];
// namesMe.push('Indra');
