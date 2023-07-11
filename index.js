function rate(rating) {
    selectedRating = rating

    const numberRate = document.getElementsByClassName('rate');
    for (let i=0; i< rate.length; i++) {
        if (i < rating) {
            rate[i].classList.add('selected');
        } else {
            rate[i].classList.remove('selected')
        }

        }
    }




    function submitRating() {
        const reviewMessage = document.getElementById('reviewMessage').value;
      
        if (selectedRating === 0) {
          alert('Please select a rating before submitting.');
          return;
        }
      
        // Display the selected rating and review message
        document.getElementById('result').textContent = `You rated: ${selectedRating} rate\nReview: ${reviewMessage}`;
      }