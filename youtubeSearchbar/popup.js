var tendinaApparsa = false;
var filtroScelto='';

function creaRadioBtnFiltri(){
	let filtriRadioDiv = document.createElement('div');

	filtriRadioDiv.setAttribute('id','filtriRadio');
	filtriRadioDiv.innerHTML ='<br><input type="radio" name="radio[]" id="EgIQAg%253D%253D">  Channel</input>&nbsp&nbsp&nbsp&nbsp'+
    '<input type="radio" name="radio[]" id="EgIQAw%253D%253D">  Playlist</input>&nbsp&nbsp&nbsp&nbsp'+
    '<input type="radio" name="radio[]" id="EgIQBA%253D%253D">  Film</input>&nbsp&nbsp&nbsp&nbsp'+
    '<input type="radio" name="radio[]" id="EgIQBQ%253D%253D">  Program</input>';

    document.getElementById('container').appendChild(filtriRadioDiv);
}

function gestisciTendina(){
	let tendina = document.getElementById('container'); 
	
	if(tendinaApparsa){
		document.getElementById('container').removeChild(document.getElementById('filtriRadio'));

		tendina.style.height = '50px';
		tendinaApparsa = false;													

	}else{
		tendina.style.height = '75px';
		tendinaApparsa = true;

		creaRadioBtnFiltri();

		$(document).on('click','input[type=radio]', function() {
   			filtroScelto = $(this).attr('id');
		});
	}
}

document.getElementById("filtraBtn").addEventListener("click",gestisciTendina);

document.getElementById("cercaBtn").addEventListener("click",function(){
	let video = document.getElementById("nomeVideoTxt").value;

	if(video)
		chrome.tabs.update({url: 'https:www.youtube.com/results?search_query='+video+'&'+'sp='+filtroScelto});

	window.close();
})

