#!/usr/bin/env node
const { spawn } = require('node:child_process');

const apiKey = process.env.HAWK_API_KEY;
if (!apiKey) {
  console.error('hawk-core: HAWK_API_KEY environment variable is required.');
  console.error('Get your key from hawk.business → Settings → Integrations → Claude Desktop Plugin.');
  process.exit(1);
}

const proxyPath = require.resolve('mcp-remote/dist/proxy.js');

const child = spawn(
  process.execPath,
  [
    proxyPath,
    'https://hawk.business/api/plugin/mcp/core',
    '--header',
    `Authorization: Bearer ${apiKey}`,
  ],
  { stdio: 'inherit' }
);

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
