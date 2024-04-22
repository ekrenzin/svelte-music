<script>
	export let size = `2.5`;
</script>

<div class='spinner' style='width: {size}rem; height: {size}rem;'/>

<style>
	@keyframes spinner {
		to {transform: rotate(360deg);}
	}
 
	.spinner {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 2.5rem;
		border: 2px solid #eee;
		border-top-color: #000;
		animation: spinner 1s linear infinite;
	}
</style>