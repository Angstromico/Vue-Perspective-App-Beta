Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      showCopy: false,
      message: 'CSS copied to clipboard!',
      color: '#8d81f3',
      letterColor: 'white',
    }
  },
  computed: {
    colorChange() {
      return { color: this.color }
    },
    countainerColor() {
      return {
        border: `1px solid ${this.color}`,
      }
    },
    backgroundColor() {
      return {
        background: this.color,
        color: this.letterColor,
      }
    },
    box() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
        background: `${this.color}`,
      }
    },
  },
  methods: {
    resetValues() {
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
      this.color = '#8d81f3'
    },
    random(number) {
      return Math.floor(Math.random() * number)
    },
    randomColor() {
      const rgb1 = this.random(255)
      const rgb2 = this.random(255)
      const rgb3 = this.random(255)
      rgb1 + rgb2 + rgb3 > 381
        ? (this.letterColor = 'black')
        : (this.letterColor = 'white')
      this.color = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')'
    },
    async copy() {
      const text = `transform:${this.box.transform};`
      await navigator.clipboard.writeText(text)
      this.showCopy = true
      this.randomColor()
    },
  },
  watch: {
    showCopy(newShow, oldShow) {
      if (newShow === true) setTimeout(() => (this.showCopy = false), 5000)
    },
  },
}).mount('#app')
