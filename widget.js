class Widget {
	constructor(symbol, interval, container) {
		this.symbol = symbol;		
		this.interval = interval;
		this.container = container;
		this.update();
	}
	
	update() {
		var sym = "COINBASE:"+this.symbol;
		new TradingView.widget(
			{
				"autosize": true,
				"symbol": sym,
				"interval": this.interval,
				"theme": "dark",
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