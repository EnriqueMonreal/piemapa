import Piemapa from 'facade/piemapa';

const map = M.map({
  container: 'mapjs',
});

const mp = new Piemapa();

map.addPlugin(mp);
