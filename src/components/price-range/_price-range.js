import noUiSlider from 'nouislider';
const nonLinearSlider = document.getElementById('slider');
const nodes = [
    document.querySelector('#price-range__selected-min'), 
    document.querySelector('#price-range__selected-max')  
];

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    start: [500, 10000],
    range: {
        'min': [500],
        '1%': [300],
        'max': [30000]
    }
});

nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = parseInt(values[handle]).toFixed(0) + "₽";
});
