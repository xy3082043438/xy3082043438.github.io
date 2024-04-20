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
        window.location.href = `https://61.139.65.134:32003/chat?message=${encodeURIComponent(this.message)}`;
      }
    }
  }
});
app.mount('#app');