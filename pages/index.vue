<script setup lang="ts">
	useSeoMeta({
		title: 'Pascal Koop',
		description:
			'Explore the Portfolio of Pascal Koop. Pascal Koop is a web developer from Germany. He creates modern and responsive websites.',
		author: 'Pascal Koop'
	});
	useHead({
		htmlAttrs: {
			lang: 'en'
		}
	});
	const { isDesktop, isMobileOrTablet } = useDevice();
	const userIsScrolling = computed(() => useState('userIsScrolling'));
</script>
<style>
	.desktop-nav-leave-active {
		@apply opacity-0 transition-all duration-300 ease-in;
	}

	.desktop-nav-enter-active {
		@apply animate-slideInFromTop;
	}
</style>

<template>
	<TheNavigationSection v-if="isMobileOrTablet" />
	<Transition name="desktop-nav">
		<TheNavigationSection v-if="userIsScrolling.value && isDesktop" />
	</Transition>
	<main class="overflow-x-hidden relative z-[1]">
		<DesktopIntro v-if="isDesktop" />
		<TheIntroSection v-else />
		<TheStorySection />
		<TheWorkSection />
		<TheExperienceSection />
		<TheContactsSection />
	</main>
	<TheFooterSection />
</template>
