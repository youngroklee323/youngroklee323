import Headroom from 'headroom.js';

export default () => {
  const gnb = document.querySelector('.gnb');
  const options = {};
  const hr = new Headroom(gnb, options);
  hr.init();
};
