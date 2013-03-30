<!DOCTYPE html>
<html lang="fr">
	<head>
    <meta charset="utf-8">

		<meta name="description" content="Pierre Quillery — Développeur web">
		<meta name="keywords" CONTENT="pierre,quillery,pierre quillery,développement,développeur,web,internet,php,javascript,css,sql,mysql"> 

		<meta name="Viewport" content="width=1500px">

    <title>Pierre Quillery, Développeur Web</title>

    <link href='http://fonts.googleapis.com/css?family=Josefin+Slab' rel='stylesheet' type='text/css'>
	  <link rel="stylesheet" type="text/css" href="styles.css" />

    <!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<meta http-equiv="X-UA-Compatible" content="IE=9">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts.js"></script>

    <link rel="icon" type="image/x-icon" href="http://pierre.quillery.fr/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="http://pierre.quillery.fr/favicon.ico" />
		<link rel="icon" type="image/png" href="http://pierre.quillery.fr/favicon.png" />

	</head>

	<body>
		<div id="contenu" class="boite">

			<article>
				<h1>
					Pierre Quillery<br />
					<em>Conception &amp; développement <br />de sites web.</em>
				</h1>
				<section>
					Strasbourgeois de <?php echo strftime('%Y') - 1987; ?> ans, amateur de <a href="http://www.senscritique.com/dandelionmood/collection/#univers=5_6" target="_blank">bons disques</a>
					et <a href="http://soundcloud.com/dandelionmood" target="_blank">musicien</a> à ses heures perdues ... 
					N'hésitez pas à <a href="http://www.chosesafaire.fr/" target="_blank">visiter mon site</a> et à me rejoindre sur 
					<a href="http://twitter.com/#!/dandelionmood" target="_blank">Twitter</a> !
				</section>
			</article>

			<aside>
				<img src="images/photo.png" class="animation boite" id="photo-gauche" alt="une photo" />

				<ul id="liste-reseaux-sociaux">
					<li>
						<a id="lien-twitter" href="http://twitter.com/#!/dandelionmood" target="_blank">
							<img src="images/twitter.png" alt="" />
						</a>
					</li>
					<li>
						<a id="lien-lastfm" href="http://www.lastfm.fr/user/dandelionmood" target="_blank">
							<img src="images/lastfm.png" alt="" />
						</a>
					</li>
					<li>
						<a id="lien-blog" href="http://www.chosesafaire.fr" target="_blank">
							<img src="images/wordpress.png" alt="" />
						</a>
					</li>
				</ul>

				<div id="dernier-tweet" class="boite">
					<div id="tw-texte">
					</div>
					<div>
						<a id="tw-date" href="#" target="_blank">
						</a>
					</div>
				</div>

			</aside>

		</div>

		<div id="legende">
			icônes par <a href="http://www.elegantthemes.com/blog/resources/free-social-media-icon-set" target="_blank">elegantthemes.com</a>
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
