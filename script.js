document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        {
            title: "Inception",
            poster: "images/inception.jpeg",
            rating: 4.8,
            genre: "Sci-Fi, Thriller",
            cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
        },
        {
            title: "The Dark Knight",
            poster: "images/The_Dark_Knight.jpeg",
            rating: 4.9,
            genre: "Action, Crime, Drama",
            cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
        },
        {
            title: "Interstellar",
            poster: "images/interstellar.jpeg",
            rating: 4.9,
            genre: "Sci-Fi, Adventure",
            cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
            description: "A team of explorers must find a new habitable planet for mankind as Earth is dying."
        },
        {
            title: "Endgame",
            poster: "images/endgame.jpeg",
            rating: 4.8,
            genre: "Action, Adventure, Sci-Fi",
            cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
            description: "The Avengers assemble once more to undo the devastation caused by Thanos and save the universe."
        }
    ];

    const movieContainer = document.getElementById("movie-container");
    const modal = document.getElementById("movie-modal");
    const closeModal = document.getElementById("close-modal");

    // Function to display movies
    function displayMovies() {
        movies.forEach((movie) => {
            const movieCard = document.getElementById("movie-template").cloneNode(true);
            movieCard.style.display = "block";

            movieCard.querySelector(".movie-poster").src = movie.poster;
            movieCard.querySelector(".movie-title").textContent = movie.title;
            movieCard.querySelector(".movie-rating span").textContent = movie.rating;

            // Add event listener to open modal when clicking the poster
            movieCard.querySelector(".movie-poster").addEventListener("click", () => {
                openModal(movie);
            });

            movieContainer.appendChild(movieCard);
        });
    }

    // Function to open the modal and show detailed movie information
    function openModal(movie) {
        document.getElementById("modal-title").textContent = movie.title;
        document.getElementById("modal-poster").src = movie.poster;
        document.getElementById("modal-description").textContent = movie.description;
        document.getElementById("modal-genre").textContent = movie.genre;
        document.getElementById("modal-cast").textContent = movie.cast;
        document.getElementById("modal-rating").textContent = movie.rating;

        modal.style.display = "block"; // Show the modal
    }

    // Close the modal when clicking the "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks anywhere outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Call the function to display the movies
    displayMovies();
});