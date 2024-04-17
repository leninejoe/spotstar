                                                    // Language Select

function language(){
    var choice = document.getElementById("select").value

    
    if(choice=='TN'){
        window.location.href="/HTML/Movies-HTML/Tamil/Home.html"
    }
    else if(choice=='KL'){
        window.location.href="/HTML/Movies-HTML/Malayalam/Malayalam_Home.html"
    }
    else if(choice=='AP'){
        window.location.href="/HTML/Movies-HTML/Telungu/Telungu_Home.html"
    }
    else if(choice=='EM'){
        alert("Choose Language")
    }
    else{
        window.location.href="/HTML/Movies-HTML/Kanadam/Kanadam_Home.html"
    }

}

                                                    //Slideshow
window.onload = function() {
    // Slide Left
    var S_image1 = ['/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/HRIDAYYAM.jpg', '/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/KUNJELDHO.jpg','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/KAPPELA.jpg', '/Image/Movies/Manjumel Boys movie.webp','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/PREMAM.jpg','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/SUPER SHARANYA.jpg', '/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/4 YEARS.jpg']
    var I_image1 = 0
    var images1 = document.getElementById('image')

    function nextImage1() {
        I_image1++
        if (I_image1 >= S_image1.length) {
            I_image1 = 0
        }
        images1.src = S_image1[I_image1]
    }
    setInterval(nextImage1, 3000)

    // Slide Right
    var S_image2 = [ '/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/KUNJELDHO.jpg','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/KAPPELA.jpg', '/Image/Movies/Manjumel Boys movie.webp','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/PREMAM.jpg','/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/SUPER SHARANYA.jpg', '/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/4 YEARS.jpg', '/Image/Movies/Malayalam/ROMANTIC MOVIE IMAGE/HRIDAYYAM.jpg']
    var I_image2 = 0
    var images2 = document.getElementById('image2');

    function nextImage2() {
        I_image2++;
        if (I_image2 >= S_image2.length) {
            I_image2 = 0;
        }
        images2.src = S_image2[I_image2]
    }
    setInterval(nextImage2, 3000)
}