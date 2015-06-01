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
	}else if((this.you=="jian.png" && this.computer=="bu.png")||
			(this.you=="shi.png" && this.computer=="jian.png")||
			(this.you=="bu.png" && this.computer=="shi.png")
		){
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
			$("result").innerText="Draw!!";
			break;
		case 1:
			$("result").innerText="You Win!!";
			break;
		case 0:
			$("result").innerText="You Lose!!";
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
	$("play_all").innerText=play_all;
	$("play_win").innerText=play_win;
	$("play_lose").innerText=play_lose;
	$("play_draw").innerText=play_draw;
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
	$("you_choice").src="jian.png";
	$("you_choice_final").src="default.png";
	$("computer_choice_final").src="default.png";
	$("result").innerText="Draw!!";
	$("play_all").innerText=0;
	$("play_win").innerText=0;
	$("play_lose").innerText=0;
	$("play_draw").innerText=0;
	arrAll=[];
}