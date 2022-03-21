function createNewPad(dimensions, sketch_box) {
    for (let i=0; i<dimensions; i++) {
        const row = document.createElement('div');
        row.classList.toggle('row');
        for (let j =0; j<dimensions; j++) {
            const item = document.createElement('div');
            item.classList.toggle('pixel');
            row.appendChild(item);
        }
        sketch_box.appendChild(row);
    }
}

function clearPad() {
    const pad = document.querySelector('.sketch-box')
    while(pad.firstChild) {
        pad.removeChild(pad.firstChild);
    }
}

function activatePixel(event) {
    event.target.classList.add('activated');
}


function onClick(event) {
    const container = document.querySelector('.sketch-box');
    clearPad();
    let size = window.prompt('Please enter a grid size from 1-100');
    if(size > 1 && size <= 100) {
        createNewPad(size, container);
    }
    else {
        window.alert('Invalid Size!');
    }
}

const container = document.querySelector('.sketch-box');
createNewPad(10,container)

const reset = document.querySelector('.reset');
reset.addEventListener('click', onClick);

container.addEventListener('mousedown',e => {
        window.addEventListener('mouseover',f =>{
            if(f.target.classList.value === 'pixel') {
                if(f.buttons === 1) f.target.classList.add('activated');
            }
        });
    });