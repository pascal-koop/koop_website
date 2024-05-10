<script setup lang="ts">
	type Link = {
		name: string;
		to: string;
		isVisible?: boolean;
	};

	const { locale, locales, t } = useI18n();
	const switchLocalePath = useSwitchLocalePath();
	const openMenu = ref<boolean>(false);

	const availableLocales = computed(() => {
		return locales.value.filter((i: { code: string }) => i.code !== locale.value);
	});

	const links: Link[] = reactive([
		{ name: t('navigation.story'), to: '#story-section' },
		{ name: t('navigation.projects'), to: '#works-section' },
		{ name: t('navigation.experience'), to: '#experience-section' },
		{ name: t('navigation.contacts'), to: '#contacts-section' }
	]);



watch(openMenu, (newValue) => {
	if (newValue) {
		document.documentElement.style.overflowY = 'hidden';
	} else {
		document.documentElement.style.overflowY = 'auto';
	}
});

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
		@apply -rotate-[58deg] translate-x-[1px] translate-y-[17px] right-[0.75px];
	}

	.mobile-nav.active {
		@apply flex flex-col  h-svh w-svw z-20 bg-bgdark top-[4.5rem] overflow-y-auto;
	}

	.mobile-nav-link.active {
		@apply animate-slideInFromTop flex text-[2.5rem] font-semibold text-textLight relative;
	}

	.mobile-enter-active {
		@apply animate-slideInFromLeft;
	}

	.mobile-leave-active {
		@apply animate-slideOutToLeft;
	}
</style>

<template>
	<nav class="fixed top-0 z-30 flex flex-row items-center justify-between h-20 px-5 py-4 w-svw bg-bglight shadow-md max-w-[1500px]">
		<div class="w-20 nav-logo md:w-max">
			<h1
				class="transition duration-300 ease-in scale-110 text-pretty md:delay-150 hover:-translate-y-1 hover:-translate-x-1">
				<NuxtLink
					@click="scrollUpOnLogoClick"
					to="/"
					class="font-neueRegrade font-bold italic text-lg md:text-[1.55rem] break-words">
					PASCAL KOOP
				</NuxtLink>
			</h1>
		</div>
		<div
			class="w-16 p-1 cursor-pointer hamburger lg:hidden"
			@click="toggleMenu"
			:class="{ active: openMenu }">
			<div
				class="hamburger-line line-1 h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-12 transition-all duration-300"></div>
			<div class="hamburger-line h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-9"></div>
			<div class="hamburger-line h-[.35rem] mt-[.35rem] mx-auto left-0 bg-bgdark w-7"></div>
		</div>
		<!-- desktop nav -->
		<div class="hidden mr-5 desktop-nav-links lg:flex lg:flex-col lg:justify-center">
			<ul class="desktop-nav-link-list lg:flex lg:flex-row">
				<li
					v-for="link in links"
					:key="link.name"
					class="transition duration-300 ease-in delay-150 scale-110 desktop-nav-list-item hover:-translate-y-1 hover:-translate-x-1 uppercase font-rota">
					<NuxtLink
						:to="link.to"
						class="px-4">
						{{ link.name }}
					</NuxtLink>
				</li>
				<li
					v-for="locale in availableLocales"
					:key="locale.code"
					class="transition duration-300 ease-in delay-150 scale-110 internationalization-links hover:-translate-y-1 hover:-translate-x-1 ">
					<NuxtLink
						:to="switchLocalePath(locale.code)"
						:class="{ active: openMenu }"
						class="lg:inline font-rota align-middle">
						<img
							width="35"
							height="35"
							src="/localizeDark.svg"
							:alt="locale.code"
							class="w-3 h-[3.8rem] lg:min-w-7 lg:mb-2 text-textlight lg:inline  lg:h-[1.3rem]" />
						<span class="font-rota text-[1rem] align-middle">{{ locale.code }}</span>
					</NuxtLink>
				</li>
			</ul>
		</div>
		<!-- mobile-nav  -->
		<Transition name="mobile">
			<div
				v-if="openMenu"
				class="fixed left-0 z-30  mt-2 mobile-nav px-14 lg:hidden items-center"
				:class="{ active: openMenu }">
				<ul class="mobile-nav-link-list">
					<li
						v-for="link in links"
						:key="link.name"
						class="mobile-nav-list-item font-neueRegrade text-[2.5rem] mt-11 font-semibold text-textLight uppercase">
						<NuxtLink
							@click="toggleMenu"
							:to="link.to"
							:class="{ active: openMenu }"
							class="hidden mobile-nav-link">
							{{ link.name }}
						</NuxtLink>
					</li>
					<li
						v-for="locale in availableLocales"
						:key="`${locale.code} language icon`"
						class="flex internationalization-links mt-11">
						<NuxtLink
						    @click="toggleMenu"
							:to="`${switchLocalePath(locale.code)}`"
							:class="{ active: openMenu }"
							class="mobile-nav-link">
							<img
								src="/localizeLight.svg"
								:alt="`${locale.code} language icon`"
								class="w-8 h-[3.8rem] mr-4" />
							<span>{{ locale.code }}</span>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</Transition>
	</nav>
</template>
