
window.addEventListener('load', function() {

	function standardNotification() {

	   	var n = new Notification("webOS TV Notification!",  {
	   		icon: 'Images/1.png', 
	   		tag: 'note', 
	   		body: 'Finally, the interface and system for LG webOS TV is released.'
	    });
	    
	}

	function timeOut() {
		
		setTimeout(function() {
			var a  = document.querySelectorAll('[data-fade]');
				for(s = 0; s < a.length; ++s) {
				a[s].remove();
			}			
			running = false;			
		}, 300);
		
	}

	var running = false;
	
	function chromeCompatibilityCode() {
		
		if(running === false) {
			running = true;
			
			var attr = document.createAttribute('data-fade');
			var at = document.createAttribute('data-fade');
			var not = document.querySelectorAll('.notification');
			
			if(not !== null) {
				for (i = 0; i < not.length; i++) {
					if(!not[i].hasAttribute('data-fade')) {
						not[i].setAttributeNode(attr);
					}
				}
			}
			
			var noti = document.createElement('div');
					
			noti.className = 'notification'; 
			
			noti.innerHTML = '<h2>webOS TV Notification! </h2><div>Finally, the interface and system for LG webOS TV is released.</div><div class="close">&#x2421;</div>';
			
			var org = document.querySelector('#container');
			
			document.body.insertBefore(noti, org);
			
			setTimeout(function() {
				var a  = document.querySelectorAll('.notification');
				
				for(s = 0; s < a.length; ++s) {
				
					a[s].style.top = '60px';
					
					a[s].onclick = function(e) {
						
						if(!this.hasAttribute('data-fade')) {	
							this.setAttributeNode(at);
							timeOut();
						}
					}
				}
				
			}, 20);
		
			timeOut();
		
		}
	}

	// Query selector
	var button = document.querySelector('#button');
	
	// When the button is clicked
	button.addEventListener('click', function () {
	
	/*

		// If notifications are granted show the notification
		if (Notification && Notification.permission === "granted") {
			standardNotification();
		}
	
		// If they are not denied (i.e. default)
		else if (Notification && Notification.permission !== "denied") {
			
			// Request permission
			Notification.requestPermission(function (status) {
				
				// Change based on user's decision
				if (Notification.permission !== status) {
					Notification.permission = status;
				}
				
				// If it's granted show the notification
				if (status === "granted") {
					standardNotification();
				}
		
				else {
					chromeCompatibilityCode();
				}
				
			});
		
		}
	
		else {
			chromeCompatibilityCode();
		}
	*/	

	standardNotification();
	chromeCompatibilityCode();

	});
	
	
	
});
