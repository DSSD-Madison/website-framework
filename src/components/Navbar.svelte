<script>
    import { slide } from 'svelte/transition'

    let showMenu = false;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }

    export let path = "/"

    const pages = [
        {
            name: "About",
            path: "/"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "People",
            path: "/people"
        },
        {
            name: "Get Involved",
            path: "/#get-involved",
            action: true
        }
    ]
</script>

<nav class="w-full fixed z-50">
    <div class="px-4 md:px-20 py-6 bg-gray-200 flex items-center justify-between">

        <a class="flex flex-nowrap text-dark" href="/">
            <img class="md:h-14 inline-block py-auto float-left self-center" src="/favicon.svg" alt="logo">
            <span class="font-medium pl-5 inline-block self-center w-3/4 md:w-full md:h-full drop-shadow-lg">Data Science for <br> Sustainable Development</span>
        </a>
        <button on:click={toggleNavbar}
            type="button"
            class="text-gray-700 hover:text-gray-400 focus:outline-none focus:text-gray-400 md:hidden p-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6 {showMenu ? 'rotate-90' : ''} trasition-all">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        <div class="hidden md:flex grow items-center justify-end">
            {#each pages as page}
                <a 
                    class="md:block transition-colors ml-10 text-md lg:text-xl
                    {page.action ? 'bg-blue-400 rounded px-4 py-2 text-gray-100 hover:bg-blue-500' : 'hover:text-blue-400'} 
                    {path == page.path ? 'text-blue-500' : 'text-gray-700'}" 
                    href="{page.path}" target="{page.newTab && '_blank'}">{page.name}</a>
            {/each}
        </div>

    </div>
    

    <div class="relative">
        {#if showMenu}
            <div class="md:hidden absolute bg-gray-200 top-0 right-0 w-full flex flex-wrap z-40" transition:slide|local>
                {#each pages as page}
                <a 
                    class="p-2 w-full text-center hover:text-blue-400 transition-colors {path == page.path ? 'text-blue-500' : 'text-gray-700'}
                    {page.action ? 'bg-blue-400 px-4 py-2 text-gray-100 hover:bg-blue-500' : 'hover:text-blue-400'}" 
                    href="{page.path}" target="{page.newTab && '_blank'}">{page.name}</a>
                {/each}
            </div>
        {/if}
    </div>

</nav>