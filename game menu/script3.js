let name1 = document.getElementById("username1");
let name2 = document.getElementById("username2");
let name3 = document.getElementById("username3");

let inputs = document.querySelectorAll("input");



name1.innerText = localStorage.getItem("firstName") + ' ';
name2.innerText = `"${localStorage.getItem("inGameName")}" `;
name3.innerText = localStorage.getItem("lastName");

