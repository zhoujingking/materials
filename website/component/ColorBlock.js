import { ref } from 'vue'
export default {
  props: ['color'],
  template: `
    <div class="row" style="align-items: center;">
      <div :style="{width: '100px', height: '30px', backgroundColor: color}"></div>
      <div style="margin-left: 8px;">{{color}}</div>
    </div>
  `
}