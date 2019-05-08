## hw1：好多星星

一開始解這題時，完全卡住不知道該怎麼做，只覺得這題似乎跟練習 Lv1 練習三的印出星星有點像，但這題多了陣列跟把字串 ‘＊’ 放進去，並重複用累加的方式印出星星，於是重新再看一次 JS101，發現可以用內建函式 repeat 來重複印出星星，然後用 push 把字串放進陣列裡，後來不知不覺就被我試成功了。



## hw2：大小寫互換

在解這題時發現跟之前做的習題題目有七八分像，所以做這題有順利一點。

一開始在解習題時寫出的：

```javascript
function alphaSwap(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += str[i].toUpperCase();
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      result += str[i].toLowerCase();
    } 
  }
  return result
}
```

後來發現如果這樣做的話，就會省略掉其他符號及數字，這樣也無法滿足題目若不是英文字母則忽略的條件。

但後來改成：

```javascript
function alphaSwap(str) {
	var result = ''
 	for (var i=0; i<str.length; i++){
	 	if (str[i] >= 'a' && str[i] <= 'z'){
			result += str[i].toUpperCase()
		} else {
			result += str[i].toLowerCase()
		}
	}
	return result
}
```

就解出來了。



## hw3：判斷質數

同上題也是跟習題很像的題目，

我一開始的解法是：

```javascript
function isPrime(n){
	if(n === 1) return false
	for(var i = 2; i <= n; i++){
		if(n%i === 0) {
			return false
		}
	} 
	return true
}
```

這樣做會錯是因為條件應該是 `i<n`而不是`i<=n`，不然就會被誤判一定不是質數。



## hw4：判斷迴文

解題的一開始有想到之前做過的字串反轉：

```javascript
function reverse(str){
	var result = ''
	for(var i = str.length-1; i >= 0 ;i--){
		result += str[i]
	}
	return result
}
```

後來我把它改成：

```javascript
function reverse(str){
	var result = ''
	for(var i = str.length-1; i >= 0 ;i--){
		result += str[i] === str
	}
	return result	
}
reverse('apple')
```

結果就跳成：falsefalsefalsefalsefalse

研究一下為什麼會這樣時，就試著解釋每一行程式在幹嘛，原來是我把字串（五個字）在 for loop 裡面執行 5 次，所以才會跑出 5 個 false，把 `=== str` 移到下面 `result === str`，就解出來了。

後來自己再重做一次題目時，試著用之前教過的內建函式解法，OJ 測試也是成功的：

```javascript
function isPalindromes(str) {
	if(str.split('').reverse().join('') === str){
		return true
	}
	return false
}
```



