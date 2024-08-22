export default {
  props: ['color'],
  template: `
    <div :style="{color}">演示文字 - {{color}}</div>
  `
}