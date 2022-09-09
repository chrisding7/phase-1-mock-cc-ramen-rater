// write your code here
document.addEventListener('DOMContentLoaded', () => {
    const ramenMenu = document.querySelector('#ramen-menu');
    const ramenDetail = document.querySelector('#ramen-detail')
    const detailImg = ramenDetail.querySelector('.detail-image');
    const detailName = ramenDetail.querySelector('.name');
    const detailRestaurant = ramenDetail.querySelector('.restaurant');

    const ratingDisplay = document.getElementById('rating-display');
    
    const commentDisplay = document.getElementById('comment-display');
    
    const newRamenForm = document.getElementById('new-ramen');

    //step 1: click on a ramen image and see info about each 
    //        ramen(eventlistener). 
    //step 2: find element and change content of the element.

    const renderRamen = oneRamen => {
            const img = document.createElement('img');
            img.src = oneRamen.image;
            ramenMenu.append(img);
            //event listener
            img.addEventListener('click', () => {
                detailImg.src = oneRamen.image;
                detailName.textContent = oneRamen.name;
                detailRestaurant.textContent = oneRamen.restaurant;
                ratingDisplay.textContent = oneRamen.rating;
                commentDisplay.textContent = oneRamen.comment;
            });
        };
    
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramenData => (
        ramenData.forEach(renderRamen)
    ));

    //step 1: select the form #new-ramen
    //step 2: create an event listener that waits for a user to submit
    //        an object and add preventDefault.
    //step 3: create a new ramen object with keys that are the same 
    //        as the keys in db.json. The value of the keys will get 
    //        from the input.
    //step 4: place our new image in the ramen menu using the info 
    //        from the new obj.

    newRamenForm.addEventListener('submit', event => {
        event.preventDefault();
        const userRamen = {
            name: event.target.name.value, 
            restaurant: event.target.restaurant.value, 
            image: event.target.image.value, 
            rating: event.target.rating.value, 
            comment: event.target['new-comment'].value 
        };
        renderRamen(userRamen);
    });
});
