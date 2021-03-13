<script>
    import { onMount } from 'svelte'
    import axios from 'axios'
    import FaCheckSquare from 'svelte-icons/fa/FaCheckSquare.svelte'
    let watchList = []

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
</script>

<section class="card-wrapper">
    <div class="list-container">
        <h1 class="card-title">my watchlist</h1>
        {#each watchList as movie}
            <div class="list-movie-item">
                <img src="{movie.moviePoster}" height="100" alt={movie.title}/>
                <div class="text">
                    <h4>{movie.title}</h4>
                    <div class="icon">
                        <FaCheckSquare />
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>


<style>
	.card-wrapper {
		grid-column: 6 / 8;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
		background-color: #262626;
        padding: 0 1rem;
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
    }
    .list-movie-item {
        display: flex;
        flex-direction: row;
        justify-content: center;
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
    .list-movie-item .icon {
        height: 30px;
    }
    .year {
        opacity: .3;
    }
</style>