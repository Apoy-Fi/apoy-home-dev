
// The Babel plugin array required for project release
const proPlugins = [];
// If it is currently a production environment, use plugins that remove the console
if (process.env.VUE_APP_MODE === 'prod') {
  // proPlugins.push('transform-remove-console');
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ...proPlugins
  ]
}
