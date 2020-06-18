const switch1 = document.querySelector('switch1');
const switch2 = document.querySelector('switch2');
const switch3 = document.querySelector('switch3');
const switch4 = document.querySelector('switch4');
const lightOn = () => {
    switch2?.classList.remove('on')
};

switch1?.addEventListener('click', lightOn);