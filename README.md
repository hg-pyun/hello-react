# Lecture
## Codepen.io 사용하기
[Codepen.io](https://codepen.io/pen/)에 접속하여 ES6 & React 환경 설정을 해준다.  
#### ES6
Setting > Javscript > Javascript Preprocessor  
Babel 선택

#### React
Setting > Javscript > Quick-add  
React, React-DOM 선택(위 아래 2개에 따로 선택해서 넣으면 됩니다.)

## ECMA2015 (ES6)
ECMA2015 Javascript에 새로 도입된 문법
[MDN ECMA2015 CLASS](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes) 참고

## JSX 문법 특징
모든 Component는 Render Method를 가지고 있음. React JSX는 XML같은 문법을 Javscript 문법으로 바꿔준다.

#### Nested Element
모든 JSX 엘리멘트들은 컨테이너로 감싸줘야한다.
```javascript
/* 잘못된 방법 */
return  (
    <h1> Hello React</h1>
    <h2> Welcome </h2>
);

/* 올바른 방법 */
return  (
    <div>
        <h1> Hello React </h1>
        <h2> Welcome </h2>
    </div>
);
```
