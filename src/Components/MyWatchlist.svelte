<script>
    import { onMount } from 'svelte'
    import axios from 'axios'
    import FaCheckSquare from 'svelte-icons/fa/FaCheckSquare.svelte'
    let watchList = []
    let favorites = []

    onMount(async () => {
        const options = {
			method: "GET",
			url: "http://localhost:3000/api/movies",
		};
		axios.request(options)
		.then((res) => {
            console.log(res)
            watchList = res.data.watchList
		})
		.catch((err) => {
			console.log(err);
		});
    })
    onMount(async () => {
        const options = {
			method: "GET",
			url: "http://localhost:3000/api/favorites",
		};
		axios.request(options)
		.then((res) => {
            console.log(res)
            favorites = res.data.favorites
		})
		.catch((err) => {
			console.log(err);
		});
    })
    const updateMovieToWatched = (movie) => {
        console.log(movie)
        const options = {
			method: "PUT",
            url: `http://localhost:3000/api/updateList/${movie._id}`,
            data: {
                watched: !movie.watched
            }
		};
		axios.request(options)
		.then((res) => {
            console.log(res)
		})
		.catch((err) => {
			console.log(err);
		});

    };
</script>

<section class="card-wrapper">
    <div class="list-container">
        <h1 class="card-title">my watchlist</h1>
        <button>View All Watched</button>
        {#each watchList as movie}
            {#if !movie.watched}
                <div class="list-movie-item">
                    <img src="{movie.moviePoster}" height="100" alt={movie.title}/>
                    <div class="text">
                        <h4>{movie.title}</h4>
                        <div class="unchecked-icon" on:click={updateMovieToWatched(movie)}>
                            <FaCheckSquare/>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    <div class="fav-container">
        <h1 class="card-title">my favorites</h1>
        {#each favorites as movie}
            <div class="list-movie-item">
                <img src="{movie.moviePoster}" height="100" alt={movie.title}/>
                <div class="text">
                    <h4>{movie.title}</h4>
                    <div on:click={updateMovieToWatched(movie)}>
                        {#if movie.watched}
                        <div class="checked-icon">
                                <FaCheckSquare/>
                            </div>
                        {:else}
                            <div class="unchecked-icon">
                                <FaCheckSquare/>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>


<style>
	.card-wrapper {
        display: grid;
        margin: 0 20rem;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
        background-color: #262626;
        margin-top: 1rem;
        padding: 0 1rem;
        min-height: 100%;
	}
    .card-title {
        text-align: left;
        color: #2ec4b6;
        font-variant: small-caps;
        font-family: Raleway;
    }
    .list-container {
        text-align: left;
        color: #fdfffc;
        grid-column: 1 / 4;
		grid-row: 1 / 7;
    }
    .fav-container {
        grid-column: 5 / 8;

    }
    .list-movie-item {
        display: flex;
        flex-direction: row;
        border-radius: 5px;
        margin-bottom: 10px;
        color: #fdfffc;
        background-color: #454545;
    }
    .list-movie-item h4 {
        text-transform: lowercase;
        font-variant: small-caps;
        margin: 0;
    }
    .list-movie-item .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .list-movie-item img {
        padding-right: 2rem;
        border-radius: 5px 0 0 5px;
    }
    .unchecked-icon, .checked-icon {
        height: 30px;
    }
    .unchecked-icon:hover {
        color: #41db2a;
    }
    .checked-icon {
       color: #41db2a; 
    }
    .checked-icon:hover {
        color: #ffffff;
    }
</style>