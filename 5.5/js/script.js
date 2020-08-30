ul = document.querySelector('.menu')
li = document.querySelectorAll('.menu-item')
list = document.createElement('li')

list.classList.add('menu-item')
list.textContent = 'Пятый пункт'

ul.appendChild(list)
item = ul.replaceChild(li[1], li[2])
ul.insertBefore(item, li[1])

document.body.style.backgroundImage = "url('img/apple_true.jpg')"
title = document.querySelector('#title')
title.textContent = 'Мы продаем тоьлко подлинную технику Apple'

colum = document.querySelectorAll('.column')
rekl = document.querySelector('.adv')

colum[1].removeChild(rekl)

ans = prompt('Отношение к техники Apple?', '')
prom = document.querySelector('#prompt')
prom.textContent = ans 
