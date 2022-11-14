// search items
var searchItems = document.querySelector('.text-search');
var items = document.querySelector('.easy-autocomplete-container')
var active = document.querySelector('.active')
var listItems = document.getElementsByTagName('li')
var resetButton = document.querySelector('.reset')
var searchIcon = document.querySelector('.bhx-search')
var searchButton = document.querySelector('.btn-search')
searchItems.onkeyup = function(e) {
    searchButton.style.display = 'block'
    resetButton.style.display = 'block';
    searchIcon.style.display = 'none'
    items.style.display = 'block'
    document.querySelector('.selected').style.display = 'none'
    const filter = searchItems.value.toLowerCase().trim();
    if (!filter) {
        items.style.display = 'none'
    } else {
        for (var i = 0; i < listItems.length; i++) {
            var searchItem = listItems[i].getElementsByTagName('h3')[0];
            var txtValue = searchItem.textContent || searchItem.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                listItems[i].style.display = 'block'
                document.querySelector('.selected').style.display = 'none'
            } else {
                listItems[i].style.display = 'none'
                document.querySelector('.showtext').innerHTML = filter;
                document.querySelector('.selected').style.display = 'block'

            }

        }
    }
}
resetButton.onclick = function(e) {
        console.log(e.target)
        items.style.display = 'none';
        resetButton.style.display = 'none'
        searchButton.style.display = 'none'
        searchIcon.style.display = 'block'
        document.querySelector('.text-search').value = '';
    }
    // accordion
var changeList = document.querySelectorAll('.nav-parent')
for (var i = 0; i < changeList.length; i++) {
    changeList[i].addEventListener("click", function() {
        this.classList.toggle("parent-open")
        var ItemsList = this.nextElementSibling;
        if (ItemsList.style.maxHeight) {
            ItemsList.style.maxHeight = null;
        } else {
            ItemsList.style.maxHeight = ItemsList.scrollHeight + 'px';
        }
    })
}
// mainsearch
// menu button
var MenuButton = document.querySelector('.menu')
MenuButton.onclick = function(e) {
        document.querySelector('.mainnav-mobile ').style.transform = 'translateX(0)'
    }
    // close menu mainnav
var closeMenu = document.querySelector('.closemenu')
closeMenu.onclick = function(e) {
        document.querySelector('.mainnav-mobile ').style.transform = 'translateX(-100%)'
    }
    // scroll to item
const filterButtons = document.querySelectorAll('.menu-item');
const listEle = document.getElementsByClassName('list-subcate')[0];
filterButtons.forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        // id cua the li
        const filter = button.getAttribute('data-id');
        console.log(filter);
        // lay element từ id cua div
        const cateItem = document.querySelector(`div[data-id="${filter}"]`);
        const scrollValue = cateItem.offsetTop;
        const scrollTop = cateItem.scrollTop;
        console.log(scrollValue, 'scrollValue')
        console.log(scrollTop, 'scrollTop')

        // if(cateItem)
        if (listEle)
            listEle.scroll({
                top: scrollValue - 60,
                left: 0,
                behavior: 'smooth'
            });
    }
})
const headerHeight = 78
let lastID = ''
const cateItems = document.getElementsByClassName('cateitem')

listEle.onscroll = (e) => {
        const fromTop = e.target.scrollTop + headerHeight
        let currentItem = null
        for (let i = 0; i < cateItems.length; i++) {
            // console.log(cateItems[i].offsetTop, 'offset')
            // console.log(fromTop, 'fromTop')
            if (cateItems[i].offsetTop < fromTop) {
                currentItem = cateItems[i]
            } else break
        }
        const id = currentItem.dataset.id
            // console.log(id, 'id')
        if (lastID !== id) {
            lastID = id
            filterButtons.forEach(menu => {
                if (menu.dataset.id === id) menu.querySelector('.nav-parent').classList.add('parent-open')
                else menu.querySelector('.nav-parent').classList.remove('parent-open')
            })
        }
    }
    // SliderShow
var slideIndex = 0;
showSlides();

function showSlides() {
    var SliderShow = document.querySelectorAll('.owl-item');
    for (var i = 0; i < SliderShow.length; i++) {
        SliderShow[i].style.display = 'none'
    }
    slideIndex++;
    if (slideIndex > SliderShow.length) slideIndex = 1
    SliderShow[slideIndex - 1].style.display = 'block'
    setTimeout(showSlides, 2000); // change image  every 2 second 
}
// show  back-top
const BackTop = document.querySelector('#back-top ')
const groupMenu = document.querySelector('.groupmenu ')
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        BackTop.style.display = 'block'
        groupMenu.style.display = 'block'
    } else {
        BackTop.style.display = 'none'
        groupMenu.style.display = 'none'
    }
}
BackTop.onclick = function(e) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    // show list-item