import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const dirs = (p) => readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());
const modules = dirs('src');

const config = (moduleDir) => ({
  input: `src/${moduleDir}/index.ts`,
  output: [
    {
      file: `src/${moduleDir}/build/index.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `src/${moduleDir}/build/index.es.js`,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    external(),
    url(),
    json(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    resolve({ browser: true }),
    typescript(),
    terser(),
  ],
});

export default (commandLineArgs) => {
  if (commandLineArgs.hasOwnProperty('package')) return [config(commandLineArgs.package)];
  return modules.map((m) => config(m));
};
