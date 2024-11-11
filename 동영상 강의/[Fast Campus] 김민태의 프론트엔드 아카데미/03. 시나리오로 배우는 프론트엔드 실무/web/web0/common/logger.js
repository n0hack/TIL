const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const process = require('process');
 
const { combine, timestamp, label, printf } = winston.format;
const logDir = `${process.cwd()}/logs`;
 
const logFormat = printf(({ level, message, label, timestamp }) => {
   return `${timestamp} [${label}] ${level}: ${message}`;
});
