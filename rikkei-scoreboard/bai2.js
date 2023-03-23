let listName = JSON.parse(localStorage.getItem("listName"));
function save() {
    let namePlayer = document.getElementById("name").value;
    let point = 0;
    let name = {
        name: namePlayer,
        point: point,
    };
    if (listName == null) {
        listName = [];
        listName.push(name);
        localStorage.setItem("listName", JSON.stringify(listName));
    } else {
        listName.push(name);
        localStorage.setItem("listName", JSON.stringify(listName));
    }document.getElementById("name").value = "";
    renderName();
    renderCount();
}
function renderName() {
    let result = "";
    for (i = 0; i < listName.length; i++) {
        result +=
         `
            <tr>
                <td><button onclick="deleteName(${i})">Delete</button></td>
                <td>${listName[i].name}</td>
                <td><button onclick="downPoint(${i})">-</button></td>
                <td>${listName[i].point}</td>
                <td><button onclick="upPoint(${i})">+</button></td>
            </tr>
            `;
    }
    document.getElementById("table").innerHTML = result;
}
function deleteName(id) {   
    listName.splice(id, 1);
    localStorage.setItem("listName", JSON.stringify(listName));
    renderName();
    renderCount();
}
function upPoint(id) {
    listName[id].point++;
    localStorage.setItem("listName", JSON.stringify(listName));
    renderName();
    renderCount();
}

function downPoint(id) {
    listName[id].point--;
    localStorage.setItem("listName", JSON.stringify(listName));
    renderName();
    renderCount();
}
function renderCount() {
    let a = 0;
    for (i = 0; i < listName.length; i++) {
        a += listName[i].point;
        total = a;
    }
    let result = `
  <div class ="item1">
        <div>Player: ${listName.length}</div>
        <div>Total Points: ${total}</div>
   </div>      
    `;
    document.getElementById("header").innerHTML = result;
}
renderName();
renderCount();
