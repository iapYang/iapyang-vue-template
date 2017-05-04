# iapyang-vue-template

[![GitHub issues](https://img.shields.io/github/issues/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/network)
[![GitHub stars](https://img.shields.io/github/stars/iapYang/iapyang-vue-template.svg?style=flat-square)](https://github.com/iapYang/iapyang-vue-template/stargazers)

[![NPM](https://nodei.co/npm/iapyang-vue-template.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/iapyang-vue-template/)

[![NPM](https://nodei.co/npm-dl/iapyang-vue-template.png?months=1&height=3)](https://nodei.co/npm/iapyang-vue-template/)

## Attention

If there's an eslint error in your files, webpack won't compile successfully.

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
    |   |——favico.ico
    |——build/ output files
    |——.eslintignore
    |——.eslintrc eslint files, if not use, default use mine   
    |——.gitignore    
    |——.package.json     
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

#### favico.ico

The `favico.ico` is file for website icon.

This is optional.

#### .eslintrc

The `.eslintrc` is file for eslint check.

If you create it on your side, the engine will use the one you created.

Instead, It'll use mine default.

This is optional.

## Install

```javascript
npm install iapyang-vue-template -D
```

## Configuration

In package.json, add scripts.

```json
{
  "scripts": {
    "dev": "iapvt"
  }
}
```

run

```javascript
npm run dev
```

other scripts

```json
{
  "scripts": {
    "build": "iapvt build"
  }
}
```

