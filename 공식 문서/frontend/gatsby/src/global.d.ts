declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.gif' {
  const value: string;
  export = value;
}

declare module 'react-use-fusejs';
