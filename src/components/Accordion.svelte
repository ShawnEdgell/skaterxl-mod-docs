<script>
    // Accordion state and logic
    let isOpen = false;

    function toggleAccordion() {
        isOpen = !isOpen;
    }
</script>

<div>
    <button class="block w-full text-left text-white" on:click={toggleAccordion}>Accordion Title</button>
    {#if isOpen}
        <div class="pl-4 text-white">
            <p>Subcategory 1</p>
            <p>Subcategory 2</p>
            <!-- Add more subcategories as needed -->
        </div>
    {/if}
</div>
