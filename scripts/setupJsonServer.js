/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

const util = require('util');
const os = require('os');
const dns = require('dns');
const child_process = require('child_process');

const exec = util.promisify(child_process.exec);
const lookup = util.promisify(dns.lookup);

const path = require('path');

const PORT = '3333';
const DELAY = '700';

async function setupJsonServer() {
  const hostname = os.hostname();
  const ip = await lookup(hostname);
  const url = `http://${ip.address}:${PORT}`;

  try {
    console.log('Checking if JSON server is already running...');

    const system = os.platform();

    const isMac = system === 'darwin';
    const isLinux = system === 'linux';
    const isUnix = isLinux || isMac;

    const networkStatCommand = isUnix ? 'lsof -i -P -n' : 'netstat -aon';

    try {
      const { stdout: stdoutCheckJsonServer } = await exec(networkStatCommand);
      const lines = stdoutCheckJsonServer.split(os.EOL);

      const foundJsonServerPort = isUnix
        ? lines.find((line) => line.includes(PORT) && line.includes(ip.address))
        : lines.find((line) => line.includes('json-server'));

      if (foundJsonServerPort) {
        const message = isUnix
          ? `Port ${PORT} is already in use.`
          : `JSON server is already running on port ${PORT}.`;

        console.log(message);
        return;
      }
    } catch (error) {
      console.log(error.message);
    }

    console.log('JSON server is not running.');
    console.log('Setting up JSON server...');

    console.log(`Setting up json server on ${ip.address}`);

    const root = path.resolve(__dirname, '..');
    console.log(`entry into path: ${root}`);
    await exec(`cd ${root}`);

    const command = `yarn json-server --host ${ip.address} ./src/services/server.json -p ${PORT} --delay ${DELAY}`;
    console.log('Running command:', command);
    console.log('Waiting for json server to start...');
    console.log(`Access json server at ${url}...`);

    await exec(command);
  } catch (error) {
    console.log('error... aborting setup');
    console.log(error.message);
    console.error(error);
  }
}

setupJsonServer();
