window.onload=function(){
	//侧导航
	let blli=document.querySelectorAll('aside>.banner-left>li')
	let item=document.getElementsByClassName('item');
	for(let i=0;i<blli.length;i++){
		blli[i].onmouseover=function(){
            let item=this.getElementsByClassName('item')[0];
			item.style.display='block';
		};
		blli[i].onmouseout=function(){
            let item=this.getElementsByClassName('item')[0];
			item.style.display='none';
		}
	}
	//nav
	///////////////////////////////////////////////////////////////////
    let lis1=document.querySelectorAll('.nav>nav>.nav-center>li')
    for(let i=0;i<lis1.length-2;i++){
        lis1[i].onmouseover=function(){
            let item1=this.getElementsByClassName('item1')[0];
            console.log(item1)
            item1.style.display='block';
        }
        lis1[i].onmouseout=function(){
            let item1=this.getElementsByClassName('item1')[0];
            item1.style.display='none';
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
	let t=setInterval(move,3000);
	let num=0;
	let biliw=parseInt(getComputedStyle(bannerimg,null).width);
	// bili[0].style.opacity=1;
	bbli[0].style.background= 'rgba(159,162,166,0.5)';
	bbli[0].style.border='2px solid rgba(255,255,255,0.8)';
	/////////////////////////////////////////////////////////////////////////
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
	//////////////////////////////////////////////////////////////////////////
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
	//////////////////////////////////////////////////////////////////////////
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
	/////////////////////////////////////////////////////////////////////////	
	//明星单品
	let btnleft=$('.btn-left')[0];	
	let btnright=$('.btn-right')[0];	
	let btnrighta=$('i',btnright)[0];	
	let btnlefta=$('i',btnleft)[0];	
	let starbox=$('.star-box')[0];
	let starboxli=$('li',starbox);
	let starbottom=$('.star-bottom')[0];
	let w=(starboxli[0].offsetWidth*5)+(parseInt(getComputedStyle(starboxli[0],null).marginRight)*4)
	let i=0;    //当前是第几屏
	starbox.style.width=w*2+'px';
	btnlefta.style.color='#808080';
	btnrighta.style.color='#e0e0e0';
	btnleft.onclick=function(){	
		if(i==1){
			return;
		}
		i++;
		starbox.style.marginLeft=`-${i*w}px`;
		starbox.style.transition=`all ${ 1}s`;
		btnrighta.style.color='#808080';
		btnlefta.style.color='#e0e0e0';
		btnlefta.style.transition=`all ${ 1}s`;
		btnrighta.style.transition=`all ${ 0.5}s`;
		btnright.style.cursor='pointer';
		clearInterval(start1);
		clearInterval(start);

	}
	btnright.onclick=function(){
		
		if(i==0){
			return;
		}
		i--;
		starbox.style.marginLeft=`${i}px`;
		starbox.style.transition=`all ${ 0.5}s`;
		btnrighta.style.color='#e0e0e0';
		btnlefta.style.color='#808080';
		btnleft.style.cursor='pointer';

		

		
	}
	
		// if(i==0){
		// 	return;
		// }
		// i++;
		btnleft.onmouseover=function(){

		btnlefta.style.color='#ff7500';
		btnleft.style.cursor='pointer';
   	 
	    btnleft.onmouseout=function(){
		btnlefta.style.color='#e0e0e0';
   		}
       
		btnright.onmouseover=function(){
		btnrighta.style.color='#ff7500';
		btnright.style.cursor='pointer';
	    }
		btnright.onmouseout=function(){
		btnrighta.style.color='#e0e0e0';
		btnleft.style.cursor='default';
		}
   }
   
	  

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
	 ////////////////////////////////////////////////////////////////////////
	 // 为你推荐开始
	let recommend=$('.recommend')[0];
	// let btnleft1=$('.btn-left',recommend)[0];	
	let btnleft1=document.querySelector('.recommend .btn-left');
	// let btnright1=$('.btn-right',recommend)[0];
	let btnright1=document.querySelector('.recommend .btn-right');	
	let btnrighta1=$('i',btnright1)[0];	
	let btnlefta1=$('i',btnleft1)[0];	
	let recommendbox=$('.recommend-box')[0];
	let recommendboxli=$('li',recommendbox);
	let recommendbottom=$('.recommend-bottom')[0];
	let w1=(recommendboxli.offsetWidth*5)+(parseInt(getComputedStyle(recommendbox,null).marginRight)*4)
	let j=0;    //当前是第几屏
	recommendbox.style.width=w1*2+'px';
	btnlefta1.style.color='#808080';
	btnrighta1.style.color='#e0e0e0';
	btnleft1.onclick=function(){	
		if(j==1){
			return;
		}
		j++;
		recommendbox.style.marginLeft=`-${j*w1}px`;
		recommendbox.style.transition=`all ${ 1}s`;
		btnrighta1.style.color='#808080';
		btnlefta1.style.color='#e0e0e0';
		btnlefta1.style.transition=`all ${ 1}s`;
		btnrighta1.style.transition=`all ${ 0.5}s`;
		btnright1.style.cursor='pointer';
		clearInterval(recommendmove1);
		clearInterval(recommendmove2);
	}
	btnright1.onclick=function(){		
		if(j==0){
			return;
		}
		j--;
		recommendbox.style.marginLeft=`${j}px`;
		recommendbox.style.transition=`all ${ 0.5}s`;
		btnrighta1.style.color='#e0e0e0';
		btnlefta1.style.color='#808080';
		btnleft1.style.cursor='pointer';		
	}
		// if(i==0){
		// 	return;
		// }
		// i++;
		btnleft1.onmouseover=function(){

		btnlefta1.style.color='#ff7500';
		btnleft1.style.cursor='pointer';
   	 
	    btnleft1.onmouseout=function(){
		btnlefta1.style.color='#e0e0e0';
   		}
       
		btnright1.onmouseover=function(){
		btnrighta1.style.color='#ff7500';
		btnright1.style.cursor='pointer';
	    }
		btnright1.onmouseout=function(){
		btnrighta1.style.color='#e0e0e0';
		btnleft1.style.cursor='default';
		}
   }
   
	// let x=starbox.style.marginLeft=`${-1226}px`;
	 function recommendmove(){
	 	recommendbox.style.marginLeft=`${-1226}px`;
	 	recommendbox.style.transition=`all ${ 1}s`;
	// let t= parseInt(getComputedStyle(starbox,null).width);
		btnrighta1.style.color='#808080';
		btnlefta1.style.color='#e0e0e0';
		
	}
	 function recommendmoveL(){
	 	recommendbox.style.marginLeft=`${0}px`;
	 	recommendbox.style.transition=`all ${ 1}s`;
	 	btnrighta1.style.color='#e0e0e0';
		btnlefta1.style.color='#808080';
	 }

	 let recommendmove1=setInterval(recommendmoveL,3000);
	 let recommendmove2=setInterval(recommendmove,6000);

}
