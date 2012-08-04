<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Panier jquery</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.js"></script>
<script type="text/javascript" src="js/jquery_cart.js"></script>
<script type="text/javascript">
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
<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>

<body>
<div class="content">
<h1>Plugin panier jquery</h1>
<ul class="liste_produit">
<?php
for($i=0;$i<5;$i++){
?>
<li>
<div class="image">
<img src="images/prod<?php echo ($i+1); ?>.jpg" width="100px" /></div>
<div class="titre">Mon produit <?php echo ($i+1); ?></div>
<div class="add_cart"><input type="button" value="Add to cart" class="add" /></div>
</li>
<?php
}
?>
</ul>
<div id="panier"></div>
</div>
</body>
</html>
