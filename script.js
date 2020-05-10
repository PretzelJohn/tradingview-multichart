function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*86400000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname+"="+cvalue+";"+expires+";path=/";
}

function getCookie(cname) {
	var name = cname+"=";
	var dc = decodeURIComponent(document.cookie);
	var ca = dc.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "NULL";
}

function checkCookie(cname){
	var x = getCookie(cname);
	if(x == "") {
		return false;
	}
	return true;
}

function addWidget(symbol, interval, container) {
	var sym = "COINBASE:"+symbol;
	document.getElementById(container).innerHTML = "";
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": sym,
			"interval": interval,
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"enable_publishing": false,
			"save_image": false,
			"container_id": container
		}
	);
}

function setSymbol(symbol, container) {
	
	
	//set cookie
}

function setTimeInterval(interval) {
	event.preventDefault();
	addWidget("BTCUSD", interval, "tradingview_0");
	addWidget("XRPUSD", interval, "tradingview_1");
	addWidget("XTZUSD", interval, "tradingview_2");
	addWidget("BATUSDC", interval, "tradingview_3");
	
	setCookie("interval", interval, 365);
	alert("Cookie: "+getCookie("interval"));
}

function init() {
	//read cookie
	var interval = 15;
	var sym0 = "BTCUSD";
	var sym1 = "XRPUSD";
	var sym2 = "XTZUSD";
	var sym3 = "BATUSDC";
	
	
	addWidget(sym0, interval, "tradingview_0");
	addWidget(sym1, interval, "tradingview_1");
	addWidget(sym2, interval, "tradingview_2");
	addWidget(sym3, interval, "tradingview_3");
}

init();