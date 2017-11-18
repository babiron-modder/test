(function(){
	document.addEventListener("DOMContentLoaded",function(){
		let ifm = document.getElementById("ifm");
		let address = document.getElementById("address");
		
		ifm.onload = function(){
			address.innerHTML=ifm.contentWindow.document.getElementById("swml-loc");
		};
		
	});
	
	
})();

/* $(document).ready(function() {
	$('#target').load('https://www.google.co.jp/search?q=%E3%81%82');
}); */