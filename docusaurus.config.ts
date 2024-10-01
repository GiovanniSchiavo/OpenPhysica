import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'OpenPhysica',
  tagline: 'From students to students',

  // Set the production url of your site here
  url: 'https://openphysica.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GiovanniSchiavo/OpenPhysica',
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
            'https://github.com/GiovanniSchiavo/OpenPhysica',
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
    navbar: {
        title: 'OpenPhysica',
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorials',
          // },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Analisi1', // foldername
            label: 'Analisi 1',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Analisi2', // foldername
            label: 'Analisi 2',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Fisica1', // foldername
            label: 'Fisica 1',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Fisica2', // foldername
            label: 'Fisica 2',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Fismat', // foldername
            label: 'Fisica Matematica',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'FisicaTeorica', // foldername
            label: 'Fisica Teorica',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Lab3', // foldername
            label: 'Laboratorio di Fisica',     // navbar title
          },
          {
            type: 'docSidebar',  // docSidebar
            position: 'left',
            sidebarId: 'Analisi3', // foldername
            label: 'Analisi 3',     // navbar title
          },
        ],
      },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} OpenPhysica, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      src: 'https://www.geogebra.org/apps/deployggb.js',
      async: true,
    },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  baseUrlIssueBanner: false,
};

export default config;
