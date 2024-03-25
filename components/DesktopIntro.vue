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
			class="text-textLight text-4xl font-neueRegrade font-medium pt-6 inline-block mr-7 md:mr-60"
			>Pascal Koop</h1
		>
		<p
			:style="{ transform: `translateY(${-scrollPosition}px)` }"
			class="inline-block text-textLight text-3xl font-neueRegrade font-medium"
			>2024</p
		>
		<div class="flex items-center justify-end pt-80 mt-24">
			<div class="absolute mt-6 flex flex-col introduction-content gap-7">
				<h1
					:style="{ transform: `translateX(${scrollPosition}px)` }"
					class="z-10 text-7xl title text-textLight font-neueRegrade font-medium">
					FRONT <span class="md:ml-48 z-10">-END</span>
				</h1>
				<h1
					:style="{ transform: `translateX(${-scrollPosition}px)` }"
					class="z-10 text-7xl font-neueRegrade font-medium title text-textLight md:self-end">
					DEVELOPER
				</h1>
				<button
					:style="{ transform: `translateX(${scrollPosition}px)` }"
					class="self-start md:self-end font-rota font-normal text-xl tracking-[0.2em] border-[1px] pb-2 pt-3 px-7 rounded-full text-textLight z-20">
					JUNIOR
				</button>

				<NuxtImg
					class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[54%] z-1 hidden md:block rounded-lg"
					:style="{ opacity: imageOpacity }"
					height="500"
					width="350"
					src="/intro-image.webp"
					format="webp"
					alt="desktop intro image"/>
			</div>
		</div>
	</section>
</template>
