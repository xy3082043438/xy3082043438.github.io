const {
  createApp
} = Vue;
const app = createApp({
  data() {
    return {
      message: ''
    }
  },
  methods: {
    search() {
      if (this.message) {
        window.location.href = `http://cn.bing.com/search?q=${encodeURIComponent(this.message)}`;
      }
    },
    chat() {
      if (this.message) {
        window.location.href = `http://xyimg.xyz:8080/chatgpt?msg=${encodeURIComponent(this.message)}`;
      }
    }
  }
});
app.mount('#app');