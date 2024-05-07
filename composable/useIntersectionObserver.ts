export default function (){
	function observeElement(element: HTMLElement | null, animation: string, treshold: number) {
		if (!(element instanceof Element)) {
			console.error('Invalid element:', element);
			return;
		}
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry && entry.isIntersecting) {
						entry.target.classList.add(animation, 'opacity-100');
					}
				});
			},
			{ threshold: treshold }
		);
		observer.observe(element);
		element.classList.add('animate__animated','opacity-0');
		onUnmounted(() => {
			observer.unobserve(element);
		});
	}
	return { observeElement };
}
