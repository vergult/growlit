// Copyright (c) 2010 Axel Vergult

jQuery(function($){
	  
  var container = $("<div />");
  container.attr({id: "growlit"});
  $("body").append(container);

  $.growlit = function(body, options){
		
		// Default settings
		var settings = {
			messageType: "notice",
			sticky: false,
			duration: 3000
		};
		
    if ( options ) { 
      $.extend( settings, options );
    }

    var msg = $("<div />").addClass("growlit-msg").addClass(settings.messageType);
    msg.html(body);

    container.append(msg);

		if (settings.sticky) {
			msg.append('<a id="growlit-close"></a>');
			msg.show("drop", { direction: "up", distance: 50 }, 300)
	      .fadeIn(300);
			
			$(".growlit-msg", "#growlit").find("#growlit-close").each(function(index, elt) {
				$(elt).click(function() {
					$(elt).parent().fadeOut(300, function() {
						$(elt).remove();
					});
				});
			});

			$("#growlit-close").each(function(i) {
				$("#growlit-close").click(function() {
					$(this).fadeOut(300, function() {
						$(this).remove();
					});
				});
			});
			
		} else {
			msg.show("drop", { direction: "up", distance: 50 }, 300)
	     	.delay(settings.duration)
	      .fadeOut(300, function(){
	        $(this).remove();
	    	});
		}

    return msg;

  };
});
