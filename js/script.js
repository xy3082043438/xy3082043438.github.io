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
    }
  }
});
app.mount('#app');