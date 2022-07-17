const { createApp } = Vue;

createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    onReset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    onCopy() {
      // create new textare html element
      const el = document.createElement('textarea');
      // set the element to read only
      el.setAttribute('readonly', '');
      // hide the element by setting position absolute and move from outside container set up the left position
      el.style.position = 'absolute';
      el.style.left = '-99999px';
      // set the value -> the value of the tranform property in setPerspective computed
      el.value = `transform: ${this.setPerspective.transform}`;

      // insert the element into html
      document.body.append(el);
      // run the function to select value inside textarea
      el.select();
      // make user copy the value inside textarea
      document.execCommand('copy');
      // last step is to remove element, after the user copied the value
      document.removeChild(el);
    },
  },
  computed: {
    setPerspective() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
}).mount('#app');
