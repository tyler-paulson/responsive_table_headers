// https://github.com/tyler-paulson/responsive_table_headers - released under the MIT License

(function($){
	
	$.fn.responsive_table_headers = function(options) {
		
		var settings = $.extend({
			classAttr: 'head',
			element: 'h4',
			separator: ': '
		}, options);
		
		var headers = [];
		
		this.find('th').each(function() {
			headers.push($(this).text());
		});
		
		this.find('tr').each(function() {
			var i = 0;
			$(this).children('td').each(function() {
				$(this).prepend(
					'<'+
					settings.element+
					' class="'+
					settings.classAttr+
					'">'+
					headers[i]+
					settings.separator+
					'</'+
					settings.element+
					'>'
				);
				i++;
			});
		});
	
	};

})(jQuery);