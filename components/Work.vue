<script setup>
	import projects from '../assets/projects/projects.json';

	console.log(projects);
</script>

<style></style>

<template>
	<section
		id="work-section"
		class="work">
		<h1 class="work-card-title title">MY WORK</h1>
		<div
			class="work-card"
			v-for="project in projects"
			:key="project.title">
			<img
				loading="lazy"
				:src="project.preview"
				alt="project-preview-image"
				class="work-card-img" />
			<h2 class="work-card-subtitle">{{ project.title.toUpperCase() }}</h2>
			<h3 class="tech-stack">TECH: {{ project.tech.join(', ').toUpperCase() }}</h3>
			<p class="work-card-text">{{ project.description }}</p>
			<NuxtLink
				:to="project.link"
				class="work-card-link"
				>GITHUB
			</NuxtLink>
		</div>
	</section>
</template>
