function sieve(n)
{
    let prime = [];
    for(let i = 0; i < n + 1; i++)
        prime.push(0);
         
    let p = 2;
    while (p * p <= n)
    {
        if (prime[p] == 0)
        {
            for(let i = 2 * p; i < n + 1; i += p)
                prime[i] = 1;
        }
        p += 1;
    }
  
    let allPrimes = [];
    for(let i = 2; i < n; i++)
    {
        if (prime[i] == 0)
            allPrimes.push(i);
    }
    return allPrimes;
}
 
function distPrime(arr, allPrimes)
{
    let list1 = [];

    for(let i = 0; i < allPrimes.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            if (arr[j] % allPrimes[i] == 0)
            {
                list1.push(allPrimes[i]);
                break;
            }
        }
    }
    return list1;
}
let allPrimes = sieve(10000);
let arr = [];
arr.push(15);
arr.push(30);
arr.push(60);
let ans = distPrime(arr, allPrimes);
for(let i = 0; i < ans.length; i++)
console.log("["+ans[i] + " "+"]");