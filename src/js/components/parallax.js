import Rellax from 'rellax';

const parallaxClassName = '.js-parallax';

$(parallaxClassName).length && new Rellax(parallaxClassName, {
  center: true,
  speed: 1.5
});
