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
		var nm = this.name+"=";
		var dc = decodeURIComponent(document.cookie);
		var ca = dc.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while(c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if(c.indexOf(nm) == 0) {
				return c.substring(nm.length, c.length);
			}
		}
		return "";
	}
	
	check(){
		console.log(this.get());
		if(this.get() == "")
			return false;
		return true;
	}
}