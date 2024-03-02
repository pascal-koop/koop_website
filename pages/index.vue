<script setup lang="ts">

	useSeoMeta({
		title: 'Pascal Koop',
		ogTitle: 'Pascal Koop',
		description:
			'Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.',
		ogDescription:
			'Pascal Koop is a web developer from Germany. He creates modern and responsive websites with a focus on performance and accessibility.',

	});
	useHead({
		htmlAttrs: {
			lang: 'en'
		}
	});

	const { locale } = useI18n();
</script>

<style></style>

<template>
	<TheNavigationSection />
	<main class="overflow-y-none">
		<TheIntroSection />
		<TheStorySection />
		<TheWorkSection />
		<TheExperienceSection />
		<TheContactsSection />
	</main>
	<TheFooterSection />
</template>
