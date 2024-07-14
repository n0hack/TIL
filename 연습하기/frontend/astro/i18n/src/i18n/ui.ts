export const languages = {
  ko: '한국어',
  ja: '日本語',
};

export const defaultLang = 'ko';

export const ui = {
  ko: {
    nav: {
      home: '홈',
      news: '뉴스',
      blog: '블로그',
    },
    languagePicker: {
      title: '언어 선택',
    },
    home: {
      title: '안녕하세요!',
    },
    news: {
      title: '여기는 뉴스 페이지입니다!',
    },
    blog: {
      title: '여기는 블로그 페이지입니다!',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      news: 'ニュース',
      blog: 'ブログ',
    },
    languagePicker: {
      title: '言語を選択',
    },
    home: {
      title: 'こんにちは!',
    },
    news: {
      title: 'こちらはニュースページです！',
    },
    blog: {
      title: 'こちらはブログページです！',
    },
  },
} as const;

export type UI = typeof ui;

export type Language = keyof UI;
