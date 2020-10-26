<template>
	<div id="app">
		<Header />
		<Catalog />
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Catalog from './components/Catalog.vue'

	export default {
		name: 'App',
		components: {
			Header,
			Catalog
		}
	}
</script>
