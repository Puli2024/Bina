let button=document.createElement("button");
button.innerText = "Iam a button";
button.style = "width: 100px; height: 50px; background-color:red;";
console.log(button)
document.body.appendChild(button);

function buttonClicked()
{
    console.log("second");
    }

    button.addEventListener("click",buttonClicked);
