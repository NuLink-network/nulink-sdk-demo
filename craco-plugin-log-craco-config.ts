// eslint-disable-next-line import/no-anonymous-default-export
export default {
  overrideCracoConfig: ({ cracoConfig, pluginOptions }) => {
      if (pluginOptions.preText) {
          console.log(pluginOptions.preText);
      }

      console.log(JSON.stringify(cracoConfig, null, 4));

      // Always return the config object.
      return cracoConfig;
  }
};