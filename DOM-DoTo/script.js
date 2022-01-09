/*
The way of selector elemen
============================
document.getElementsByClassName('para');
HTMLCollection(2) [p.para, p.para]0: p.para1: p.paralength: 2[[Prototype]]: HTMLCollection
document.getElementsByTagName('p');
HTMLCollection(3) [p.para, p.para, p]
document.getElementsByName('div');
NodeList []length: 0[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
document.getElementById('inpbox');
<input id=​"inpbox">​

//The way of change data html tag ui part
p1=document.getElementsByClassName('para')[1];
<p class=​"para">​this a second para​</p>​
p1.innerText
'this a second para'
p1.innerText="demo"
'demo'
p1.setAttribute('contenteditable',true);
undefined
p1
<p class=​"para" contenteditable=​"true">​demo​</p>​
p1.setAttribute('spellcheck',false);
undefined
let i=inpbox;
undefined
let i=document.getElementById('inpbox');
undefined
i.value
'klll'
i.value="new stfff"
'new stfff'

*/
