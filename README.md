# mf-demo
Umi支持Webpack5的Module Federation的Demo案例

### 启动
* `yarn start:mf0` 启动mf0项目
* `yarn start:mf1` 启动mf1项目
* `yarn start:mf2` 启动mf2项目

### 
mf0 为qiankun主项目
单独起mf1 和 mf2 使用 Module Federation 是没问题的
在mf0里面引入mf2 remoteEntry的路径就会出现问题
