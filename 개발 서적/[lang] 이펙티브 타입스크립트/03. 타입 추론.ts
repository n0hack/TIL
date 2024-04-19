namespace ch03 {
  // 타입 좁히기
  // 1. 태그된 유니온(Tagged Union)
  interface UploadEvent {
    type: 'upload';
    filename: string;
    content: string;
  }
  interface DownloadEvent {
    type: 'download';
    filename: string;
  }
  type AppEvent = UploadEvent | DownloadEvent;

  function handleEvent(e: AppEvent) {
    switch (e.type) {
      case 'upload':
        console.log(e.content);
        break;
      case 'download':
        console.log(e.filename);
        break;
    }
  }

  // 2. 타입 가드(Type Guard)
  function isInputElement(el: HTMLElement): el is HTMLInputElement {
    return 'value' in el;
  }

  function getElementContent(el: HTMLElement) {
    if (isInputElement(el)) {
      console.log(el.value);
      return;
    }
    console.log(el.textContent);
  }

  const isDefined = <T>(v: T | undefined): v is T => v !== undefined;

  const lucids = ['Lucid1', 'Lucid2', 'Lucid3', 'Lucid4'];
  const members = ['Lucid1', 'Lucid2'].map((who) => lucids.find((l) => l === who)).filter(isDefined);
}
