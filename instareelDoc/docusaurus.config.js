// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Instareel Documentation',
  tagline: 'Download Instagram Reels and Posts',
  favicon: 'img/instareel500.png',

  // Set the production url of your site here
  url: 'https://brahmbeyond.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/instareel/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'brahmbeyond', // Usually your GitHub org/user name.
  projectName: 'instareel', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/brahmbeyond/instareel/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/brahmbeyond/instareel/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      headTags: [
        { tagName: 'script', attributes: { src: '/custom.html' } },
      ],
      metadata: [
        { name: 'google-site-verification', content: 'PuYRytGholIdQFc80WjEHwDV_qSWcfjHAFInlQ7W7kI' },
        { name: 'yandex-verification', content: 'daa743f9d351ed33' },
        { name: 'description', content: 'Instareel is a free JavaScript library for downloading Instagram reels, posts, and images.' },
        { name: 'keywords', content: 'Instagram, Reels, Posts, Downloader, JavaScript, Library, Free, Images, Instareel' },
      ],

      navbar: {
        title: 'Instareel',
        logo: {
          alt: 'Instareel',
          src: 'img/instareel500.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'right',
          },
          { href: 'http://brahmbeyond.code.blog/', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/brahmbeyond/instareel/',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/brahmbeyond',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brahmbeyond',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'http://brahmbeyond.code.blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/brahmbeyond/instareel/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Instareel, Developed by <a href='https://github.com/brahmbeyond'>Shubham Yadav</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
