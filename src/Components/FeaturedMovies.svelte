<script>
    let title = "Home";
    let movies = [];
    import axios from "axios";
    // import Icon from 'svelte-awesome';
    // import { star } from 'svelte-awesome/icons';
    // import { faHeart } from '@fortawesome/free-regular-svg-icons';

	// const headers = {
	// 	"x-rapidapi-key": "924e4f502bmsh6d9fa994c57e206p17cf1ejsn010fe7bcd498",
	// 	"x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
	// }
	const apiRequest = (method) => {
		const options = {
			method: method,
			url: "https://api.themoviedb.org/3/movie/popular?api_key=122cb5fa006839351612caa3df4aa718",
			// headers: headers
		};
		axios.request(options)
		.then((res) => {
            console.log(res);
            movies = res.data.results;
            console.log(movies)
		})
		.catch((err) => {
			console.log(err);
		});
	};
	async function getResult() {
		await apiRequest("get");
	}
	// getResult();
</script>

<section class="card-wrapper">
    <h1 class="card-title">trending movies</h1>
    <div class="movie-grid">
        {#each movies as movie}
            <div class="movie-item">
                <div class="img-container">
                    <img class="fav" src="https://image.tmdb.org/t/p/w500{movie.poster_path}" height="200" alt="{movie.title}">
                    <!-- <div class="heart-icon">
                        <Icon style="position: absolute; top:5; left:5; font-size: 14px" data={star}/>
                    </div> -->
                </div>
                <small>{movie.title}</small>
            </div>
	    {/each}
    </div>
</section>


<style>
	.card-wrapper {
		grid-column: 1 / 4;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
		background-color: #262626;
        margin-bottom: 2rem;
	}
    .card-title {
        text-align: left;
        padding-left: 1rem;
        color: #fdfffc;
        font-variant: small-caps;
        font-family: Raleway;
    }
    .movie-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
		grid-auto-rows: minmax(100px, auto);
        padding: 1rem
    }
    .movie-item {
        transition: .5s ease;
    }
    .movie-item:hover {
        transform: scale(1.08);
        cursor: pointer;
    }
    .movie-item small {
        color: #fdfffc;
        margin-top: 10px;
        text-transform: uppercase;
    }
    .img-container { 
        position: relative;
    }
    .img-container img {
        display: block;
    }
    .img-container .heart-icon {
        color: gold;
    }
    img:hover {
        background-color: aqua;
    }
    .fav {
        /* border: 3px solid #2ec4b6; */
    }
</style>