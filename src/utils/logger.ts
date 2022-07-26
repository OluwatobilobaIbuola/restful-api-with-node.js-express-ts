import pino from "pino"
import pretty from "pino-pretty"
import dayjs from "dayjs"


// const logger = pino(pretty())

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
});

export default logger
