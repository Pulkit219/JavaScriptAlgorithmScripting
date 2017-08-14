
function pairwise(arr, arg) {
 var sum =0;
  var uniqArray =[];
  for(var i=0; i<arr.length;i++)
    {
      for(var j=i+1;j<arr.length;j++)
        {
          if(arr[i]+arr[j]===arg && uniqArray.indexOf(i)==-1 && uniqArray.indexOf(j)==-1 )
            {
              uniqArray.push(i);
              uniqArray.push(j);
              sum+=i+j;
            }
        };
};
        return sum;                                                                                      
}

pairwise([1,4,2,3,0,5], 7);
