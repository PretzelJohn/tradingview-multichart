var intv = new Cookie("interval");
var sym0 = new Cookie("symbol_0");
var sym1 = new Cookie("symbol_1");
var sym2 = new Cookie("symbol_2");
var sym3 = new Cookie("symbol_3");
var cookies = [sym0, sym1, sym2, sym3];

var interval = intv.get() || 15;
var s0 = sym0.get() || "BTCUSD";
var s1 = sym1.get() || "XRPUSD";
var s2 = sym2.get() || "XTZUSD";
var s3 = sym3.get() || "BATUSDC";

var a = new Widget(s0, interval, "tradingview_0");
var b = new Widget(s1, interval, "tradingview_1");
var c = new Widget(s2, interval, "tradingview_2");
var d = new Widget(s3, interval, "tradingview_3");
var widgets = [a, b, c, d];

function setSymbol(i, symbol) {
	widgets[i].setSymbol(symbol);
	cookies[i].set(symbol);
}

function setTimeInterval(x) {
	event.preventDefault();
	
	a.setInterval(x);
	b.setInterval(x);
	c.setInterval(x);
	d.setInterval(x);
	
	intv.set(x);
}

function loadProducts() {
	var products = {"USD":[], "USDC":[], "BTC":[]};
	const url = "https://api.pro.coinbase.com/products";
	var xhttp = new XMLHttpRequest();
	var res = null;
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200)
			res = JSON.parse(this.responseText);
	};
	xhttp.open("GET", url, false);
	xhttp.send();
	
	for(var i = 0; i < res.length; i++) {
		var parts = res[i]["display_name"].split("/");
		if(parts[1] != "EUR" && parts[1] != "GBP"){
			if(products[parts[1]] == null)
				products[parts[1]] = [parts[0]+"-"+parts[1]];
			else
				products[parts[1]].push(parts[0]+"-"+parts[1]);
		}
	}
	
	var html = '<option value="" selected="selected" disabled hidden>SELECT MARKET: </option>';
	for(var k in products) {
		products[k].sort();
		for(var i = 0; i < products[k].length; i++) {
			var product = products[k][i];
			html += '\n<option value="'+product.replace("-","")+'">'+product+'</option>';
		}
		html += '\n<option disabled>---------</option>';
	}
	return html;
}

const html = loadProducts();
function loadDropbox(id) {	
	var x = document.getElementById(id);
	x.innerHTML = html;
	x.onchange = function() {
		setSymbol(Number(id.split("_")[1]), x.value);
	}
}

loadDropbox("dropbox_0");
loadDropbox("dropbox_1");
loadDropbox("dropbox_2");
loadDropbox("dropbox_3");




