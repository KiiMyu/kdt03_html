// 리터럴 표기법
let arr1 = [1, 2, 3];

// array 생성자 사용.
let arr2 = new Array(1, 2, 3);

// 배열의 크기
console.log(arr1);
console.log(`arr1 : ${arr1}`);
console.log(`arr1의 요소개수 : ${arr1.length}`);

// 배열요소 제거
console.log(arr2);
//arr2.length = 0; // 이것도 가능.
arr2 = [];
console.log(arr2);

// 배열요소 추가
console.log(arr1);
arr1.push('가');
console.log(arr1);
let arr1Pop = arr1.pop(); // 뺀걸 변수로 넣음.
//arr1.pop(); // 빼기만 해서 사라짐.
console.log(arr1);
console.log(arr1Pop);
console.log(arr1, typeof(arr1));
console.log(arr1Pop, typeof(arr1Pop));

// 배열의 순회.
//1.
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

//2. key(index) 값 가져오기.
for(let i in arr1){
    console.log(arr1[i]);
}

//3. value 값 가져오기.
for(let item of arr1) {
    console.log(item);
}

//4. foreach 메소드. value 및 index를 가져올 수 있음.
arr1.forEach((item, i) => {
    console.log(item, i);
});

// 배열 map 메소드
const arr3 = arr1.map((item) => {
    return item * 2;
});
// 같은거. 배열만 map을 쓸 수 있음.
//콜백함수는 파라미터가 1개이면 () 부호를 생략가능함.
//return 문만 있으면 {} 와 return을 생략 가능.
const arr4 = arr1.map(item => item * 2); // 이렇게도 쓸 수 있음. 중괄호 및 리턴 생략 가능!

console.log(arr3);
console.log(arr4);

// 콜백함수는 파라미터가 2개가 되면 인덱스를 가져옴.
const arr5 = arr1.map((item, i) => item * i);
console.log(arr5);

// filter
const arr6 = arr1.filter((item) => {
    return item % 2 == 0;
});
console.log(arr6);

// 필터 역시 각종 부호 생략 가능.
const arr7 = arr1.filter(item => item % 2 == 0);
console.log(arr6);

// map 함수를 구현하려면?
let arr8 = [];
for(let c  of arr1) {
    arr8.push(c * 2);
}
console.log(arr8);

// filter 함수를 구현하려면?
let arr9 = [];
for(let c  of arr1) {
    if ( c % 2 == 0 ){
        arr9.push(c);
    }
}
console.log(arr9);

