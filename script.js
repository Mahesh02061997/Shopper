
let section = document.querySelector('section')
let navLink = document.querySelectorAll('div ul li a')

window.onscroll=() => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top > offset && top < offset + height)
        {
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('div ul li a[href*='+id+']').classList.add('active')
            })
        }
    })
}


function check()
{
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "")
    {
        alert("Please fill the details");
    }
}

function showOffers()
{
    alert("Offers Section is here")
}
