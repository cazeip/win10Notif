// (c) George Ober
function notif(title,content="",time=10){
	time=time*1000;
	document.getElementById("title").innerHTML = title;
	document.getElementById("body").innerHTML = content;
	document.getElementById("not").style.display = 'block';
	setTimeout(function() {
		document.getElementById("not").style.display = 'none';
	}, time);
}