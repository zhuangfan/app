QUnit.test("you(������ PK couputer��������", function(assert){
	you="jian.png";
	computer="jian.png";
	res=Play(you,computer);
	assert.ok( res !=2, "Draw!!" );
});
QUnit.test("you(������ PK couputer��ʯͷ��", function(assert){
	you="jian.png";
	computer="shi.png";
	res=Play(you,computer);
	assert.ok( res !=1, "You Lose!!" );
});
QUnit.test("you(������ PK couputer(����",function(assert){
	you="jian.png";
	computer="bu.png";
	res=Play(you,computer);
	assert.ok( res !=0, "You Win!!" );
});
QUnit.test("PK1�������� PK PK2(������", function(assert){
	pk1="jian.png";
	pk2="jian.png";
	res2=Play2(pk1,pk2);
	assert.ok( res2 !=2, "Draw!!" );
});