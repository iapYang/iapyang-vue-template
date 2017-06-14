# iapyang-vue-template

[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/stargazers)

[![NPM](https://nodei.co/npm/iapyang-vue-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-vue-template/)

[![NPM](https://nodei.co/npm-dl/iapyang-vue-template.png?months=1&height=3)](https://nodei.co/npm/iapyang-vue-template/)

## Attention

This project is not finished yet, be careful before downloading it.

## Changelog

> v0.3.0 change part of the build structure & add gh-pages function
>
> v0.2.9 update dependencies versions
>
> v0.2.8 add cli command for use, see [here](#configuration)

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
    |   |   |——vendor/
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

The  `plugins/` directory store files which cannot be used by npm

The  `vendor` directory store files won't be compiled by webpack and include as script tag in html

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

```javascript
// Options
{
  // the generate html' title
  title: 'demo',
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
// for upload to git-pages
npm run iapvt gh
// for generate blank runable structure
npm run iapvt cli
// for generate blank runable structure without router files
npm run iapvt cli -r
// for generate blank runable structure without vuex files
npm run iapvt cli -s
```

