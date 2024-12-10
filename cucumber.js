module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['Steps/**/*.ts'],
    paths: ['Features/**/*.feature'],
    format: ['progress-bar'],
    publishQuiet: true
  }
};
