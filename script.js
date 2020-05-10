var intv = new Cookie("interval");
var sym0 = new Cookie("symbol_0");
var sym1 = new Cookie("symbol_1");
var sym2 = new Cookie("symbol_2");
var sym3 = new Cookie("symbol_3");
var cookies = [sym0, sym1, sym2, sym3];

function readCookie(cookie, defValue) {
	var res = defValue;
	if(cookie.check()) {
		res = cookie.get();
		alert(res);
	}
	cookie.set(res);
	return res;
}

var interval = readCookie(intv, 15);
var s0 = readCookie(sym0, "BTCUSD");
var s1 = readCookie(sym1, "XRPUSD");
var s2 = readCookie(sym2, "XTZUSD");
var s3 = readCookie(sym3, "BATUSDC");

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

function loadDropbox(id) {
	var x = document.getElementById(id);
	x.innerHTML = '<option value="" selected="selected" disabled hidden>SELECT MARKET: </option>\
					<option value="BTCUSD">BTC-USD</option>\
					<option value="ETHUSD">ETH-USD</option>\
					<option value="XRPUSD">XRP-USD</option>\
					<option value="LTCUSD">LTC-USD</option>\
					<option value="BCHUSD">BCH-USD</option>\
					<option value="EOSUSD">EOS-USD</option>\
					<option value="DASHUSD">DASH-USD</option>\
					<option value="OXTUSD">OXT-USD</option>\
					<option value="XLMUSD">XLM-USD</option>\
					<option value="ATOMUSD">ATOM-USD</option>\
					<option value="XTZUSD">XTZ-USD</option>\
					<option value="ETCUSD">ETC-USD</option>\
					<option value="LINKUSD">LINK-USD</option>\
					<option value="REPUSD">REP-USD</option>\
					<option value="ZRXUSD">ZRX-USD</option>\
					<option value="ALGOUSD">ALGO-USD</option>\
					<option value="DAIUSD">DAI-USD</option>\
					<option value="KNCUSD">KNC-USD</option>\
					<option disabled>---------</option>\
					<option value="BTCUSDC">BTC-USDC</option>\
					<option value="ETHUSDC">ETH-USDC</option>\
					<option value="ZECUSDC">ZEC-USDC</option>\
					<option value="BATUSDC">BAT-USDC</option>\
					<option value="DAIUSDC">DAI-USDC</option>\
					<option value="GNTUSDC">GNT-USDC</option>\
					<option value="MANAUSDC">MANA-USDC</option>\
					<option value="LOOMUSDC">LOOM-USDC</option>\
					<option value="CVCUSDC">CVC-USDC</option>\
					<option value="DNTUSDC">DNT-USDC</option>\
					<option disabled>---------</option>\
					<option value="ETHBTC">ETH-BTC</option>\
					<option value="XRPBTC">XRP-BTC</option>\
					<option value="LTCBTC">LTC-BTC</option>\
					<option value="BCHBTC">BCH-BTC</option>\
					<option value="EOSBTC">EOS-BTC</option>\
					<option value="DASHBTC">DASH-BTC</option>\
					<option value="XLMBTC">XLM-BTC</option>\
					<option value="ATOMBTC">ATOM-BTC</option>\
					<option value="XTZBTC">XTZ-BTC</option>\
					<option value="ETCBTC">ETC-BTC</option>\
					<option value="ZECBTC">ZEC-BTC</option>\
					<option value="REPBTC">REP-BTC</option>\
					<option value="ZRXBTC">ZRX-BTC</option>\
					<option value="KNCBTC">KNC-BTC</option>\
					<option disabled>---------</option>\
					<option value="ETHDAI">ETH-DAI</option>\
					<option disabled>---------</option>\
					<option value="LINKETH">LINK-ETH</option>\
					<option value="BATETH">BAT-ETH</option>';
	x.onchange = function() {
		setSymbol(Number(id.split("_")[1]), x.value);
	}
}

loadDropbox("dropbox_0");
loadDropbox("dropbox_1");
loadDropbox("dropbox_2");
loadDropbox("dropbox_3");




