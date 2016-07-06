$(document).ready(function(){
	// Audio buffer load
	window.context;
	window.bufferLoader;

	window.AudioContext = window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();

		bufferLoader = new BufferLoader(
			context,
			[
				'./sound/sound_dog.wav',
				'./sound/sound_cat.wav',
				'./sound/sound_duck.wav',
				'./sound/sound_tiger.wav',
			],
			function(){}
		);

	bufferLoader.load();

	// initial setting (dog selected)
	check_focus();
	
	//dog mouse event
	$("#dog_image").bind('click', function(){playSound(bufferLoader.bufferList);});
	$("#dog_image").bind('mouseover', function(){
		$(this).removeClass("dog_image");
		$(this).addClass("dog_image_active");

		activeImageCancel("dog_image");
		$(this).attr("data-focus","1");
	});
	$("#dog_image").bind('mouseout', function(){
		$(this).removeClass("dog_image_active");
		$(this).addClass("dog_image");
		$(this).attr("data-focus","0");

	});


	// cat mouse event
	$("#cat_image").bind('click', function(){playSound(bufferLoader.bufferList);});
	$("#cat_image").bind('mouseover', function(){
		$(this).removeClass("cat_image");
		$(this).addClass("cat_image_active");

		activeImageCancel("cat_image");
		$(this).attr("data-focus","1");
	});
	$("#cat_image").bind('mouseout', function(){
		$(this).removeClass("cat_image_active");
		$(this).addClass("cat_image");
		$(this).attr("data-focus","0");

	});

	// duck mouse event
	$("#duck_image").bind('click', function(){playSound(bufferLoader.bufferList);});
	$("#duck_image").bind('mouseover', function(){
		$(this).removeClass("duck_image");
		$(this).addClass("duck_image_active");

		activeImageCancel("duck_image");
		$(this).attr("data-focus","1");
	});
	$("#duck_image").bind('mouseout', function(){
		$(this).removeClass("duck_image_active");
		$(this).addClass("duck_image");
		$(this).attr("data-focus","0");

	});

	// tiger mouse event
	$("#tiger_image").bind('click', function(){playSound(bufferLoader.bufferList);});
	$("#tiger_image").bind('mouseover', function(){
		$(this).removeClass("tiger_image");
		$(this).addClass("tiger_image_active");

		activeImageCancel("tiger_image");
		$(this).attr("data-focus","1");
	});
	$("#tiger_image").bind('mouseout', function(){
		$(this).removeClass("tiger_image_active");
		$(this).addClass("tiger_image");
		$(this).attr("data-focus","0");

	});

	// keyboard event
	$(document).keydown(function(event){
		if(event.which == 39){
			check_focus();
			movefocustoright();
		} else if(event.which == 37){
			check_focus();
			movefocustoleft();
		} else if(event.which == 13){
			playSound(bufferLoader.bufferList);
		}
	})

});

// sound play function
function playSound(bufferList){
	var source1 = context.createBufferSource();
	var source2 = context.createBufferSource();
	var source3 = context.createBufferSource();
	var source4 = context.createBufferSource();

	source1.buffer = bufferList[0];
	source2.buffer = bufferList[1];
	source3.buffer = bufferList[2];
	source4.buffer = bufferList[3];

	source1.connect(context.destination);
	source2.connect(context.destination);
	source3.connect(context.destination);
	source4.connect(context.destination);

	switch(true)
		{
			case $("#dog_image").attr("data-focus") == "1":
				source1.start(0);
				break;
			case $("#cat_image").attr("data-focus") == "1":
				source2.start(0);
				break;
			case $("#duck_image").attr("data-focus") == "1":
				source3.start(0);
				break;
			case $("#tiger_image").attr("data-focus") == "1":
				source4.start(0);
				break;
			default :
				break;
		}
}

// focus move to right
function movefocustoright(){
	switch(true)
	{
		case $("#dog_image").attr("data-focus") == "1":
			$("#dog_image").removeClass("dog_image_active");
			$("#dog_image").addClass("dog_image");
			$("#dog_image").attr("data-focus","0");

			$("#cat_image").attr("data-focus","1");
			$("#cat_image").removeClass("cat_image");
			$("#cat_image").addClass("cat_image_active");
			break;
		case $("#cat_image").attr("data-focus") == "1":
			$("#cat_image").removeClass("cat_image_active");
			$("#cat_image").addClass("cat_image");
			$("#cat_image").attr("data-focus","0");

			$("#duck_image").attr("data-focus","1");
			$("#duck_image").removeClass("duck_image");
			$("#duck_image").addClass("duck_image_active");
			break;
		case $("#duck_image").attr("data-focus") == "1":
			$("#duck_image").removeClass("duck_image_active");
			$("#duck_image").addClass("duck_image");
			$("#duck_image").attr("data-focus","0");

			$("#tiger_image").attr("data-focus","1");
			$("#tiger_image").removeClass("tiger_image");
			$("#tiger_image").addClass("tiger_image_active");
			break;
		case $("#tiger_image").attr("data-focus") == "1":
			$("#tiger_image").removeClass("tiger_image_active");
			$("#tiger_image").addClass("tiger_image");
			$("#tiger_image").attr("data-focus","0");

			$("#dog_image").attr("data-focus","1");
			$("#dog_image").removeClass("dog_image");
			$("#dog_image").addClass("dog_image_active");
			break;
		default:
			break;
	}
}

// focus move to left
function movefocustoleft(){
	switch(true)
	{
		case $("#dog_image").attr("data-focus") == "1":
			$("#dog_image").removeClass("dog_image_active");
			$("#dog_image").addClass("dog_image");
			$("#dog_image").attr("data-focus","0");

			$("#tiger_image").attr("data-focus","1");
			$("#tiger_image").removeClass("tiger_image");
			$("#tiger_image").addClass("tiger_image_active");
			break;
		case $("#cat_image").attr("data-focus") == "1":
			$("#cat_image").removeClass("cat_image_active");
			$("#cat_image").addClass("cat_image");
			$("#cat_image").attr("data-focus","0");

			$("#dog_image").attr("data-focus","1");
			$("#dog_image").removeClass("dog_image");
			$("#dog_image").addClass("dog_image_active");
			break;
		case $("#duck_image").attr("data-focus") == "1":
			$("#duck_image").removeClass("duck_image_active");
			$("#duck_image").addClass("duck_image");
			$("#duck_image").attr("data-focus","0");

			$("#cat_image").attr("data-focus","1");
			$("#cat_image").removeClass("cat_image");
			$("#cat_image").addClass("cat_image_active");
			break;
		case $("#tiger_image").attr("data-focus") == "1":
			$("#tiger_image").removeClass("tiger_image_active");
			$("#tiger_image").addClass("tiger_image");
			$("#tiger_image").attr("data-focus","0");

			$("#duck_image").attr("data-focus","1");
			$("#duck_image").removeClass("duck_image");
			$("#duck_image").addClass("duck_image_active");
			break;
		default:
			break;
	}
}

// initial setting (dog selected)
function check_focus(){
	if ($("#dog_image").attr("data-focus") == "0" && 
		$("#cat_image").attr("data-focus") == "0" &&
		$("#duck_image").attr("data-focus") == "0" &&
		$("#tiger_image").attr("data-focus") == "0")
	{
		$("#dog_image").addClass("dog_image_active");
		$("#dog_image").attr("data-focus", "1");
	}
}

function activeImageCancel(elem){
	switch(true){
		case elem == "dog_image":
			if($("#cat_image").hasClass("cat_image_active")){$("#cat_image").removeClass("cat_image_active").addClass("cat_image");}
			if($("#duck_image").hasClass("duck_image_active")){$("#duck_image").removeClass("duck_image_active").addClass("duck_image");}
			if($("#tiger_image").hasClass("tiger_image_active")){$("#tiger_image").removeClass("tiger_image_active").addClass("tiger_image");}
			break;
		case elem == "cat_image":
			if($("#dog_image").hasClass("dog_image_active")){$("#dog_image").removeClass("dog_image_active").addClass("dog_image");}
			if($("#duck_image").hasClass("duck_image_active")){$("#duck_image").removeClass("duck_image_active").addClass("duck_image");}
			if($("#tiger_image").hasClass("tiger_image_active")){$("#tiger_image").removeClass("tiger_image_active").addClass("tiger_image");}			break;
		case elem == "duck_image":
			if($("#cat_image").hasClass("cat_image_active")){$("#cat_image").removeClass("cat_image_active").addClass("cat_image");}
			if($("#dog_image").hasClass("dog_image_active")){$("#dog_image").removeClass("dog_image_active").addClass("dog_image");}
			if($("#tiger_image").hasClass("tiger_image_active")){$("#tiger_image").removeClass("tiger_image_active").addClass("tiger_image");}			break;
		case elem == "tiger_image":
			if($("#cat_image").hasClass("cat_image_active")){$("#cat_image").removeClass("cat_image_active").addClass("cat_image");}
			if($("#duck_image").hasClass("duck_image_active")){$("#duck_image").removeClass("duck_image_active").addClass("duck_image");}
			if($("#dog_image").hasClass("dog_image_active")){$("#dog_image").removeClass("dog_image_active").addClass("dog_image");}			break;
		default:
			break;
	}
}

