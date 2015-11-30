/******************************
 * Util 
 ******************************/

/****************************
 * 난수 생성
 * params 최대값 ( 0 ~ max-1 )
 ****************************/

 exports.rand = function(max) {
 	if(max == undefined) max = 10;
 	if(max == 0) return 0;

 	max += 1;
 	return Math.floor(Math.random() * max);
 }