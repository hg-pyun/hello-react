# Lecture
Veloport님의 동영상 강의 내용 정리 및 연습 코드 작성

## Note
- React-hot-loader는 Constructor를 Reload 하지 않음, 따라서 Constructor를 수정했을 땐 수동으로 새로고침을 해 주어야 함.

#### State Update
- [Immutability Helpers](https://facebook.github.io/react/docs/update.html)
- [ES6 spread operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator)

#### Component LifeCycle API
- constructor
    - 컴포넌트가 처음 만들어질 때 실행된다
    - 기본 state를 설정 할 수 있다
- componentWillMount
    - 컴포넌트가 DOM 위에 만들어지기 전에 실행된다
    - DOM 처리를 할 수 없다
- componentDidMount
    - 첫 랜더링을 마치고 실행 된다
    - 이 안에서 다른 Javscript & Framework 연동을 할 수 있다
    - setTimeout, setInterval, 그리고 Ajax를 사용할 수 있다
- componentWillReceiveProps
    - props를 받을 때 실행된다
    - props에 따라 state를 업데이트 할 때 사용하면 유용하다
    - 이 안에서 setState를 해도 괜찮다
- shouldComponentUpdate
    - props/state가 변경되었을 때 Rerendering 할지말지를 결정한다
    - 실제로 사용 할 때에는 필요한 비교를 하고 값을 반환해야 한다
        - return nextProps.id !== this.props.id
    - JSON.stringify를 사용하여 여러 field를 편하게 비교할 수 있다.
- componentWillUpdate
    - 컴포넌트가 업데이트 전 실행된다
    - 여기서는 절대 setState를 사용하면 안된다. (무한루프)
- componentDidUpdate
    - 컴포넌트가 Rerendering을 마친 후 실행된다
    - 여기서는 절대 setState를 사용하면 안된다. (무한루프)
- componentWillUnMount
    - 컴포넌트가 DOM에서 사라진 후 실행된다

## 동영상 강의
- [Contact 검색기능 구현 | input, sort, filter](https://www.youtube.com/watch?v=LSTVOuyF6zE&index=12&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)
- [Contact 선택기능 구현 | React.js 기초개념 응용](https://www.youtube.com/watch?v=j8oalkWrQrg&index=13&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)
- [state 내부 배열 처리하기 | Immutability Helper / ES6 Spread](https://www.youtube.com/watch?v=l5bt79f4aHs&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC&index=14)
- [Contact 추가/삭제/수정 기능 구현 | Immutability Helper 적용하기](https://www.youtube.com/watch?v=48ZtoaWIL_Y&index=15&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)
- [Contact 데이터 추가 기능 구현 | 컴포넌트 응용](https://www.youtube.com/watch?v=L2HZ2OLIhuc&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC&index=16)
- [Contact 데이터 삭제/수정 기능 구현 | 컴포넌트 응용](https://www.youtube.com/watch?v=u6aJjPw0c_c&index=17&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)
- [Contact 엑스트라 기능 구현 | KeyPress, ref](https://www.youtube.com/watch?v=_cnRCixxaHQ&index=18&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)
- [Component LifeCycle API](https://www.youtube.com/watch?v=OUAOo1N-EDs&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC&index=19)
- [Contact 데이터 새로고침해도 유지하기 | localStorage](https://www.youtube.com/watch?v=C_qTjHBlkks&index=20&list=PL9FpF_z-xR_GMujql3S_XGV2SpdfDBkeC)

## 문법