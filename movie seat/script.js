const seats = document.querySelectorAll('.container .seat:not(.occupied)');
const selectValue = document.getElementById('movie');
const count = document.querySelector('.count');
const totalPrice = document.querySelector('.total');

let total = 0;
let value = selectValue.value;

//when a user clicks
seats.forEach(seat => {
    seat.addEventListener('click', addSelected);
});

function addSelected(e) {
    const seat = e.target;
    seat.classList.toggle('selected');
    updatePrice();
}

//when a user selects
selectValue.addEventListener('change', handleChange);

function handleChange(e) {
    value = e.target.value;
    updatePrice();
}

//Update after a user clicked or selected
function updatePrice() {
    let selectedArr = [];
    seats.forEach(seat => {
        if (seat.classList.contains('selected')) {
            selectedArr.push(seat);
        }
    });


    total = value * selectedArr.length;
    showUpdatedPrice(selectedArr, total);
}

function showUpdatedPrice(selectedArr, total) {
    count.textContent = selectedArr.length;
    totalPrice.textContent = total;
}

//vip check