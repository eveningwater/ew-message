#!/bin/bash

# 执行构建文档相关任务
npm run build:docs

# 执行构建 demo 相关任务
npm run build:demo

npm run build:angular-demo

# 执行构建 React demo 相关任务
npm run build:react-demo

# 执行构建 Vue demo 相关任务
npm run build:vue-demo

# 执行发布文档任务
npm run release-docs
