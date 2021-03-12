<script>
	let title = 'Home';
	import Nav from './Components/Nav.svelte';
	import FeaturedMovies from './Components/FeaturedMovies.svelte';
	import Watchlist from './Components/Watchlist.svelte';
</script>

<main>
	<head>
		<title>{title}</title>
	</head>
	<Nav />
	<div class="wrapper">
		<FeaturedMovies/>
		<Watchlist/>
	</div>
</main>

<style>
	body {
	}
	main {
		text-align: center;
		max-width: 240px;
		background-color: #011627;
		min-height: 100%;
		
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
		margin: 1rem 3rem 2rem 3rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>