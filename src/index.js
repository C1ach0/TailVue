import components from'./components.js'

const tailvue = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(`tv-${component.name}`, component)
      }
    }
  }
}

export default tailvue;