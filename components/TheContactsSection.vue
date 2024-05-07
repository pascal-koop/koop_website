<script setup lang="ts">
	import useIntersectionObserver from '~/composable/useIntersectionObserver';
	const contactsSection = ref();
	type ContactLink = {
		name: string;
		to: string;
		target?: string;
	};

	const contactLinks: ContactLink[] = [
		{ name: 'E-MAIL', to: 'mailto:pascale.koop@live.com' },
		{
			name: 'LINKEDIN',
			to: 'https://www.linkedin.com/in/pascal-koop-343b25207/',
			target: '_blank'
		},
		{ name: 'GITHUB', to: 'https://github.com/pascal-koop', target: '_blank' }
	];

	const { observeElement } = useIntersectionObserver();
	onMounted(() => {
		observeElement(contactsSection.value, 'animate__fadeInUp', 0.7);
	});
</script>

<style></style>

<template>
	<section
		id="contacts-section"
		class="contacts mx-5 2xl:mx-0 mb-2 mt-24">
		<h2 class="section-title">{{ $t('sectionTitles.contacts') }}</h2>
		<div ref="contactsSection" class="contacts-content my-4 flex flex-col lg:flex-row justify-center">
			<button
				v-for="link in contactLinks"
				:key="link.name"
				class="contact-btn mx-3 mt-4 transition-all duration-300 ease-in hover:-translate-y-1 hover:-translate-x-1">
				<NuxtLink
					:to="link.to"
					:target="link.target"
					class="contact-links font-neueRegrade text-pretty text-2xl font-medium"
					>{{ link.name }}
				</NuxtLink>
			</button>
		</div>
	</section>
</template>
