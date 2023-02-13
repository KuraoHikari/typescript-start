class Department {
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }
  constructor(private readonly id: string, private name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // admis: string[]
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
}
class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }
  set mostRecentReport(value: string) {
    if (!value) throw Error('invalid value');
    this.addRepost(value);
  }
  // admis: string[]
  constructor(id: string, private reposts: string[]) {
    super(id, 'Accounting');
    this.lastReport = reposts[0];
  }

  addEmployee(employee: string): void {
    if (employee === 'Kurao') {
      return;
    }
    this.employees.push(employee);
  }

  addRepost(text: string) {
    this.reposts.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reposts);
  }
}

const addedEmpl = Department.createEmployee('KKR');
console.log(addedEmpl);

const iTDepartment = new ITDepartment('DD2', ['Indra']);
iTDepartment.addEmployee('Kurao');
iTDepartment.addEmployee('Hikari');

const accounting = new Department('DD1', 'Accounting');

accounting.addEmployee('Kurao');
accounting.addEmployee('Hikari');

//accounting.employees.push("aaa") //private proverty

accounting.describe();
accounting.printEmployeeInformation();

const accountingDepartment = new AccountingDepartment('DD5', ['Kurao']);

accountingDepartment.addRepost('anjay');

console.log(accountingDepartment.mostRecentReport);

// console.log(accounting);

// accounting.describe();
