<script setup lang="ts">
	const scrollPosition = ref<number>(0);
	const lastScrollTop = ref<number>(0);
	const SCROLL_THRESHOLD = 100;
	const IMAGE_OPACITY_FADE_RATE = 375;

	const currentText = computed(() => {
		if (window.innerWidth < 768) return 'frontend';
		if (scrollPosition.value > 180) return 'software';
		if (scrollPosition.value > 80) return 'web';
		return 'frontend';
	});

	const imageOpacity = computed<number>(() => {
		const opacity = Math.max(0, 1 - scrollPosition.value / IMAGE_OPACITY_FADE_RATE);
		return opacity;
	});
	const userIsScrolling = useState<boolean>('userIsScrolling');

	const handleScroll = (): void => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		scrollPosition.value = scrollTop;
		lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop;
		scrollPosition.value > SCROLL_THRESHOLD ? (userIsScrolling.value = true) : (userIsScrolling.value = false);
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});
	const currentYear = new Date().getFullYear();
</script>

<style scoped>
.text-transition {
  transition: opacity 0.5s ease-in-out;
}

.text-hidden {
  opacity: 0;
  pointer-events: none;
}

.text-visible {
  opacity: 1;
}

.text-container {
  position: relative;
  display: inline-block;
}

.absolute-text {
  position: absolute;
  left: 0;
  top: 0;
}



</style>

<template>
	<section
		id="intro-section"
		class="px-10 bg-bgdark h-[100vh]">
		<h1
			:style="{ transform: `translateY(${-scrollPosition}px)` }"
			class="text-textLight text-2xl md:text-4xl font-neueRegrade font-medium pt-6 inline-block mr-7 md:mr-60"
			>Pascal Koop</h1
		>
		<p
			:style="{ transform: `translateY(${-scrollPosition}px)` }"
			class=" inline-block text-textLight text-2xl md:text-3xl font-neueRegrade font-medium"
			>{{ currentYear }}</p
		>
		<div class="h-svh flex items-center justify-center">
			<div class="absolute p-1 md:pl-0 md:mt-6 md:flex md:flex-col introduction-content md:gap-7">
				<h1
					:style="{ transform: `translateX(${scrollPosition}px)` }"
					class=" z-10 text-5xl md:text-7xl title text-textLight font-neueRegrade font-bold uppercase">
					<div class="text-container">
						<span :class="['text-transition', currentText === 'frontend' ? 'text-visible' : 'text-hidden']">front <span class="md:ml-48 z-10">-end</span></span>
						<span :class="['text-transition absolute-text', currentText === 'web' ? 'text-visible' : 'text-hidden']">web</span>
						<span  :class="['text-transition absolute-text', currentText === 'software' ? 'text-visible software ' : 'text-hidden']">personal</span>
					</div>
				</h1>
				<h1
					:style="{ transform: `translateX(${-scrollPosition}px)` }"

					class="z-10 text-5xl md:text-7xl font-neueRegrade font-bold title text-textLight top-6 md:self-end uppercase">
					<span v-if="currentText === 'frontend' || currentText === 'web'">developer</span>
					<span v-if="currentText === 'software'" :class="[currentText === 'software' ? 'text-visible software' : 'text-hidden']">development</span>
				</h1>
				<NuxtImg
					class="absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-[54%] z-1 hidden md:block rounded-lg"
					:style="{ opacity: imageOpacity }"
					height="592"
					width="350"
					sizes="md:592px lg:592px xl:592px"
					src="/intro-image2.webp"
					format="webp"
					alt="desktop intro image" />
				<NuxtImg
					class="z-1 rounded-lg mt-12 md:hidden mx-auto"
					:style="{ opacity: imageOpacity }"
					height="284"
					width="305"
					sizes="sm:284px"
					src="/intro-image-mobile.webp"
					format="webp"
					alt="desktop intro image" />
			</div>

		</div>
	</section>
</template>
