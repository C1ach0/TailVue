# TailVue - TailwindCss & Vue3
A simple module adding several features and components integrating Tailwindcss and Vue3. This module does not add thousands of components but simply something to create faster with a kind of template.
> Version : `0.0.1`

> Repository : [@c1ach0/TailVue](https://github.com/C1ach0/TailVue)
---
# _Summary
- [Installation](#installation)
- [Body](#body)
- [Navbar](#navbar)
- [Hero Banner](#hero-banner)
- [Contents](#contents)
- [Footer](#footer)
- [Others](#others)

## Installation
In the terminal :
```sh
npm i @c1ach0/tailvue 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
In the ./app/main.js file add following before the new Vue instance:
```ts
import tailvue from "@c1ach0/tailvue";
Vue.use(tailvue)
```
## Body
``The body includes the navigation bar and the footer, you can add your HTML code inside.``

## Navbar

## hero banner

## Contents

## Others

-  **Badge**
```vue
<badge color="red">My Word</badge>
```
_red - pink - blue - green - yellow - gray - indigo - purple_


<!-- # _Contributions

[C1ach0](https://github.com/c1ach0) -->