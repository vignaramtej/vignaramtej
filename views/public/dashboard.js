document.getElementById('increaseProgress').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Get the current progress percentage from the div
    let progressDiv = document.getElementById('progressPercentage');
    let currentProgress = parseInt(progressDiv.textContent);

    // Increment the progress (you can adjust this as needed)
    currentProgress += 10; // Increase by 10%

    // Update the progress in the UI
    progressDiv.textContent = currentProgress + '%';

    let newValue = currentProgress; 

    // Get the element with the style property
    let progressItem = document.querySelector('.item');
      
    // Update the style property
    progressItem.style.setProperty('--val', `${newValue}`);
      
    // Get the element with the class "value"
    let progressValue = progressItem.querySelector('.value');

    // Update the content of the element
    progressValue.textContent = `${newValue}%`;
});
  