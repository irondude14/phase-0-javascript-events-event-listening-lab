function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was cliked!');
    };

    input.addEventListener('click', clickAlert);
};

addingEventListener();
