function zero_first_format(value)
                        {
                            if (value < 10)
                            {
                                value='0'+value;
                            }
                            return value;
                        }
                        function date_time()
                        {
                            var current_datetime = new Date()
                            var hours = zero_first_format(current_datetime.getHours());
                            var minutes = zero_first_format(current_datetime.getMinutes());
                            var seconds = zero_first_format(current_datetime.getSeconds());
            
                            return hours+":"+minutes+":"+seconds;
                        }
                        document.getElementById('time').innerHTML = date_time();

var firstElement = document.querySelector('.fourth__block__window')
var secondElement = document.querySelector('.fourth__block__window1')
var thirdElement = document.querySelector('.fourth__block__window2')
var fourthElement = document.querySelector('#fourth__block__button')
var fivthElement = document.querySelector('#fourth__block__button1')
var sixthElement = document.querySelector('#fourth__block__button2')
fourthElement.addEventListener('click', function () {
    firstElement.style.display = 'grid'
    secondElement.style.display = 'none'
    thirdElement.style.display = 'none'
  })

  fivthElement.addEventListener('click', function () {
    firstElement.style.display = 'none'
    secondElement.style.display = 'grid'
    thirdElement.style.display = 'none'
  })

  sixthElement.addEventListener('click', function () {
    firstElement.style.display = 'none'
    secondElement.style.display = 'none'
    thirdElement.style.display = 'grid'
  })

var servicesElement1 = document.querySelector('.services__inputs1')
var servicesElement2 = document.querySelector('.services__inputs2')
var servicesElement3 = document.querySelector('.services__dop')
var servicesElement4 = document.querySelector('.services__dop1')

servicesElement3.addEventListener('click', function () {
    servicesElement1.style.display = 'flex'
    servicesElement2.style.display = 'flex'
    servicesElement3.style.display = 'none'
    servicesElement4.style.display = 'block'
  })

  servicesElement4.addEventListener('click', function () {
    servicesElement1.style.display = 'none'
    servicesElement2.style.display = 'none'
    servicesElement3.style.display = 'block'
    servicesElement4.style.display = 'none'
  })