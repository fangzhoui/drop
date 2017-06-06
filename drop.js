function drop (){
	var el = document.getElementById("ap")
	var disX = 0
	var disY = 0
	el.onmousedown = function (){
		disX = el.clearInterval()
	}
}
