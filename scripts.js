$(document).ready(function() {

	// Liste des éléments à animer via l'ajout d'une classe.
	// On ajoutera la boîte twitter dans un deuxième temps si on arrive à la charger.
	var a_animer = $('#photo-gauche, #liste-reseaux-sociaux li a, #legende');

	// On maintient un retardateur pour éviter les effets de bords
	// liés à l'utilisation du mouseover.
	var retardateur, delai = 1000;

	// On mouse over ...
	$('#contenu').hover(function() {

		// On ajoute les classes pour déclencher le chargement.
		clearInterval(retardateur);
    a_animer.addClass('position-finale');

    // Une fois que la légende est affichée on ne la masque plus.
    a_animer = a_animer.not('#legende');

	}, function() {
		
		// On va attendre le délai avant de masquer en enlevant les classes.
		clearInterval(retardateur);
    retardateur = setInterval(
      function() {
        clearInterval(retardateur);
        a_animer.removeClass('position-finale');
      },
      delai
    );

	});

	// Chargement du dernier Tweet via JSONP.
	// Si ce n'est pas disponible on dégradera la page en conséquence :
	// le bloc ne s'affichera pas.
	$.ajax({
	  url: 'https://api.twitter.com/1/statuses/user_timeline.json',
		type: 'GET',
		data: {
			'include_entities': 'false',
			'include_rts': 'false',
			'exclude_replies': 'true',
			'screen_name': 'dandelionmood',
			'count': '5'
		},
	  dataType: 'jsonp',
	  success: function(d) {
	  	// On s'assure d'avoir bien recu quelque chose en retour avant de
			// poursuivre.
	  	if( d ) {

	  		var s = d[0].created_at,
	  			date = new Date(
			    s.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,
			        "$1 $2 $4 $3 UTC"));


	  		// Récupération des infos et formatage.
		  	$('#tw-texte').html( replaceURLWithHTMLLinks(d[0].text) );
		  	$('#tw-date')
		  		.attr('href', 'https://twitter.com/#!/dandelionmood/status/'+d[0].id_str)
		  		.html(date.strftime('Publié sur Twitter le %d/%m/%Y à %H:%M'));

		  	// Vu que le chargement s'est bien déroulé, on ajoute notre 
		  	// boîte à la liste des éléments à animer.
		  	a_animer = a_animer.add( $('#dernier-tweet') );
	  	}
	  }
	});

});

// Strftime : http://hacks.bluesmoon.info/strftime/
Date.ext={};Date.ext.util={};Date.ext.util.xPad=function(x,pad,r){if(typeof (r)=="undefined"){r=10}for(;parseInt(x,10)<r&&r>1;r/=10){x=pad.toString()+x}return x.toString()};Date.prototype.locale="en-GB";if(document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){Date.prototype.locale=document.getElementsByTagName("html")[0].lang}Date.ext.locales={};Date.ext.locales.en={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],x:"%d/%m/%y",X:"%T"};Date.ext.locales["en-US"]=Date.ext.locales.en;Date.ext.locales["en-US"].c="%a %d %b %Y %r %Z";Date.ext.locales["en-US"].x="%D";Date.ext.locales["en-US"].X="%r";Date.ext.locales["en-GB"]=Date.ext.locales.en;Date.ext.locales["en-AU"]=Date.ext.locales["en-GB"];Date.ext.formats={a:function(d){return Date.ext.locales[d.locale].a[d.getDay()]},A:function(d){return Date.ext.locales[d.locale].A[d.getDay()]},b:function(d){return Date.ext.locales[d.locale].b[d.getMonth()]},B:function(d){return Date.ext.locales[d.locale].B[d.getMonth()]},c:"toLocaleString",C:function(d){return Date.ext.util.xPad(parseInt(d.getFullYear()/100,10),0)},d:["getDate","0"],e:["getDate"," "],g:function(d){return Date.ext.util.xPad(parseInt(Date.ext.util.G(d)/100,10),0)},G:function(d){var y=d.getFullYear();var V=parseInt(Date.ext.formats.V(d),10);var W=parseInt(Date.ext.formats.W(d),10);if(W>V){y++}else{if(W===0&&V>=52){y--}}return y},H:["getHours","0"],I:function(d){var I=d.getHours()%12;return Date.ext.util.xPad(I===0?12:I,0)},j:function(d){var ms=d-new Date(""+d.getFullYear()+"/1/1 GMT");ms+=d.getTimezoneOffset()*60000;var doy=parseInt(ms/60000/60/24,10)+1;return Date.ext.util.xPad(doy,0,100)},m:function(d){return Date.ext.util.xPad(d.getMonth()+1,0)},M:["getMinutes","0"],p:function(d){return Date.ext.locales[d.locale].p[d.getHours()>=12?1:0]},P:function(d){return Date.ext.locales[d.locale].P[d.getHours()>=12?1:0]},S:["getSeconds","0"],u:function(d){var dow=d.getDay();return dow===0?7:dow},U:function(d){var doy=parseInt(Date.ext.formats.j(d),10);var rdow=6-d.getDay();var woy=parseInt((doy+rdow)/7,10);return Date.ext.util.xPad(woy,0)},V:function(d){var woy=parseInt(Date.ext.formats.W(d),10);var dow1_1=(new Date(""+d.getFullYear()+"/1/1")).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow==53&&(new Date(""+d.getFullYear()+"/12/31")).getDay()<4){idow=1}else{if(idow===0){idow=Date.ext.formats.V(new Date(""+(d.getFullYear()-1)+"/12/31"))}}return Date.ext.util.xPad(idow,0)},w:"getDay",W:function(d){var doy=parseInt(Date.ext.formats.j(d),10);var rdow=7-Date.ext.formats.u(d);var woy=parseInt((doy+rdow)/7,10);return Date.ext.util.xPad(woy,0,10)},y:function(d){return Date.ext.util.xPad(d.getFullYear()%100,0)},Y:"getFullYear",z:function(d){var o=d.getTimezoneOffset();var H=Date.ext.util.xPad(parseInt(Math.abs(o/60),10),0);var M=Date.ext.util.xPad(o%60,0);return(o>0?"-":"+")+H+M},Z:function(d){return d.toString().replace(/^.*\(([^)]+)\)$/,"$1")},"%":function(d){return"%"}};Date.ext.aggregates={c:"locale",D:"%m/%d/%y",h:"%b",n:"\n",r:"%I:%M:%S %p",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"};Date.ext.aggregates.z=Date.ext.formats.z(new Date());Date.ext.aggregates.Z=Date.ext.formats.Z(new Date());Date.ext.unsupported={};Date.prototype.strftime=function(fmt){if(!(this.locale in Date.ext.locales)){if(this.locale.replace(/-[a-zA-Z]+$/,"") in Date.ext.locales){this.locale=this.locale.replace(/-[a-zA-Z]+$/,"")}else{this.locale="en-GB"}}var d=this;while(fmt.match(/%[cDhnrRtTxXzZ]/)){fmt=fmt.replace(/%([cDhnrRtTxXzZ])/g,function(m0,m1){var f=Date.ext.aggregates[m1];return(f=="locale"?Date.ext.locales[d.locale][m1]:f)})}var str=fmt.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g,function(m0,m1){var f=Date.ext.formats[m1];if(typeof (f)=="string"){return d[f]()}else{if(typeof (f)=="function"){return f.call(d,d)}else{if(typeof (f)=="object"&&typeof (f[0])=="string"){return Date.ext.util.xPad(d[f[0]](),f[1])}else{return m1}}}});d=null;return str}; 

function replaceURLWithHTMLLinks(text) {
  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(exp,"<a href='$1' target='_blank'>$1</a>"); 
}