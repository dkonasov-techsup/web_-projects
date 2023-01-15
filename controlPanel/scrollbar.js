"use strict"

let scrList = document.querySelectorAll('.scrolable');


// Заполняем массив с родителями имеющими внутри прокручиваемый дочерний элемент 

const contList = [];
function getContainer(scrList){	
	scrList.forEach((item,index)=>{
		contList[index] = item.parentNode;		
	})
}
getContainer(scrList)


// Добавляем контейнер с скролбаром
function addScrollbar(contList){
	const scrollbar = '<div class="scrollbar"><div class="scrollbar_track"><div class="scrollbar_thumb"></div></div></div>'
	for(const cont of contList){
		console.log(cont);
		cont.insertAdjacentHTML('beforeend', scrollbar);
	}
}
addScrollbar(contList)


// Отслеживаем нажатие на scrollbar_thumb
const thumbs = document.querySelectorAll('.scrollbar_thumb');

for(let thumb of thumbs){	
	thumb.addEventListener('mousedown', startScroll);
	thumb.addEventListener('mouseup', stopScroll);
	thumb.ondragstart = function(){
		return false;
	}	
}

function startScroll(event){
	console.log('fff');
	// let pointer = event.target.closest('#pointer');

	document.addEventListener('mousemove', startScroll)
}


function startScroll(event){
	console.log(event.target);
}

function stopScroll(event){
	console.log('stop');
	document.removeEventListener('mousemove', startScroll);	
}