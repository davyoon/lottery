function getMNum(){
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
	$('.mWinningNum').append(winningNums)
	$('.megaball').append(megaball)

}


function getPNum(){
	var winningNums = [];
	var powerball;

	while(winningNums.length < 5){
		var random = Math.floor(Math.random() * 69) + 1;
		if(winningNums.indexOf(random) === -1){
			winningNums.push(random)
		}
	}
	powerball = Math.floor(Math.random() * 26) + 1;
	winningNums = winningNums.join('-');
	$('.pWinningNum').append(winningNums)
	$('.powerball').append(powerball)

}




$('.mButt').on('click', getMNum)
$('.pButt').on('click', getPNum)
