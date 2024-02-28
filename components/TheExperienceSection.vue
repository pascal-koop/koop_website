<script setup lang="ts">
	import skills from '../assets/skills/skills.json';
</script>

<style></style>

<template>
	<section
		class="experience mx-5"
		id="experience-section">
		<h2 class="title section-title mt-24">{{ $t('sectionTitles.experience') }}</h2>
		<div class="grid justify-center grid-cols-2 gap-9 mt-14 mx-auto grid-flow-dense max-w-fit">
			<div
				v-for="skill in skills"
				:key="skill.name"
				class="skill flex flex-row">
				<!-- do I need a size for every viewport? -->
				<NuxtImg
					:src="skill.image"
					:alt="skill.alt"
					class="skill-img mr-4 h-[3rem]" />
				<h3 class="font-rota text-[1rem] uppercase">{{ skill.name }}</h3>
			</div>
		</div>
	</section>
</template>
