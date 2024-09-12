//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort

var beep = new Audio('beep3.mp3')
var mouseclick = new Audio('Mouseclick.mp3')
var done = new Audio('wrong.mp3')
const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   mouseclick.play()
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   done.play();
   // enableSortingBtn();
   // enableSizeSlider();
   enableNewArrayBtn();

});



async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('.language-java')
   // console.log(code.innerHTML)
   code.innerHTML = `/* C++ program for Merge Sort */
   #include <iostream>
using namespace std;

// Function to merge two sub-arrays of arr[]
// First sub-array is arr[low..mid]
// Second sub-array is arr[mid+1..high]
void merge(int arr[], int low, int mid, int high) {
    int n1 = mid - low + 1; // Size of the first sub-array
    int n2 = high - mid;    // Size of the second sub-array

    // Create temporary arrays
    int* left = new int[n1];
    int* right = new int[n2];

    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        left[i] = arr[low + i];
    for (int j = 0; j < n2; j++)
        right[j] = arr[mid + 1 + j];

    // Merge the temporary arrays back into arr[]
    int i = 0; // Initial index of the first sub-array
    int j = 0; // Initial index of the second sub-array
    int k = low; // Initial index of merged sub-array

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of left[], if any
    while (i < n1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    // Copy the remaining elements of right[], if any
    while (j < n2) {
        arr[k] = right[j];
        j++;
        k++;
    }

    // Free the allocated memory for temporary arrays
    delete[] left;
    delete[] right;
}

// Function to sort an array using merge sort
void mergeSort(int arr[], int low, int high) {
    if (low < high) {
        // Find the middle point
        int mid = low + (high - low) / 2;

        // Recursively sort the first and second halves
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);

        // Merge the sorted halves
        merge(arr, low, mid, high);
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
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    mergeSort(arr, 0, n - 1);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}
`
   const time = document.querySelector('#time')
   time.innerHTML = `Time Complexity: O(N log(N)),  
   Sorting arrays on different machines. 
   Merge Sort is a recursive algorithm and 
   time complexity can be expressed as following 
   recurrence relation. 

   T(n) = 2T(n/2) + θ(n)
`

   const space = document.querySelector('#space')
   space.innerHTML = `Auxiliary Space: O(n), 
   In merge sort all elements are copied into 
   an auxiliary array. 
   So N auxiliary space is required for merge sort.`

}









//Divide

async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;

   }
   const middle = si + Math.floor((ei - si) / 2);
   await MergeSort(element, si, middle);
   await MergeSort(element, middle + 1, ei);

   await Merge(element, si, middle, ei);          // si--> starting index and ei --> ending index

}

//Conquer

async function Merge(element, low, mid, high) {


   const a1 = mid - low + 1;
   const a2 = high - mid;
   let left = new Array(a1);
   let right = new Array(a2);

   for (let i = 0; i < a1; i++) {
      await waitforme(delay);
      beep.play();
      element[low + i].style.background = 'red';
      left[i] = element[low + i].style.height;


   }


   for (let i = 0; i < a2; i++) {
      await waitforme(delay);
      beep.play();
      element[mid + 1 + i].style.background = 'yellow';
      right[i] = element[mid + 1 + i].style.height;
   }
   await waitforme(delay);



   let i = 0, j = 0, k = low;
   while (i < a1 && j < a2) {
      beep.play();
      await waitforme(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }

         else {
            element[k].style.background = 'lightgreen';



         }

         element[k].style.height = left[i];

         i++;
         k++;

      }

      else {
         if ((a1 + a2) === element.length) {
            element[k].style.background = 'rgb(0,255,0)';
         }
         else {
            element[k].style.background = 'lightgreen';
         }

         element[k].style.height = right[j];
         j++;
         k++;
      }

   }
   while (i < a1) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }
      element[k].style.height = left[i];
      i++;
      k++;
   }

   while (j < a2) {
      beep.play();
      await waitforme(delay);
      if ((a1 + a2) === element.length) {
         element[k].style.background = 'rgb(0,255,0)';
      }
      else {
         element[k].style.background = 'lightgreen';

      }

      element[k].style.height = right[j];
      j++;
      k++;
   }

}

