<script setup lang="ts">
	const { locale, locales, t } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const availableLocales = computed(() => {
		return locales.value.filter((i) => i.code !== locale.value);
	});

	type Link = {
		name: string;
		to: string;
	};

	const links: Link[] = [
		{ name: t('navigation.story'), to: '#story-section' },
		{ name: t('navigation.works'), to: '#works-section' },
		{ name: t('navigation.experience'), to: '#experience-section' },
		{ name: t('navigation.contacts'), to: '#contacts-section' }
	];

	const openMenu = ref<boolean>(false);

	const toggleMenu = () => {
		openMenu.value = !openMenu.value;
	};

	const scrollUpOnLogoClick = () => {
		openMenu.value = false;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<style>
	.active .line-1 {
		@apply -rotate-[58deg] translate-x-[1px] translate-y-[17px]  right-[0.75px];
	}

	.mobile-nav.active {
		@apply animate-slideInFromLeft flex flex-col pt-16 h-svh w-svw z-20 bg-bgdark top-[4.5rem] overflow-y-auto;
	}

	.mobile-nav-link.active {
		@apply animate-slideInFromTop flex text-[2.5rem] font-semibold text-textLight relative;
	}
</style>

<template>
	<nav class="nav h-20 w-svw px-5 py-4 flex flex-row justify-between bg-bglight fixed top-0 z-30">
		<div class="nav-logo w-4">
			<h1 class="nav-logosection-title text-pretty">
				<NuxtLink
					@click="scrollUpOnLogoClick"
					to="/"
					class="font-neueRegrade font-bold italic text-lg">
					KOOP PASCAL
				</NuxtLink>
			</h1>
		</div>
		<div
			class="hamburger w-16 p-1 cursor-pointer md:hidden"
			@click="toggleMenu"
			:class="{ active: openMenu }">
			<div
				class="hamburger-line line-1 h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-12 transition-all duration-300"></div>
			<div class="hamburger-line h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-9"></div>
			<div class="hamburger-line h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-7"></div>
		</div>
		<!-- desktop nav -->
		<div class="desktop-nav-links hidden md:flex">
			<ul class="desktop-nav-link-list">
				<li
					v-for="link in links"
					:key="link.name"
					class="desktop-nav-list-item">
					<NuxtLink
						:to="link.to"
						class="desktop-nav-link">
						{{ link.name }}
					</NuxtLink>
				</li>
				<li
					v-for="locale in availableLocales"
					:key="locale.code"
					class="internationalization-links flex mt-11">
					<NuxtLink
						:to="switchLocalePath(locale.code)"
						:class="{ active: openMenu }"
						class="desktop-nav-link">
						<NuxtImg
							src="/world-svg.svg"
							:alt="locale.code"
							class="w-8 h-[3.8rem] mr-4 text-textLight" />
						<span>{{ locale.code }}</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
		<!-- mobile-nav  -->
		<div
			class="mobile-nav left-0 fixed mt-2 hidden p-14 z-30 md:hidden"
			:class="{ active: openMenu }">
			<ul class="mobile-nav-link-list">
				<li
					v-for="link in links"
					:key="link.name"
					class="mobile-nav-list-item font-neueRegrade text-[2.5rem] mt-11 font-semibold text-textLight">
					<NuxtLink
						@click="toggleMenu"
						:to="link.to"
						:class="{ active: openMenu }"
						class="mobile-nav-link hidden">
						{{ link.name }}
					</NuxtLink>
				</li>
				<li
					v-for="locale in availableLocales"
					:key="locale.code"
					class="internationalization-links flex mt-11">
					<NuxtLink
						:to="`${switchLocalePath(locale.code)}` "
						:class="{ active: openMenu }"
						class="mobile-nav-link">
						<NuxtImg
							src="/world-svg.svg"
							:alt="locale.code"
							class="w-8 h-[3.8rem] mr-4 text-textLight" />
						<span>{{ locale.code }}</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
