<script setup lang="ts">
	import projects from '../assets/projects/projects.json';

	const { t } = useI18n();
	const showModal = ref(false);
	const selectedProject = ref<Project | null>(null);

	interface Project {
		title: string;
		previewLarge: string;
		tech: string[];
		description: string;
		link?: string;
		format: string;
		liveLink?: string;
		liveLinkText?: string;
		companyLink?: string;
		companyLinkText?: string;
	}

	const projectsArray: Ref<[string, Project][]> = computed(() => Object.entries(projects));
	const projectData: Ref<Project[]> = computed(() =>
		projectsArray.value.map(([key, value]) => ({
			...value,
			description: t(`${value['description']}`)
		}))
	);

	const openModal = (project: Project) => {
		if(window.innerWidth < 768) {
			return;
		}
		selectedProject.value = project;
		showModal.value = true;
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';

	};

	const closeModal = () => {
		showModal.value = false;
		document.body.style.overflow = 'auto';
		document.documentElement.style.overflow = 'auto';
	};

	const transformTitle = (title: string) => {
  return title.toLocaleUpperCase('de-DE').replace(/SS/g, 'ß');
};
</script>



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
				class="work-card-img mx-auto mt-8 lg:mt-auto mb-5 lg:mb-0 lg:ml-20 lg:mx-5 lg:px-0 rounded-t-lg shadow-cardImage cursor-pointer hover:opacity-90 transition-opacity"
				style="image-rendering: crisp-edges; image-rendering: -webkit-optimize-contrast"
				@click="openModal(project)" />
			<div class="work-tech-stack flex flex-col md:mx-8 my-6 break-words hyphens-auto">
				<h2
					class="work-card-subtitle font-neueRegrade text-4xl font-bold  text-textDark  hyphens-auto"
					>{{ transformTitle(project.title) }}&nbsp;
				</h2>
					<h3 class="work-tech-stack-text font-rota text-base text-textDark uppercase inline-block">{{
						project.tech.join(',&nbsp; ')
					}}</h3>

				<p class="work-card-text font-rota text-xl text-textDark my-6 leading-relaxed">{{ project.description }}</p>
				<NuxtLink
					v-if="project.link"
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
				<NuxtLink
					v-if="project.companyLink"
					:to="project.companyLink"
					target="_blank"
					class="work-card-link font-rota font-normal text-lg text-textDark hover:underline uppercase"
					>{{ project.companyLinkText }}
				</NuxtLink>
			</div>
		</div>

		<ImageModal
			v-model="showModal"
			:image-src="selectedProject?.previewLarge || ''"
			:image-format="selectedProject?.format || ''"
			:image-alt="selectedProject?.title || ''"

		/>
	</section>
</template>
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