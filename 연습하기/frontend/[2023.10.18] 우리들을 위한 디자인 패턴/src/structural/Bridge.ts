// 서로 다른 계층 구조를 가진 두 개의 객체를 연결하는 패턴
interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor() {
    return 'Dark Black';
  }
}

class LightTheme implements Theme {
  getColor() {
    return 'Off white';
  }
}

class AquaTheme implements Theme {
  getColor() {
    return 'Light blue';
  }
}

interface WebPage {
  theme: Theme;
  getContent(): string;
}

class About implements WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent() {
    return `About page in ${this.theme.getColor()}`;
  }
}

class Careers implements WebPage {
  theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent() {
    return `Careers page in ${this.theme.getColor()}`;
  }
}

const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());
