function drop (){
	var el = document.getElementById("ap")
	var disX = 0
	var disY = 0
	el.onmousedown = function (ev){
		disX = ev.pageX - el.offsetLeft
		disY = ev.pageY - el.offsetTop
		document.onmouseup = function (ev){
			el.style.left = disX
			el.style.top = disY
		}
	}
}
