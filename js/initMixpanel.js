mixpanel.init('c7c2c9b06ce3aabc07a4cc95d741f5fc', {
    'loaded': function () {
        if (typeof (registerMixpanel.send) == typeof (Function)) {
          registerMixpanel.send();
        }
    }
});

// Listeners functions for mixpanel event view
var listernersMixpanel = [];
var registerMixpanel = {
  register: function( register ) {

    if ( typeof register === typeof(Function) ) {
      listernersMixpanel.push(register);
    }

  },
  send: function() {

    if ( listernersMixpanel ) {
      for ( var i = 0; i < listernersMixpanel.length; i++ ) {
        listernersMixpanel[i]();
      }
    }

  }
};
