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

                                                    // Image Slide Show

window.onload = function() {
    // Slide Left
    var S_image1 = ['/Image/Movies/good night.webp', '/Image/Movies/Japan.jpg','/Image/Movies/Ayalan.jpeg', '/Image/Movies/leo.jpg','/Image/Movies/Jailer.webp','/Image/Movies/captian miller.jpg', '/Image/Movies/Blue star.jpg']
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
    var S_image2 = [ '/Image/Movies/Japan.jpg','/Image/Movies/Ayalan.jpeg', '/Image/Movies/leo.jpg','/Image/Movies/Jailer.webp','/Image/Movies/captian miller.jpg', '/Image/Movies/Blue star.jpg', '/Image/Movies/good night.webp']
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