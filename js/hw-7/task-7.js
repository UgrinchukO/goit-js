const sizeRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

const handleRange = e => {
 spanTextRef.style.fontSize = e.currentTarget.value + "px";
};

sizeRef.addEventListener("input", handleRange);
