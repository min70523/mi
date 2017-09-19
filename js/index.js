window.onload=function(){
	//侧导航
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let blli=bannerleft.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	console.log(blli)
	console.log(item)
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
	// let imgleft=$('.img-left',banner);
	let imgleft=banner.getElementsByClassName('img-left')[0];
	let imgright=banner.getElementsByClassName('img-right')[0];
	console.log(imgleft)
	console.log(imgright)
	let btnbanner=document.getElementsByClassName('btn-banner')[0];
	let bbli=btnbanner.getElementsByTagName('li');
	let bannerimg=document.getElementsByClassName('banner-img')[0];
	let bili=bannerimg.getElementsByTagName('li');
	let t=setInterval(move,3000);
	let num=0;
	
	bili[0].style.opacity=1;
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
		t=setInterval(move,3000);
	}
	//banner 按钮
	//只操作两张图，当前显示的那张与点击下一张
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
}
