function generateNumbers(amount) {

    var numbers = [];

    for(var i=0; i<amount; i++){
        numbers.push(parseInt(Math.random() * 100))
    }
    return numbers;
}

// This method of sorting numbers is called Selection Sort
// copied from: https://en.wikipedia.org/wiki/Selection_sort
function sortNumbers(array) {

    var i, j;

    /* advance the position through the entire array */
    /*   (could do j < n-1 because single element is also min element) */
    for (j = 0; j < array.length-1; j++) {

        /* assume the min is the first element */
        var iMin = j;

        /* test against elements after j to find the smallest */
        for (i = j+1; i < array.length; i++) {

            /* if this element is less, then it is the new minimum */
            if (array[i] < array[iMin]) {

                /* found new minimum; remember its index */
                iMin = i;
            }
        }

        // if numbers are not the same, we swap their position.
        // we have to temporarily create a help variable in other to swap them
        if(iMin != j) {
            var tmp = array[j];
            array[j] = array[iMin];
            array[iMin] = tmp;
        }
    }

    return array;
}


var numbers = generateNumbers(15);

// copy array (if you just say =numbers it just generates a reference to the
// original array and all you do with it you also do with the original)
var numbers2 = numbers.slice(0);

numbers2 = sortNumbers(numbers2);

console.log(numbers);
console.log(numbers2);

var sum = 0;
var most
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    document.getElementById('r'+i).innerHTML = numbers[i];
    document.getElementById('s'+i).innerHTML = numbers2[i];
}

document.getElementById('min').innerHTML = numbers2[0];
document.getElementById('max').innerHTML = numbers2[numbers2.length-1];
document.getElementById('avg').innerHTML = sum / numbers.length;
document.getElementById('avg').innerHTML = sum / numbers.length;

