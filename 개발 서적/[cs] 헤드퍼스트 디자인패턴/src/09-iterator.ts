class MenuItem {
  private name: string;
  private description: string;
  private vegetarian: boolean;
  private price: number;

  constructor(name: string, description: string, vegetarian: boolean, price: number) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }

  isVegetarian() {
    return this.vegetarian;
  }
}

class DinnerMenuItem implements Iterator<MenuItem> {
  private items: MenuItem[];
  private position = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  next(): IteratorResult<MenuItem> {
    const menuItem = this.items[this.position];
    this.position++;
    return {
      done: this.position >= this.items.length,
      value: menuItem,
    };
  }
}

class DinnerMenu {
  private MAX_ITEMS = 6;
  private menuItems: MenuItem[] = [];

  constructor() {
    this.addItem('채식주의자용 BLT', '통밀 위에 (식물성) 베이컨, 상추, 토마토를 얹은 메뉴', true, 2.99);
    this.addItem('BLT', '통밀 위에 베이컨, 상추, 토마토를 얹은 메뉴', false, 2.99);
    this.addItem('오늘의 스프', '감자 샐러드를 겨냥한 오늘의 스프', false, 3.29);
    this.addItem('핫도그', '사워크라우트, 갖은 양념, 양파, 치즈가 들어간 핫도그', false, 3.05);
  }

  addItem(name: string, description: string, vegetarian: boolean, price: number) {
    const menuItem = new MenuItem(name, description, vegetarian, price);
    if (this.menuItems.length >= this.MAX_ITEMS) {
      console.log('죄송합니다. 메뉴가 꽉 찼습니다. 더 이상 추가할 수 없습니다.');
    } else {
      this.menuItems.push(menuItem);
    }
  }

  getMenuItems() {
    return this.menuItems;
  }

  createIterator() {
    return new DinnerMenuItem(this.menuItems);
  }
}

class Waitress {
  private dinnerMenu: DinnerMenu;

  constructor(dinnerMenu: DinnerMenu) {
    this.dinnerMenu = dinnerMenu;
  }

  printMenu() {
    const dinnerMenuIterator = this.dinnerMenu.createIterator();
    this.printMenuIterator(dinnerMenuIterator);
  }

  printMenuIterator(iterator: Iterator<MenuItem>) {
    for (let item = iterator.next(); ; item = iterator.next()) {
      const menuItem = item.value;
      console.log(`${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`);

      if (item.done) {
        break;
      }
    }
  }
}

const dinnerMenu = new DinnerMenu();
const waitress = new Waitress(dinnerMenu);

waitress.printMenu();
