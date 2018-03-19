const x = require('./moduleX');
const y = require('./moduleY');

console.log(x);

(async () => {

    const y2 = await y;

    console.log(y2);

})();
