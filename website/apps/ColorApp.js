import ColorBlock from '../component/ColorBlock.js'
import TextBlock from '../component/TextBlock.js'
export default {
  setup() {
    const colors = [
      '#34dd65', '#425cec', '#ff4a9e', '#f6f6f7', '#ff5c35'
    ];
    const textColors = [
      '#000000D8', '#000000A5', '#00000072', '#4007a2', '#3776ff', '#4b84ff', '#6d7c90'
    ]
    return { 
      colors,
      textColors,
    }
  },
  template: `
    <h1>colors</h1>
    <div>ref- <a href="https://element-plus.org/en-US/component/color.html">element plus colors</a></div>
    <div class="row" style="margin-top: 20px;">
      <div>
        <ColorBlock v-for="(color, index) in colors" :color="color" />
      </div>
      <div style="margin-left: 40px;">
        <TextBlock v-for="(color, index) in textColors" :color="color" />
      </div>
    </div>
    
  `,
  components: {
    ColorBlock,
    TextBlock
  }
}