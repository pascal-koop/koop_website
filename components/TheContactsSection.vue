<script setup lang="ts">
	type ContactLink = {
		name: string;
		to: string;
		target?: string;
	};


	const contactLinks: ContactLink[] = [
		{ name: 'E-MAIL', to: 'mailto:pascale.koop@live.com'},
		{ name: 'LINKEDIN', to: 'https://www.linkedin.com/in/pascal-koop-343b25207/', target: '_blank'  },
		{ name: 'GITHUB', to: 'https://github.com/Pascale-Cheddar', target: '_blank'}
	];
</script>

<style></style>

<template>
	<footer
		id="contacts-section"
		class="contacts mx-5 mb-2">
		<!-- <h2 class="title mt-24">CONTACTS</h2> -->
		<div class="contacts-content mt-14 flex flex-row flex-wrap justify-center">
			<button
				v-for="link in contactLinks"
				:key="link.name"
				class="contact-btn mx-3">
				<NuxtLink
					:to="link.to"
          :target="link.target"
					class="contact-links font-neueRegrade text-pretty text-2xl font-semibold"
					>{{ link.name }}
				</NuxtLink>
			</button>
		</div>
	</footer>
</template>
