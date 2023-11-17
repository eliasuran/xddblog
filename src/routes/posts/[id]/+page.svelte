<script lang="ts">
	import Header from '$lib/components/posts/header.svelte';
	import InfoField from '$lib/components/posts/infoField.svelte';
	import Author from '$lib/components/posts/author.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	const postData = data.props.post[0];
</script>

<div class="mt-20 dark:text-text text-textLight p-24 flex flex-col gap-8 font-mono break-words">
	<Header />
	<InfoField {postData} />
	<!-- har ikke helt bestemt hvordan content skal bygges opp, midlertidig div + span -->
	<div class="font-sans">
		<span>{postData.content}</span>
	</div>
	<Author {postData} />
</div>
