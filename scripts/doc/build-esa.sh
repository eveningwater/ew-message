#!/bin/bash
set -e

# ESA 构建脚本
# 需要在环境变量中设置 BASE_URL=/ 和 SITE_URL=<esa域名>
# 例如: BASE_URL=/ SITE_URL=https://example.esa.com ./scripts/doc/build-esa.sh

# 先构建根项目 ew-message 库（demos 依赖本地 workspace 的 dist/）
npm run build

# 创建 gh-pages 输出目录
node scripts/build-docs.js

# 构建文档站（使用环境变量中的 BASE_URL 和 SITE_URL）
cd docs && npm run build
cd ..

# 复制 demo.html 和 playground 到 gh-pages/
npm run build:demo

# 构建各框架 demo
npm run build:angular-demo
npm run build:svelte-demo
npm run build:react-demo
npm run build:vue-demo
npm run build:preact-demo
npm run build:solid-demo

echo "ESA build completed. Output directory: gh-pages/"
