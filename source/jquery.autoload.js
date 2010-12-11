/**
 * Autoload
 */
(function($) {
// Autoload namespace: private properties and methods
var Autoload = {
	/**
	 * Search path to js file
	 */
	findPath: function(jsFile) {
		jsFile = jsFile.replace(/\./g, "\\.");
		var collection = $("script");
		var reg = eval("/^(.*)" + jsFile + "$/");
		var path = null;
		for (i = 0; i < collection.length; i++) {
			if (null === path) {
				var p = reg.exec(collection[i].src);
				if (null !== p) {
					return p[1];
				}
			}
		}
		return path;
	},

	/**
	 * Include necessary CSS file
	 */
	css: function(file, options) {
		var collection = $("link[rel=stylesheet]");
		var path = options.basePath + options.cssPath + file;

		for (i = 0; i < collection.length; i++) {
			if (path == collection[i].href) {
				// is loaded
				return true;
			}
		}

		var l = $("<link/>");
		l.attr({
			"href":		path,
			"media":	"all",
			"rel":		"stylesheet",
			"type":		"text/css"
		});
		$("head").append(l);
		return true;
	}
};

/*
 * Autoload namespace: public properties and methods
 */
$.autoload = {
	css: function(names, options) {
		var basePath = Autoload.findPath(options.jsFile);
		var cssPath = options.cssPath ? options.cssPath : "css/";
		options = {"basePath": basePath, "cssPath": cssPath};

		if ("string" === typeof names) {
			names = [names];
		}

		for (i in names) {
			Autoload.css(names[i], options);
		}
	},
	
/*	init: function() {	
	}*/
};

//$.wysiwyg.autoload.init();

})(jQuery);