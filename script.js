
function enableAllButtons(){
	document.getElementById("time_1m").disabled = false;
	document.getElementById("time_5m").disabled = false;
	document.getElementById("time_15m").disabled = false;
	document.getElementById("time_30m").disabled = false;
	document.getElementById("time_1h").disabled = false;
	document.getElementById("time_4h").disabled = false;
	document.getElementById("time_1d").disabled = false;
	document.getElementById("time_1w").disabled = false;
}

function setTimeInterval(btnId, interval){
	event.preventDefault();
	document.getElementById("tradingview_0").innerHTML = "";
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": "COINBASE:BTCUSD",
			"interval": interval,
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"save_image": false,
			"container_id": "tradingview_0"
		}
	);
	
	document.getElementById("tradingview_1").innerHTML = "";
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": "COINBASE:XRPUSD",
			"interval": interval,
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"save_image": false,
			"container_id": "tradingview_1"
		}
	);
	
	document.getElementById("tradingview_2").innerHTML = "";
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": "COINBASE:XTZUSD",
			"interval": interval,
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"save_image": false,
			"container_id": "tradingview_2"
		}
	);
	
	document.getElementById("tradingview_3").innerHTML = "";
	new TradingView.widget(
		{
			"autosize": true,
			"symbol": "COINBASE:BATUSDC",
			"interval": interval,
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"toolbar_bg": "#f1f3f6",
			"enable_publishing": false,
			"allow_symbol_change": true,
			"save_image": false,
			"container_id": "tradingview_3"
		}
	);
	
	enableAllButtons();
	document.getElementById(btnId).disabled = true;
}