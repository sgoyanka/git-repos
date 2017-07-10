
	
	
   	var obj = { 'new-value' : 10 , price : 20};

   	var arr = [{ 'new-value' : 5 , price : 5 , sum : 25 , product : 25 },{ 'new-value' : 15 , price : 5 , sum : 100 , product : 75 },{ 'new-value' : 15 , price : 15 , sum : 325 , product : 225 }];

   	var obj1 = {'new-value' :  1, price : 1 , sum : 1, product : 1};

   	obj1["new-value"] = obj["new-value"];
   	obj1.price = obj.price;
   	obj1.product = obj["new-value"]*obj.price;
   	obj1.sum = obj1.product; 

	arr.unshift(obj1);

	arr.map(function(x,i) {

		if (i==0) {
			return x;
		} else{
			x.sum = arr[i-1].sum + x.product;
			return x;
		}

	})
	console.log(arr);
	console.log(Object.keys(obj));

 