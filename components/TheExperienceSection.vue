<script setup lang="ts">
	import skills from '../assets/skills/skills.json';
</script>

<style scoped>
	.hover-grayscale:hover  {
		.grayscale{
			@apply grayscale-0;
		}
	}
</style>

<template>
	<section
		class="experience mx-5 2xl:mx-0 mt-24"
		id="experience-section">
		<h2 class="section-title">{{ $t('sectionTitles.experience') }}</h2>
		<div class="lg:flex lg:mt-14">
			<NuxtImg
				class="hidden lg:block rounded-lg lg:shadow-image"
				src="/experience-desktop.webp"
				loading="lazy"
				format="webp"
				width="400"
				height="600"
				sizes="sm:400px md:500px lg:600px xl:700px"
				alt="A picture of Pascal outside near water in summer" />
			<div class="grid justify-center lg:grid-cols-3 xxs:grid-cols-2 gap-9 mt-14 mx-auto grid-flow-dense max-w-fit">
				<div
					v-for="skill in skills"
					:key="skill.name"
					class="skill group flex flex-row transition-all duration-300 ease-in hover:-translate-y-1 hover:-translate-x-1">
					<NuxtLink
						:to="skill.link"
						class="flex"
						target="_blank">
						<img
							:src="skill.image"
							:alt="skill.alt"
							loading="lazy"
							width="48"
							height="48"
							class="skill-img mr-4 h-[3rem] lg:grayscale lg:group-hover:grayscale-0" />
						<h3 class="font-rota text-[1rem] uppercase">{{ skill.name }}</h3>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
