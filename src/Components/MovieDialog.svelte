<script>
    export let movie;
    import FaStar from 'svelte-icons/fa/FaStar.svelte'
    import axios from "axios";

    let selectedMovie;
    const addToWatchList = () => {
        selectedMovie = movie;
        const options = {
			method: "POST",
            url: "http://localhost:3000/api/addList",
            data: {
                title: selectedMovie.title,
                img: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
                dateReleased: selectedMovie.release_date
            }
		};
		axios.request(options)
		.then((res) => {
            console.log(res)
            watchList = res.data.watchList
		})
		.catch((err) => {
			console.log(err);
		});

    };
</script>
<section class="dialog-container">
    <div class="img-container">
        <img class="fav" src="https://image.tmdb.org/t/p/w500{movie.poster_path}" height="400" alt="{movie.title}">
    </div>
    <div class="movie-details">
        <h2>{movie.title}</h2>
        <p style="font-size: 12px"><i>{movie.overview}</i></p>
        <p>{movie.release_date}</p>
        <div class="rating-row">
            <p>{movie.vote_average}/10</p>
            <div class="gold-star"><FaStar/></div>
        </div>
        <button on:click={addToWatchList}>add to watchlist</button>
    </div>

</section>
<style>
    .dialog-container {
        display: flex;
        justify-content: flex-start;
    }
    .movie-details {
        padding-left: 2rem;
        text-align: left;
    }
    .movie-details button {
        font-variant: small-caps;
        color: #ffffff;
        background-color: #2ec4b6;
        border-radius: 5px;
        border: 2px solid #011627;
    }
     .movie-details button:hover {
        color: #ffffff;
        background-color: #011627;
        border: 2px solid #2ec4b6;
    }
    .add-icon {
        height: 20px;
    }
    .rating-row {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        text-align: left;
        align-items: center;
    }
    .gold-star {
        height: 30px;
        color: #ffd700;
        width: 30px;
        padding-left: 8px;
    }
</style>