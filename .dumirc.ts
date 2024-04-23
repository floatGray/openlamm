import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/openlamm/',
  publicPath: '/openlamm/',
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {},
  themeConfig: {
    logo: './logo.png',
    nav: [
      { title: 'Tutorial', link: '/tutorial' },
      { title: 'Datasets', link: '/datasets' },
      { title: 'Models', link: '/models' },
      { title: 'Leaderboards', link: '/leaderboards' },
      { title: 'Team', link: '/team' },
    ],
    socialLinks: {
      github: 'https://github.com/OpenGVLab/LAMM',
    },
    prefersColor: { default: 'auto', switch: false },
  },
});
