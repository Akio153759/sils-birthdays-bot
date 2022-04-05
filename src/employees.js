const employees = require('../data/employees.json');
const moment = require('moment');

const getBirthdays = () => {
  return employees.filter(empl => checkBirthday(empl.birthdate));
}

const checkBirthday = (birthdate) => {
  const today = moment().format('DD-MM');
  return today == moment(birthdate).format('DD-MM');
}

const checkNextBirthday = () => {
  const dayDiffList = employees.map(e => {
    const today = moment();
    const birthday = moment(e.birthday).set('y', today.year());
    const diffDays = birthday.diff(today, 'd');
    return { 
      name: e.name,
      birthday: birthday.format('DD-MM'), 
      remaindDays: diffDays >= 0 ? diffDays : diffDays + 365};
  });
  
  return dayDiffList.reduce((prev, curr) => {
    return prev.remaindDays < curr.remaindDays ? prev : curr;
  })
}

module.exports = {
  getBirthdays,
  checkNextBirthday
};