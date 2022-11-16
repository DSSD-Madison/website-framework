<script>
    import { slide } from 'svelte/transition'

    let showMenu = false;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }

    export let title = 'DSSD Madison'
</script>

<nav class="w-full sticky px-4 py-6 bg-gray-200 flex items-center justify-around">
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
    <a class="hidden md:block hover:text-blue-400 transition-colors 
        {title == 'DSSD Madison' ? 'text-blue-500' : 'text-gray-700'}" href="/">Home</a>
    <a class="hidden md:block hover:text-blue-400 transition-colors 
        {title.toLowerCase().includes('about') ? 'text-blue-500' : 'text-gray-700'}" href="/about">About</a>
    <a class="hidden md:block hover:text-blue-400 transition-colors 
        {title.toLowerCase().includes('projects') ? 'text-blue-500' : 'text-gray-700'}" href="/projects">Projects</a>
    <a class="hidden md:block hover:text-blue-400 transition-colors 
        {title.toLowerCase().includes('people') ? 'text-blue-500' : 'text-gray-700'}" href="/people">People</a>
    <a class="hidden md:block bg-blue-400 rounded px-4 py-2 text-gray-100 hover:bg-blue-500 transition-colors"          href="MailTo:dssdmadison@dssdglobal.org">Contact</a>
</nav>
<div class="relative">
    {#if showMenu}
        <div class="md:hidden bg-gray-200 absolute top-0 right-0 w-full flex flex-wrap" transition:slide|local>
            <a class="p-2 w-full text-center hover:text-blue-400 transition-colors {title == 'DSSD Madison' ? 'text-blue-500' : 'text-gray-700'}" href="/">Home</a>
            <a class="p-2 w-full text-center hover:text-blue-400 transition-colors {title.toLowerCase().includes('about') ? 'text-blue-500' : 'text-gray-700'}" href="/about">About</a>
            <a class="p-2 w-full text-center hover:text-blue-400 transition-colors {title.toLowerCase().includes('projects') ? 'text-blue-500' : 'text-gray-700'}" href="/projects">Projects</a>
            <a class="p-2 w-full text-center hover:text-blue-400 transition-colors {title.toLowerCase().includes('people') ? 'text-blue-500' : 'text-gray-700'}" href="/people">People</a>
            <a class="p-2 w-full text-center bg-blue-400 rounded px-4 py-2 text-gray-100 hover:bg-blue-500 transition-colors" href="MailTo:dssdmadison@dssdglobal.org">Contact</a>
        </div>
    {/if}
</div>