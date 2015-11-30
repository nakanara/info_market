/******************************
 * ADDRESS 
 ******************************/
var util = require('../utils/util.js');

/****************************
 * 사용자 정보 조회
 * 
 ****************************/
function getNextUserInfo(){

	var arrAddr1 = ['서울', '대전', '광주', '경기도', '울산', '부산', '대구'];
	var arrAddr2 = ['방학동', '수유동', '혜화동', '종로1', '종로2', '종로3', '종로4'];
	
	console.log('rand:::' + util.rand(10));
	var obj = {
		'id' : '00' + util.rand(100),
		'addr1' : arrAddr1[util.rand(6)],
		'addr2' : arrAddr2[util.rand(6)],
		'six' :  ((util.rand(1) == 0)? 'M' : 'F'),
		'age' :  util.rand(50) + 20,
		'marry' : ((util.rand(1) == 0)? 'Y' : 'N'),
		'child' : util.rand(3),
		'child_list' : [
			{
				'six' : 'M', 
				'age' : 3
			},
			{
				'six' : 'F',
				'age' : 1
			}
		]
	};

	return obj;
};

/****************************
 * 사용자 HP
 * 
 ****************************/
function getUserHPNumber(id){

	var num = '';
	for(var i=0; i < 4; i++) {
		num += util.rand(10);
	}
	num += '-';
	for(var i=0; i < 4; i++) {
		num += util.rand(10);
	}
	// TODO 체크.
	return '0505-' + num;
};

module.exports = {
	getNextUserInfo : getNextUserInfo,
	getUserHPNumber : getUserHPNumber
};
