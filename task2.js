var b = { a : 1 , b : 2 , c : 3};

var b = [{ k : 2 , g : 3} , { e : 2 , r : 2}]; 

var a = Object.keys(b);

for(var i = 0 ; i < a.length ; i++) {
	
	if (a[i] == 'a')
	{
		console.log(b.a);
		break;

	} else{

		console.log(b[0].k);
	}
}