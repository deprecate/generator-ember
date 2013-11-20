require('./expected_controller_files');
require('./expected_view_files');

JS_FILES_GENERATED_BY_MODEL_SUBGEN = [
  'app/scripts/models/user_model.js'
].concat(JS_FILES_GENERATED_BY_CONTROLLER_SUBGEN).concat(JS_FILES_GENERATED_BY_VIEW_SUBGEN);

COFFEE_FILES_GENERATED_BY_MODEL_SUBGEN = [
  'app/scripts/models/user_model.coffee'
].concat(COFFEE_FILES_GENERATED_BY_CONTROLLER_SUBGEN).concat(COFFEE_FILES_GENERATED_BY_VIEW_SUBGEN);
