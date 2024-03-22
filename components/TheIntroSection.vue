<script setup lang="ts"></script>

<style></style>

<template>
	<section
		id="intro-section"
		class="introduction mt-52 mx-5">
		<button
			class="introduction-chip font-rota font-normal text-base tracking-[0.2em] border-[1px] pb-2 pt-3 px-6 rounded-full text-textDark">
			JUNIOR
		</button>
		<div class="introduction-content flex flex-col mt-6">
			<h1 class="title">FRONT -END DEVELOPER</h1>
			<p class="introduction-text whitespace-pre-line font-rota mt-28 text-lg leading-relaxed text-textDark">
				{{ $t('intro') }}
			</p>
		</div>
		<div class="introduction-arrow flex flex-col items-center mt-36 animate-bounce z-[1] relative">
			<p
				class="introduction-arrowsection-title subpixel-antialiased font-rota rotate-90 mb-4 font-medium text-textDark">
				explore more
			</p>
			<NuxtImg
				class="introduction-arrow mt-7 mb-1"
				width="20"
				height="20"
				src="/Arrow.svg"
				alt="arrow down svg to explore more" />
		</div>
	</section>
</template>
