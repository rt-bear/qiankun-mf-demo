import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require("webpack").container;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {
    slave: {},
  },
  fastRefresh: {},
  webpack5: {},
  dynamicImport:{},
  // mfsu:{},
  chainWebpack(memo) {
    memo.output.publicPath('auto');
    memo
      .plugin('mf')
      .use(ModuleFederationPlugin, [{
        name: "mf2",
        remotes: {
          mf1: "mf1@//localhost:3000/remoteEntry.js"
        },
        shared: { react: { eager: true }, "react-dom": { eager: true } },
      }])
  },
});
