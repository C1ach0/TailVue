# TailVue - TailwindCss & Vue3
> ```A simple module adding several features and components integrating Tailwindcss```

---

## Installation
In the terminal :
```sh
$npm i @c1ach0/tailvue 
```
In the ./app/main.js file add following before the new Vue instance:
```ts
import tailvue from "@c1ach0/tailvue";
Vue.use(tailvue)
```
---



## Others

-  **Badge**
```vue
<badge color="red">My Texte</badge>
```
_red - pink - blue - green - yellow - gray - indigo - purple_

#### Color Generator :
```ts
methods: {
    getRandomColor() {
        const colors = [
        "red", "pink", "blue",
        "green", "yellow", "gray",
        "indigo", "purple"
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
}
```

---

- 