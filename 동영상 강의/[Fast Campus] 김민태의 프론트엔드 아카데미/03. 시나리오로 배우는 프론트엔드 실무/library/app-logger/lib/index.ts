let clientConfig = {};
const logQueue = [];

const setup = ({ service, application }) => {
  clientConfig = { service, application };
}

const add = log => {
  const newLog = { 
    ...clientConfig, 
    ...log, 
    timestamp: Date.now(),
  };
  const latestLog = logQueue.length > 0 ? logQueue[logQueue.length-1] : null;

  if (latestLog !== null) {
    if (newLog.timestamp - latestLog.timestamp <= 3000 && newLog.event === latestLog.event) return;
  }

  logQueue.push(newLog);
}

setInterval(() => {
  logQueue
    .map(log => ({ ...log, clientTimestamp: log.timestamp }))
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

function Adder(screen, event, user, extraData = '') {
  add({ screen, event, user, extraData });
}

Adder.setup = setup;
Adder.add = add;

export const AppLogger = Adder;
