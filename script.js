document.getElementById('addList').addEventListener('click', event => {
    event.preventDefault()
  
    axios.post('/addItem', {
      item: document.getElementById('item').value
    })
      .then(response => {
        document.getElementById('items').innerHTML = ''
        let items = response.data.items
  
        items.forEach(item => {
          let itemElem = document.createElement('li')
          itemElem.textContent = item
          document.getElementById('items').append(itemElem)
        })
      })
      .catch(err => console.error(err))
  })

 axios.get('/addItem')
  .then(response => {
      let items = response.data.items

      foods.forEach(item => {
          let itemElem = document.createElement('li')
          itemElem.textContent = item
          document.getElementById('items').append(itemElem)
      })
  })
.catch(err => console.error(err))
  