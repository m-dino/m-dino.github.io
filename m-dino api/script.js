document.addEventListener('DOMContentLoaded', function() {
    const breedSelect = document.getElementById('breedSelect');
    const getDogButton = document.getElementById('getDog');
    const dogImageContainer = document.getElementById('dogImageContainer');

    // Fetch the list of dog breeds and populate the dropdown
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const option = document.createElement('option');
                option.value = breed;
                option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
                breedSelect.appendChild(option);
            });
        });

    // Event listener to get the dog image when button is clicked
    getDogButton.addEventListener('click', function() {
        const selectedBreed = breedSelect.value;
        if (selectedBreed) {
            fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
                .then(response => response.json())
                .then(data => {
                    const imageUrl = data.message;
                    dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="${selectedBreed}" class="dog-image">`;
                });
        } else {
            alert('Please select a breed first!');
        }
    });
});
