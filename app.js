
// get the data
fetch("data.json").then((response)=>{
    console.log(response)
    let jsonData = response.json();
    console.log(jsonData)
    return jsonData
}).then((data)=>{
    console.log(data.results[0])
    data.results.forEach(place => {
        var sceneEl = document.querySelector('a-scene');
        //make a box and text for each
var entityEl = document.createElement('a-entity');
var entityName = document.createElement('a-entity');
entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 7,
    width: 5,
    depth: 5
  });
  entityEl.setAttribute('position', {x: place.geometry.location.lat*10000, y: 2, z: place.geometry.location.lng*10000});
sceneEl.appendChild(entityEl)
entityName.setAttribute('text', {
    value: place.name,
    color: "#fff",
    side: "double"
  });
  entityName.setAttribute('position', {x: place.geometry.location.lat*10000, y: 9, z: place.geometry.location.lng*10000});
  entityName.setAttribute('scale', {x: 10, y: 10, z: 10});
  sceneEl.appendChild(entityName)
    });
})

