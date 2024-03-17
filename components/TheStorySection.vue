<script setup lang="ts"></script>

<style></style>

<template>
	<section
		ref="target"
		id="story-section"
		class="story mx-5">
			<h2 class="section-title title">{{ $t('sectionTitles.story') }}</h2>
		<div class="story-content md:flex md:flex-row">
			<NuxtImg
				class="hidden md:block"
				src="../public/story-image.png"
				alt="story image"
				width="400"
				height="400"
				placeholder="empty">
			</NuxtImg>
			<p class="story-text whitespace-pre-line font-rota mt-14 text-lg leading-relaxed text-textDark ">
				{{ $t('story') }}
			</p>
		</div>
	</section>
</template>
