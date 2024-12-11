module.exports = {
  default: {
    paths: ['Features/**/*.feature'],
    require: ['Steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress', 'html:reports/cucumber-report.html']
  }
};
