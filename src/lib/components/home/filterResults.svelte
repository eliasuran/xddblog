<script lang="ts">
	export let postData: any;
</script>

<a
	href={`/posts/${postData.id}`}
	class="w-2/3 h-16 hover:h-24 cursor-pointer duration-300 dark:bg-primary bg-primaryLight border dark:border-secondary border-secondaryLight rounded-md relative flex items-start gap-2 p-4 overflow-hidden group"
>
	<h1 class="text-2xl w-2/3 line-clamp-1 group-hover:line-clamp-2 group-hover:underline">
		{postData.title}
	</h1>
	<div class="w-1/3 flex flex-col gap-3">
		{#if postData.tags}
			<div class="flex">
				{#each postData.tags as tag}
					<div
						class="dark:border-secondary border-secondaryLight border rounded-md p-1 mr-2 w-auto"
					>
						{tag}
					</div>
				{/each}
			</div>
		{/if}
		<div class="flex justify-around">
			<span>{Math.floor(postData.time / 60)} min read</span>
			<span>{new Date(postData.date).toLocaleDateString('no-NO')}</span>
		</div>
	</div>
</a>
