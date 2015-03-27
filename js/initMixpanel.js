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
  register: function( fn ) {

    if ( typeof fn === typeof(Function) ) {
      listernersMixpanel.push(fn);
    }

  },
  send: function() {

    for ( var i = 0; i < listernersMixpanel.length; i++ ) {
      listernersMixpanel[i]();
    }

  }
};
