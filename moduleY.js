const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = (async () => {

    await delay(1000);

    return { y: 'hi' };
})();
