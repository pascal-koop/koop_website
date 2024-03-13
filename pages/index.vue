<script setup lang="ts">
	useSeoMeta({
		title: 'Pascal Koop',
		ogTitle: 'Pascal Koop',
		description:
			'Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.',
		ogDescription:
			'Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.'
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
