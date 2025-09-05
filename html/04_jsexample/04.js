// 회문 체크.
const check1 = () => {
    // 0. 버튼의 submit 기능을 없앰.
    //e.preventDefault();

    // 1. 사용자가 입력한 내용 가져오기.
    // 데이터를 가져오는 방법.
    // 1) document.getElementById().value 를 사용하여 가져오기. 
    const inputV = document.getElementById('txt1').value;

    // 2. 사용자가 입력한 문자열을 뒤집기.
    console.log(typeof (inputV));
    console.log(inputV.length);
    console.log(inputV[0]);

    let resultV = '';
    let inputVt = inputV.replaceAll(' ', '');
    // for(let i = inputVt.length - 1; i >= 0; i--)
    // {
    //     console.log(inputVt[i]);
    //     resultV = resultV + inputVt[i];
    // }

    resultV = inputVt.split('').reverse().join('');
    console.log(resultV);


    // 3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교.
    // 3-1. 결과를 input 요소에 출력.
    // 데이터 내보내기 방법.
    // 1) document.getELementById().value 를 사용하여 변경.
    if (inputVt == resultV) {
        document.getElementById('txt2').value = `"${inputV}"는 회문입니다.`;
    }
    else {
        document.getElementById('txt2').value = `"${inputV}"는 회문이 아닙니다.`;
    }

    // 3-2. 결과를 div 요소에 출력.
    // 2) div 에 그냥 출력하고자 할땐 .innerHTML - HTML 태그를 넣을 수 있음!
    // textContent 라고도 있지만, html 태그를 무시함. 참고.
    document.getElementById('msg').innerHTML = `<span>"${inputV}"</span>는 
    ${inputVt == resultV ? "회문입니다." : "회문이 아닙니다."}`;

}

const addingNumber = () => {

    // 1. 사용자가 입력한 문자열 가져오기.
    const inputV = document.getElementById('txt1').value;

    // 2. 문자열에서 숫자 인식해서 더하기.
    let sum = 0;
    // for (let i = 0; i < inputV.length; i++) {
    //     if (!isNaN(inputV[i])) {
    //         sum += parseInt(inputV[i]);
    //     }
    // }

    // js에서만 사용되는 자동 for문 같은거.
    for (let i of inputV) {
        if (!isNaN(i)) {
            sum += parseInt(i);
        }
    }

    // 3. 합계 출력.
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `합계 = <span>"${sum}"</span>`;
}

// 그냥 만들어본거.
const addingNumber2 = () => {
    //1. 사용자 입력 가져오기.
    const inputV = document.getElementById('txt1').value;

    //2. 문자열 숫자 인식 연속으로 해서, 그 숫자끼리 더하기.
    let sum = 0;
    let arrayNumber = '';
    for (let i = 0; i < inputV.length; i++) {
        if (!isNaN(inputV[i])) {
            arrayNumber += inputV[i];
            //sum += parseInt(inputV[i]);
        }
        else {
            if (arrayNumber != '') {
                sum += parseInt(arrayNumber);
                arrayNumber = '';
            }
        }
    }

    if (arrayNumber != '') {
        sum += parseInt(arrayNumber);
    }

    //3. 출력.
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `연속합계 = <span>"${sum}"</span>`;
}

// 취소처리.
const cancelAll = () => {
    document.getElementById('txt1').value = '';
    document.getElementById('txt2').value = '';
    document.getElementById('msg').innerHTML = '';

    document.getElementById('txt1').focus();
}