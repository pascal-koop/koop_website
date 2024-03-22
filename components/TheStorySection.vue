<script setup lang="ts"></script>

<style></style>

<template>
	<section
		ref="target"
		id="story-section"
		class="story mx-5">
		<h2 class="section-title title">{{ $t('sectionTitles.story') }}</h2>
		<div class="lg:grid lg:grid-flow-col lg:gap-36 lg:mt-14 lg:items-center">
			<img
				class="hidden lg:block story-image"
				src="/story-image.png"
				alt="Pascal staying on a road and the settling sun shines on him from the right"
				width="400"
				height="300"
				placeholder="empty">
			</img>
			<p class="story-text whitespace-pre-line font-rota mt-14 lg:mt-0 text-lg leading-relaxed text-textDark">
				{{ $t('story') }}
			</p>
		</div>
	</section>
</template>
