const version = require('../package.json');
const path = require('path');
const alias = require('@rollup/plugin-alias');
const replace = require('@rollup/plugin-replace');
const node = require('rollup-plugin-node-resolve');
const ts = require('rollup-plugin-typescript');
const scss = require('rollup-plugin-scss');
const banner =
  '/*!\n' +
  ` * ewMeassage.js v${version}\n` +
  ` * (c) 2023-${new Date().getFullYear()} eveningwater \n` +
  ' * Released under the MIT License.\n' +
  ' */';

const resolve = p => path.resolve(__dirname, '../', p);

const builds = {
  'ewMessage-umd-dev': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ew-message.js'),
    format: 'umd',
    env: 'development',
    banner
  },
  'ewMessage-umd-build': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ew-message.min.js'),
    format: 'umd',
    env: 'production',
    banner
  },
  'ewMessage-esm-dev': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ew-message.esm.js'),
    format: 'esm',
    env: 'development',
    banner
  },
  'ewMessage-esm-build': {
    entry: resolve('src/index.ts'),
    dest: resolve('dist/ew-message.esm.min.js'),
    format: 'esm',
    env: 'production',
    banner
  }
};
function genConfig(name) {
  const opts = builds[name];
  const config = {
    input: opts.entry,
    plugins: [
      alias({
        entries: Object.assign({}, opts.alias)
      }),
      ts(),
      scss({
        include: ['/**/*.css', '/**/*.scss', '/**/*.sass'],
        output: 'dist/ew-message.min.css',
        failOnError: true,
        outputStyle: 'compressed' //压缩
      }),
      node()
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || 'ewMessage',
      exports: 'auto'
    }
  };

  // console.log('pluging', config.plugins)

  // built-in vars
  const vars = {
    __VERSION__: version,
    __DEV__: `process.env.NODE_ENV !== 'production'`
  };
  // build-specific env
  if (opts.env) {
    vars['process.env.NODE_ENV'] = JSON.stringify(opts.env);
    vars.__DEV__ = opts.env !== 'production';
  }

  vars.preventAssignment = true;
  config.plugins.push(replace(vars));

  Object.defineProperty(config, '_name', {
    enumerable: false,
    value: name
  });

  return config;
}

exports.getBuild = genConfig;
exports.getAllBuilds = () => Object.keys(builds).map(genConfig);
