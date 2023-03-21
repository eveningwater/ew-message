import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
const rollupTypescript = require('rollup-plugin-typescript');
export default {
  input: 'src/index.ts',
  output: [
    {
      file: './dist/ew-message.js',
      format: 'umd',
      name: 'ewMessage'
    },
    {
      file: './dist/ew-message.min.js',
      format: 'umd',
      name: 'ewMessage',
      plugins: [terser()]
    },
    {
      file: './dist/ew-message.esm.js',
      format: 'es',
      name: 'ewMessage'
    },
    {
      file: './dist/ew-message.esm.min.js',
      format: 'es',
      name: 'ewMessage',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    rollupTypescript(),
    scss({
      include: ['/**/*.css', '/**/*.scss', '/**/*.sass'],
      output: 'dist/ew-message.min.css',
      failOnError: true,
      outputStyle: 'compressed' //压缩
    })
  ]
};
