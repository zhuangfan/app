//存储全部比赛的数组
var arrAll=new Array();

function $(id){
	return document.getElementById(id);
}

//因为img对象的src是全路径，所以必须进行处理，使其返回图片名
function handleSrc(src){
	var arr=src.split("/");
	return arr[arr.length-1];
}
//选择你要出什么的函数
function chose(choice){
	$("you_choice").src=choice.value;
}
//存储全部比赛的数组
var arrAll=Array();
//定义一局比赛的类
function Play(you,computer){
	this.you="jian.png";
	this.computer="jian.png";
	this.res=2;
}
//类中获取你和电脑选择值的函数
Play.prototype.getChoice=function(){
	this.you=handleSrc($("you_choice").src);
	var temp=Math.ceil(Math.random()*3);
	switch(temp){
		case 1:
			this.computer="jian.png";
			break;
		case 2:
			this.computer="shi.png";
			break;
		case 3:
			this.computer="bu.png";
			break;
	}
}
//类中比较并返回结果函数
Play.prototype.compareRes=function(){
	this.getChoice();
	if(this.you==this.computer){
		this.res=2;	//2表示平局
	}else if((this.you=="jian.png" && this.computer=="bu.png")||(this.you=="shi.png" && this.computer=="jian.png")||(this.you=="bu.png" && this.computer=="shi.png")){
		//alert("1");
		this.res=1;	//你赢了
	}else{
		//alert("0");
		this.res=0;	//你输了
	}
}
//类中比较完后所有的显示处理
Play.prototype.showRes=function(){
	$("you_choice_final").src=this.you;
	$("computer_choice_final").src=this.computer;
	switch(this.res){
		case 2:
			$("result").innerHTML="Draw!!";
			break;
		case 1:
			$("result").innerHTML="You Win!!";
			break;
		case 0:
			$("result").innerHTML="You Lose!!";
			break;
	}
}
//对arrAll的显示处理函数
function manageArrall(){
	var play_all=arrAll.length;
	var play_win=0;
	var play_lose=0;
	var play_draw=0;
	for(var key in arrAll){
		if(arrAll[key]==2){
			++play_draw;
		}else if(arrAll[key]==1){
			++play_win;
		}else{
			++play_lose;
		}
	}
	$("play_all").innerHTML=play_all;
	$("play_win").innerHTML=play_win;
	$("play_lose").innerHTML=play_lose;
	$("play_draw").innerHTML=play_draw;
}
//点击按钮后的比较函数
function compare(){
	var play=new Play();
	play.compareRes();
	play.showRes();
	arrAll.push(play.res);
	manageArrall();
}
//初始化函数，将所有的图片归为初始图片，比赛结果置0，总体数组置空
function startInit(){
	$("you_choice").src="default.png";
	$("you_choice_final").src="default.png";
	$("computer_choice_final").src="default.png";
	$("result").innerHTML="Result!!";
	$("play_all").innerHTML=0;
	$("play_win").innerHTML=0;
	$("play_lose").innerHTML=0;
	$("play_draw").innerHTML=0;
	arrAll=[];
}



//存储全部比赛的数组
var arrAll2=new Array();

function $(id){
	return document.getElementById(id);
}

//因为img对象的src是全路径，所以必须进行处理，使其返回图片名
function handleSrc(src){
	var arr=src.split("/");
	return arr[arr.length-1];
}
//选择你要出什么的函数
function chose2(choice){
	$("you_choice1").src=choice.value;
}
function chose3(choice){
	$("you_choice2").src=choice.value;
}
//存储全部比赛的数组
var arrAll2=Array();
//定义一局比赛的类
function Play2(pk1,pk2){
	this.pk1="jian.png";
	this.pk2="jian.png";
	this.res2=2;
}
//类中获取pk1和pk2选择值的函数
Play2.prototype.getChoice2=function(){
	alert("1");
	this.pk1=handleSrc($("you_choice1").src);
	this.pk2=handleSrc($("you_choice2").src);
}
//类中比较并返回结果函数
Play2.prototype.compareRes2=function(){
	alert("1");
	this.getChoice2();
	if(this.pk1==this.pk2){
		this.res2=2;	//2表示平局
	}else if((this.pk1=="jian.png" && this.pk2=="bu.png")||(this.pk1=="shi.png" && this.pk2=="jian.png")||(this.pk1=="bu.png" && this.pk2=="shi.png")){
		//alert("1");
		this.res2=1;	//pk1赢了
	}else{
		//alert("0");
		this.res2=0;	//pk2赢了
	}
}
//类中比较完后所有的显示处理
Play2.prototype.showRes2=function(){
	$("choice1_final").src=this.pk1;
	$("choice2_final").src=this.pk2;
	switch(this.res2){
		case 2:
			$("result2").innerHTML="Draw!!";
			break;
		case 1:
			$("result2").innerHTML="PK1 Win!!";
			break;
		case 0:
			$("result2").innerHTML="PK2 Win!!";
			break;
	}
}
//对arrAll2的显示处理函数
function manageArrall2(){
	var play_all2=arrAll2.length;
	var play_win2=0;
	var play_lose2=0;
	var play_draw2=0;
	for(var key in arrAll2){
		if(arrAll2[key]==2){
			++play_draw2;
		}else if(arrAll2[key]==1){
			++play_win2;
		}else{
			++play_lose2;
		}
	}
	$("play_all2").innerHTML=play_all2;
	$("play_win2").innerHTML=play_win2;
	$("play_lose2").innerHTML=play_lose2;
	$("play_draw2").innerHTML=play_draw2;
}
//点击按钮后的比较函数
function compare2(){
	var play2=new Play2();
	play2.compareRes2();
	play2.showRes2();
	arrAll2.push(play2.res2);
	manageArrall2();
}
//初始化函数，将所有的图片归为初始图片，比赛结果置0，总体数组置空
function startInit2(){
	$("you_choice1").src="default.png";
	$("choice1_final").src="default.png";
	$("you_choice2").src="default.png";
	$("choice2_final").src="default.png";
	$("result2").innerHTML="Result!!";
	$("play_all2").innerHTML=0;
	$("play_win2").innerHTML=0;
	$("play_lose2").innerHTML=0;
	$("play_draw2").innerHTML=0;
	arrAll2=[];
}
