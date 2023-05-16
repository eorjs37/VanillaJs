(() => {
  const ele = document.querySelector('.parent');
  let curPage = 1;
  let windowHeight = 0;

  const getList = () => {
    fetch('../assets/mock/list.json')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const { list } = json;

        const array = list[curPage - 1];

        if (array) {
          array.forEach(item => {
            const { text } = item;
            const childNode = createChildEle(text);

            ele.appendChild(childNode);
          });

          setWindowHeight();
        }
      });
  };

  const createChildEle = txt => {
    const childEle = document.createElement('div');
    childEle.classList.add('child');

    childEle.textContent = txt;

    return childEle;
  };

  const setWindowHeight = () => {
    windowHeight = document.body.clientHeight;
  };

  const addScrollEvent = () => {
    window.addEventListener('scroll', () => {
      if (scrollY + innerHeight >= windowHeight) {
        curPage += 1;
        getList();
      }
    });
  };

  /*데이터 호출*/
  getList();

  /* 스크롤 이벤트 */
  addScrollEvent();
})();
