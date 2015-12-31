function getNum(){
	var winningNums = [];
	var megaball;

	while(winningNums.length < 5){
		var random = Math.floor(Math.random() * 75) + 1;
		if(winningNums.indexOf(random) === -1){
			winningNums.push(random)
		}
	}
	megaball = Math.floor(Math.random() * 15) + 1;
	winningNums = winningNums.join('-');
	$('.winningNum').append(winningNums)
	$('.megaball').append(megaball)

}



$('.butt').on('click', getNum)

