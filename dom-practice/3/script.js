document.querySelector('.btn').addEventListener('click',toggle)
const paragraph = document.querySelector('.paragraph');
const button = document.querySelector('.btn');

function toggle(){
    
    if(paragraph.style.display==='none'){
        paragraph.style.display ='block';
        button.textContent = 'Hide';
        
    }
    else {
        paragraph.style.display = "none";
        button.textContent = "Show";
        console.log('H')
}
}

