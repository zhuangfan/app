QUnit.test("you(¼ôµ¶£© PK couputer£¨¼ôµ¶£©", function(assert){
	you="jian.png";
	computer="jian.png";
	res=Play(you,computer);
	assert.ok( res !=2, "Draw!!" );
});
QUnit.test("you(¼ôµ¶£© PK couputer£¨Ê¯Í·£©", function(assert){
	you="jian.png";
	computer="shi.png";
	res=Play(you,computer);
	assert.ok( res !=1, "You Lose!!" );
});
QUnit.test("you(¼ôµ¶£© PK couputer(²¼£©",function(assert){
	you="jian.png";
	computer="bu.png";
	res=Play(you,computer);
	assert.ok( res !=0, "You Win!!" );
});
QUnit.test("PK1£¨¼ôµ¶£© PK PK2(¼ôµ¶£©", function(assert){
	pk1="jian.png";
	pk2="jian.png";
	res2=Play2(pk1,pk2);
	assert.ok( res2 !=2, "Draw!!" );
});