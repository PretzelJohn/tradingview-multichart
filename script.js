class Cookie {
	constructor(name, exdays=365) {
		this.name = name;
		this.exdays = exdays;
	}
	
	set(value) {
		var d = new Date();
		d.setTime(d.getTime() + (this.exdays*86400000));
		var expires = "expires="+d.toUTCString();
		document.cookie = this.name+"="+this.value+";"+expires+";path=/";
	}

	get() {
		var name = this.name+"=";
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
	
	check(){
		if(this.get() == "NULL") {
			return false;
		}
		return true;
	}
}

class Widget {
	constructor(symbol, interval, container) {
		this.symbol = symbol;		
		this.interval = interval;
		this.container = container;
		this.update();
	}
	
	update() {
		var symbol = "COINBASE:"+this.symbol;
		document.getElementById(this.container).innerHTML = "";
		new TradingView.widget(
			{
				"autosize": true,
				"symbol": symbol,
				"interval": this.interval,
				"timezone": "Etc/UTC",
				"theme": "dark",
				"style": "1",
				"locale": "en",
				"enable_publishing": false,
				"save_image": false,
				"container_id": this.container
			}
		);
	}
	
	setSymbol(symbol) {
		this.symbol = symbol;
		this.update();
	}
	
	setInterval(interval) {
		this.interval = interval;
		this.update();
	}
}


var intv = new Cookie("interval");
var sym0 = new Cookie("symbol_0");
var sym1 = new Cookie("symbol_1");
var sym2 = new Cookie("symbol_2");
var sym3 = new Cookie("symbol_3");
var symbols = [sym0, sym1, sym2, sym3];

function readCookie(cookie, defValue) {
	var res = defValue;
	if(cookie.check())
		res = cookie.get();
	cookie.set(res);
	return res;
}

var interval = readCookie(intv, 15);

var a = new Widget(readCookie(sym0, "BTCUSD"), interval, "tradingview_0");
var b = new Widget(readCookie(sym1, "XRPUSD"), interval, "tradingview_1");
var c = new Widget(readCookie(sym2, "XTZUSD"), interval, "tradingview_2");
var d = new Widget(readCookie(sym3, "BATUSDC"), interval, "tradingview_3");
var widgets = [a, b, c, d];

function setSymbol(i, symbol) {
	event.preventDefault();
	widgets[i].setSymbol(symbol);
	symbols[i].set(symbol);
}

function setTimeInterval(x) {
	event.preventDefault();
	
	a.setInterval(x);
	b.setInterval(x);
	c.setInterval(x);
	d.setInterval(x);
	
	intv.set(x);
}




