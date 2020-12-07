// Task 01:

let mytxt = document.querySelector('p');
mytxt.innerHTML = mytxt.innerText.split(' ').map(word =>
     (word.length > 8) ? word.innerHTML = `<mark style='background:yellow'>${word}</mark>` : word ).join(' ')

// Task 02 

let a= document.createElement('a');
a.setAttribute('href', 'https://google.com');
a.innerText = 'For more information: CLICK here'
document.body.appendChild(a);  

// Task 03 

let wordsNums = mytxt.innerText.split(" ").length;
let h1 = document.querySelector('h1');
let count = document.createElement('div');
count.textContent = `(${wordsNums}) words`;
document.body.insertBefore(count, mytxt);

// Task 04 
mytxt.innerHTML = mytxt.textContent.replaceAll('?','🤔').replaceAll("!", '😲')


/* Task 04 
 OR:
let str='';
Array.from(mytxt.textContent).forEach(letter => {
 letter === '?' ? letter = '🤔' :  (letter === '!' ? letter = '😲' : letter ) ;
 str += letter
 mytxt.textContent = str;
})
 */
 





