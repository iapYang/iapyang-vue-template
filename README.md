# iapyang-vue-template

[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/stargazers)

[![NPM](https://nodei.co/npm/iapyang-vue-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-vue-template/)

[![NPM](https://nodei.co/npm-dl/iapyang-vue-template.png?months=3&height=3)](https://nodei.co/npm/iapyang-vue-template/)

## Changelog

> V0.6.0 
>
> 🚀 New Feature
>
> - Now we can add mulity htmls to render, please refer it in demo
>
> For more old changelog, please go to Changelog

## Env

- language：vue
- style：sass+postcss
- javascript：es6
- pack：webpack

## Directory Structure

```
 My-App/       
    |——dev/    
    |   |——component/ all vue component    
    |   |   |——common/ common component can be used in global
    |   |   |——layout/ component to build pages
    |   |   |——view/ route page  
    |   |   |——App.vue export vue    
    |   |——font/  
    |   |——image/    
    |   |——script/
    |   |   |——*.js
    |   |   |——plugin/
    |   |——store/ vuex  
    |   |   |——actions.js
    |   |   |——getters.js
    |   |   |——index.js
    |   |   |——mutation-types.js
    |   |   |——mutations.js
    |   |   |——state.js 
    |   |——style/ common style    
    |   |——router.js router    
    |   |——static/
    |——build/ output files
    |——.eslintignore
    |——.eslintrc   
    |——.gitignore    
    |——.package.json
    |——iapvt.config.js
    |__***/**
```

#### The Dev Directory

The `dev` folder contains evreythings you need during your development.

This folder is required.

#### The Component Directory

The `component` folder contains all the .vue files.

This folder is optional.

#### The Font Directory

The `font` folder contains font files.

This folder is optional.

#### The Image Directory

The `image` folder contains image files.

This folder is optional.

#### The Script Directory

The `script` folder contains javascript files.

The index.js file will be placed here.

This folder is required.

#### The Store Directory

The `stroe` folder contains vuex files.

This folder is optional.

#### The Style Directory

The `style` folder contains common scss files.

This folder is optional.

#### router.js

The `router.js` is file for vue router.

This is optional.

#### The Static Directory

The `static` store the files won;t change.

It'll copy to static folder when build.

This is optional.

#### iapvt.config.js

Override webpack engine.

- rules
  - advanced use like less-loader, check here

```javascript
// used when you need more loader 

module.exports = {
  rules: [{
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }  
  }]
};
```



- bundle 

```javascript
// export js can be used by CDN & commonJs & AMD

const path = require('path');

module.exports = {
  bundle: {
    // js location
    path: path.resolve('./dev/component/App.vue'),
    // library name
    name: 'app',
  },
};
```



- htmlOptions
  - for user use their own template, check this demo after updating

```javascript
// This is optional, if you use mine default template before, ignore this options
// with this you can render more than one page

const path = require('path');

module.exports = {
  htmlsOptions: [{
    // template location
    template: path.resolve(__dirname, './dev/view/demo.html'),
    // output js name, like 'demo/index' means index.js in demos folder
    name: 'demo/index',
    // template js files, must be an array
    entry: [path.resolve(__dirname, './dev/script/demo.js')],
  }],
  // default is 'cover', will not render mine default template unless you set it 'combine'
  htmlsHandleType: 'combine',
}
```



## Install

```javascript
npm install iapyang-vue-template -D
```

## Configuration

In package.json, add scripts.

```json
{
  "scripts": {
    "dev": "iapvt",
    "build": "iapvt build",
    "cli": "iapvt cli",
    "gh": "iapvt gh"
  }
}
```

#### usage

```javascript
// for develop
npm run dev
// for build
npm run build
// for upload to git-pages
npm run gh
// for generate blank runable structure
npm run cli
// for generate blank runable structure without router files
npm run cli -r
// for generate blank runable structure without vuex files
npm run cli -s
```
