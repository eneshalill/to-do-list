const iput = document.getElementById ("iput");
const btttn = document.getElementById ("bttn");
const come = document.getElemenztById ("comein");

function ask()  {
const askMe = iput.value.trim();

if(askMe ==="") {
    alert(أدخل سؤالك );
return;
}

const li = document.createElement("li");
li.textContent = askMe;
li.classlist.add(
    "list-group-item",
"d-flex",
"justify-content-between",
"align-items-center"
);
 
li.style.cursor = "pointer";

const btttn = document.createElement("button");

btttn.innerHTML="أحذف";
btttn.classList.add("btn", "btn-danger", "btn-sm");

btttn.addEventListener("click", () => {
come.removeChild(li);
});

li.appendChild(btn);

li.addEventListener("click", () => {
li.classList.toggle("enes");
});

come.appendChild(li);
iput.value="";
}

bttn.addEventListener("click", ask);

iput.addEventListener("keypress", (e) =>{
    if(e.key ==="Enter"){
        ask();
    }

});






