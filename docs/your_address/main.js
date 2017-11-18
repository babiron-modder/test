(function(){
	document.addEventListener("DOMContentLoaded",function(){
		let ifm = document.getElementById("ifm");
		let address = document.getElementById("address");
		
		ifm.onload = function(){
			address.innerHTML=ifm.contentWindow.document.getElementById("swml-loc");
		};
		
	});
	
	
})();