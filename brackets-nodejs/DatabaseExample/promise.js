var _promise = function(param){
	return new Promise(function(resolve, reject){
		// 비동기를 표현하기 위해 setTimeout 함수를 사용
		window.setTimeout(function(){
			if(param){
				resolve('해결');
			}else{
				reject(Error("실패!"));
			}
		}, 3000);
	});
};

_promise(true).then(
	function(text){
		console.log(text);
	},
	function(error){
		console.error(error);
	}
)