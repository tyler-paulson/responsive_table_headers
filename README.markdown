# Responsive Table Headers

A jQuery plugin that dynamically injects table headers as inline elements to use when reformatting table cells as block elements at narrows widths in a responsive layout.

For example, the abbreviated markup of this discography table...

```` html
<thead>
	<th>Title</th>
	<th>Year</th>
	<th>Type</th>
</thead>
<tbody>
	<td>Adventures of the O.C. Supertones</td>
	<td>1996</td>
	<td>Studio</td>
</tbody>
````

Is converted by the browser to...

```` html
<thead>
	<th>Title</th>
	<th>Year</th>
	<th>Type</th>
</thead>
<tbody>
	<td><span class="head">Title: </span>Adventures of the O.C. Supertones</td>
	<td><span class="head">Year: </span>1996</td>
	<td><span class="head">Type: </span>Studio</td>
</tbody>
````

## Usage

Make sure jQuery and the plugin are loaded and inside the document ready handler call...

```` js
$('table').responsive_table_headers();
````

Customize the markup by modifying the defaults shown below...

```` js
$('table').responsive_table_headers({ classAttr: 'head', element: 'h4', separator: ': ' });
````

Then just include some CSS...

```` css
td .head 		{ display: none; }

@media (max-width: 30em) {
	thead 		{ display: none; }
	td 			{ display: block; }
	td .head	{ display: inline; }
}
````

##Additional Notes

If you're going **mobile first**, you'll need to reverse the CSS like so...

```` css
thead 			{ display: none; }
td 				{ display: block; }
td .head 		{ display: inline; }

@media (min-width: 30em) {
	thead 		{ display: table-header-group; }
	td 			{ display: table-cell; }
	td .head	{ display: none; }
}
````

You could argue that this would be better done server-side, but sometimes that's not practical and there is an SEO argument to be made for not having the headers repeated over and over in the markup.

If you've got some ideas on how to make this script better, email me at [hello@tylerpaulson.com](mailto:hello@tylerpaulson.com) or send me a pull request.

*This script is released under the [MIT License](http://opensource.org/licenses/MIT).*