/**
*@Copyright 2012
*Développer par Nassim Bahri 13/02/2012
*Plugin panier jquery
*Licence GNU-GPL
Version 1.0
**/
(function($) {
        $.fn.jQueryCart = function(params) {
			var defaut={
				cart		:'cart',
				speed		:1000,
				fade		:true,
				animation	:'simple',
				callback	:null
			};
			params = $.extend(defaut, params);
			/**
			*Variable globale du plugin
			**/
			var cart=$("#"+params.cart);
			var button=$(this);
			var isAnimated=false;	//Cette variable permet de déterminer la fin de l'animation d'une image
			/**
			*Déterminer les coordonnées et les dimensions du panier
			**/
			var cartWidth=cart.width();
			var cartHeight=cart.height();
			var cartTop=cart.offset().top;
			var cartLeft=cart.offset().left;
			
			/**
			*Détécter le click sur le boutton
			**/
			button.bind('click',function(){
				if(!isAnimated){
					isAnimated=true;
					clone($(this));
				}
			});
			
			
			/**
			*Méthode qui permet de cloner l'image du produit et de la positionner
			*@param btnClick le boutton qui submit le click
			**/
			var clone=function(btnClick){
				var parent=btnClick.parent().parent().find('.image');
				var image=parent.find('img');
				var imageTop=image.offset().top;
				var imageLeft=image.offset().left;
				var imageCole=image.clone();
				//Déterminer le type de l'animation à appliquer
				if(typeof params.animation=='string'){
					simpleAnimation(parent,imageCole,imageTop,imageLeft);	//Appel à la fonction  avec les paramétres nécessaires
				}
				else{
					switch(params.animation.style){
						case 'rotation':
						rotateAnimation(parent,imageCole,imageTop,imageLeft);
						break;
						case 'zoom':
						zoomAnimation(parent,imageCole,imageTop,imageLeft);
						break;
					}
				}
				
			}
			
			/**
			*Méthodes qui permet d'animer l'image
			*@param parent la div parent de l'élément
			*@param imageCole l'image qui sera animer
			*@param imageTop & imageLeft les marges en haut et à droite de l'image
			**/
			/**
			*Animation simple
			**/
			var simpleAnimation=function(parent,imageCole,imageTop,imageLeft){
				var opacity=1;
				if(params.fade){
					opacity=0.3;
				}
				var option={left:cartLeft+'px',top:cartTop+'px',width:'70px',height:'70px',opacity:opacity};
				imageCole.appendTo(parent).css({
					'position':'absolute',
					'top':imageTop+'px',
					'left':imageLeft+'px'
				}).stop().animate(option,params.speed,function(){
					deleteClone(imageCole);
				});
			}
			
			/**
			*Animation avec rotation de l'image
			**/
			var rotateAnimation=function(parent,imageCole,imageTop,imageLeft){
				var opacity=1;
				if(params.fade){
					opacity=0.3;
				}
				var option={left:cartLeft+'px',top:cartTop+'px',width:'70px',height:'70px',opacity:opacity};
				imageCole.appendTo(parent).css({
					'position':'absolute',
					'top':imageTop+'px',
					'left':imageLeft+'px',
					'-webkit-transform': 'rotate(-90deg)'
				}).stop().animate(option,params.speed,function(){
					deleteClone(imageCole);
				});
			}
			
			/**
			*Animation avec un zoom
			**/
			var zoomAnimation=function(parent,imageCole,imageTop,imageLeft){
				//Agrendir l'image
				if(typeof params.animation.zoom=='undefined'){
					params.animation.zoom=1;
				}
				var w=imageCole.width()*params.animation.zoom;
				var option={width:w+'px'};
				imageCole.appendTo(parent).css({
					'position':'absolute',
					'top':imageTop+'px',
					'left':imageLeft+'px'
				}).stop().animate(option,params.speed,function(){
					var opacity=1;
					if(params.fade){
						opacity=0.3;
					}
				var option={left:cartLeft+'px',top:cartTop+'px',width:'70px',height:'70px',opacity:opacity};
					$(this).animate(option,params.speed,function(){
						deleteClone(imageCole);
					});
				});
			}
			
			/**
			*Méthode qui permet de supprimer l'image cloné aprés l'annimation
			*@param imageCole l'image à supprimer
			**/
			var deleteClone=function(imageCole){
				imageCole.fadeOut('normal',function(){
						$(this).remove();
						isAnimated=false;
						if(typeof params.callback=='function'){
							params.callback();
						}
					});
			}
			
			return $(this);
		};
})(jQuery);