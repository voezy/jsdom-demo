const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { start, shutdown } = require('./server');

start();

fs.readFile(path.resolve(__dirname, './index.html'), 'utf8' , (err, html) => {
  if (err) {
    console.error(err)
    return
  }

  const virtualConsole = new VirtualConsole();
  virtualConsole.sendTo(console);
  virtualConsole.on('info', function(info) {
    if (info === 'closeServer') {
      shutdown();
      process.exit(1);
    }
  });
  const dom = new JSDOM(html, {
    runScripts: "dangerously",
    virtualConsole
  });
})
