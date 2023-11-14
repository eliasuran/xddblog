<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	const iconColor = '#E82A93';
	const iconHeight = '25';
</script>

<div class="mt-20 dark:text-text text-textLight p-24 flex flex-col gap-8 font-mono break-words">
	<div>
		<h2 class="text-2xl">{$page.url.pathname.split('/')[1]}/</h2>
		<h1 class="text-8xl">{$page.url.pathname.split('/')[2].replace(/%20/g, ' ')}</h1>
	</div>
	<div
		class="w-full h-20 dark:bg-primary bg-primaryLight border dark:border-secondary border-secondaryLight rounded-md flex justify-around items-center"
	>
		<div class="w-1/2 flex justify-around text-xdd">
			<span>Date</span>
			<span>Words</span>
			<span>Time</span>
		</div>
		<Icon icon="ci:line-l" height="40" color={iconColor} />
		<div class="w-1/2 flex justify-around">
			<Icon icon="mdi:heart-outline" color={iconColor} height={iconHeight} />
			<Icon icon="mdi:comment-outline" color={iconColor} height={iconHeight} />
			<Icon icon="mdi:bookmark-outline" color={iconColor} height={iconHeight} />
		</div>
	</div>
	<div class="font-sans">
		<span
			>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, eligendi, eaque itaque
			impedit porro autem veniam fugiat possimus vel laborum recusandae numquam reprehenderit, nulla
			sit quidem. Numquam accusantium molestiae exercitationem doloribus tempora veritatis dolor
			molestias. Saepe nemo eos, quos unde consequuntur sapiente dicta ducimus, natus quo sed
			aspernatur, quisquam eaque. Architecto fuga ratione quos ab veritatis natus excepturi,
			pariatur sit exercitationem aliquid incidunt, error nesciunt voluptatum quisquam optio odit
			eligendi esse blanditiis harum dolores suscipit quidem eaque vel. Iure cupiditate qui
			laudantium quasi aliquid vero reiciendis excepturi veritatis delectus saepe ipsam facilis ea
			magni, quo molestiae nemo facere sint repellat nesciunt incidunt quisquam rem cumque
			accusantium. Esse voluptatibus eum exercitationem nesciunt molestiae similique sapiente iste
			commodi est. Quia suscipit tempora iure eveniet tenetur, ipsum inventore alias assumenda ad
			optio illum dolorem, nam asperiores harum, temporibus quisquam officia itaque sequi sunt.
			Inventore nulla distinctio amet dolore numquam, assumenda possimus doloribus iste, quod
			repellendus accusamus optio alias corporis et molestias minus in recusandae pariatur
			asperiores quia dicta. Aut, autem a? Nulla, ex doloribus optio reiciendis corrupti pariatur
			natus voluptatibus? Quasi error debitis quidem voluptatibus natus a earum eligendi blanditiis
			doloremque consectetur maxime sit dolores id veniam perferendis quaerat nobis quos unde,
			nihil, fuga praesentium vero. Provident, sapiente dolorum a alias deserunt accusamus? Illum
			labore dolore aperiam ut pariatur quam repudiandae sunt, molestias itaque nemo quasi hic
			soluta aut rerum sapiente sint quis dolor? Aliquam reprehenderit rerum doloremque vel! Sed
			fugiat cumque numquam exercitationem voluptas expedita repudiandae odio mollitia, harum
			impedit nulla aliquam saepe ipsam nam facilis consequatur sapiente perferendis quia veniam
			error quod similique soluta ratione. Placeat beatae deleniti harum. Amet numquam harum, qui
			quas sit, nam natus sequi nostrum tenetur accusamus at saepe reiciendis! Explicabo odio
			nesciunt velit minus nostrum consectetur cumque rem vitae officia quam magnam, culpa in, qui
			repudiandae sit. Pariatur, maiores voluptates ea itaque omnis iure minus mollitia animi
			voluptate perspiciatis nihil odio dolorem laudantium, quibusdam, dolorum adipisci sapiente.
			Explicabo, adipisci quae velit iure placeat suscipit voluptates reiciendis, eligendi
			repudiandae laborum eius quasi odio quas ut nihil, magnam in illo omnis fugiat dicta. Iure
			aliquam ipsam temporibus, nobis sit optio illum vero autem reiciendis, voluptas inventore hic
			unde nisi perferendis assumenda quidem animi dolores, nesciunt suscipit earum illo
			dignissimos! Beatae magni praesentium dolorum non deleniti aliquam blanditiis quidem molestiae
			perspiciatis a minus, amet earum optio reiciendis fuga architecto harum eveniet hic tempora
			numquam deserunt quod dignissimos fugit aut! Illo suscipit, voluptas maiores aspernatur
			accusamus quia veniam nesciunt eaque, placeat sit vitae error, tempore tenetur eum rerum quos
			excepturi odit ullam sequi! Quidem debitis velit facilis maiores. Tempore atque modi incidunt
			qui quasi a minima fugiat nihil aspernatur eos? Cumque, earum consequatur! Consequuntur ipsum
			voluptatibus ad cupiditate cum praesentium commodi fugit. Quae laborum ut aliquid nostrum ab
			voluptatibus repudiandae accusamus asperiores exercitationem velit dolorem quidem perferendis
			debitis officia iste necessitatibus, quos unde. Suscipit delectus harum quaerat ratione
			maiores, modi eaque quisquam doloribus eum. Tenetur corporis voluptates ipsum. Eos, harum.
			Suscipit alias quis corrupti quidem nam, minima non quia doloribus.</span
		>
	</div>
	<div class="text-xdd flex gap-2 items-center">
		<img alt="profil pic" class="w-20 aspect-square rounded-full border-2 border-xdd" />
		<div class="flex flex-col">
			<span class="dark:text-text text-textLight underline">author</span>
			<span>author desc</span>
		</div>
	</div>
</div>
