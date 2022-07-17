const { createApp } = Vue;

createApp({
  data() {
    return {
      perspective: 100,
    };
  },
  methods: {
    setPerspective(e) {
      console.log(e.target.value);
      //   this.perspective = e.target.value;
    },
  },
  computed: {
    setPerspective() {
      return { perspective: this.perspective + 'px' };
    },
  },
}).mount('#app');
