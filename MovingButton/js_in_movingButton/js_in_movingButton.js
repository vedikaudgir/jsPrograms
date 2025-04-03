let yes = document.getElementById("heading")

function ofcourse()
{
    yes.innerText = "LOL";
}
function clear()
{
    yes.innerText = "DON'T CLICK ON YES";
}

function clear() 
{
    count += 1
    countEl.innerText = " ";
    console.log(count)
}

const button = document.getElementById("no");
button.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});