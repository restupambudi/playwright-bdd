module.exports = {
  default: {
    paths: ['Features/**/*.feature'],
    require: ['Steps/**/*.ts', 'helpers/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:reports/cucumber-report.html']
  }
};
