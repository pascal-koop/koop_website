<script setup>
	useHead({
		title: "Pascal's Portfolio",
		htmlAttrs: {
			lang: 'en'
		}
	});
</script>

<style></style>

<template>
	<TheNavigationSection />
	<main class="overflow-y-none">
		<TheIntroSection />
		<TheStorySection />
		<TheWorkSection/>
		<TheSkillsSection />
	</main>
</template>
