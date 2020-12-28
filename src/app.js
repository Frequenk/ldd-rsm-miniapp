import './app.less';
import 'annar/dist/annar.css';
import { useAppEvent } from 'remax/macro';
import { queryUpgradePackages } from '@/services/commons';

const App = props => {
  useAppEvent('onLaunch', async () => {
    const res = await queryUpgradePackages();
    console.log('res', res)
  })
  return props.children
};

export default App;
