<template>
	<div>
		<Loader v-if="showLoader" />

		<section class="section">
			<div class="container">
				<div class="columns is-mobile is-multiline is-centered">
					<div class="column is-one-third-desktop is-half-tablet is-full-mobile" v-for="(product, index) in productList" :key="index">
						<div class="card">
							<div class="card-image">			
								<img :src="product.image" :alt="product.sku" class="lazyload">
							</div>
							<div class="card-content">
								<p class="product--type">{{ product.type }}</p>	
								<p class="title">{{ product.sku }}</p>
								<p class="subtitle">Ref. {{ product.sku }}</p>
								<span class="btn--primary is-clickable">VIEW DETAILS</span>	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Loader from './Loader.vue'
	const PRODUCT_LIST_API_URL = 'http://localhost:8000/api/products';

	export default {
		data: function () {
			return {
				productList: []
			}
		},
		components: {
			Loader
		},
		mounted () {
			this.fetchProductList(PRODUCT_LIST_API_URL)
		},
		methods: {
			fetchProductList: function (apiUrl) {
				fetch (apiUrl)
				.then(response => response.json())
				.then(productList => this.productList = productList.slice(0,10).map(product => this.mapProduct(product)))
			},
			
			mapProduct: function (product) {
				return {
					name: product.sku,
					sku: product.sku,
					type: product.segment.description,
					image: product.image.replace("'", "")
				}
			}
		},
		computed: {
			showLoader: function () {
				return this.productList.length == 0
			}
		}
	}
</script>

<style scoped>
	.product--type {
		background-color: #f2f2f2;
		border-radius: 5px;
		text-align: center;
		width: 30%;
		font-size: small;
		margin-bottom: 15px;
	}
	
	.btn--primary {
		display: inline-block;
		border: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: .75rem .5rem;
		min-width: 7.25rem;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 700;
		background-color: #ffcb00;
		color: #001022;
	}

	.card .card-image {
		background-color: #f2f2f2;
		text-align: center;
	}

	.card .card-content .subtitle {
		color: grey;
		font-size: small;
	}
</style>
