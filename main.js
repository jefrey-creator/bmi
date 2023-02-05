function computePercentage(){
    var class_held = $('#class_held').val()
    var class_attended = $('#class_attended').val()
    var percentage = "";
    var num = "";
    var isExam = false;
    var msg = document.querySelector('#msg')

    // console.log(class_held);

    setTimeout(() => {
        $('#error').remove()
    }, 3000);

    if(class_attended.trim() == ""){
        msg.innerHTML = '<div id="error">Class attended is required!</div>'
    }
    else if(class_held.trim() == ""){
        msg.innerHTML = '<div id="error">Class held is required!</div>'
    }else{

        percentage =  class_attended / class_held;
        num = percentage * 100;

        $('#percentageOfClassAttended').text('Percentage of class attended: '+Math.round(num).toFixed(2)+'%')

        if(num < 75){
            isExam = false;
        }else{
            isExam = true;
        }

        if(isExam == true){
            $('#exam').text('YOU ARE ALLOWED TO TAKE THE EXAM! ').css('color', 'green')
        }else{
            $('#exam').text('You are NOT allowed to take the exam! You did not get 75% or higher in class attendance.').css('color', 'red')
        }


    }
}

function setCurrency(){
    $('#first_val').val('')
    $('#second_val').text('')
    var conversion = $('#convert').val()
    $('#selected_conversion').val(conversion)
    switch (conversion) {
        case "us_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('US Dollar')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_us":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('US Dollar')
            $('#first_conversion').text('PH Peso')
            break;

        case "hk_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('HK Dollar')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_hk":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('HK Dollar')
            $('#first_conversion').text('PH Peso')
            break;

        case "au_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('AU Dollar')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_au":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('AU Dollar')
            $('#first_conversion').text('PH Peso')
            break;

        case "nz_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('NZ Dollar')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_nz":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('NZ Dollar')
            $('#first_conversion').text('PH Peso')
            break;

        case "jp_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('JP YEN')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_jp":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('JP YEN')
            $('#first_conversion').text('PH Peso')
            break;

        case "sa_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('SA (Dinnar)')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_sa":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('SA (Dinnar)')
            $('#first_conversion').text('PH Peso')
            break;

        case "uk_to_peso":
            $('#hideDiv').css('display', 'block')
            $('#first_conversion').text('UK Pound')
            $('#second_conversion').text('PH Peso')
            break;

        case "peso_to_uk":
            $('#hideDiv').css('display', 'block')
            $('#second_conversion').text('UK Pound')
            $('#first_conversion').text('PH Peso')
            break;
        
        default:
            $('#hideDiv').css('display', 'none')
            break;
    }
}

function convertCurrency(){

    var selected_conversion = $('#selected_conversion').val()
    var first_val = $('#first_val').val()
    var comma_separted = "";
    var conversion = "";
    $('#converted_value').val()

    switch (selected_conversion) {
        case "us_to_peso":
            conversion = first_val * 53.67;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('US $'+ comma_separted + ' = PHP ' + conversion.toLocaleString('en-US'))
            break;

        case "peso_to_us":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.019;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = US $ '+ conversion.toLocaleString('en-US'))
            break;

        case "hk_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 6.84;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('HK $ ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_hk":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.15;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = HK $ '+ conversion.toLocaleString('en-US'))
            break;

        case "au_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 37.15;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('AU $ ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_au":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.027;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = AU $ '+ conversion.toLocaleString('en-US'))
            break;

        case "nz_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 33.98;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('NZ $ ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_nz":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.029;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = NZ $ '+ conversion.toLocaleString('en-US'))
            break;

        case "jp_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.41;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('JP YEN ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_jp":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 2.44;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = JP YEN '+ conversion.toLocaleString('en-US'))
            break;

        case "sa_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 14.30;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('SA (Dinnar) ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_sa":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.070;
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = SA (Dinnar) '+ conversion.toLocaleString('en-US'))
            break;

        case "uk_to_peso":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 64.69
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('UK Pound ' + comma_separted.toLocaleString('en-US') + ' = PHP '+ conversion.toLocaleString('en-US'))
            break;

        case "peso_to_uk":
            $('#hideDiv').css('display', 'block')
            conversion = first_val * 0.015
            comma_separted = first_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $('#second_val').text('PHP ' + comma_separted.toLocaleString('en-US') + ' = UK Pound '+ conversion.toLocaleString('en-US'))
            break;
        
        default:
            $('#hideDiv').css('display', 'none')
            break;
    }
    
}

function computeBMI(){

    var weight = $('#weight').val()
    var ft = $('#ft').val()
    var inch = $('#inch').val()
    var msg = document.querySelector('#msg1')
    var inches = 0;
    var height = 0;
    var bmi = 0;
    var weight_total = 0;
    var totalHeight = 0;
    let rounded = "";

    setTimeout(() => {
        $('#error1').remove()
    }, 3000);

    if(weight.trim() == ""){
        msg.innerHTML = '<div id="error1">Weight is required!</div>'
    }else if(ft.trim() == "" || inch.trim() == ""){
        msg.innerHTML = '<div id="error1">Height is required!</div>'
    }else{

        inches = ft * 12;
        height = parseInt(inches) + parseInt(inch)
        totalHeight = Math.pow(height, 2);
        weight_total = weight * 703;
        bmi = weight_total / totalHeight;
        rounded = Math.round(bmi*100) / 100;

        if(rounded < 18.5){
            $('#bmi').text('BMI(' + rounded + '). You are underweight ');
        }
        else if(rounded >= 18.5 && rounded <= 24.9){
            $('#bmi').text('BMI(' + rounded + '). You are normal rweight ');

        }else if(rounded >= 25 && rounded <= 29.9){
            $('#bmi').text('BMI(' + rounded + '). You are overweight ');
        }else if(rounded > 30){
            $('#bmi').text('BMI(' + rounded +'). You are obesity ');
        }

        
    }
}
