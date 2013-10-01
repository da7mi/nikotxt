nikotxt
=======

ニコニコ動画風テキストアニメーションプラグイン

## Download & Install

[ jQuery ](http://jquery.com/) >= Ver1.9
[ jQuery UI ](http://jqueryui.com/) >= ver1.10

	<script type="text/javascript" src="path/to/jquery.js"></script>
	<script type="text/javascript" src="path/to/jquery.ui.js"></script>
	<script type="text/javascript" src="path/to/jquery.nikoTxt.js"></script>

## Example

Javascript

simple

	$.nikoTxt({txt: 'Text!!!!');

duration set

	$.nikoTxt({
		txt: 'Text!!!!',
		duration: 1000
	});

font set

	$.nikoTxt({
		txt: 'Text!!!!',
		font: {
			size: {
				min: 80,
				max: 120
			},
			color: 'random', // "random" or "#??????",
			colorChange: true // simgle charactor color change?
		}
	});

position(Y-axis)

	$.nikoTxt({
		txt: 'Text!!!!',
		y : {
			min: 60,
			max: $(window).height() - 500
		}	
	});

## License

MIT

## History

* Ver1.0 / 2013.09.30 / release!!!

## Demo

[Github Page](http://da7mi.github.io/nikotxt/#demo)
