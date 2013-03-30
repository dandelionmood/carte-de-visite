<!DOCTYPE html>
<html lang="fr">
	<head>
    <meta charset="utf-8">

		<meta name="description" content="Pierre Quillery — Développeur web">
		<meta name="keywords" CONTENT="pierre,quillery,pierre quillery,développement,développeur,web,internet,php,javascript,css,sql,mysql"> 

		<meta name="Viewport" content="width=1500px">

    <title>Pierre Quillery, Développeur Web</title>

    <link href='http://fonts.googleapis.com/css?family=Josefin+Slab' rel='stylesheet' type='text/css'>
	  <link rel="stylesheet" type="text/css" href="css/styles.css" />

    <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css" />
		
    <!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<meta http-equiv="X-UA-Compatible" content="IE=9">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/scripts.js"></script>

    <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
		<link rel="icon" type="image/png" href="images/favicon.png" />

	</head>

	<body>
		
		<div id="contenu" class="boite">
			
			<article id="ecran-chargement">
				<div style="text-align: center; margin-top: 50px;">
					<i class="icon-refresh icon-spin" style="font-size: 120px;"></i>
				</div>
			</article>
			
			<article id="ecran-final" style="display: none;">
				<h1>
					Pierre Quillery
					<br />
					<em>Conception &amp; développement <br />de sites web.</em>
				</h1>
				<section>
					Développeur strasbourgeois de <?php echo strftime('%Y') - 1987; ?> ans,<br />
					j'aime l'<a href="https://www.github.com/dandelionmood">open source</a>, 
					écouter de <a href="http://www.last.fm/user/dandelionmood" target="_blank">bons disques</a>
					et <br /><a href="http://soundcloud.com/dandelionmood" target="_blank">faire de la musique</a> …
				</section>
			</article>

			<aside>
				<img src="images/photo.png" class="animation boite" id="photo-gauche" alt="une photo" />

				<ul id="liste-reseaux-sociaux">
					<li>
						<a id="lien-twitter" href="http://twitter.com/#!/dandelionmood" target="_blank" class="a-animer icon-twitter"></a>
					</li>
					<!--<li>
						<a id="lien-linkedin" href="http://www.linkedin.com/pub/pierre-quillery/62/69a/636" target="_blank" class="icon-linkedin"></a>
					</li>-->
					<li>
						<a id="lien-github" href="https://www.github.com/dandelionmood" target="_blank" class="a-animer icon-github"></a>
					</li>
					<li>
						<a id="lien-blog" href="http://www.chosesafaire.fr" target="_blank" class="a-animer icon-home"></a>
					</li>
					<li>
						<a id="lien-deplier-replier" href="javascript:void(0);" class="icon-minus-sign"></a>
					</li>
				</ul>

				<div class="dernier-tweet boite boite-droite">
					<div class="texte">
					</div>
					<div>
						<a class="date" href="#" target="_blank">
						</a>
					</div>
				</div>

				<div class="dernier-commit boite boite-droite">
					<div class="texte">
					</div>
					<div>
						<a class="date" href="#" target="_blank">
						</a>
					</div>
				</div>
				
			</aside>

		</div>

		<div id="legende">
			icônes par <a href="http://fortawesome.github.com/Font-Awesome/" target="_blank">Font Awesome</a>
			/ photo par <a href="https://www.facebook.com/jnicolasduval" target="_blank">Jean-Nicolas Duval</a>
		</div>

		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-29273830-1']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>
	</body>
</html>
