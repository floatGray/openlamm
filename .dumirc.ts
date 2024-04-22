import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/openlamm/',
  publicPath: '/openlamm/',
  themeConfig: {
    logo: '/public/logo.png',
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
  },
});
