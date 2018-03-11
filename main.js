const btn = document.querySelector('#btn');
const img = document.querySelector('#photo');

// listen for clicks
btn.addEventListener('click', function(){
    // make the request
    const XHR = new XMLHttpRequest();
    
    // when request is completed run the function
    XHR.onreadystatechange = function(){
        // if request state is complete and it worked
        if(XHR.readyState == 4 && XHR.status == 200) {
            const url = JSON.parse(XHR.responseText).message;
            img.src = url;
        }
    }

    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});

