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
    let list = $("#ft_list").html();
    setCookie("todos", list);
}

function loadTodos() {
    let data = getCookie("todos");
    if (data !== "")
        $("#ft_list").html(data);
}

/* ---------- ADD NEW TODO ---------- */

$("#new").click(function () {
    let text = prompt("New TO DO:");
    if (!text)
        return;

    let div = $("<div></div>").text(text);

    div.click(function () {
        if (confirm("Do you really want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(div);
    saveTodos();
});

/* ---------- LOAD TODOS ON PAGE LOAD ---------- */

$(document).ready(function () {
    loadTodos();
});
