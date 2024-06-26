<script setup lang="ts">
	import projects from '../assets/projects/projects.json';

	const { t } = useI18n();

	interface Project {
		title: string;
		previewLarge: string;
		tech: string[];
		description: string;
		link: string;
		format: string;
		liveLink?: string;
		liveLinkText?: string;
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
		@apply bg-cardDark ml-0;
		.work-card-subtitle,
		.work-card-text,
		.work-card-link,
		.work-tech-stacksection-title,
		.work-tech-stack-text {
			@apply text-textLight;
		}
		img {
			@apply lg:order-1 lg:mr-20 md:mx-auto;
		}
	}
</style>

<template>
	<section
		id="works-section"
		class="work mx-5 2xl:mx-0 mt-24">
		<h1 class="section-title">{{ $t('sectionTitles.projects') }}</h1>
		<div
			class="work-card min-h-52 h-max bg-cardLight rounded-xl mt-20 md:pt-8 mb-6 flex flex-col lg:flex-row px-5"
			v-for="project in projectData"
			:key="project.link">
			<NuxtImg
				:src="project.previewLarge"
				:format="project.format"
				lazy
				width="400"
				height="285.3"
				sizes="sm:285.3px md:400px lg:500px xl:600px"
				alt="work-preview-image"
				class="work-card-img mx-auto mt-8 lg:mt-auto mb-5 lg:mb-0 lg:ml-20 lg:mx-5 lg:px-0 rounded-t-lg shadow-cardImage"
				style="image-rendering: crisp-edges; image-rendering: -webkit-optimize-contrast" />
			<div class="work-tech-stack flex flex-col md:mx-8 my-6">
				<h2
					class="work-card-subtitle font-neueRegrade text-4xl font-bold text-textDark uppercase"
					>{{ project.title }}&nbsp;
				</h2>
					<h3 class="work-tech-stack-text font-rota text-base text-textDark uppercase inline-block">{{
						project.tech.join(',&nbsp; ')
					}}</h3>

				<p class="work-card-text font-rota text-xl text-textDark my-6 leading-relaxed">{{ project.description }}</p>
				<NuxtLink
					:to="project.link"
					target="_blank"
					class="work-card-link font-rota font-normal text-lg text-textDark hover:underline uppercase"
					>view on github
					<img
						src="/github.svg"
						alt="github icon link"
						width="20"
						height="20"
						class="inline-block ml-1 align-middle mb-1" />
				</NuxtLink>
				<NuxtLink v-if="project.liveLink"
					:to="project.liveLink"
					target="_blank"
					class="work-card-link font-rota font-normal text-lg text-textDark hover:underline uppercase"
					>{{ project.liveLinkText }}
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
