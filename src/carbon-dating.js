const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //let sampleActivityNumber = parseInt(sampleActivity, 10);
  /*if (Number(sampleActivity) !== `number`) {
    return false;
  }*/
  let sampleActivityNumber = parseFloat(sampleActivity);
  if (sampleActivityNumber === NaN) {
    return false;
  }
  if (typeof sampleActivity !== `string` || sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {
    return false;
  }  else {
      let a = MODERN_ACTIVITY / sampleActivityNumber;
      let k = 0.693 / HALF_LIFE_PERIOD;
      let t = Math.log(a) / k;
      return Math.ceil(t);
  }
}

module.exports = {
  dateSample
};
