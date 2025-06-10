# 數字排序工具
### 遇到的問題:
  - 不了解`map`,`split`,`filter`用法
  - 對JavaScript讀取下拉式選單不熟悉
### 新學到的:
  - `split`:
    - [資料](https://medium.com/@bebebobohaha/slice-splice-split-%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85-46d9c8992729) 
    - 用來分割**字串**成字串組
    - 用法是`split(separator,howmany)`
        - `separator`為字串符或正則表達式
        - `howmany`為return的最大長度
        - ex:
      ```js
      let str="How are you?";
      let splits1 = str.split(" ");
      //splits 1 contains ['How", "are", "you", "?"]
      let splits2= str.split(" ",3);
      //splits 2 contains["How", "are", "you"]
      ```
  - `map`:
    - [資料](https://medium.com/@johnnyfang_11536/js-array-method-map-98f0d47d5c04)
    - 將某陣列的元素在不影響原陣列的情況下依照你想要的放式處理
    - 用法`map()
    - ex:
        ```js
        let numA =[1,2,3];

        let numB=numA.map(e=>e*2);
        console.log(numB)//會印出[2, 4, 6]
        ```
  - `filter`:
    - 用來**過濾**、**找到特定元素**以及**關鍵字搜尋**
    - 過濾:
      ```js
      let fruits = [
        {item: 'apple', quantity: 0}, 
        {item: 'banana', quantity: 1}, 
      {item: 'cherry', quantity: 2}
      ]
      // 這面這行就是告訴電腦我想要怎麼過濾
      let fruitsNew = fruits.filter(e => e.quantity > 0)
      console.log(fruitsNew)
      /*
      印出：
      [ 
        { item: 'banana', quantity: 1 }, 
        { item: 'cherry', quantity: 2 } 
      ]
      */
      ```
    - 關鍵字搜尋
      ```js
      let fruits = [
        {item: 'apple', quantity: 0}, 
        {item: 'banana', quantity: 1}, 
        {item: 'cherry', quantity: 2}
      ]
      // 把每個元素都變成小寫再去檢查是否包含 a 字串
      let fruitsNew = fruits.filter(e => e.item.toLowerCase().includes('a'))
      console.log(fruitsNew)
      ```
  - `sort`:
    - 用來排序
    - [資料](https://medium.com/@johnnyfang_11536/js-array-method-filter-d6a3fc92e9a6)
    - 升序排列
      ```js
      conts arr = [5,9,1,3,2,6];
      arr.sort();
      arr.sort((a,b)=>a - b);
      //兩個都為升序排列
      ```
    - 降序排列:
      ```js
      arr.sort((a,b)=>b - a);
      ```
