# iapyang-vue-template

[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/stargazers)

[![NPM](https://nodei.co/npm/iapyang-vue-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-vue-template/)

[![NPM](https://nodei.co/npm-dl/iapyang-vue-template.png?months=1&height=3)](https://nodei.co/npm/iapyang-vue-template/)

## Attention

This project is not finished yet, be careful before downloading it.

## Changelog

> v0.2.6 add cli command for use, see [here](#Configuration)

## Language

[中文](https://github.com/iapYang/iapyang-vue-template/blob/master/README-zh.md)

## Env

- language：vue
- style：sass+postcss
- javascript：es6
- grammar check：ESLint
- pack：webpack

## Directory Structure

```
 My-App/       
    |——dev/    
    |   |——component/ all vue component    
    |   |   |——common/ common component can be used in global
    |   |   |——layout/ 
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
    |   |——*.html
    |   |——router.js router    
    |   |——static/
    |——build/ output files
    |——.eslintignore
    |——.eslintrc eslint files, if not use, default use mine   
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

`*.js` is the files which is one to one correspondence with `*.html`.

In additional, the eslint won't check files under `script/plugin`

This folder is optional.

#### The Store Directory

The `stroe` folder contains vuex files.

This folder is optional.

#### The Style Directory

The `style` folder contains common scss files.

This folder is optional.

#### *.html

The `*.html` is file for website, use the `*.js` for script.

This is required.

#### router.js

The `router.js` is file for vue router.

This is optional.

#### The Static Directory

The `static` store the files won;t change.

It'll copy to static folder when build.

This is optional.

#### .eslintrc

The `.eslintrc` is file for eslint check.

If you create it on your side, the engine will use the one you created.

Instead, It'll use mine default.

This is optional.

#### iapvt.config.js

Override webpack engine.

```javascript
// Options
{
  // close eslint when compile, otherwise it'll fail to complie when eslint has error or warning
  eslint: false,
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
    "iapvt": "iapvt"
  }
}
```

#### usage

```javascript
// for develop
npm run iapvt
// for build
npm run iapvt build
// for generate blank runable structure
npm run iapvt cli
// for generate blank runable structure without router files
npm run iapvt cli -r
// for generate blank runable structure without vuex files
npm run iapvt cli -s
```

