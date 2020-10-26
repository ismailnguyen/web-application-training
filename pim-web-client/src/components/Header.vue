<template>
	<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item">
				<img src="../assets/logo.png">
			</a>

			<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<a class="navbar-item">
					<input class="input is-rounded" type="text" placeholder="Search" v-model="searchQuery">
				</a>
			</div>

			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<a class="button is-light">
							<strong>My account</strong>
						</a>
						<a class="button is-warning">
							Cart
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data: function () {
			return {
				searchQuery: ''
			}
		}
	}
</script>

<style>
	nav.navbar {
		border-top: .5rem solid #ffcb00;
	}
</style>
