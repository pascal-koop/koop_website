<script setup lang="ts">
	useSeoMeta({
		title: 'Pascal Koop',
		ogTitle: 'Pascal Koop',
		description:
			'Explore the Portfolio of Pascal Koop. Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.',
		ogDescription:
			'Explore the Portfolio of Pascal Koop. Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.',
		author: 'Pascal Koop',
	});
	useHead({
		htmlAttrs: {
			lang: 'en'
		}
	});
	const { isDesktop, isMobileOrTablet } = useDevice();
	const userIsScrolling = computed(() => useState('userIsScrolling'));
</script>

<style></style>

<template>
	<TheNavigationSection v-if="isMobileOrTablet" />
	<TheNavigationSection v-if="userIsScrolling.value && isDesktop" />
	<main class="overflow-y-none">
		<DesktopIntro v-if="isDesktop" />
		<TheIntroSection v-else />
		<TheStorySection />
		<TheWorkSection />
		<TheExperienceSection />
		<TheContactsSection />
	</main>
	<TheFooterSection />
</template>
