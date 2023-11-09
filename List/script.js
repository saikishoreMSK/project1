// document.addEventListener('DOMContentLoaded', function() {
//     const genreParam = new URLSearchParams(window.location.search).get('genre');
//     const images = document.querySelectorAll('.image-box');

//     images.forEach(image => {
//         if (genreParam && image.dataset.genre !== genreParam) {
//             image.style.display = 'none';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const genreParam = new URLSearchParams(window.location.search).get('genre');
    const images = document.querySelectorAll('.image-box');

    images.forEach(image => {
        const genres = image.dataset.genre.split(' ');
        if (genreParam && !genres.includes(genreParam)) {
            image.style.display = 'none';
        }
    });
});

const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){ //matching value with getting attribute of images
                    return image.style.display = "block";
                }
                image.style.display = "none";
         });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    images.forEach(image =>{
        image.style.display = "block";
    })
})

function goToTicket(name) {
    let url = '../Ticket/Ticket.html?name='+name;
    window.location.href = url;
}
