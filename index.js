function createAllexError(inherit){
  function AllexError(code,description){
    var ret = Error.call(this,description);
    ret.code = code;
    return ret;
  }
  inherit(AllexError,Error);
  return AllexError;
};

module.exports = createAllexError;
