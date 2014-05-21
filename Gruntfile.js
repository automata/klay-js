module.exports = function (grunt) {
  grunt.initConfig({
    curl: {
      'klay_layered_js_webworkerlinker_nightly_latest.zip': 'http://rtsys.informatik.uni-kiel.de/~kieler/files/nightly/klayjs/klay_layered_js_webworkerlinker_nightly_latest.zip'
    },
    unzip: {
      'klay': 'klay_layered_js_webworkerlinker_nightly_latest.zip'
    },
    rename: {
      options: {
        ignore: true
      },
      moveThis: {
        src: 'klay/klayjs_worker.js',
        dest: 'klay-worker.js'
      }
    },
    clean: {
      klay_package: 'klay_layered_js_webworkerlinker_nightly_latest.zip',
      temp_dir: 'klay'
    }
  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['curl', 'unzip', 'rename', 'clean']);
  
};
