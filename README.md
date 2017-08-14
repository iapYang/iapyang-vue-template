# iapyang-vue-template

[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/stargazers)

[![NPM](https://nodei.co/npm/iapyang-vue-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-vue-template/)

[![NPM](https://nodei.co/npm-dl/iapyang-vue-template.png?months=3&height=3)](https://nodei.co/npm/iapyang-vue-template/)

## Changelog

> v0.5.6 update template & for now, not using vue, the css imported in js can be extracted too
>
> v0.5.5 bug fix and test
>
> v0.5.4 add bundle option
>
> v0.5.3 fix OS node bug
>
> v0.5.2 on windows still use ip
>
> v0.5.1 add capabilities to windows
>
> v0.5.0 officially remove vendor and plugins folder, if you wan to use js can't be required, try [imports-loader](https://github.com/webpack-contrib/imports-loader)
>
> ​            update dependencies
>
> ​            add template option
>
> v0.4.1 hot fix! fix babel-loader not working fine.
>
> v0.4.0 we don't need to write index.html anymore
>
> v0.3.0 change part of the build structure & add gh-pages function
>
> v0.2.9 update dependencies versions
>
> v0.2.8 add cli command for use, see [here](#configuration)

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

```javascript
const path = require('path');

// Options
{
  // the generate html' title
  title: 'demo',
  // template html files
  tempalte: path.reslove('path/to/template.html'),
  // bundle options
  bundle: {
    path: 'path/to/needBundleFile.js',
    name: 'libraryNmae'
  },
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

