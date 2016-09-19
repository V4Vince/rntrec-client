import Ember from 'ember';

//Adds commas after 3 digits from the back
function commafy( num ) {
    let noCommaNum = num.toString();
    if (noCommaNum.length >= 4) {
        let newNum = noCommaNum.slice(0, -3) + "," + noCommaNum.slice(-3);
        return newNum;
    } else {
      return num;
    }
}

export function formatCurrency([value]) {

    let dollars = Math.floor(value / 100);
    let dollarsWithComma = commafy(dollars);
    let cents = value % 100;
    let sign = '$';

    if (cents.toString().length === 1) { cents = '0' + cents; }
    return `${sign}${dollarsWithComma}.${cents}`;
    }

export default Ember.Helper.helper(formatCurrency);
