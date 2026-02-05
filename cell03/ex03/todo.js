/* ---------- COOKIE FUNCTIONS ---------- */

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        if (parts[0] === name)
            return decodeURIComponent(parts[1]);
    }
    return "";
}

/* ---------- TODO FUNCTIONS ---------- */

function saveTodos() {
    let list = document.getElementById("ft_list").innerHTML;
    setCookie("todos", list);
}

function loadTodos() {
    let data = getCookie("todos");
    if (data !== "")
        document.getElementById("ft_list").innerHTML = data;
}

/* ---------- ADD NEW TODO ---------- */

document.getElementById("new").onclick = function () {
    let text = prompt("New TO DO:");
    if (!text)
        return;

    let div = document.createElement("div");
    div.innerText = text;

    div.onclick = function () {
        if (confirm("Do you really want to remove this TO DO?")) {
            this.remove();
            saveTodos();
        }
    };

    let list = document.getElementById("ft_list");
    list.insertBefore(div, list.firstChild);
    saveTodos();
};

/* ---------- LOAD TODOS ON PAGE LOAD ---------- */

loadTodos();
