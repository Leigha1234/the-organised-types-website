<?php 
// This is the component file that will be included at the bottom of every page.
?>

<footer>
    <div class="container">
        <p>Ready to start your project? <a href="https://www.etsy.com/uk/shop/TheOrganisedTypes?ref=shop_sugg_market" target="_blank">Visit our Etsy Shop</a> to purchase a service or template.</p>
        <p>Email: **theorganisedtypes@gmail.com** | &copy; 2025 The Organised Types.</p>
    </div>
</footer>

<script>
    function toggleMenu() {
        var nav = document.getElementById("main-nav"); 
        nav.classList.toggle("show-menu");
    }
    
    // Function to set the active link dynamically
    (function setActiveLink() {
        // Use the current file name to determine which link to set as active
        const path = window.location.pathname.split('/').pop();
        // Handle index.php, index.html, or empty path (root)
        let activePage = path.split('.')[0] || 'index'; 
        
        // Remove existing active classes
        document.querySelectorAll('#main-nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Set the active class on the link that matches the page ID (e.g., nav-index)
        const activeLink = document.getElementById(`nav-${activePage}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    })();
</script>