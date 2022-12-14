// eslint-disable-next-line import/no-extraneous-dependencies
const { ncp } = require("ncp");

ncp("./node_modules/pspdfkit/dist/pspdfkit-lib", "./public/js/pspdfkit-lib", (err) => {
  if (err) {
    console.error(err);
  }
});
