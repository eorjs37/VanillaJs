# VanilaJs

## 이벤트 버블링
> 이벤트 버블링은 어떤 특정요소를 클릭하였을 때, 요소이벤트가 발생하면  
> 상위 요소의 똑같은 이벤트가 발생하여 부모 요소까지 이벤트가 발생하는 현상


```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
      body *{
        margin: 10px;
        border: 1px solid blue;
      }
    </style>
    <title>이벤트 버블링</title>
</head>
<body>
  <!-- 최종 부모 alert 이벤트 까지 호출 -->
  <div onclick="alert(1)">
    FORM
      <!-- 2번째 요소 클릭시 상위 부모도 이벤트 동작 -->
      <div onclick="alert(2)">
      DIV
      <!-- 3번째 요소 클릭시 상위 부모도 이벤트 동작 -->  
      <p onclick="alert(3)">P</p>
    </div>
  </div>
</body>
</html>
```