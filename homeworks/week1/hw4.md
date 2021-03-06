## 跟你朋友介紹 Git

不知道是不是真的人太好，還是很怕沒朋友，但在菜哥的苦苦哀求下（明明題目就沒有這樣寫），我只好佛心的簡單介紹並把講笑話這件事應用在 Git 的基本概念及基礎使用上。

-----

####為什麼你應該要用 Git 管理你的笑話？

因為笑話有不同種類，有噁心的、有兒童不宜的、有病態的、誇張的等，
這些笑話會隨著時空演進，過時不討喜的笑話要修改，並且要不斷升級不同種類的笑話，所以你才需要用版本控制。電腦不只會選土豆，還可以用 Git 來版本控制你的笑話。


來講講基本操作指令：

* ```git init```：開始版本控管  
  
  你不開始怎麼繼續呢？

* ```git add```：加入暫存區
  
  你的笑話點子後宮清單，等著你寫入笑話裡。

* ```git commit -m “message”```：存入並寫下訊息
  
  儲存你的笑話，並註明你笑話的梗。

* ```git status```：看看目前的狀態
  
  看看自己寫入笑話的進度。

* ```git log```：看看紀錄之你今天 commit 了沒？
  
  菜哥說：『有啊有啊！我一早就 commit 兩次了，待會吃過飯再 commit 一次』但這有說等於沒說。這個是讓你看看 commit 的時間及訊息。

#####講到這裡看似管理妥當了，但笑話累積太多，全部都會混在一起做撒尿牛丸了，所以我們來到版本控制的重頭戲了：

* ```git branch```：開一個新的版本（分支）
  
  你可以選一招半式闖天下的笑話版本為主線，裡面就修改一些會讓你有生命危險的笑話，另外並開幾個新的笑話種類。

* ```git checkout```：切換版本
  
  你需要切到那個版本才能寫進去，就像你不會把兒童不宜笑話存到拜年溫馨版一樣。

* ```git merge```：合併
  
  合併到你的笑話資料庫。
  如果萬一合併後發現同時修改到同一個笑話，就用手動修改。


* github：管理 Git 的協作平台
  
  就像滿滿的笑話交友大平台一樣，好笑就讓全世界知道，你還可以跟其他人一起開發笑話。 

* ```git push```：上傳到你要去的平台
  
  有笑有推，但你是把笑話推到平台上。

* ```git clone```：第一次下載
  
  看到不錯的笑話可以把它下載下來。

* ```git pull```：拉下來更新
  
  為了跟上流行，你必須更新你下載的笑話。










