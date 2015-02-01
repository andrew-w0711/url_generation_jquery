$(document).ready(function(){
	setInterval("generate_final_url()",1500);
	$("#copy").zclip({
		path:'js/ZeroClipboard.swf',
		copy:function(){return $('#final_url').val();}
	});
	
});

function get_first_url_value()
{
	return $('input[name=amount]:checked').val();
}

function filtering(str)
{
	str = $.trim(str);

	str=str.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");   //this one
    str=str.replace(/\s+/g, "_");

 	return str;
}
function generate_final_url(){

	var headline = ($("#headline").val())?$("#headline").val():"none";
	var subhead1 = ($("#subhead1").val())?$("#subhead1").val():"none";
	var subhead2 = ($("#subhead2").val())?$("#subhead2").val():"none";
	var bullet1 = ($("#bullet1").val())?$("#bullet1").val():"none";
	var bullet2 = ($("#bullet2").val())?$("#bullet2").val():"none";
	var bullet3 = ($("#bullet3").val())?$("#bullet3").val():"none";
	var bullet4 = ($("#bullet4").val())?$("#bullet4").val():"none";
	var call    = ($("#call").val())?$("#call").val():"none";

	headline = filtering(headline);
	subhead1 = filtering(subhead1);
	subhead2 = filtering(subhead2);
	bullet1 = filtering(bullet1);
	bullet2 = filtering(bullet2);
	bullet3 = filtering(bullet3);
	bullet4 = filtering(bullet4);
	call = filtering(call);


	var final_path =  get_first_url_value() +"&headline="+headline+"&subhead1="+subhead1+"&subhead2="+subhead2+"&bullet1="+bullet1+"&bullet2="+bullet2+
	"&bullet3="+bullet3+"&bullet4="+bullet4+"&call="+call;

	$("#final_url").html(final_path);
}

function preview(){
	$("#show_here").attr("src",$("#final_url").val());
}
function new_window(){
	window.open($("#final_url").val());
}