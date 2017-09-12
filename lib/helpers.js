import chalk from 'chalk'
import env from 'node-env-file'

/**
 * Load .env in the root directory of the this project
 * @return {Object}
 */
global.env = env(`${__dirname}/../.env`)

/**
 * Get cookie from cookie by name
 * @param {String} cookie
 * @param {String} name
 * @return {String}
 */
global.getCookie = (cookie, name) => {
    let value = "; " + cookie
    let pars = value.split("; " + name + "=")
    if (parts.length == 2) return parts.pop().split(";").shift()
}

/**
 * Helper for chalk
 * @param {String} message
 * @param {String} color
 * @return {String}
 */
global.paint = (message, color) => {
    return chalk[color](message)
}

/**
 * Chalk colors
 * @return {Object}
 */
global.CHALK_COLOR = {
    log: 'white',
    info: 'blue',
    warn: 'yellow',
    error: 'red',
    dir: 'gray',
    time: 'white',
    timeEnd: 'white',
    assert: 'cyan'
}

/**
 * Helper for console
 */
global.logger = (message, type) => {
    if (type == undefined || type == 'log') {
        type = 'log'
    }

    console[type](paint(message, CHALK_COLOR[type]))
}

/**
 * Logger type for console
 * @return {Object}
 */
global.LOGGER_TYPE = {
    DEFAULT: 'log',
    INFO: 'info',
    WARNING: 'warn',
    DANGER: 'error',
    DIRECTORY: 'dir',
    TIME: 'time',
    TIME_END: 'timeEnd',
    TRACE: 'trace',
    ASSERT: 'assert'
}
