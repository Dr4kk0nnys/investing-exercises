document.getElementById('submit').addEventListener('click', () => {
    const elements = document.getElementsByClassName('input_radio_polls');

    for (const element of elements) {
        console.log(element);
    }
});