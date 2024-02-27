<script setup>
	import skills from '../assets/skills/skills.json';
</script>

<style></style>

<template>
	<section
		class="experience mx-5"
		id="experience-section">
		<h2 class="title section-title">MY SKILLS</h2>
		<div class="grid justify-center grid-cols-2 gap-9 mt-14 mx-auto grid-flow-dense">
			<div
				v-for="skill in skills"
				:key="skill.id"
				class="skill flex flex-row">
				<!-- do I need a size for every viewport? -->
				<NuxtImg
					:src="skill.image"
					:alt="skill.alt"
					class="skill-img mr-4" />
				<h3 class="section-title font-rota text-lg uppercase">{{ skill.name }}</h3>
			</div>
		</div>
	</section>
</template>
