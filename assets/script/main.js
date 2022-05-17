var loader = document.querySelector('.loader');

//scroll Function
const links = document.querySelectorAll('.scroll__to')

links.forEach((item)=>{
    item.addEventListener('click', ()=> {
        const el = document.getElementById(item.getAttribute('data-link'))
        el.scrollIntoView({behavior:'smooth' , block:'start'})
    })
})



//persons
var personsSection = document.querySelector('.persons__section');
const ApiEndPoint = fetch ('https://fakerapi.it/api/v1/persons?_quantity=20');
var users = [];

async function getPersons(){
    loader.classList.remove('hidden');
    await fetch('https://fakerapi.it/api/v1/persons?_quantity=20')
        .then(res=>res.json())
        .then(data=>{ 
            users = data.data; 
            renderPersons(users)})
        .catch(error=>{console.log(error)})
        .finally( ()=>{
            loader.classList.add('hidden');
        })
}

function renderPersons(persons) {
    personsSection.innerHTML = '';
     persons.map((person)=>{
        personsSection.innerHTML+=` <div class="wrapper">
        <div class="profile__wrapper">
            <div class="cover">
                <img src="${person.image}" alt="profile picture" class="profile__pic">
            </div>
            <main> 
                            <div class="span__container">
                                <span class="first__name">${person.firstname}</span>
                             </div>
                            <div class="span__container">
                                 <span class="last__name">${person.lastname}</span>
                            </div>
                            <div class="span__container">
                                <span class="email">${person.email}</span>
                            </div>
                            <div class="span__container">
                                <span class="phone">${person.phone}</span>
                            </div>
                            <div class="span__container">
                                <span class="birthday">${person.birthday}</span>
                            </div>
                </main>
        </div> `
    })
}

getPersons();


        

//searchPersons
var searchBar = document.querySelector('.search__bar');
var searchForm = document.querySelector('.search__form');

function preventSubmit(e) {
    e.preventDefault();
} 

searchBar.addEventListener("input" , (e) => {
    var value = e.target.value;
    let searchedUsers = [];
    searchedUsers = users.filter(user => {
        return user.firstname.toLowerCase().includes(value) || user.lastname.toLowerCase().includes(value);
    })    
    
    renderPersons(searchedUsers);

        
})

// users.forEach(user => {
//     const isVisible =
//       user.firstname.toLowerCase().includes(value) ||
//       user.lastname.toLowerCase().includes(value)
//     user.element.classList.toggle("hidden", !isVisible)
//   })
    
//Companies//
    
var companiesWrapper = document.querySelector('.companies__wrapper');
    
function renderCompanies(companies) {
    companies.forEach((company)=>{
        companiesWrapper.innerHTML+=`<div class="company__card">
        <figure> 
            <img src="${company.image}" alt="Company Logo">
        </figure>
        <div class="company__details">
                <h3>${company.name}</h3>
                <p>${company.email}</p>
                <p>${company.vat}</p>
                <p>${company.phone}</p>
                <p>${company.country}</p>
                </div>
    </div>`
    })
};

async function getCompanies(){
    loader.classList.remove('hidden');
    await fetch('https://fakerapi.it/api/v1/companies?_quantity=15')
    .then(res=>res.json())
    .then(data=>renderCompanies(data.data))
    .catch(error=>(console.log(error)))
    .finally( ()=>{
        loader.classList.add('hidden');
    })
}

getCompanies();


//Books
var booksWrapper = document.querySelector('.books__wrapper');


function renderBooks(books) {
    books.forEach((book)=>{
        booksWrapper.innerHTML+=` <div class="book__description">

        <img src="${book.image}" alt="Book image">
        <h2>${book.title}</h2>
        <h4>${book.author}</h4>
        <p class="description__text"> <span class="bold__word">Description:</span> ${book.description}</p>
        <p class="description__text">Published : ${book.published}</p>
        <p class="description__text">Publisher : ${book.publisher}</p>
        <div class="book__cover">
            <h2 class="hover__word">Hover Here...</h2>
        </div>
</div>`
    })
};


function getBooks() {
    loader.classList.remove('hidden');
    fetch('https://fakerapi.it/api/v1/books?_quantity=10')
    .then(res=>res.json())
    .then(data=>renderBooks(data.data))
    .finally( ()=>{
        loader.classList.add('hidden');
    })
}

getBooks();

