// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  
  var max1 = array[0];
  var max2 = array[1];
  
  for(var i=1 ; i < array.length ; i++)
    {
      if( array[i] > max1)
        {
          max2=max1;
          max1 = array[i];
        }
      else
        {
          if(array[i] > max2)
            {
              max2=array[i];
            }
        }
    }
  console.log(array[0], max2);
  return max2;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  
  var alphabet = [];
  var frequency = [];
  var array = [];
  var k=0,z;
 // string="u@#d$fkj$#!kds";
  
  for(var i = 0 ; i < string.length ; i++)
    {
      z=0;
      
      if(string[i] >= 'a' && string[i] <= 'z')
      {
      
        for(var j=0 ; j <= k; j++)
          {
            if( alphabet[j] == string[i] && k > 0  )
              {
                z=1;
                frequency[j]++;
              }
          }
      
        if(z == 0)
          {
            alphabet[k] = string[i];
            frequency[k] = 1;
            k++;
          }
      }
    }
  for(i = 0 ; i < k ; i++)
    {
      array[i] = alphabet[i]+": "+frequency[i];
    }
  
  console.log(array);
  return array;
  
  
}
// Problem 5: Complete the pluckName function that takes a JS Array, returns a JS Array containing only name

function pluckName(unpluckedArray) {
  
  var array = [];
  
  for(var i=0 ; i < unpluckedArray.length ; i++)
    {
      if(unpluckedArray[i].name != null)
        {
          array[i]=unpluckedArray[i].name;  
        }
    }
 
 return array;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
