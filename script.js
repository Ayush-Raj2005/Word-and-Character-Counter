//Select the textarea and output elements
const textInput=document.getElementById('textInput');
const wordCountDisplay =document.getElementById('wordCount');
const charCountDisplay =document.getElementById('charCount');

//Function to count words and characters
function updateCounts(){
    const text =textInput.value;

    //Count characters(including spaces)
    const charCount =text.length;

    //Count words (split by spaces ,filter out empty strings)
    const words =text.trim().split(/\s+/);
    const wordCount=text.trim()=== ''?0:words.length;

    //update the DOM with Counts 
    wordCountDisplay.textContent=wordCount;
    charCountDisplay.textContent= charCount;
}

//Add Event listener to update count in real time
textInput.addEventListener('input',updateCounts);

