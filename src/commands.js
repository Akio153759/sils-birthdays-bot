const employees = require('../src/employees');

const handleCommands = async (message) => {
  
  switch (message.content.toLowerCase()) {
    case '$help':
      let data = '```\n';
      data += '$proximocumple : Para saber el próximo cumplañito';
      data = '```\n';
      await message.channel.send(data)
      break;
    case '$proximocumple':
      const employee = employees.checkNextBirthday();
      if (employee)
        await message.channel.send(`${employee.name} es el próximo en cumplir años. El ${employee.birthday} :partying_face: `);
      break;
    default:
      await message.channel.send('`'+ message.content + '` :drake_no: ...' + 'No se que quisite decir. Tipeá `$help` :drake_yes: ')
      break;
  }
}

export { handleCommands };