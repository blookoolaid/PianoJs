$(function(){
	"use strict";

	$('.key').click(function(){
		playNote($(this));
	});
	
	$('body').keypress(function(e){
		var keyName = e.key.toUpperCase();
		var key = $(".key div:contains('" + keyName + "')").closest('.key');
		
		if (key[0] != undefined) {
			playNote(key);
		}
	});
	
	function playNote(key) {
		var noteName = key.prop('id');
		var note = new Audio('audio/' + noteName + '.mp3');
		note.play();	
	}
});
