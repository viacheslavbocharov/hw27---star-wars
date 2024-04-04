function loadItems(recipientElementId) {
    const parent = document.getElementById(recipientElementId);
    const serverUrl = parent.getAttribute('data-url')
    renderRowsAndPagination(serverUrl, parent)

};



function updateModalData(parametersNameToShow, serverUrl) {
    fetch(serverUrl)
        .then(result => result.json())
        .then(result => {

            const modalTitle = document.querySelector('.fs-5');
            modalTitle.innerText = result.name;

            const modalBody = document.querySelector('.modal-body')
            modalBody.innerHTML = ''

            parametersNameToShow.forEach(element => {
                const parametrRow = document.createElement('div')
                parametrRow.classList.add('modal__desc')
                parametrRow.innerText = `${element}: ${result[element]}`;
                modalBody.append(parametrRow);
            })

        })
};



function renderRowsAndPagination(serverUrl, parent) {
    if (serverUrl !== 'null') {
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

                    const rowText = document.createElement('div')
                    rowText.classList.add('card__item-text');
                    rowText.textContent = `${item.name}`;

                    row.append(rowText);
                    parent.append(row);
                });

                const parentId = parent.getAttribute('id');

                let marker;

                switch (parentId) {
                    case 'characters_list':
                        marker = 'characters';
                        break;
                    case 'planets_list':
                        marker = 'planets';
                        break;
                    case 'vehicles_list':
                        marker = 'vehicles';
                        break;

                    default:
                        break;
                }

                const previouse = document.getElementById(`previouse_${marker}`);
                previouse.setAttribute('data-url', `${previousePageUrl}`)

                const next = document.getElementById(`next_${marker}`);
                next.setAttribute('data-url', `${nextPageUrl}`)

            });
    }
};