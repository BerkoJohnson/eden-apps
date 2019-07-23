module.exports = {
  name: 'eden-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/eden-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
