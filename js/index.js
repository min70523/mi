window.onload=function(){
	//侧导航
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let blli=bannerleft.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	for(let i=0;i<blli.length;i++){
		blli[i].onmouseover=function(){
			item[i].style.display='block';
		}
		blli[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}
	//banner 按钮
	let banner=$('.banner')[0];
	let imgleft=$('.img-left',banner)[0];
	let imgright=$('.img-right',banner)[0];
	let btnbanner=document.getElementsByClassName('btn-banner')[0];
	let bbli=btnbanner.getElementsByTagName('li');
	let bannerimg=document.getElementsByClassName('banner-img')[0];
	let bili=bannerimg.getElementsByTagName('li');
	// let biimg=bannerimg.getElementsByTagName('img');
	// console.log(biimg)
	let t=setInterval(move,3000);
	let num=0;
	let biliw=parseInt(getComputedStyle(bannerimg,null).width);
	console.log(biliw)
	// bili[0].style.opacity=1;
	bbli[0].style.background= 'rgba(159,162,166,0.5)';
	bbli[0].style.border='2px solid rgba(255,255,255,0.8)';
	//banner 自动轮播
	
	function move(){
		num++;
		if(num==bili.length){
			num=0;
		}
		for(let i=0;i<bili.length;i++){
			bbli[i].style.background= 'rgba(0,0,0,0.4)';
			bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
			bili[i].style.opacity=0;
		}		
		bbli[num].style.background= 'rgba(159,162,166,0.5)';
		bbli[num].style.border='2px solid rgba(255,255,255,0.8)';
		bili[num].style.opacity=1;		
	}
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,1000);
	}
	//banner 按钮
	for(let i=0;i<bbli.length;i++){
			bbli[i].onclick=function(){
		for(let i=0;i<bili.length;i++){
		 	bbli[i].style.background= 'rgba(0,0,0,0.4)';
			bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
	 		bili[i].style.opacity=0;
	 	  }
		 	bbli[i].style.background= 'rgba(159,162,166,0.5)';
			bbli[i].style.border='2px solid rgba(255,255,255,0.8)';
	 		bili[i].style.opacity=1;
	 		num=i;
	 	}			
	}
	// for(let i=0;i<bbli.length;i++){
	// 		bbli[i].onmouseover=function(){
	// 	for(let i=0;i<bili.length;i++){
	// 	 	bbli[i].style.background= 'rgba(0,0,0,0.4)';
	// 		bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
	//  		bili[i].style.opacity=0;
	//  	  }
	// 	 	bbli[i].style.background= 'rgba(159,162,166,0.5)';
	// 		bbli[i].style.border='2px solid rgba(255,255,255,0.8)';
	//  	}	
	//  	bbli[i].onmouseout=function(){
	// 	 	bbli[i].style.background= 'rgba(0,0,0,0.4)';
	// 		bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
	//  	}		
	// }
	//左右按钮
		imgleft.onclick=function(){
		num--;
		if(num<0){
			num=bili.length-1;
		}
		for(let i=0;i<bili.length;i++){
			bbli[i].style.background= 'rgba(0,0,0,0.4)';
			bbli[i].style.border='2px solid rgba(255,255,255,0.5)';
			bili[i].style.opacity=0;
		}		
		bbli[num].style.background= 'rgba(159,162,166,0.5)';
		bbli[num].style.border='2px solid rgba(255,255,255,0.8)';
		bili[num].style.opacity=1;		
	     }
      
		imgright.onclick=function(){
			move();	
		}	
	//明星单品
	let btnleft=$('.btn-left')[0];	
	let btnright=$('.btn-right')[0];	
	let btnrighta=$('a',btnright)[0];	
	let btnlefta=$('a',btnleft)[0];	
	let starbox=$('.star-box')[0];
	let starboxli=$('li',starbox);
	let starbottom=$('.star-bottom')[0];
	
	btnlefta.style.color='#808080';
	btnrighta.style.color='#e0e0e0';
	btnleft.onclick=function(){
		starbox.style.marginLeft=`${-1226}px`;
		starbox.style.transition=`all ${ 1}s`;
		btnrighta.style.color='#808080';
		btnlefta.style.color='#e0e0e0';
		btnlefta.style.transition=`all ${ 1}s`;
		btnrighta.style.transition=`all ${ 0.5}s`;
		btnright.style.cursor='pointer';

	}
	btnright.onclick=function(){
		starbox.style.marginLeft=`${0}px`;
		starbox.style.transition=`all ${ 0.5}s`;
		btnrighta.style.color='#e0e0e0';
		btnlefta.style.color='#808080';
		btnleft.style.cursor='pointer';
	}
	console.log(starbox.offsetmarginLeft)
		// if(starbox.style.marginLeft==0){
		// btnleft.onmouseover=function(){
		// btnlefta.style.color='#ff7500';
		// btnleft.style.cursor='pointer';
  //      }
  //      btnleft.onmouseout=function(){
		// btnlefta.style.color='#e0e0e0';
		// btnleft.style.cursor='pointer';
  //      }
	// }
	// else if(starbox.style.marginLeft==-1226){
	// 	btnright.onmouseover=function(){
	// 	btnrighta.style.color='#ff7500';
	// 	btnright.style.cursor='pointer';

	// }
	// 	btnright.onmouseout=function(){
	// 	btnrighta.style.color='#e0e0e0';
	// 	btnleft.style.cursor='default';
	// 	}
	// }

	// let x=starbox.style.marginLeft=`${-1226}px`;
	 function starmove(){
	 	starbox.style.marginLeft=`${-1226}px`;
	 	starbox.style.transition=`all ${ 1}s`;
	// let t= parseInt(getComputedStyle(starbox,null).width);
		btnrighta.style.color='#808080';
		btnlefta.style.color='#e0e0e0';
	}
	 function starmoveL(){
	 	starbox.style.marginLeft=`${0}px`;
	 	starbox.style.transition=`all ${ 1}s`;
	 	btnrighta.style.color='#e0e0e0';
		btnlefta.style.color='#808080';
	 }

	 let start1=setInterval(starmoveL,3000);
	 let start=setInterval(starmove,6000);



}
