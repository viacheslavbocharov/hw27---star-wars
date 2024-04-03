// const serverUrls = {
//     characters: 'https://swapi.dev/api/people/',
//     planets: 'https://swapi.dev/api/planets/',
//     vehicles: 'https://swapi.dev/api/vehicles/'
// }

loadItems('characters_list')
loadItems('planets_list')
loadItems('vehicles_list')

// window.addEventListener('DOMContentLoaded', showLists());


// function showLists() {
//     showCharacterList()
// }

// function showCharacterList() {
//     const parent = document.getElementById('characters_list');

// }


const serverUrl = 'https://swapi.dev/api/people/'


// let previousePageUrl;
// let nextPageUrl;

//document.getElementById()

//loadItems('characters_list');


function loadItems(recipientElementId) {
    const parent = document.getElementById(recipientElementId);
    const serverUrl = parent.getAttribute('data-url')
    // parent.innerHTML = '';
    renderRowsAndPagination(serverUrl, parent)

}

document.getElementById('characters_list').addEventListener('click', event => {
    const parent = document.getElementById('characters_list');
    const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
    renderRowsAndPagination(serverUrl, parent);
})

document.getElementById('planets_list').addEventListener('click', event => {
    const parent = document.getElementById('planets_list');
    const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
    renderRowsAndPagination(serverUrl, parent);
})

document.getElementById('vehicles_list').addEventListener('click', event => {
    const parent = document.getElementById('vehicles_list');
    const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
    renderRowsAndPagination(serverUrl, parent);
})


// document.querySelector('.card__item').addEventListener('click', function() {
//     var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
//     modal.show();
// });



function renderRowsAndPagination(serverUrl, parent) {
    if (serverUrl !==  'null') {
        parent.innerHTML = '';

        fetch(serverUrl)
            .then(result => result.json())
            .then(result => {


                let previousePageUrl = result.previous;
                let nextPageUrl = result.next;

                result.results.forEach(item => {

                    const row = document.createElement('div')
                    row.classList.add('card__item');
                    row.setAttribute('data-url', item.url)
                    row.setAttribute('data-bs-toggle', 'modal')
                    row.setAttribute('data-bs-target', '#exampleModal')
                    // row.setAttribute('type', 'button')
                    
            

                    const rowText = document.createElement('div')
                    rowText.classList.add('card__item-text');
                    rowText.textContent = `${item.name}`;

                    row.append(rowText);
                    parent.append(row);
                });

                const pagination = document.createElement('div')
                pagination.classList.add('card__pagination')
                pagination.innerHTML = '';
                pagination.innerHTML = `
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" aria-label="Previous" id="previouse_characters" data-url="${previousePageUrl}">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" aria-label="Next" id="next_characters" data-url="${nextPageUrl}">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            `
                parent.append(pagination);

            });
    }


}