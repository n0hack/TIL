import commonConfig from './config.common';
import developConfig from './config.develop';
import prodConfig from './config.prod';

export default process.env.RUNTIME === 'prod' 
  ? ({ ...commonConfig, ...prodConfig })
  : ({ ...commonConfig, ...developConfig })
