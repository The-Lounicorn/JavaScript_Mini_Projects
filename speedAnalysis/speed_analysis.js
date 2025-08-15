let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
// Set the test text
document.getElementById("inputText").value = testText;

// Reset user input and output
let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

document.getElementById("output").innerHTML = "";

// Start timer
startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Count words
    var typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    // Count characters
    var charCount = userTypedText.length;

    // Calculate WPM
    var wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Characters Typed: " + charCount + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
}
