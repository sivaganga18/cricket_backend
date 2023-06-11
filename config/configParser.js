// External Dependecncies
const nconf = require('nconf');
const path = require('path');

class ConfigParser {
    constructor() {
        this.config = nconf.file('default', {
            file: path.resolve(__dirname, './defaults.json')
        })
            .file('constant', {
                file: path.resolve(__dirname, './constants.json')
            });
    }

    get(key) {
        return this.config.get(key);
    }
}

module.exports = new ConfigParser();