'use strict';

var vue = require('vue');

var script = vue.defineComponent({
  props: {
    color: {
      type: String,
      default: "red",
    },
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("span", {
    class: vue.normalizeClass([[
      { 'bg-blue-100 text-blue-800 border-blue-400': _ctx.textColor == 'blue' },
      { 'bg-gray-100 text-gray-800 border-gray-500': _ctx.textColor == 'gray' },
      { 'bg-red-100 text-red-800 border-red-400': _ctx.textColor == 'red' },
      { 'bg-green-100 text-green-800 border-green-400': _ctx.textColor == 'green' },
      {
        'bg-yellow-100 text-yellow-800 border-yellow-300':
          _ctx.textColor == 'yellow',
      },
      {
        'bg-indigo-100 text-indigo-800 border-indigo-400':
          _ctx.textColor == 'indigo',
      },
      {
        'bg-purple-100 text-purple-800 border-purple-400':
          _ctx.textColor == 'purple',
      },
      { 'bg-pink-100 text-pink-800 border-pink-400': _ctx.textColor == 'pink' },
    ], "text-xs font-medium mr-2 px-2.5 py-0.5 rounded border"])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "src/components/others/Badge.vue";

var components = {
    Badge: script,
    
};

const tailvue = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(`tv-${component.name}`, component);
      }
    }
  }
};

module.exports = tailvue;
