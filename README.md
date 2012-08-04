#A propos

jQueryCart est un plugin qui vous permet d'offrir une valeur ajouté à votre site E-commerce. Ce plugin vous permet d'animer l'ajout d'un produit au panier.

##Installation

En faite, pour utiliser ce plugin vous devez inclure les fichiers suivants :

```html
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.js"></script>
<script type="text/javascript" src="js/jquery_cart.js"></script>
<link rel="stylesheet" type="text/css" href="css/style.css" />
```

Le code HTML de la page : 
```html
<div class="content">
	<h1>Plugin panier jquery</h1>
	<ul class="liste_produit">
		<!-- DOM du produit -->
		<li>
		<div class="image">
		<img src="images/prod1.jpg" width="100px" /></div>
		<div class="titre">Mon produit</div>
		<div class="add_cart"><input type="button" value="Add to cart" class="add" /></div>
		</li>
		<!-- fin DOM produit -->
	</ul>
	<div id="panier"></div>
</div>
```

##Remarques 
Votre panier devra être entouré par une div avec un identifiant que vous choisieez.

Vous devez respecter le DOM du produit.


##Usage

L'usage de ce plugin est très simple,Il faut juster l'appliquer à votre panier

```html
$(document).ready(function(){
	$('.add').jQueryCart({
		cart		:'panier',
		fade		:false,
		speed		:500,
		animation	:'simple',
		callback	:function(){
			alert('fin animation');
		}
	});
});
</script>
```

##Exploitons le code :
$('.add') le boutton ajouter au panier : permet de préciser que le code sera exécuté lorsqu'on clique sur un boutton portant cette classe

Options : 


		cart : le panier de votre site
		
		fade : true si vous voulez appliquer un effet de fadeOut lorsque le produit sera ajouté au panier
		
		speed : la durée de l'animation
		
		animation : le type de l'animation applique par d"faut 'simple'
		
		callback : une fonction qui sera exécuté lorsque l'animation est terminé

## Author

[Nassim Bahri](https://www.facebook.com/Bahri.Nassim) ([LinkedIn](http://www.linkedin.com/pub/nassim-bahri/32/b38/a11))