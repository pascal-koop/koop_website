<script setup lang="ts">
	import projects from '../assets/projects/projects.json';

	const { t } = useI18n();

	interface Project {
		title: string;
		previewLarge: string;
		tech: string[];
		description: string;
		link: string;
	}

	const projectsArray: Ref<[string, Project][]> = computed(() => Object.entries(projects));
	const projectData: Ref<Project[]> = computed(() =>
		projectsArray.value.map(([key, value]) => ({
			...value,
			description: t(`${value['description']}`)
		}))
	);
</script>

<style>
	.work-card:nth-of-type(odd) {
		@apply bg-cardDark;
		.work-card-subtitle,
		.work-card-text,
		.work-card-link,
		.work-tech-stacksection-title,
		.work-tech-stack-text {
			@apply text-textLight;
		}
		img{
			@apply lg:order-1;
		}
	}
</style>

<template>
	<section
		id="works-section"
		class="work mx-5">
		<h1 class="section-title title">{{ $t('sectionTitles.works') }}</h1>
		<div
			class="work-card h-max bg-cardLight pt-1 rounded-xl mt-14 flex flex-col lg:flex-row px-5"
			v-for="project in projectData"
			:key="project.link">
			<img
				:src="project.previewLarge"
				loading="lazy"
				width="400"
				height="300"
				alt="work-preview-image"
				class="work-card-img mx-auto mt-8 lg:mt-auto mb-5 lg:mb-0 lg:ml-20 lg:mx-5 lg:px-0 rounded-t-lg lg:shadow-cardImage"
				style="image-rendering: crisp-edges; image-rendering: -webkit-optimize-contrast;
"
			>
			</img>
			<div class="work-tech-stack flex flex-col">
				<h2 class="work-card-subtitle font-neueRegrade text-xl font-bold text-textDark mt-6 mb-2 mx-8 uppercase"
					>{{ project.title }}&nbsp;
				</h2>
				<h3 class="work-tech-stacksection-title font-neueRegrade ml-8 mr-2 text-lg font-semibold text-textDark inline-block"
					>TECH: <span class="work-tech-stack-text font-rota text-lg text-textDark mr-8 uppercase inline-block">{{ project.tech.join(',&nbsp; ') }}</span>
				</h3>

				<p class="work-card-text font-rota text-lg text-textDark mx-8 my-11">{{ project.description }}</p>
				<NuxtLink
					:to="project.link"
					class="work-card-link font-rota text-lg text-textDark mx-8 mb-8 hover:underline"
					>VIEW ON GITHUB <img
						src="/github.svg"
						alt="external-link"
						width="20"
						height="20"
						class="inline-block ml-1 align-middle mb-1"
					/>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
