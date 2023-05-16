# 바닐라 자바스크립트


## 인터렉션 옵저버

### 인터렉션 옵저버 객체 생성
> IntersectionObserver의 첫번째 인자에는 콜백함수 이고, 두번째 인자는 옵션이다.
```javascript
//querySelectorAll 를 통해서 객체 가져오기
const $cardItem = document.querySelectorAll('.card-item');

//콜백함수
const callback = entries=>{
    console.log(entries);
}

//첫번째인자에서는 콜백 처리
const observer = new IntersectionObserver(callback, {
    //10%가 보여주는 순가 이벤트가 동작한다.
    threshold: 0.1,
})

//cardItem은 ul li의 리스트이기 때문에, 하나하나의 아이템을 observe(감시)한다.
$cardItem.forEach(item => {
    //구독
    observer.observe(item);
});
```

### visible 클래스 추가
>
```javascript
const callback = entries => {
        entries.forEach(entry => {
            //화면에 보여지는 순간 visible class 추가
          entry.target.classList.toggle('visible', entry.isIntersecting);
          //화면에 보여지고 있는지 확인
          if (entry.isIntersecting) {
            //화면에 현재 보여지고 있다면 구독 해지
            observer.unobserve(entry.target);
          }
        });
};
```