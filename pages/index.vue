<script setup>
	useHead({
		title: "Pascal's Portfolio",
		htmlAttrs: {
			lang: 'en'
		}
	});

	const { locale } = useI18n()
</script>

<style></style>

<template>
	<TheNavigationSection />
	<main class="overflow-y-none">
		<TheIntroSection />
		<TheStorySection />
		<TheWorkSection/>
		<TheExperienceSection />
		<TheContactsSection />
	</main>
	<TheFooterSection />
</template>
