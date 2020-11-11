var arr=[5,8,9,,,0,5];
var sum=0,count=0;

if(arr.length > 0)
{
	for(i=0; i<arr.length; i++)
	{
		if(arr[i] != undefined)
		{
			sum+=arr[i];
			count++;
		}
	}
	document.write(sum/count);
}
else
{
	document.write("Don't be lazy. Enter some array elements!");
}
