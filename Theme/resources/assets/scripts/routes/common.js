import gnb from '../components/header';

export default {
  containerInit() {},
  init() {
    // JavaScript to be fired on all pages
    this.containerInit();
    gnb();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
