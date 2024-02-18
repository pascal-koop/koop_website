<script setup>
	const links = [
		{ name: 'STORY', to: '#story-section', number: 'link-1' },
		{ name: 'WORKS', to: '#works-section', number: 'link-2' },
		{ name: 'EXPERIENCE', to: '#experience-section', number: 'link-3' },
		{ name: 'CONTACTS', to: '#contacts-section', number: 'link-4' }
	];
	const openMenu = ref(false);

	const toggleMenu = () => {
		openMenu.value = !openMenu.value;
	};

	const scrollUp = () => {
		openMenu.value = false;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<style></style>

<template>
	<nav class="nav">
		<div class="nav-logo">
			<h1 class="nav-logo-title">
				<NuxtLink @click="scrollUp" to="/"> KOOP PASCAL </NuxtLink>
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
						@click="toggleMenu"
						:to="link.to"
						:class="{ active: openMenu }"
						class="mobile-nav-link">
						{{ link.name }}
					</NuxtLink>
				</li>
				<li class="mobile-nav-link-internationalization">
					<nuxt-link
						to="/en"
						:class="{ active: openMenu }"
						class="mobile-nav-link">
						<span>EN&nbsp;/</span>
					</nuxt-link>

					<nuxt-link
						to="/de"
						:class="{ active: openMenu }"
						class="mobile-nav-link">
						<span>&nbsp;DE</span>
					</nuxt-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
