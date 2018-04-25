
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to hide drafts from the output.
 *
 * @return {Function}
 */

function plugin(){
  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];
      if (isDraft(file, data)) delete files[file];
    });
  };
}

/**
 * Permit multiple indiciators of a draft
 *
 * @return Boolean
 */
function isDraft (name, data) {
  return (name.match(/^[_.]/) || data.draft) ? true : false
}