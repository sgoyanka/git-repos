var b = { a : 1 , b : 2 , c : 3};

var b = [{ k : 2 , g : 3} , { e : 2 , r : 2}]; 

var c = Object.keys(b);

for(var i = 0 ; i < c.length ; i++) {
	
	if (c[i] == 'a') {
		console.log(b.a);
		break;

	} else {
		if ( b[i].hasOwnProperty('k')) {

		console.log(b[i].k);
		break;
		}
	}
}
