<script setup lang="ts">
	import useIntersectionObserver from '~/composable/useIntersectionObserver';

	const story1 = ref();
	const story2 = ref();
	const story3 = ref();

	const { observeElement } = useIntersectionObserver();

	onMounted(() => {
		observeElement(story1.value, 'animate__fadeInRight', 0.7);
		observeElement(story2.value, 'animate__fadeInRight', 0.7);
		observeElement(story3.value, 'animate__fadeInRight', 0.7);
	});
</script>

<style></style>

<template>
	<section
		id="story-section"
		class="story mx-5 mt-24 2xl:mx-0">
		<h1 class="section-title">{{ $t('sectionTitles.story') }}</h1>
		<div class="lg:grid lg:grid-flow-col lg:gap-36 mt-14 lg:items-start max-w-md lg:max-w-fit mx-auto">
			<div ref="story1">
				<h2 class="text-3xl lg:text-4xl font-neueRegrade text-textDark font-normal leading-none md:mt-0">
					{{ $t('story.firstSegment.title') }}
				</h2>
				<p class="text-xl font-rota font-normal mt-4 leading-relaxed">{{ $t('story.firstSegment.content') }}</p>
			</div>
			<div ref="story2" class="animate__fast">
				<h2
					class="text-3xl lg:text-4xl font-neueRegrade text-textDark font-normal leading-none mt-6 lg:mt-0"
					>{{ $t('story.secondSegment.title') }}
				</h2>
				<p class="text-xl font-rota font-normal mt-4 leading-relaxed">{{ $t('story.secondSegment.content') }}</p>
			</div>
			<div ref="story3" class="animate__faster">
				<h2
					class="text-3xl lg:text-4xl font-neueRegrade text-textDark font-normal leading-none mt-6 lg:mt-0"
					>{{ $t('story.thirdSegment.title') }}
				</h2>
				<p class="text-xl font-rota font-normal mt-4 leading-relaxed">{{ $t('story.thirdSegment.content') }}</p>
			</div>
		</div>
	</section>
	</template>
