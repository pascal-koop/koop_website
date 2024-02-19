<script setup>

import projects  from '../assets/projects/projects.json'

console.log(projects)

</script>

<style></style>

<template>
	<section
		id="work-section"
		class="work">
		<h1 class="work-card-title title"></h1>
		<div class="work-card"
      v-for="project in projects"
      :key="project.title"
    >
			<img
        loading="lazy"
				:src="project.preview"
				alt="project-preview"
				class="work-card-img" />
			<h2 class="work-card-subtitle">{{ project.title }}</h2>
			<h3 class="tech-stack">{{ project.stack }}</h3>
			<p class="work-card-text">{{ project.description }}</p>

		</div>
	</section>
</template>
