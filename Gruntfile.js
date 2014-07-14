module.exports = function (grunt) {
  grunt.initConfig({
    config: {
      baseurl: 'http://rtsys.informatik.uni-kiel.de/~kieler/files/',
      folder: 'release_pragmatics_2014-05/klayjs/',
      file: 'klay_layered_js_webworkerlinker_nightly_v0.1.0.zip'
    }, 
    curl: {
      'get-klayjs': {
        src: '<%= config.baseurl %><%= config.folder %><%= config.file%>',
        dest: '<%= config.file %>'
      }
    },
    unzip: {
      'klay': '<%= config.file %>'
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
      klay_package: '<%= config.file %>',
      temp_dir: 'klay'
    }
  });

  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['curl', 'unzip', 'rename', 'clean']);
  
};
