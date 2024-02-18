//pages
const page1 = document.getElementById('page1')
const page2 = document.getElementById('page2')
const page3 = document.getElementById('page3')

//list items
const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
//list icons
const item1Icon = document.getElementById('item1Icon')
const item2Icon = document.getElementById('item2Icon')
const item3Icon = document.getElementById('item3Icon')
const para = document.getElementsByClassName('para')

//menu
const menu = document.getElementById('menu')
const panelText = document.getElementById('panelText')
const menuIcon = document.getElementById('menuIcon')
const exit = document.getElementById('exit')

let isOpened = true


item1.addEventListener('click', () => {
    //classes
    item1.classList.add('active')
    item2.classList.remove('active')
    item3.classList.remove('active')
    item4.classList.remove('active')
    //pages
    page1.style.display = ''
    page2.style.display = 'none'
    page3.style.display = 'none'
})

item2.addEventListener('click', () => {
    //classes
    item2.classList.add('active')
    item1.classList.remove('active')
    item3.classList.remove('active')
    item4.classList.remove('active')
    //pages
    page2.style.display = ''
    page1.style.display = 'none'
    page3.style.display = 'none'
})

item3.addEventListener('click', () => {
    //classes
    item3.classList.add('active')
    item1.classList.remove('active')
    item2.classList.remove('active')
    item4.classList.remove('active')
    //pages
    page3.style.display = ''
    page2.style.display = 'none'
    page1.style.display = 'none'
})

menuIcon.addEventListener('click', () => {
    if (isOpened == true) {
        menu.style.width = "5%"
        menu.style.transition = "all .2s ease"
        panelText.style.display = 'none'
        menuIcon.style.marginBottom = '10px'
        menuIcon.style.marginLeft = '13px'
        for (var i = 0; i < para.length; i++) {
            para[i].style.display = 'none'
        }
        page1.style.width = '95%'
        page1.style.transition = 'all .2s ease'
        page2.style.width = '95%'
        page2.style.transition = 'all .2s ease'
        page3.style.width = '95%'
        page3.style.transition = 'all .2s ease'
        item1Icon.style.marginRight = 0
        item2Icon.style.marginRight = 0
        item3Icon.style.marginRight = 0
        exit.style.marginRight = 0
        item1.style.marginBottom = "5px"
        item2.style.marginBottom = "5px"
        item3.style.marginBottom = "5px"
        item4.style.marginBottom = "5px"
        isOpened = false
    }else {
        menu.style.width = "15%"
        menu.style.transition = "all .2s ease"
        panelText.style.display = ''
        menuIcon.style.marginBottom = '10px'
        menuIcon.style.marginLeft = 'auto'
        for (var i = 0; i < para.length; i++) {
            para[i].style.display = ''
        }
        page1.style.width = '85%'
        page2.style.width = '85%'
        page3.style.width = '85%'
        item1Icon.style.marginRight = "5px"
        item2Icon.style.marginRight = "5px"
        item3Icon.style.marginRight = "5px"
        exit.style.marginRight = "5px"
        item1.style.marginBottom = 0
        item2.style.marginBottom = 0
        item3.style.marginBottom = 0
        item4.style.marginBottom = 0
        isOpened = true
    }
})