/** @type {HTMLVideoElement} */
const videoOutput = document.querySelector('#video-output');
/** @type {HTMLButtonElement} */
const startButton = document.querySelector('#start-button');
/** @type {HTMLButtonElement} */
const finishButton = document.querySelector('#finish-button');
/** @type {HTMLVideoElement} */
const recordedOutput = document.querySelector('#recorded-video');
/** @type {HTMLButtonElement} */
const downloadButton = document.querySelector('#download-button');

/** @type {MediaStreamConstraints} */
const constraints = {
  video: true,
  audio: false,
};

/** @type {MediaStream} */
let mediaStream = null;
let mediaRecorder = null;
let recordedMediaUrl = null;

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  mediaStream = stream;

  videoOutput.srcObject = stream;
  videoOutput.onloadedmetadata = () => {
    videoOutput.play();
  };
});

startButton.addEventListener('click', () => {
  /** @type {Blob[]} */
  let mediaData = [];

  // 미디어 레코더 생성
  mediaRecorder = new MediaRecorder(mediaStream, {
    mimeType: 'video/webm; codecs=vp9',
  });

  // 데이터 처리 이벤트
  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      mediaData.push(e.data);
    }
  };

  // 녹화 중지 이벤트
  mediaRecorder.onstop = () => {
    const blob = new Blob(mediaData, { type: 'video/webm' });
    recordedMediaUrl = URL.createObjectURL(blob);

    recordedOutput.src = recordedMediaUrl;
  };

  // 녹화 시작
  mediaRecorder.start();
});

finishButton.addEventListener('click', () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
    mediaRecorder = null;
  }
});

downloadButton.addEventListener('click', () => {
  if (recordedMediaUrl) {
    const link = document.createElement('a');
    link.href = recordedMediaUrl;
    link.download = 'video.webm';
    link.click();
  }
});
