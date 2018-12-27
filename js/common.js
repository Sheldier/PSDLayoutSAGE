$(function() {
	leftsec.fetchData1();
	const $btn = $('header .headermenu button');
	const mouse = document.querySelector('.h1 .boxh1');
	$('header .searchbox').hide();
	$btn.on('click', function(){
		if($('header .searchbox').is(':visible')) {
			$('header .searchbox').hide();	
								}
		else{
			$('header .searchbox').show();	
			 }
								});
	mouse.onclick = function(){
		window.scrollTo(0,0);
	}
			  });
const leftsec = new Vue({
	el : '#infoboxes',
	data : {
		h5 : null,
		h2 : null,
		text: null,
		isActive1 : true,
		isActive2 : false
	},
	methods : { 
		fetchData1 : function () {
		var self = this;
		this.isActive1 = true;		
		this.isActive2 = false;		
		axios
			.get('../text.json')
			.then(response => {self.h5 = response.data.info[0].h5;
							   self.h2 = response.data.info[0].h2
							   self.text = response.data.info[0].text});
	},
	fetchData2 : function () {
		var self = this;
		this.isActive1 = false;		
		this.isActive2 = true;			
		axios
			.get('../text.json')
			.then(response => {self.h5 = response.data.info[1].h5;
							   self.h2 = response.data.info[1].h2
							   self.text = response.data.info[1].text});
	}

}
});