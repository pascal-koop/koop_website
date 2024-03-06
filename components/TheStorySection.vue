<script setup lang="ts"></script>

<style></style>

<template>
	<section
		ref="target"
		id="story-section"
		class="story mx-5">
		<div class="story-content">
			<h2 class="section-title title">{{ $t('sectionTitles.story') }} </h2>
			<p class="story-text whitespace-pre-line font-rota mt-14 text-lg leading-relaxed text-textDark">
				{{ $t('story') }}
			</p>
		</div>
	</section>
</template>
