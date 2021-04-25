"use strict" // エラーではないが，バグを誘発しやすいコーディングを見つける

//-----------------navの話---------------------//

const text1 = document.getElementById('text1');
const button1 = document.getElementById('button1');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

text1.addEventListener('input', () => {
    div1.innerText = text1.value;
});

button1.addEventListener('click', () => {
    div2.innerText = `入力された文字列は「${text1.value}」です`;
});

//--------------------APIの話----------------------//

async function callApi(){
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const users = await res.json();
	console.log(res);
	console.log(users);
}
callApi();

//----------お遊び----------//

function confirmed(fn){
	const input = window.prompt(" 実 行 し ま す か ?")
	if(input === "実行"){
	fn ();
	} }
	confirmed(function(){
	console.log(" リ ポ ジ ト リ を 削 除")
});