<script setup>
	import projects from '../assets/projects/projects.json';
</script>

<style></style>

<template>
	<section
		id="work-section"
		class="work">
		<h1 class="work-title title">MY WORK</h1>
		<div
			class="work-card"
			v-for="project in projects"
			:key="project.title">
			<NuxtImg
				:src="project.previewLarge"
				loading="lazy"
				alt="work-preview-image"
				class="work-card-img">
      </NuxtImg>
			<h2 class="work-card-subtitle">{{ project.title.toUpperCase() }}</h2>
			<div class="work-tech-stack">
				<span class="work-tech-stack-title">TECH: </span>
				<h3 class="work-tech-stack-text">{{ project.tech.join(', ').toUpperCase() }}</h3>
			</div>
			<p class="work-card-text">{{ project.description }}</p>
			<NuxtLink
				:to="project.link"
				class="work-card-link"
				>VIEW ON GITHUB
			</NuxtLink>
		</div>
	</section>
</template>
