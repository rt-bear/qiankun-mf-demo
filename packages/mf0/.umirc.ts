import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/mf2', microApp: 'mf2' },
    
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'mf2', // 唯一 id
          entry: 'http://localhost:3001/', // html entry
        },
      ],
      sandbox: false
    },
  },
});
