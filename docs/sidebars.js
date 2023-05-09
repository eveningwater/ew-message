/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: '指南',
      id: 'intro'
    },
    {
      type: 'category',
      label: '接口',
      items: ['api/api', 'api/instance', 'api/utils']
    },
    {
      type: 'doc',
      label: '更新日志',
      id: 'log'
    }
  ]
};

module.exports = sidebars;
