<script setup>
	const links = [
		{ name: 'STORY', to: '#story-section' },
		{ name: 'WORKS', to: '#works-section' },
		{ name: 'EXPERIENCE', to: '#experience-section' },
		{ name: 'CONTACTS', to: '#contacts-section' }
	];
	const openMenu = ref(false);

	const toggleMenu = () => {
		openMenu.value = !openMenu.value;
	};
</script>

<style></style>

<template>
	<nav class="nav">
		<div class="nav-logo">
			<h1 class="nav-logo-title">
				<NuxtLink to="/"> KOOP PASCAL </NuxtLink>
			</h1>
		</div>
		<div
			class="hamburger"
			@click="toggleMenu"
			:class="{ active: openMenu }">
			<div class="hamburger-line line-1"></div>
			<div class="hamburger-line line-2"></div>
			<div class="hamburger-line line-3"></div>
		</div>
		<!-- desktop nav -->
		<div class="desktop-nav-links hidden md:flex">
			<ul class="desktop-nav-link-list">
				<li
					v-for="link in links"
					:key="link.name"
					class="desktop-nav-list-item">
					<NuxtLink
						:to="link.to"
						class="desktop-nav-link">
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
		<!-- mobile-nav  -->
		<div
			class="mobile-nav"
			:class="{ active: openMenu }">
			<ul class="mobile-nav-link-list">
				<li
					v-for="link in links"
					:key="link.name"
					class="mobile-nav-list-item">
					<NuxtLink
						:to="link.to"
						class="mobile-nav-link">
						{{ link.name }}
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
