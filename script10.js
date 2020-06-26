const books = document.querySelectorAll(".book"),
    list = document.querySelectorAll("li"),
    link = document.querySelectorAll('a');
    console.log(list);

document.body.style.background = "url(./img/arrow.svg)";

// порядок книг
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

link[4].textContent = "Книга 3. this и Протопипы Объектов";

// книга вторая
list[8].after(list[4]);
list[4].after(list[5]);

// книга пятая
list[47].after(list[55]);
list[52].before(list[48]);
list[54].before(list[51]);

// восьмая книга
list[25].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>");

// реклама
const adv = document.querySelector(".adv");
adv.remove(); 