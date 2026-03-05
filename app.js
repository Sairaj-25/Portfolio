function showPopup(id) {
    document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// Closes the popup if the user clicks the dark background
function closePopupOutside(event, id) {
    if (event.target.id === id) {
        closePopup(id);
    }
}

