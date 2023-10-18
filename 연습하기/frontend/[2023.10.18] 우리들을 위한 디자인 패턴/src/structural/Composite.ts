// 클라이언트가 개별 객체를 동일한 방식으로 처리할 수 있게 만들어 주는 패턴
namespace Composite {
  interface Employee {
    name: string;

    salary: number;

    roles: string[];

    getName(): string;

    getSalary(): number;

    getRoles(): string[];
  }

  class Developer implements Employee {
    salary: number;
    name: string;
    roles: string[] = [];

    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }

    getName(): string {
      return this.name;
    }

    setSalary(salary: number): void {
      this.salary = salary;
    }

    getSalary(): number {
      return this.salary;
    }

    getRoles(): string[] {
      return this.roles;
    }
  }

  class Designer implements Employee {
    salary: number;
    name: string;
    roles: string[] = [];

    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }

    getName(): string {
      return this.name;
    }

    setSalary(salary: number): void {
      this.salary = salary;
    }

    getSalary(): number {
      return this.salary;
    }

    getRoles(): string[] {
      return this.roles;
    }
  }

  class Organization {
    employees: Employee[] = [];

    addEmployee(employee: Employee): void {
      this.employees.push(employee);
    }

    getNetSalaries(): number {
      let netSalary = 0;

      for (const employee of this.employees) {
        netSalary += employee.getSalary();
      }

      return netSalary;
    }
  }

  const lucid = new Developer('Lucid', 10000);
  const 루시드 = new Developer('루시드', 10000);

  const organization = new Organization();
  organization.addEmployee(lucid);
  organization.addEmployee(루시드);

  console.log(organization.getNetSalaries());
}
