const path = require('path');
const svgrPlugin = require('vite-plugin-svgr');
const macrosPlugin = require('vite-plugin-babel-macros');
const react = require('@vitejs/plugin-react');

module.exports = {
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter(
      (plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react'))
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@static': path.resolve(__dirname, '../src/static'),
    };

    config.plugins = [
      ...config.plugins,
      react({
        babel: {
          plugins: [
            'babel-plugin-macros',
            [
              '@emotion/babel-plugin-jsx-pragmatic',
              {
                export: 'jsx',
                import: '__cssprop',
                module: '@emotion/react',
              },
            ],
            ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
          ],
        },
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ];

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
};
