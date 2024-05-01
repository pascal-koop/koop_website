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
		class="px-10 bg-bgdark h-[100vh]">
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
		<div class="h-svh flex items-center justify-center md:justify-end">
			<div class="absolute p-1 md:pl-0 md:mt-6 md:flex md:flex-col introduction-content md:gap-7">
				<h1
					:style="{ transform: `translateX(${scrollPosition}px)` }"
					class="z-10 text-5xl md:text-7xl title text-textLight font-neueRegrade font-bold uppercase ">
					front <span class="md:ml-48 z-10">-end</span>
				</h1>
				<h1
					:style="{ transform: `translateX(${-scrollPosition}px)` }"

					class="z-10 text-5xl md:text-7xl font-neueRegrade font-bold title text-textLight top-6 md:self-end uppercase">
					developer
				</h1>
				<NuxtImg
					class="absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-[54%] z-1 hidden md:block rounded-lg"
					:style="{ opacity: imageOpacity }"
					height="592"
					width="350"
					sizes="lg:592px md:520px"
					src="/intro-image2.webp"
					format="webp"
					alt="desktop intro image" />
				<NuxtImg
					class="z-1 rounded-lg mt-12 md:hidden mx-auto"
					:style="{ opacity: imageOpacity }"
					height="284"
					width="305"
					sizes="sm:305px md:400px lg:500px xl:600px"
					src="/intro-image-mobile.webp"
					format="webp"
					alt="desktop intro image" />
			</div>

		</div>
	</section>
</template>
