// Import stylesheets
import './scss/main.scss';
import './css/style.css';
// Custom JS


function getImages(breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(result =>{
        return result.json();
    })
    .then(data =>{
        for (var i = 0; i < 10; i++) {
            addToGallery(data.message[i]);
        }
        addToGallery(arr);
    })
    .catch(error =>{
        console.log(error);
    });
}

function addToGallery(url) {
     const image_gallery = document.querySelector(".img-grid");
    if(url === ''){
    }
    else{
      let block = document.createElement('div');
      block.classList.add('col-md-4');
      block.classList.add('col-sm-12');
      block.classList.add('grid-img');
      let image = document.createElement('img');
      image.src= url;
      block.append(image);
      image_gallery.append(block);
    }
}



getImages('hound');


(function(){
    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(result =>{
        return result.json();
    })
    .then(data =>{
       var result = data.message;
    for (let key in result) {
        const breedContainer = document.querySelector(".breedlist__container");
        if(result[key].length >=3){
            console.log([key], result[key]);
            let breed = key;
            let subList = result[key];
            let block = document.createElement('div');

            block.classList.add('col-md-3');
            block.classList.add('col-sm-12');
            block.classList.add('breed-div');

            let heading = document.createElement('h5');
            let t = document.createTextNode(breed);

            heading.appendChild(t);
            block.append(heading);
            var p = document.createElement('p');
            p.append(subList.join(", "));
            block.appendChild(p);
            breedContainer.append(block);
        }
      }
    })
    .catch(error =>{
        console.log(error);
    });
})();