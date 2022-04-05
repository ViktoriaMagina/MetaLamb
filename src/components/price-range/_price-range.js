import noUiSlider from 'nouislider';

const priceRange = document.getElementById('price-range');
if(priceRange){
    const nodes = [
        document.querySelector('#price-range__selected-min'), 
        document.querySelector('#price-range__selected-max')  
    ];
    
    noUiSlider.create(priceRange, {
        connect: true,
        behaviour: 'tap',
        start: [500, 10000],
        range: {
            'min': [500],
            '1%': [300],
            'max': [30000]
        }
    });
    
    priceRange.noUiSlider.on('update', function (values, handle) {
        nodes[handle].innerHTML = parseInt(values[handle]).toFixed(0) + "₽";
    });
}

    