// 회문 체크.
const check1 = (e) => {
    // 0. 버튼의 submit 기능을 없앰.
    // e.preventDefault();

    // 1. 사용자가 입력한 내용 가져오기.
    // 데이터를 가져오는 방법.
    // 1) document.getElementById().value 를 사용하여 가져오기. 
    const inputV = document.getElementById('txt1').value;

    // 2. 사용자가 입력한 문자열을 뒤집기.
    console.log(typeof(inputV));
    console.log(inputV.length);
    console.log(inputV[0]);

    let resultV = '';
    let inputVt = inputV.replaceAll(' ', '');
    for(let i = inputVt.length - 1; i >= 0; i--)
    {
        console.log(inputVt[i]);
        resultV = resultV + inputVt[i];
    }


    // 3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교.
    // 데이터 내보내기 방법.
    // 1) document.getELementById().value 를 사용하여 변경.
    if ( inputVt == resultV )
    {
        document.getElementById('txt2').value =  `${inputV}는 회문입니다.`;
    }
    else
    {
        document.getElementById('txt2').value =  `${inputV}는 회문이 아닙니다.`;
    }



}