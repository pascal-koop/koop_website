<script setup lang="ts">
	const scrollPosition = ref<number>(0);
	const lastScrollTop = ref<number>(0);
	const SCROLL_THRESHOLD = 100;
	const IMAGE_OPACITY_FADE_RATE = 375;
	const imageOpacity = computed<number>(() => {
		const opacity = Math.max(0, 1 - scrollPosition.value / IMAGE_OPACITY_FADE_RATE);
		return opacity;
	});
	const userIsScrolling = useState<boolean>('userIsScrolling');

	const handleScroll = (): void => {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		scrollPosition.value = scrollTop; // Update the scroll position
		lastScrollTop.value = scrollTop <= 0 ? 0 : scrollTop; // Update the last scroll position
		scrollPosition.value > SCROLL_THRESHOLD ? (userIsScrolling.value = true) : (userIsScrolling.value = false);
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<style></style>

<template>
	<section
		id="intro-section"
		class="px-10 bg-bgdark h-[100vh] rounded-b-lg">
		<h1
			:style="{ transform: `translateY(${-scrollPosition}px)` }"
			class="text-textLight text-2xl md:text-4xl font-neueRegrade font-medium pt-6 inline-block mr-7 md:mr-60"
			>Pascal Koop</h1
		>
		<p
			:style="{ transform: `translateY(${-scrollPosition}px)` }"
			class="inline-block text-textLight text-2xl md:text-3xl font-neueRegrade font-medium"
			>2024</p
		>
		<div class="flex justify-center items-center md:justify-end pt-48 md:pt-80">
			<div class="absolute mt-6 flex flex-col introduction-content gap-7">
				<h1
					:style="{ transform: `translateX(${scrollPosition}px)` }"
					class="z-10 text-5xl md:text-7xl title text-textLight font-neueRegrade font-bold uppercase">
					front <span class="md:ml-48 z-10">-end</span>
				</h1>
				<h1
					:style="{ transform: `translateX(${-scrollPosition}px)` }"
					class="z-10 text-5xl md:text-7xl font-neueRegrade font-bold title text-textLight md:self-end uppercase">
					developer
				</h1>
				<img
					class="absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-[54%] z-1 block rounded-lg "
					:style="{ opacity: imageOpacity }"
					fetchpriority="high"
					height="500"
					width="350"
					src="/intro-image2.webp"
					format="webp"
					alt="desktop intro image" />
			</div>

		</div>
	</section>
</template>
