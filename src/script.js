a0.onclick = function showD0(){ show(0) };
a1.onclick = function showD1(){ show(1) };
a2.onclick = function showD2(){ show(2) };
a3.onclick = function showD3(){ show(3) };
a4.onclick = function showD4(){ show(4) };
a5.onclick = function showD5(){ show(5) };

hideAll();

function hideAll(){
  for (var i = 0; i < document.getElementsByTagName('button').length; i++) {
    document.getElementsByClassName('data_tab')[i].hidden = true;
    x.querySelectorAll('button')[i].classList.remove('selected');
  }
}

function show(i){
  hideAll();
  document.getElementsByClassName('data_tab')[i].hidden = false;
  x.querySelectorAll('button')[i].classList.add('selected');
}
