const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (typeof members !== 'object' || members === null) {
    return false;
  }
  let aka = new Array();
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === `string`) {
      let letter = members[i].trim().charAt();
      aka.push(letter);
    }
  }
  return aka.sort().join("").toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
