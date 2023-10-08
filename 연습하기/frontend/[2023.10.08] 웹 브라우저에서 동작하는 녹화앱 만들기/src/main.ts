const videoOutput = document.getElementById('video-output') as HTMLVideoElement;
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const finishButton = document.getElementById('finish-button') as HTMLButtonElement;

const videoRecorded = document.getElementById('video-recorded') as HTMLVideoElement;
const downloadButton = document.getElementById('download-button') as HTMLButtonElement;

let stream: MediaStream;
let mediaRecorder: MediaRecorder | null = null;
let recorderedMediaUrl: string;

const constraints: MediaStreamConstraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
  videoOutput.srcObject = mediaStream;
  videoOutput.onloadedmetadata = () => {
    videoOutput.play();
  };

  stream = mediaStream;
});

startButton.addEventListener('click', () => {
  const mediaData: Blob[] = [];

  mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

  // 전달받은 데이터를 처리하는 이벤트 핸들러 등록
  mediaRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      mediaData.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(mediaData, { type: 'video/webm' });
    recorderedMediaUrl = URL.createObjectURL(blob);
    videoRecorded.src = recorderedMediaUrl;
  };

  mediaRecorder.start();
});

finishButton.addEventListener('click', () => {
  if (mediaRecorder) {
    mediaRecorder.stop();
    mediaRecorder = null;
  }
});

downloadButton.addEventListener('click', () => {
  if (recorderedMediaUrl) {
    const a = document.createElement('a');
    a.href = recorderedMediaUrl;
    a.download = 'video.webm';
    a.click();
  }
});
