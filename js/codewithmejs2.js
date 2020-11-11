var fruits=['Apple','Strawberry','Peach','Pear'];

function loadMe()
{
	document.getElementById('fruits').innerHTML=fruits;
}

function clickMe()
{
	var fruit=prompt("What is your favourite fruit?");
	fruits[fruits.length]=fruit;
	document.getElementById('fruits').innerHTML=fruits;
}
