function reverse(num){
    let reverse = 0
    while(num!=0){
        let digit = num%10
        reverse = reverse*10 + digit
        num = Math.floor(num/10)
    }
    console.log(reverse)
}

reverse(711)


function getUrlParameterValue(url, parameter){
    url = new URL(url)
    let ans = url.searchParams.get(parameter)
    return ans
}
var url ='https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby';
console.log(getUrlParameterValue(url, 'utm_campaign'))