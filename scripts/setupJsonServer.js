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
  try {
    console.log('Checking if JSON server is already running...');

    const system = os.platform();

    const isMac = system === 'darwin';
    const isLinux = system === 'linux';
    const isUnix = isLinux || isMac;

    const networkStatCommand = isUnix ? 'lsof -i -P -n' : 'netstat -aon';
    const { stdout: stdoutCheckJsonServer } = await exec(networkStatCommand);
    const lines = stdoutCheckJsonServer.split(os.EOL);
    const jsonServerPort = lines.find((line) => line.includes('json-server'));

    if (jsonServerPort) {
      console.log('JSON server is already running.');
      return;
    }

    console.log('JSON server is not running.');
    console.log('Setting up JSON server...');

    const hostname = os.hostname();
    const ip = await lookup(hostname);

    console.log(`Setting up json server on ${ip.address}`);

    await exec('dir');
    const root = path.resolve(__dirname, '..');
    console.log(`entry into path: ${root}`);
    await exec(`cd ${root}`);

    const command = `yarn json-server --host ${ip.address} ./src/services/server.json -p ${PORT} --delay ${DELAY}`;
    console.log('Running command:', command);
    console.log('Waiting for json server to start...');
    console.log(`Access json server at http://${ip.address}:${PORT}...`);

    await exec(command);
  } catch (error) {
    console.log('error... aborting setup');
    console.log(error.message);
    console.error(error);
  }
}

setupJsonServer();
