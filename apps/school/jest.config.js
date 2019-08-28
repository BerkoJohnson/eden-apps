module.exports = {
  name: 'school',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/school',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
