# iapyang-vue-template

## 环境

- 框架：vue
- 样式：sass+postcss
- 脚本：es6
- 语法检测：ESLint
- 打包：webpack

## 目录结构

```
 My-App/     
    |——dev/    
    |   |——component/ 全部组件    
    |   |   |——common/ 全局复用组件    
    |   |   |——layout/ 布局组件
    |   |   |——view/ 路由页面组件
    |   |   |——App.vue 出口输出组件    
    |   |——font/ 字体资源    
    |   |——image/ 图片资源    
    |   |——script/ 第三方插件库    
    |   |——store/ vuex配置目录  
    |   |   |——actions.js
    |   |   |——getters.js
    |   |   |——index.js
    |   |   |——mutation-types.js
    |   |   |——mutations.js
    |   |   |——state.js 
    |   |——style/ 公共样式目录    
    |   |——*.html    
    |   |——router.js 路由配置目录    
    |   |——favico.ico
    |——build/ 静态网站生成目录
    |——.eslintignore eslint忽略列表
    |——.eslintrc eslint配置文件，若不配置，默认使用本包中的   
    |——.gitignore    
    |——.package.json 项目配置目录      
    |__***/**
```

## 安装

```javascript
npm install iapyang-vue-template -D
```

## 配置

在package.json中，添加scripts目录

```javascript
{
  "scripts": {
    "dev": "iapvt"
  }
}
```

运行

```javascript
npm run dev
```

其他任务配置

```javascript
{
  "scripts": {
    "build": "iapvt build"
  }
}
```

