//�洢ȫ������������
var arrAll=new Array();

function $(id){
	return document.getElementById(id);
}

//��Ϊimg�����src��ȫ·�������Ա�����д���ʹ�䷵��ͼƬ��
function handleSrc(src){
	var arr=src.split("/");
	return arr[arr.length-1];
}
//ѡ����Ҫ��ʲô�ĺ���
function chose(choice){
	$("you_choice").src=choice.value;
}
//�洢ȫ������������
var arrAll=Array();
//����һ�ֱ�������
function Play(you,computer){
	this.you="jian.png";
	this.computer="jian.png";
	this.res=2;
}
//���л�ȡ��͵���ѡ��ֵ�ĺ���
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
//���бȽϲ����ؽ������
Play.prototype.compareRes=function(){
	this.getChoice();
	if(this.you==this.computer){
		this.res=2;	//2��ʾƽ��
	}else if((this.you=="jian.png" && this.computer=="bu.png")||
			(this.you=="shi.png" && this.computer=="jian.png")||
			(this.you=="bu.png" && this.computer=="shi.png")
		){
		//alert("1");
		this.res=1;	//��Ӯ��
	}else{
		//alert("0");
		this.res=0;	//������
	}
}
//���бȽ�������е���ʾ����
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
//��arrAll����ʾ������
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
//�����ť��ıȽϺ���
function compare(){
	var play=new Play();
	play.compareRes();
	play.showRes();
	arrAll.push(play.res);
	manageArrall();
}
//��ʼ�������������е�ͼƬ��Ϊ��ʼͼƬ�����������0�����������ÿ�
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