import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import prettier from 'rollup-plugin-prettier';
import dts from 'rollup-plugin-dts';


const packageJson = require('./package.json');

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      name: 'app-logger'
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.d.ts',
      format: 'esm',
      plugins: [
        dts(),
        prettier({
          tabWidth: 2,
        }),
      ],
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs(),
    postcss(),
    terser()
  ]
}
