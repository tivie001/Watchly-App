<script>
    import { onMount } from 'svelte'
    import axios from 'axios'
 
    let movies = []

    onMount(async () => {
        const options = {
			method: "GET",
			url: "http://localhost:3000/api/movies"
		};
		axios.request(options)
		.then((res) => {
            console.log(res)
            movies = res.data.movies
		})
		.catch((err) => {
			console.log(err);
		});
    })
</script>

<section class="card-wrapper">
    <h1 class="card-title">watchlist</h1>
    {#each movies as movie, i}
	<h3>{movie.title}</h3>
{/each}
</section>


<style>
	.card-wrapper {
		grid-column: 4 / 6;
		grid-row: 1 / 7;
		border-radius: 5px;
		box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 0.9);
		background-color: #262626;
	}
    .card-title {
        text-align: left;
        padding-left: 1rem;
        color: #fdfffc;
        font-variant: small-caps;
        font-family: Raleway;
    }
</style>