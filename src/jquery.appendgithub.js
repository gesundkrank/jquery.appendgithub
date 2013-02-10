/*!
 * jQuery appendGitHub Plugin v0.1
 * http://anycook.de
 *
 * Copyright (c) 2011, 2013 Jan Grassegger
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function ( $, window, document, undefined ){
	
	$.fn.appendGitHub = function(path, options){		
		
		return this.each(function(){
			var $this = $(this);
      	
	      	var settings = {
	      		domain : "https://api.github.com/repos/",
	      		parseMarkdown : true
	      	}
	      	
	      	$.extend(settings, options);
	      	
	      	$.ajax({
				url:settings.domain+path,
				type:"GET",
				dataType:"jsonp",
				success:function(json){
					var content = Base64.decode(json.data.content);
					
					if(settings.parseMarkdown)
						content = marked(content);
					$this.append(content);
				}
			});
		});
      	
	}
})( jQuery, window, document );
