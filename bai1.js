let listReview = JSON.parse(localStorage.getItem("listReview"));
function send() {
    let valueInput = document.getElementById("input").value;
    let contactReview = {
        name: valueInput,
    }
    let flag111 = JSON.parse(localStorage.getItem("flag"))
    if (flag111 != null) {
        listReview.splice(flag111, 1, contactReview);
        localStorage.removeItem("flag111");
        renderReview();
        return;
    }
    if (listReview == null) {
        listReview = [];
        listReview.push(contactReview);
        localStorage.setItem("listReview", JSON.stringify(listReview));
    } else {
        listReview.push(contactReview);
        localStorage.setItem("listReview", JSON.stringify(listReview));
    }
    document.getElementById("input").value = "";
    renderReview();
    } 
    renderReview();
function renderReview() {
    let result = "";
    for (i = 0; i < listReview.length; i++) {
        result +=
    `<tr>
        <td>${listReview[i].name}</td>
        <td class="icon"><button onclick = "editReview(${i})">edit</button></td>
        <td class="icon"><button onclick = "deleteReview(${i})">x</button></td>
    </tr> `
    }
    document.getElementById("result").innerHTML = result;
}
function deleteReview(id) {
    listReview.splice(id, 1);
    localStorage.setItem("listReview", JSON.stringify(listReview));
    renderReview();
}
function editReview(id) {
    document.getElementById("input").value = listReview[id].name;
    localStorage.setItem("flag", id);
}