// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My architect tools',
  tagline: '日々の学習とアーキテクチャスキルの備忘録',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mastar3104.github.io', // URL of your site
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-architect-tools/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mastar3104', // Usually your GitHub org/user name.
  projectName: 'my-architect-tools', // Usually your repo name.

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
          // editUrl: 'https://github.com/mastar3104',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // editUrl: 'https://github.com/mastar3104',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'mastar3104 Logo',
          src: 'img/kani2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'toolsSidebar',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designSidebar',
            position: 'left',
            label: 'Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'booksSidebar',
            position: 'left',
            label: 'Books',
          },
          {
            type: 'docSidebar',
            sidebarId: 'templatesSidebar',
            position: 'left',
            label: 'Template',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mastar3104',
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
                label: 'Tools',
                to: '/docs/tools/about',
              },
              {
                label: 'Design',
                to: '/docs/design/about',
              },
              {
                label: 'Books',
                to: '/docs/books/about',
              },
              {
                label: 'Template',
                to: '/docs/templates/about',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'X',
                href: 'https://x.com/mastar3104',
              },
              {
                label: 'Qiita',
                href: 'https://qiita.com/mastar_3104',
              },
              {
                label: 'Zenn',
                href: 'https://zenn.dev/mastar3104',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mastar3104.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [ // metadataプロパティを追加
        {
          name: 'twitter:card',
          content: 'summary_large_image', // Twitterカードの種類。'summary'（小さい画像）または 'summary_large_image'（大きい画像）が一般的
        },
        {
          name: 'twitter:site',
          content: '@mastar3104',
        },
        {
          name: 'twitter:creator',
          content: '@mastar3104'
        },
        {
          property: 'og:title',
          content: 'My architect tools'
        },
        {
          property: 'og:description',
          content: '個人的な学習記録とアーキテクトスキルの備忘録',
        },
        {
          property: 'og:image',
          content: 'https://mastar3104.github.io/my-architect-tools/img/kani2.png',
        },
        {
          property: 'og:url',
          content: 'https://mastar3104.github.io/my-architect-tools/',
        },
      ],
    }),
};

export default config;
