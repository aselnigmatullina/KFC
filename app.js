console.log('worked');

const hotDog ={
    id: 2379,
    name: 'Хот-дог куриный',
    price: '79',
    imageUrl:  'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=430',
};

const aboutHotDog = {
    id: 1166,
    author: hotDog,
    information: '* Данные по пищевой и энергетической ценности блюд, представленные в таблице, основаны на данных лабораторных исследований, технико-технологических карт и данных по пищевой ценности, полученных от поставщиков. Различия в размерах порций, так же как региональные и сезонные различия могут влиять на пищевую ценность каждого продукта меню.Рецептура блюд периодически может меняться. Информация предоставлена на основе текущего меню и может изменяться без предварительного уведомления.',
    number: 1 ,
    shoppingBasket: 'В корзину 79 ',
    structure:'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    gram:'124 Г',
    calories:'226 Ккал',
    BZHU:'Б: 9.6г Ж: 10.1г У: 24.3г',
};

const burger ={
    id: 2379,
    name: 'Чизбургер Де Люкс',
    price: '124',
    imageUrl:  'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=430',
};

const aboutBurger = {
    id: 1166,
    author: burger,
    information: '* Данные по пищевой и энергетической ценности блюд, представленные в таблице, основаны на данных лабораторных исследований, технико-технологических карт и данных по пищевой ценности, полученных от поставщиков. Различия в размерах порций, так же как региональные и сезонные различия могут влиять на пищевую ценность каждого продукта меню.Рецептура блюд периодически может меняться. Информация предоставлена на основе текущего меню и может изменяться без предварительного уведомления.',
    number: 1 ,
    shoppingBasket: 'В корзину 124 ',
    structure:'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
    gram:'226 Г',
    calories:'193 Ккал',
    BZHU:'Б: 12.6г Ж: 6.6г У: 20.7г',
};



const imageEl = document.getElementById('hotDog');  
imageEl.src = aboutHotDog.author.imageUrl;

const HotDogNameEl = document.getElementById('hotDog-name');
HotDogNameEl.textContent = aboutHotDog.author.name;

const priceEl = document.getElementById('price');
priceEl.textContent = hotDog.price;

const informationEl = document.getElementById('block-1');
informationEl.textContent = aboutHotDog.information;

const numberEl = document.getElementById('number');
numberEl.value = aboutHotDog.number;

const shoppingBasketEl = document.getElementById('shopping-basket');
shoppingBasketEl.value = aboutHotDog.shoppingBasket;

const structureEl = document.getElementById('structure');
structureEl.textContent = aboutHotDog.structure;

const gramEl = document.getElementById('gram');
gramEl.textContent = aboutHotDog.gram;

const caloriesEl = document.getElementById('calories');
caloriesEl.textContent = aboutHotDog.calories;

const BZHUEl = document.getElementById('BZHU');
BZHUEl.textContent = aboutHotDog.BZHU;

const imageBEl = document.getElementById('burger');  
imageBEl.src = aboutBurger.author.imageUrl;

const burgerNameEl = document.getElementById('burger-name');
burgerNameEl.textContent = aboutBurger.author.name;

const priceBEl = document.getElementById('priceB');
priceBEl.textContent = burger.price;

const informationBEl = document.getElementById('block-2');
informationBEl.textContent = aboutBurger.information;

const number2El = document.getElementById('number2');
number2El.value = aboutBurger.number;

const shoppingBasket2El = document.getElementById('shopping-basket2');
shoppingBasket2El.value = aboutBurger.shoppingBasket;

const structure2El = document.getElementById('structure2');
structure2El.textContent = aboutBurger.structure;

const gram2El = document.getElementById('gram2');
gram2El.textContent = aboutBurger.gram;

const calories2El = document.getElementById('calories2');
calories2El.textContent = aboutBurger.calories;

const BZHU2El = document.getElementById('BZHU2');
BZHU2El.textContent = aboutBurger.BZHU;




