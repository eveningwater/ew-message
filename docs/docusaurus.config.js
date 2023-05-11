// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ewMessage',
  tagline: '一个基于typescript封装的消息提示框插件',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eveningwater.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ew-message/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eveningwater', // Usually your GitHub org/user name.
  projectName: 'ewMessage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/eveningwater/ewMessage/tree/main/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/eveningwater/ewMessage/tree/main/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ewMessage',
        logo: {
          alt: 'ewMessage',
          src: 'img/logo.svg'
        },
        items: [
          {
            position: 'left',
            label: '指南',
            to: '/docs/intro'
          },
          {
            position: 'left',
            label: '接口',
            to: '/docs/api'
          },
          { to: '/docs/log', label: '更新日志', position: 'left' },
          {
            href: 'https://github.com/eveningwater/ewMessage',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '指南',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: '个人相关',
            items: [
              {
                label: '个人网站',
                href: 'https://www.eveningwater.com/'
              },
              {
                label: '个人项目集合',
                href: 'https://www.eveningwater.com/my-web-projects/'
              },
              {
                label: '颜色选择器插件',
                href: 'https://eveningwater.github.io/ew-color-picker/'
              }
            ]
          },
          {
            title: '更多',
            items: [
              {
                label: '更新日志',
                to: '/docs/log'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/eveningwater/ewMessage'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ewMessage, Inc. Built with eveningwater.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
