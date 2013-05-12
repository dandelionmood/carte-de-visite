$(document).ready(function() {

	// Liste des éléments à animer via l'ajout d'une classe.
	// On ajoutera la boîte twitter dans un deuxième temps si on arrive à la charger.
	var a_animer = $('#photo-gauche, #liste-reseaux-sociaux li a.a-animer, #legende');

	var retardateur = setInterval(function() {
		// On ajoute les classes pour déclencher le chargement.
		clearInterval(retardateur);
		
    a_animer.addClass('position-finale');
		
		$('#ecran-chargement').fadeOut('fast', function() {
			$('#ecran-final').fadeIn('fast', function() {
				$('#lien-deplier-replier').addClass('position-finale');
			});
		});
	}, 500);

	
	charger_dernier_tweet(
		function() {
			charger_dernier_commit(
				charger_dernier_disque
			);
		}
	);
	
	
	
	var interface_depliee = true;
	$('#lien-deplier-replier').click(function(e) {
		if ( interface_depliee ) {
			a_animer = $(jQuery.grep( $('.position-finale'), function(e){
				return $(e).attr('id') != 'lien-deplier-replier'
					&& $(e).attr('id') != 'legende';
			}));
			a_animer.removeClass('position-finale');
			$(this).removeClass('icon-minus-sign').addClass('icon-plus-sign');
			interface_depliee  = false;
		} else {
			a_animer.addClass('position-finale');
			$(this).removeClass('icon-plus-sign').addClass('icon-minus-sign');
			interface_depliee = true;
		}
	});
	
	
});



var charger_dernier_tweet = function(fcb) {
	
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
				
				var contexte = $('.boite-droite.dernier-tweet');
				
				// Récupération des infos et formatage.
				$('.texte', contexte).html( replaceURLWithHTMLLinks(d[0].text) );
				$('.date', contexte)
					.attr('href', 'https://twitter.com/#!/dandelionmood/status/'+d[0].id_str)
					.html(date.strftime('Publié sur <span class="icon-twitter"></span> Twitter<br />Le %d/%m/%Y à %H:%M'));
				
				contexte.addClass('position-finale');
				fcb();
				
			}
		}
	});
	
};

var charger_dernier_commit = function(fcb) {
	$.ajax({
		url: 'https://github.com/dandelionmood.json',
		type: 'GET',
		data: { },
		dataType: 'jsonp',
		success: function(events) {
			
			var contexte = $('.boite-droite.dernier-commit');
			
			contexte.css({
				'top': $('.boite-droite.dernier-tweet').outerHeight() + 15 + 'px'
			});
			
			$.each(events, function(i, evt) {
				
				if ( evt.type == 'PushEvent' ) {
					
					var evt_date = new Date( evt.created_at ),
						evt_texte = evt.payload.shas.pop()[2],
						evt_url = evt.repository.url,
						rep_texte = evt.repository.name;
						
					$('.texte', contexte).html( evt_texte );
					$('.date', contexte)
						.attr('href', evt_url)
						.html(evt_date.strftime('Commit pour le projet <strong>' + rep_texte +
							'</strong> sur <span class="icon-github"></span> Github<br />Le %d/%m/%Y à %H:%M'));
					
					contexte.addClass('position-finale');
					fcb();
					
					return false;
				}
				
				return true;
			
			});
		}
	});	
}

var charger_dernier_disque = function(fcb) {
	
	$.ajax({type: "GET",
    url : $.trim('http://api.tumblr.com/v2/blog/jaiecoutecamaplu.quillery.fr/posts/?filter=text&tag=&limit=1' ),
    dataType: 'jsonp',
    data: {api_key : '4VBTVt8gLoJjC5QyX8DZ3vUaHOOFy5XGIfewdESJ4UYRUM3AFI'},
		success: function(d) {
			var dpost = d.response.posts[0],
				date = new Date( dpost.date.split(' ')[0] ),
				url = dpost.post_url,
				url_photo = dpost.photos[0].alt_sizes[3].url,
				texte = dpost.caption.split('\n')[0];
			
			var contexte = $('.boite-droite.dernier-disque');
			contexte.css({
				'top':
					$('.boite-droite.dernier-tweet').outerHeight() +
					$('.boite-droite.dernier-commit').outerHeight() + 30 + 'px'
			});
			
			$('.texte', contexte).html( texte );
			$('.image', contexte).attr( 'src', url_photo );
			$('.url', contexte).attr('href', url);
			$('.date', contexte)
				.attr('href', url)
				.html(date.strftime("Disque chroniqué sur <span class='icon-music'></span> «J'ai écouté ça m'a plu»<br />Le %d/%m/%Y"));
				
			contexte.addClass('position-finale');

		}
	});
	
};








// Strftime : http://hacks.bluesmoon.info/strftime/
Date.ext={};Date.ext.util={};Date.ext.util.xPad=function(x,pad,r){if(typeof (r)=="undefined"){r=10}for(;parseInt(x,10)<r&&r>1;r/=10){x=pad.toString()+x}return x.toString()};Date.prototype.locale="en-GB";if(document.getElementsByTagName("html")&&document.getElementsByTagName("html")[0].lang){Date.prototype.locale=document.getElementsByTagName("html")[0].lang}Date.ext.locales={};Date.ext.locales.en={a:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],B:["January","February","March","April","May","June","July","August","September","October","November","December"],c:"%a %d %b %Y %T %Z",p:["AM","PM"],P:["am","pm"],x:"%d/%m/%y",X:"%T"};Date.ext.locales["en-US"]=Date.ext.locales.en;Date.ext.locales["en-US"].c="%a %d %b %Y %r %Z";Date.ext.locales["en-US"].x="%D";Date.ext.locales["en-US"].X="%r";Date.ext.locales["en-GB"]=Date.ext.locales.en;Date.ext.locales["en-AU"]=Date.ext.locales["en-GB"];Date.ext.formats={a:function(d){return Date.ext.locales[d.locale].a[d.getDay()]},A:function(d){return Date.ext.locales[d.locale].A[d.getDay()]},b:function(d){return Date.ext.locales[d.locale].b[d.getMonth()]},B:function(d){return Date.ext.locales[d.locale].B[d.getMonth()]},c:"toLocaleString",C:function(d){return Date.ext.util.xPad(parseInt(d.getFullYear()/100,10),0)},d:["getDate","0"],e:["getDate"," "],g:function(d){return Date.ext.util.xPad(parseInt(Date.ext.util.G(d)/100,10),0)},G:function(d){var y=d.getFullYear();var V=parseInt(Date.ext.formats.V(d),10);var W=parseInt(Date.ext.formats.W(d),10);if(W>V){y++}else{if(W===0&&V>=52){y--}}return y},H:["getHours","0"],I:function(d){var I=d.getHours()%12;return Date.ext.util.xPad(I===0?12:I,0)},j:function(d){var ms=d-new Date(""+d.getFullYear()+"/1/1 GMT");ms+=d.getTimezoneOffset()*60000;var doy=parseInt(ms/60000/60/24,10)+1;return Date.ext.util.xPad(doy,0,100)},m:function(d){return Date.ext.util.xPad(d.getMonth()+1,0)},M:["getMinutes","0"],p:function(d){return Date.ext.locales[d.locale].p[d.getHours()>=12?1:0]},P:function(d){return Date.ext.locales[d.locale].P[d.getHours()>=12?1:0]},S:["getSeconds","0"],u:function(d){var dow=d.getDay();return dow===0?7:dow},U:function(d){var doy=parseInt(Date.ext.formats.j(d),10);var rdow=6-d.getDay();var woy=parseInt((doy+rdow)/7,10);return Date.ext.util.xPad(woy,0)},V:function(d){var woy=parseInt(Date.ext.formats.W(d),10);var dow1_1=(new Date(""+d.getFullYear()+"/1/1")).getDay();var idow=woy+(dow1_1>4||dow1_1<=1?0:1);if(idow==53&&(new Date(""+d.getFullYear()+"/12/31")).getDay()<4){idow=1}else{if(idow===0){idow=Date.ext.formats.V(new Date(""+(d.getFullYear()-1)+"/12/31"))}}return Date.ext.util.xPad(idow,0)},w:"getDay",W:function(d){var doy=parseInt(Date.ext.formats.j(d),10);var rdow=7-Date.ext.formats.u(d);var woy=parseInt((doy+rdow)/7,10);return Date.ext.util.xPad(woy,0,10)},y:function(d){return Date.ext.util.xPad(d.getFullYear()%100,0)},Y:"getFullYear",z:function(d){var o=d.getTimezoneOffset();var H=Date.ext.util.xPad(parseInt(Math.abs(o/60),10),0);var M=Date.ext.util.xPad(o%60,0);return(o>0?"-":"+")+H+M},Z:function(d){return d.toString().replace(/^.*\(([^)]+)\)$/,"$1")},"%":function(d){return"%"}};Date.ext.aggregates={c:"locale",D:"%m/%d/%y",h:"%b",n:"\n",r:"%I:%M:%S %p",R:"%H:%M",t:"\t",T:"%H:%M:%S",x:"locale",X:"locale"};Date.ext.aggregates.z=Date.ext.formats.z(new Date());Date.ext.aggregates.Z=Date.ext.formats.Z(new Date());Date.ext.unsupported={};Date.prototype.strftime=function(fmt){if(!(this.locale in Date.ext.locales)){if(this.locale.replace(/-[a-zA-Z]+$/,"") in Date.ext.locales){this.locale=this.locale.replace(/-[a-zA-Z]+$/,"")}else{this.locale="en-GB"}}var d=this;while(fmt.match(/%[cDhnrRtTxXzZ]/)){fmt=fmt.replace(/%([cDhnrRtTxXzZ])/g,function(m0,m1){var f=Date.ext.aggregates[m1];return(f=="locale"?Date.ext.locales[d.locale][m1]:f)})}var str=fmt.replace(/%([aAbBCdegGHIjmMpPSuUVwWyY%])/g,function(m0,m1){var f=Date.ext.formats[m1];if(typeof (f)=="string"){return d[f]()}else{if(typeof (f)=="function"){return f.call(d,d)}else{if(typeof (f)=="object"&&typeof (f[0])=="string"){return Date.ext.util.xPad(d[f[0]](),f[1])}else{return m1}}}});d=null;return str}; 

function replaceURLWithHTMLLinks(text) {
  var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(exp,"<a href='$1' target='_blank'>$1</a>"); 
}