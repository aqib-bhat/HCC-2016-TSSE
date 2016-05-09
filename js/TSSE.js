// Global Variables
var chosenPhonesNum = 0;
var choice1Made = false;
var choice2Made = false;
var choice3Made = false;

var amazonTitles = [""];
var amazonImages = [""];
var amazonRatings = [""];

var bestBuyTitles = [""];
var bestBuyImages = [""];
var bestBuyRatings = [""];

var ebayTitles = [""];
var ebayImages = [""];
var ebayRatings = [""];

// Method which gets called when the preferences are submitted on the TSSE Home Page
function preferenceSubmitted() {
  $('#searchResults').attr("style","display:block;");
}

function buyNow() {
  alert('You will be taken to source website\'s payment page!');
  window.location='https://www.amazon.com/gp/cart/view.html/ref=nav_cart';
}

// Method to parse and display MetaData for mobile phones from Amazon
function createListAmazon(menudata, j){
	var html = '';
	$.each(menudata,function(i,val){
		html += '<div id='+i+'><h2>'+val.amazon_product.title+'</h2>';
		amazonTitles[j] = val.amazon_product.title;
		if(j==1){
		  html += "<img src='"+val.amazon_product.main_images[0].location+"' width='500' height='500'>";
		} else {
		  html += "<img src='"+val.amazon_product.main_images[0].location+"' width='230' height='450'>";
		}
		amazonImages[j] = val.amazon_product.main_images[0].location;
		html += "<br><b>"+'Price:</b>'+val.amazon_product.price+"<br>";
		html += '<b>'+'Overall Rating:</b>'+val.amazon_product.overall_rating+"<br>";
		amazonRatings[j] = val.amazon_product.overall_rating;
		html += "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#reviews_"+j+"'>See All Reviews</button>";
		html += "<div id='reviews_"+j+"' class='modal fade' role='dialog'><div class='modal-dialog'>";
		  // Modal content
		  html += "<div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>";
		  html += "<h4 class='modal-title'>All Reviews</h4></div>";
		  html += "<div class='modal-body'>"
				$.each(val.amazon_product.reviews,function(i,val){
					html += '<br><b>'+val.rating+' | ';
					html += val.title+'</b><br>';
					html += val.description;
				});
		  html += "</div><div class='modal-footer'><button type='button' class='btn btn-default'' data-dismiss='modal'>Close</button></div></div>";
		html += "</div></div><br><b>Specifications</b><br>";
		$.each(val.amazon_product.specifications,function(i,val){
			html += "<span style='text-decoration: underline;'>"+val.name+' </span>';
			html += val.value+"<br>";
		});
		html += '</div>';
		html += "<div class='checkbox'><label><input type='checkbox' id='amazon_cB_"+j+"' onclick='itemSelected(this);' value=''>Select</label></div>";
	});
	return html;
}

// Method to parse and display MetaData for mobile phones from Best Buy
function createListBestBuy(menudata, j){
	var html = '';
	$.each(menudata,function(i,val){
		html += '<div id='+i+'><h2>'+val.bestbuy_product.title+'</h2>';
		bestBuyTitles[j] = val.bestbuy_product.title;
		if(j==1){
		  html += "<img src='"+val.bestbuy_product.main_images[0].location+"' width='450' height='410'>";
		} else {
		  html += "<img src='"+val.bestbuy_product.main_images[0].location+"' width='450' height='410'>";
		}
		bestBuyImages[j] = val.bestbuy_product.main_images[0].location;
		html += "<br><b>"+'Model:</b>'+val.bestbuy_product.model+"<br>";
		html += "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#allSpec_BB_"+j+"'>See All Specifications</button>";
		html += "<div id='allSpec_BB_"+j+"' class='modal fade' role='dialog'><div class='modal-dialog'>";
		  // Modal content
		  html += "<div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>";
		  html += "<h4 class='modal-title'>All Specifications</h4></div>";
		  html += "<div class='modal-body'>"
		    $.each(val.bestbuy_product.features,function(i,val){
			  html += "<div class='row'><div class='col-sm-4'>"
			  if(val.name){
			    html += val.name;
			  } else {
			    html += "Misc"
			  }
			  html+= ': </div>';
			  html += "<div class='col-sm-8'>"+val.value+"</div></div><br>";
		    });
		  html += "</div><div class='modal-footer'><button type='button' class='btn btn-default'' data-dismiss='modal'>Close</button></div></div>";
		html += "</div></div><br>";
		html += '<b>'+'Overall Rating:</b>'+val.bestbuy_product.overall_rating+"<br>";
		bestBuyRatings[j] = val.bestbuy_product.overall_rating;
		$.each(val.bestbuy_product.reviews,function(i,val){
		  html += '<br><b>Review: </b>'+val.title+'<br>';
		  html += "Worst Rating: " + val.rating.worstRating+' | ';
		  html += "Rating Value: " + val.rating.ratingValue+' | ';
		  html += "Best Rating: " + val.rating.bestRating+'<br>';
		});
		html += '</div>';
		html += "<div class='checkbox'><label><input type='checkbox' id='bestBuy_cB_"+j+"' onclick='itemSelected(this);' value=''>Select</label></div>";
	});
	return html;
}

// Method to parse and display MetaData for mobile phones from eBay.
function createListEBay(menudata, j){
	var html = '';
	$.each(menudata,function(i,val){
		html += '<div id='+i+'><h2>'+val.ebay_product.title+'</h2>';
		ebayTitles[j] = val.ebay_product.title;
		if(j==1){
		  html += "<img src='"+val.ebay_product.main_images[0].location+"' width='400' height='410'>";
		} else {
		  html += "<img src='"+val.ebay_product.main_images[0].location+"' width='400' height='410'>";
		}
		ebayImages[j] = val.ebay_product.main_images[0].location;
		html += "<br><b>"+'Price:</b>'+val.ebay_product.price+"<br>";
		html += "<br><b>"+'Availability:</b>'+val.ebay_product.availability+"<br>";
		html += "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#sellerDetails_eBay_"+j+"'>Seller Details</button>";
		html += "<div id='sellerDetails_eBay_"+j+"' class='modal fade' role='dialog'><div class='modal-dialog'>";
		  // Modal content
		  html += "<div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'>&times;</button>";
		  html += "<h4 class='modal-title'>Seller Details</h4></div>";
		  html += "<div class='modal-body'>"
			html += "<div class='row'><div class='col-sm-6'><b>Title:</b></div>"+"<div class='col-sm-6'>"+val.ebay_product.seller.title+'</div></div><br>';
			html += "<div class='row'><div class='col-sm-6'><b>Feedback:</b></div>"+"<div class='col-sm-6'>"+val.ebay_product.seller.feedback+'</div></div><br>';
			html += "<div class='row'><div class='col-sm-6'><b>Positive feedback:</b></div>"+"<div class='col-sm-6'>"+val.ebay_product.seller.positive_feedback+'</div></div><br>';
			ebayRatings[j] = val.ebay_product.seller.positive_feedback;
		  html += "</div><div class='modal-footer'><button type='button' class='btn btn-default'' data-dismiss='modal'>Close</button></div></div>";
		html += "</div></div><br><b>Model</b><br>";
		html += val.ebay_product.model+"<br>";
		html += '</div>';
		html += "<div class='checkbox'><label><input type='checkbox' id='eBay_cB_"+j+"' onclick='itemSelected(this);' value=''>Select</label></div>";
	});
	return html;
}

function itemSelected(cb){
  var htmlInp = "";
  if(chosenPhonesNum==3 && cb.checked){
    // cb.checked.removeAttr('checked');
	alert("Please select only 3 for the final choice making.");
  } else {
	  chosenPhonesNum++;
	  if (cb.id=="amazon_cB_1" || cb.id=="amazon_cB_2"){
		if (!choice1Made){
		  if (cb.id=="amazon_cB_1") {
		    $("#choice_1").html(amazonTitles[1]);
			htmlInp = "<img src='"+amazonImages[1]+"' width='500' height='500'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(amazonRatings[1]);
		  } else {
		    $("#choice_1").html(amazonTitles[2]);
			htmlInp = "<img src='"+amazonImages[2]+"' width='230' height='450'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(amazonRatings[2]);
		  }
		  choice1Made = true;
		} else if (!choice2Made) {
		  if (cb.id=="amazon_cB_1") {
		    $("#choice_2").html(amazonTitles[1]);
			htmlInp = "<img src='"+amazonImages[1]+"' width='500' height='500'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(amazonRatings[1]);
		  } else {
		    $("#choice_2").html(amazonTitles[2]);
			htmlInp = "<img src='"+amazonImages[2]+"' width='230' height='450'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(amazonRatings[2]);
		  }
		  choice2Made = true;
		} else {
		  if (cb.id=="amazon_cB_1") {
		    $("#choice_3").html(amazonTitles[1]);
			htmlInp = "<img src='"+amazonImages[1]+"' width='500' height='500'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(amazonRatings[1]);
		  } else {
		    $("#choice_3").html(amazonTitles[2]);
			htmlInp = "<img src='"+amazonImages[2]+"' width='230' height='450'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(amazonRatings[2]);
		  }
		  choice3Made = true;
		}
	  } else if (cb.id=="bestBuy_cB_1" || cb.id=="bestBuy_cB_2"){
		if (!choice1Made){
		  if (cb.id=="bestBuy_cB_1") {
		    $("#choice_1").html(bestBuyTitles[1]);
			htmlInp = "<img src='"+bestBuyImages[1]+"' width='450' height='410'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(bestBuyRatings[1]);
		  } else {
		    $("#choice_1").html(bestBuyTitles[2]);
			htmlInp = "<img src='"+bestBuyImages[2]+"' width='450' height='410'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(bestBuyRatings[2]);
		  }
		  choice1Made = true;
		} else if (!choice2Made) {
		  if (cb.id=="bestBuy_cB_1") {
		    $("#choice_2").html(bestBuyTitles[1]);
			htmlInp = "<img src='"+bestBuyImages[1]+"' width='450' height='410'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(bestBuyRatings[1]);
		  } else {
		    $("#choice_2").html(bestBuyTitles[2]);
			htmlInp = "<img src='"+bestBuyImages[2]+"' width='450' height='410'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(bestBuyRatings[2]);
		  }
		  choice2Made = true;
		} else {
		  if (cb.id=="bestBuy_cB_1") {
		    $("#choice_3").html(bestBuyTitles[1]);
			htmlInp = "<img src='"+bestBuyImages[1]+"' width='450' height='410'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(amazonRatings[1]);
		  } else {
		    $("#choice_3").html(bestBuyTitles[2]);
			htmlInp = "<img src='"+bestBuyImages[2]+"' width='450' height='410'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(amazonRatings[2]);
		  }
		  choice3Made = true;
		}
	  } else {
		if (!choice1Made){
		  if (cb.id=="eBay_cB_1") {
		    $("#choice_1").html(ebayTitles[1]);
			htmlInp = "<img src='"+ebayImages[1]+"' width='400' height='410'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(ebayRatings[1]);
		  } else {
		    $("#choice_1").html(ebayTitles[2]);
			htmlInp = "<img src='"+ebayImages[2]+"' width='400' height='410'>";
			$("#image_1").html(htmlInp);
			$("#rating_1").html(ebayRatings[2]);
		  }
		  choice1Made = true;
		} else if (!choice2Made) {
		  if (cb.id=="eBay_cB_1") {
		    $("#choice_2").html(ebayTitles[1]);
			htmlInp = "<img src='"+ebayImages[1]+"' width='400' height='410'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(ebayRatings[1]);
		  } else {
		    $("#choice_2").html(ebayTitles[2]);
			htmlInp = "<img src='"+ebayImages[2]+"' width='400' height='410'>";
			$("#image_2").html(htmlInp);
			$("#rating_2").html(ebayRatings[2]);
		  }
		  choice2Made = true;
		} else {
		  if (cb.id=="eBay_cB_1") {
		    $("#choice_3").html(ebayTitles[1]);
			htmlInp = "<img src='"+ebayImages[1]+"' width='400' height='410'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(ebayRatings[1]);
		  } else {
		    $("#choice_3").html(ebayTitles[2]);
			htmlInp = "<img src='"+ebayImages[2]+"' width='400' height='410'>";
			$("#image_3").html(htmlInp);
			$("#rating_3").html(ebayRatings[2]);
		  }
		  choice3Made = true;
		}
	  }
  }
}