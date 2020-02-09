$(document).ready(function(){

	$(".outdoor").css({
			"display" : "none"
	});
		$(".tree").css({
		"display" : "none"
	});
			$(".call").css({
		"display" : "none"
	});


function quote(){
	console.log('wor');

 $(".quoteModal").css({"display" : "flex"})


};

$("#quote").on('click', function(){quote()});

$("#footQuote").click(function(){quote()});

$(".escaper").click(function(){$(".quoteModal").css({"display" : "none"})});
$(".escape").click(function(){$(".quoteModal").css({"display" : "none"})});
















}); // end func ready 




$(window).scroll(function(){ 				//start function on scroll

	//*******init*********

	var wScroll = $(this).scrollTop(),
	height = screen.availHeight,
	distance = $('#logoBlock').offset().top,
  $window = $(window);
  	

// ********************fix logoblock****************strange bug when trying to remove position on rescroll 



  if ( $window.scrollTop() >= distance ) {

      $("#quote").css({
      	"top" : "40px"
      });
    };



// ******************** Event 1 *******************************

	if (wScroll > height * .775){
		      $("#logoBlock").css({
						"position" : "fixed",
						"top" : "20"
				});	

		//*************images***************

	$(".indoorImages").css({
						"display" : "flex"
			});	
	$(".treeImages").css({
						"display" : ""
	});	
	$(".callImages").css({
						"display" : ""
		});	

	$(".outdoorImages").css({
						"display" : ""
	});	

		
// ******************** textblocks *******************************

	$(".indoor").css({
			"position" : "fixed",
			"top" : "100",
			"display" : "flex"
	});

	$(".outdoor").css({
			"display" : "none"
	});

		$(".tree").css({
		"display" : "none"
	});

			$(".call").css({
		"display" : "none"
	});

//********************Add Icon styles ***********************

				$(".icon1").css({
			"background" : "var(--orange)",
			"height" : "167px",
			"-webkit-transform" : "translateY(-19.5px)",
            "transform" : "translateY(-19.5px)",
		});
				$(".icon1 .img").css({
						"background": "rgba(255, 255, 255, 0) url('../assets/images/joinery-icon-brown.png') no-repeat center"
					});

// ***********************Reset icon styles ********************

		$(".icon2").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
		$(".icon3").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
		$(".icon4").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});

// ******************** Change Icon Logos *******************************


		$(".icon2 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/deck icon orange.png') no-repeat center"
							});
		$(".icon3 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/tree-felling-icon-orange.png') no-repeat center"
							});
		$(".icon4 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/phone-icon-orange.png') no-repeat center"
							});

// ******************** remove everything for splash *******************************

	}	else if (wScroll <= height * .8){

			$("#logoBlock").css({
						"position" : "absolute",
						"top" : ""
			});

			$(".indoor").css({
						"position" : "absolute",
						"top" : "",
			});

			$(".indoorImages").css({
						"display" : ""
			});	
			 $("#quote").css({
      	"top" : ""
      })
	};









// ********************************************** Event 2 ******************************************************

	if (wScroll > height * 1.5){

//*************images***************
$(".outdoorImages").removeClass("fadeOutDown");

	$("indoorImages").addClass("fadeOutDown");

	$(".treeImages").css({
						"display" : ""
	});	
	$(".callImages").css({
						"display" : ""
		});	

	$(".outdoorImages").css({
						"display" : "flex"
	});			

// ******************** textblocks *******************************

			$(".outdoor").css({
			"display" : "flex"
		});


			$(".indoor").css({
				"display" : "none"
	});
			$(".tree").css({
		"display" : "none"
	});
				$(".call").css({
		"display" : "none"
	});

//********************Add Icon styles ***********************
		$(".icon2").css({
				"background" : "var(--orange)",
				"height" : "167px",
				"-webkit-transform" : "translateY(-19.5px)",
        "transform" : "translateY(-19.5px)"
		});
		$(".icon2 .img").css({
				"background": "rgba(255, 255, 255, 0) url('../assets/images/deck-icon-brown.png') no-repeat center"
		});

// ***********************Reset icon styles ********************
		$(".icon1").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
			"transform" : "translateY(0)",
		});		

		$(".icon3").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
			"transform" : "translateY(0)",
		});

		$(".icon4").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
			"transform" : "translateY(0)",
		});

		// ******************** Change Icon Logos *******************************

		$(".icon1 .img").css({
			"background": "rgba(255, 255, 255, 0) url('../assets/images/joinery-icon-orange.png') no-repeat center"
		});

		$(".icon3 .img").css({
				"background": "rgba(255, 255, 255, 0) url('../assets/images/tree-felling-icon-orange.png') no-repeat center"
							});
		$(".icon4 .img").css({
				"background": "rgba(255, 255, 255, 0) url('../assets/images/phone-icon-orange.png') no-repeat center"
		});


	}; //endif -- event 2







// ********************************************** Event 3 ******************************************************

	if (wScroll > height * 2.25){

//*************images***************

	$(".indoorImages").css({
						"display" : ""
			});	
	$(".treeImages").css({
						"display" : "flex"
	});	
	$(".callImages").css({
						"display" : ""
		});	

	$(".outdoorImages").addClass("fadeOutDown");

// ******************** textblocks *******************************

			$(".tree").css({
			"display" : "flex"
		});

		$(".outdoor").css({
			"display" : "none"
		});
		$(".call").css({
		"display" : "none"
	});
			$(".indoor").css({
		"display" : "none"
	});
	//********************Add Icon styles ***********************
		$(".icon3").css({
			"background" : "var(--orange)",
						"height" : "167px",
			"-webkit-transform" : "translateY(-19.5px)",
            "transform" : "translateY(-19.5px)"
		});

		$(".icon3 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/tree-felling-icon-brown.png') no-repeat center"
							});

// ***********************Reset icon styles ********************


			$(".icon1").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
			$(".icon2").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
			$(".icon4").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",		});
				

// ******************** Change Icon Logos *******************************


				$(".icon1 .img").css({
			"background": "rgba(255, 255, 255, 0) url('../assets/images/joinery-icon-orange.png') no-repeat center"
		});

		$(".icon2 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/deck icon orange.png') no-repeat center"
							});
		
		$(".icon4 .img").css({
								"background": "rgba(255, 255, 255, 0) url('../assets/images/phone-icon-orange.png') no-repeat center"
							});

	}; //endif event 3






// ********************************************** Event 4 ******************************************************
	if (wScroll > height * 3){

//*************images***************

	$(".indoorImages").css({
						"display" : ""
			});	
	$(".treeImages").css({
						"display" : ""
	});	
	$(".callImages").css({
						"display" : "flex"
		});	

	$(".outdoorImages").css({
						"display" : ""
	});			

// ******************** textblocks *******************************	

	$(".call").css({
			"display" : "flex"
		});
	$(".tree").css({
		"display" : "none"
	});
		$(".indoor").css({
		"display" : "none"
	});
			$(".outdoor").css({
		"display" : "none"
	});

//********************Add Icon styles ***********************

	$(".icon4").css({
			"background" : "var(--orange)",
			"height" : "167px",
			"-webkit-transform" : "translateY(-19.5px)",
      "transform" : "translateY(-19.5px)"
	});


	$(".icon4 .img").css({
			"background": "rgba(255, 255, 255, 0) url('../assets/images/phone-icon-brown.png') no-repeat center"
	});

// ***********************Reset icon styles ********************
		$(".icon1").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});

		$(".icon2").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
		$(".icon3").css({
			"background" : "var(--brown)",
			"height" : "128px",
			"-webkit-transform" : "translateY(0)",
            "transform" : "translateY(0)",
		});
// ******************** Change Icon Logos *******************************
		
		$(".icon1 .img").css({
			"background": "rgba(255, 255, 255, 0) url('../assets/images/joinery-icon-orange.png') no-repeat center"
		});

		$(".icon2 .img").css({
				"background": "rgba(255, 255, 255, 0) url('../assets/images/deck icon orange.png') no-repeat center"
		});
		$(".icon3 .img").css({
				"background": "rgba(255, 255, 255, 0) url('../assets/images/tree-felling-icon-orange.png') no-repeat center"
		});
	
	}; //endif event 4

}); //end function scroll
