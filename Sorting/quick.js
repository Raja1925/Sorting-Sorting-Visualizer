var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')


const QuickSortbutton = document.querySelector(".QuickSort");
QuickSortbutton.addEventListener('click', async function () {
    selectText.innerHTML = `Quick Sort..`
    mouseclick.play()
    const description = document.querySelector('#description')
    description.style.display = 'flex'
    const section = document.querySelector('#fullbody')
    section.style.height = '184vh'
    await descriptionText_quick()
    let element = document.querySelectorAll('.bar');
    let low = 0;
    let high = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(element, low, high);
    selectText.innerHTML=`Sorting Complete!`
    done.play();
    // enableSortingBtn();
    // enableSizeSlider();
    enableNewArrayBtn();
});




async function descriptionText_quick() {
    const section = document.querySelector('#fullbody')
    section.style.height = `184vh`

    const description = document.querySelector('#description')
    description.style.display = 'flex'

    const code = document.querySelector('#code_cpp')
    // console.log(code.innerHTML)
    code.innerHTML = `// C++ implementation of QuickSort
    #include <iostream>
using namespace std;

// Function to swap two elements
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Partition function for quick sort
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Pivot element
    int i = (low - 1);     // Index of the smaller element

    for (int j = low; j <= high - 1; j++) {
        // If current element is smaller than or equal to the pivot
        if (arr[j] <= pivot) {
            i++; // Increment index of the smaller element
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

// Quick sort function
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // Partition the array into two sub-arrays
        int pi = partition(arr, low, high);

        // Recursively sort the sub-arrays
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Function to print the array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}
`

    const time = document.querySelector('#time')
    time.innerHTML = `
Worst Case: The worst case occurs when the partition
    process always picks the greatest or smallest element 
    as the pivot.
    If we consider the above partition strategy where the 
    last element is always picked as a pivot, the worst case 
    would occur when the array is already sorted in increasing 
    or decreasing order. 

Best Case:
    The best case occurs when the partition process always picks 
    the middle element as the pivot. 

Average Case: 
    To do average case analysis, we need to consider all possible 
    permutation of array and calculate time taken by every 
    permutation which doesn’t look easy. 
    We can get an idea of average case by considering the case when 
    partition puts O(n/9) elements in one set and O(9n/10) elements 
    in other set. 

`

    const space = document.querySelector('#space')
    space.innerHTML = `Space cmplexity : O(N)

    as we are not creating any container other then given array 
    therefore Space complexity will be in order of N
     `
}


async function partition(element, low, high) {
    beep.play();
    let i = low - 1;
    element[high].style.background = 'red';
    for (let j = low; j <= high - 1; j++) {
        beep.play();
        element[j].style.background = 'yellow';
        await waitforme(delay);

        if (parseInt(element[j].style.height) < parseInt(element[high].style.height)) {
            beep.play();
            i++;
            swapping(element[i], element[j]);

            element[i].style.background = 'orange';
            if (i != j) element[j].style.background = 'orange';

            await waitforme(delay);
        }
        else {
            beep.play();
            element[j].style.background = 'pink';
        }
    }
    i++;

    await waitforme(delay);
    swapping(element[i], element[high]);

    element[high].style.background = 'pink';
    element[i].style.background = 'green';
    element[i].style.color = 'white';


    await waitforme(delay);


    for (let k = 0; k < element.length; k++) {
        beep.play();
        if (element[k].style.background != 'green')
            element[k].style.background = 'cyan';
    }

    return i;
}



async function quickSort(element, low, high) {
    if (low < high) {
        beep.play();
        let pivot_index = await partition(element, low, high);
        await quickSort(element, low, pivot_index - 1);
        await quickSort(element, pivot_index + 1, high);
    }
    else {

        if (low >= 0 && high >= 0 && low < element.length && high < element.length) {
            beep.play();
            element[high].style.background = 'green';
            element[low].style.background = 'green';
            element[high].style.color = 'white';
            element[low].style.color = 'white';
        }
    }
}