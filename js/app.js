loadItems('characters_list')
loadItems('planets_list')
loadItems('vehicles_list')


//Update pagination button for blocks: characters, planets, vehicles
document.querySelector('.characters__pagination').addEventListener('click', event => {
  const parent = document.getElementById('characters_list');
  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  renderRowsAndPagination(serverUrl, parent);
})

document.querySelector('.planets__pagination').addEventListener('click', event => {
  const parent = document.getElementById('planets_list');
  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  renderRowsAndPagination(serverUrl, parent);
})

document.querySelector('.vehicles__pagination').addEventListener('click', event => {
  const parent = document.getElementById('vehicles_list');
  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  renderRowsAndPagination(serverUrl, parent);
})



//get data for modal
const parametersNameToShow = {
  characters: ['height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'],
  planets: ['rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population'],
  vehicles: ['cargo_capacity', 'consumables', 'cost_in_credits', 'crew', 'length', 'manufacturer', 'max_atmosphering_speed', 'model', 'passengers']
}

document.getElementById('characters_list').addEventListener('click', event => {

  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  updateModalData(parametersNameToShow.characters, serverUrl);
});


document.getElementById('planets_list').addEventListener('click', event => {

  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  updateModalData(parametersNameToShow.planets, serverUrl);
});

document.getElementById('vehicles_list').addEventListener('click', event => {

  const serverUrl = event.target.closest('[data-url]').getAttribute('data-url');
  updateModalData(parametersNameToShow.vehicles, serverUrl);
});

