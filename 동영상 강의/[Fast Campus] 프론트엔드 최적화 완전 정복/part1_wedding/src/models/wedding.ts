export interface Wedding {
  id: number;
  date: string;
  location: Location;
  groom: Person & {
    parents: Person[];
  };
  bride: Person & {
    parents: Person[];
  };
  message: {
    intro: string;
    invitation: string;
  };
  galleryImages: string[];
  attendCount: number;
}

export interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  link: string;
  waytocome: {
    metro: string[];
    bus: string[];
  };
}

export interface Account {
  bankName: string;
  accountNumber: string;
  kakaopayLink: string;
}

export interface Person {
  name: string;
  account: Account;
  phoneNumber: string;
}
