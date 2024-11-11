/**
 * 사용자 로그 데이타 구조로 제공됩니다.
 * service 와 application은 setup 함수를 이용하여 값을 고정시킬 수 있습니다.
 */
type AppLog = {
  service?: string;
  application?: string;
  screen: string;
  event: string;
  user: string;
  extraData: string;
  clientTimestamp: number;
}

type ClientConfig = Pick<AppLog, 'service' | 'application'>
type AppLogBody = Omit<AppLog, 'service' | 'application' | 'clientTimestamp'>

let clientConfig: ClientConfig = {};
const logQueue: AppLog[] = [];

/**
 * 어플리케이션 범위의 고정값을 지정하기 위한 설정 함수입니다.
 * service 와 application 값을 고정시킬 수 있습니다.
 * @param config 
 */
function setup(config: ClientConfig): void {
  const { service, application } = config;
  clientConfig = { service, application };
}

/**
 * 사용자 로그를 전송 큐에 추가합니다.
 * 실제 로그의 전송은 백그라운드에서 일정 주기로 전송되며 add 함수의 호출과 연동되어있지는 않습니다.
 * @param log 
 * @returns void
 */
function add(log: AppLogBody): void {
  const newLog:AppLog = { 
    ...clientConfig, 
    ...log, 
    clientTimestamp: Date.now(),
  };
  const latestLog: AppLog | null = logQueue.length > 0 ? logQueue[logQueue.length-1] : null;

  if (latestLog !== null) {
    if (newLog.clientTimestamp - latestLog.clientTimestamp <= 3000 && newLog.event === latestLog.event) return;
  }

  logQueue.push(newLog);
}

setInterval(() => {
  logQueue
    .forEach((log) => {
      fetch('http://localhost:1205/api/logs',
        {
          method: 'POST',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...log })
        });
  });

  logQueue.splice(0, logQueue.length);
}, 5000);

/**
 * 사용자 로그 데이타 전송을 위한 라이브러리입니다.
 */
export const AppLogger = {
  setup,
  add,
}

