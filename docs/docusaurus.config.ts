import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ewMessage',
  tagline: '一个基于typescript封装的消息提示框插件',
  favicon: 'img/ew-message-logo.svg',

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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eveningwater/ewMessage/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/eveningwater/ewMessage/tree/main/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ewMessage',
        logo: {
          alt: 'ewMessage',
          src: 'img/ew-message-logo.svg'
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
