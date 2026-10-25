import eslintPluginYml from 'eslint-plugin-yml';

export default [
  // Include the recommended config for YAML files
  ...eslintPluginYml.configs.recommended,
];
