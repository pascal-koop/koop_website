<script setup>
	import projects from '../assets/projects/projects.json';
</script>

<style>
	.work-card:nth-of-type(odd) {
		@apply bg-cardDark;

		.work-card-subtitle,
		.work-card-text,
		.work-card-link,
		.work-tech-stack-title,
		.work-tech-stack-text {
			@apply text-textLight;
		}
	}
</style>

<template>
	<section
		id="work-section"
		class="work mx-5">
		<h1 class="work-title title mt-24">MY WORK</h1>
		<div
			class="work-card bg-cardLight pt-1 rounded-xl mt-14 flex flex-col"
			v-for="project in projects"
			:key="project.title">
			<NuxtImg
				:src="project.previewLarge"
				loading="lazy"
				alt="work-preview-image"
				class="work-card-img w-[270px] h-[187px] mx-auto mt-8 mb-5">
			</NuxtImg>
			<h2 class="work-card-subtitle font-neueRegrade text-xl font-bold text-textDark mt-6 mb-2 mx-8">{{ project.title.toUpperCase() }}</h2>
			<div class="work-tech-stack flex">
				<span class="work-tech-stack-title font-neueRegrade ml-8 text-lg font-semibold text-textDark inline-block">TECH: </span>
				<h3 class="work-tech-stack-text font-rota text-lg text-textDark ml-2 mr-8">{{ project.tech.join(', ').toUpperCase() }}</h3>
			</div>
			<p class="work-card-text font-rota text-lg text-textDark mx-8 my-11">{{ project.description }}</p>
			<NuxtLink
				:to="project.link"
				class="work-card-link font-rota text-lg text-textDark mx-8 mb-8 hover:underline"
				>VIEW ON GITHUB
			</NuxtLink>
		</div>
	</section>
</template>
