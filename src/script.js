function hideAll(){
  b1.hidden = true;
  b2.hidden = true;
  b3.hidden = true;
  b4.hidden = true;
  b5.hidden = true;
  b6.hidden = true;
  a1.classList.remove('selected');
  a2.classList.remove('selected');
  a3.classList.remove('selected');
  a4.classList.remove('selected');
  a5.classList.remove('selected');
  a6.classList.remove('selected');
}
function showB1(){
  hideAll();
  b1.hidden = false;
  a1.classList.add('selected');
}
function showB2(){
  hideAll();
  b2.hidden = false;
  a2.classList.add('selected');
}
function showB3(){
  hideAll();
  b3.hidden = false;
  a3.classList.add('selected');
}
function showB4(){
  hideAll();
  b4.hidden = false;
  a4.classList.add('selected');
}
function showB5(){
  hideAll();
  b5.hidden = false;
  a5.classList.add('selected');
}
function showB6(){
  hideAll();
  b6.hidden = false;
  a6.classList.add('selected');
}

showB1();
a1.onclick = showB1;
a2.onclick = showB2;
a3.onclick = showB3;
a4.onclick = showB4;
a5.onclick = showB5;
a6.onclick = showB6;
