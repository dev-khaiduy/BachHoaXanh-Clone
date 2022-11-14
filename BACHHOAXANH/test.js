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
        document.querySelector('.mainnav').style.transform = 'translateX(0)'
    }
    // close menu mainnav
var closeMenu = document.querySelector('.closemenu')
closeMenu.onclick = function(e) {
        document.querySelector('.mainnav').style.transform = 'translateX(-100%)'
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
            // console.log(fromTop)
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
    var SliderShow = document.querySelectorAll('.adventisment');

    for (var i = 0; i < SliderShow.length; i++) {
        SliderShow[i].style.display = 'none'
    }
    slideIndex++;
    if (slideIndex > SliderShow.length) slideIndex = 1
    SliderShow[slideIndex - 1].style.display = 'block'
    setTimeout(showSlides, 2000); // change image  every 2 second 
}
var slideTexts = 0;
showSlide();

function showSlide() {
    var SliderText = document.querySelectorAll('.owl-item-text');

    for (var i = 0; i < SliderText.length; i++) {
        SliderText[i].style.display = 'none'
    }
    slideTexts++;
    if (slideTexts > SliderText.length) slideTexts = 1
    SliderText[slideTexts - 1].style.display = 'block'
    setTimeout(showSlide, 2000); // change image  every 2 second 
}
var ShowImg = 0;
SliderImg();

function SliderImg() {
    var i;
    var Image = document.querySelectorAll('.owl-item-img')
    var dots = document.querySelectorAll('.owl-dot')
    for (i = 0; i < Image.length; i++) {
        Image[i].style.display = 'none'
    }
    ShowImg++;
    if (ShowImg > Image.length) ShowImg = 1
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", '')
    }
    Image[ShowImg - 1].style.display = 'block'
    dots[ShowImg - 1].className += " active";
    setTimeout(SliderImg, 2000)
}
// show  back-top
const BackTop = document.querySelector('#back-top ')
const groupMenu = document.querySelector('.groupmenu ')
window.onscroll = function(e) { scrollFunction();
    scrollListItem(e) };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
    // search items 
const searchMenu = document.querySelectorAll('#searchMenu')[1]
const searchResult = document.querySelector('.search-result')
const ItemsSelect = document.querySelector('.ItemsSelect')
const ButtonSearch = document.querySelector('.nav-btn-search')
const NoResult = document.querySelector('.NoResult')
searchMenu.onkeyup = function(e) {
    const ItemsFood = ItemsSelect.getElementsByTagName('li')
    console.log(ItemsFood)
    ItemsSelect.style.display = 'block'
    searchResult.style.display = 'block'
    ButtonSearch.style.display = 'block'
    NoResult.style.display = 'none'
    const filterItems = searchMenu.value.toLowerCase().trim()
    if (!filterItems) {
        searchResult.style.display = 'none'
        ButtonSearch.style.display = 'none'
    } else {
        for (let i = 0; i < ItemsFood.length; i++) {
            const ItemsFoods = ItemsFood[i].querySelector('.text')
            const ValueFood = ItemsFoods.textContent || ItemsFoods.innerText;
            if (ValueFood.toLowerCase().indexOf(filterItems) > -1) {
                ItemsFood[i].style.display = 'block'
                NoResult.style.display = 'none'

            } else {
                ItemsFood[i].style.display = 'none'
                NoResult.style.display = 'block'
            }
        }
    }
}
ButtonSearch.onclick = function(e) {
    searchResult.style.display = 'none'
    searchMenu.value = ' '
    ButtonSearch.style.display = 'none'
}
const moreInfo = document.querySelector('.moreinfo')
const linkFooter = document.querySelector('.linkfooter')
moreInfo.onclick = function(e) {
    console.log(e.target);
    if (linkFooter.style.maxHeight) {
        linkFooter.style.maxHeight = null;
    } else {
        linkFooter.style.maxHeight = linkFooter.scrollHeight + 'px';
    }
}


const filterButt = document.querySelectorAll('.list-items');
const listEles = document.querySelector('.listItems__main');
filterButt.forEach(buttons => {
        buttons.onclick = function(e) {
            e.preventDefault();
            // id cua the li
            const filters = buttons.getAttribute('data-cate');
            console.log(filters);
            // lay element từ id cua div
            const cateItem = document.querySelectorAll(`div[data-cate="${filters}"]`)[1];
            const scrollValue = cateItem.offsetTop;
            const scrollTop = cateItem.scrollTop;
            console.log(scrollValue, 'scrollValue')
            console.log(scrollTop, 'scrollTop')
            const a = buttons.getElementsByTagName('span')[0]
            if (cateItem) {
                cateItem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
            }
        }
    })
    // zoom input
const inputText = document.querySelector('.input-text')
const formSearch = document.querySelector('.form-validation')
inputText.onfocus = function(e) {
        formSearch.style.width = '300px'
    }
    // show 

const groupfeature = document.querySelectorAll('.groupfeature')

function scrollListItem(e) {
    let lastID = ''
    const MainHeight = 80
    const fromTop = this.scrollY + MainHeight
        // console.log(fromTop)
    let currentItem = null
    for (let i = 0; i < groupfeature.length; i++) {
        console.log(groupfeature[i].offsetTop, 'offset')
        console.log(fromTop, 'fromTop')
        if (groupfeature[i].offsetTop < fromTop) {
            currentItem = groupfeature[i]
        } else break
    }
    const id = currentItem ? currentItem.dataset.cate : filterButt[0].dataset.cate
    console.log(id, 'id')
    if (lastID !== id) {
        lastID = id
        filterButt.forEach(butt => {
            if (butt.dataset.cate === id) {
                butt.getElementsByTagName('span')[0].classList.add('acti')

            } else butt.getElementsByTagName('span')[0].classList.remove('acti')
        })
    }
}