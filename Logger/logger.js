import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createLogger, format, transports } from "winston";



// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logFilePath = path.join(__dirname, '..','Logs','user.log');



const logger = createLogger({
    level:'info',
    format:format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        format.printf(({timestamp,level,message})=>{
            return `${timestamp} - ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports:[
        new transports.File({filename: logFilePath})
    ]
});


export default logger;  