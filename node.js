
const RPiGPIOButtons = require('rpi-gpio-buttons');
let buttons = new RPiGPIOButtons({ pins: [17] });
buttons.on('clicked', pin => {
  console.log(`Clicked button ${pin}.`);
});

buttons
  .init()
  .catch(error => {
    console.log('ERROR', error.stack);
    process.exit(1);
  });

//setInterval(() => {}, 1 << 30);
