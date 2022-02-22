const employees = require('../data/birthdays.json');
const moment = require('moment');

const getBirthdays = () => {
    return employees.filter(empl => checkBirthday(empl.birthday));
}

const checkBirthday = (birthday) => {
    const today = moment().format('DD-MM');
    return today == moment(birthday).format('DD-MM');
}

module.exports = {
    getBirthdays,
};