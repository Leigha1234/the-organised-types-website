<?php 
// This is the component file that will be included at the top of every page.
// It contains the fixed header structure.
?>

<header>
    <div class="navbar"> 
        <a href="index.php" class="logo-area">
            <img src="logo.jpg.webp" alt="The Organised Types Logo">
        </a>
        <div class="menu-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav id="main-nav">
            <a href="index.php" id="nav-index">Home</a> 
            <a href="services.php" id="nav-services">Services</a>
            <a href="portfolio.php" id="nav-portfolio">Portfolio</a>
            <a href="contact.php" id="nav-contact">Contact</a>
            <a href="https://www.etsy.com/uk/shop/TheOrganisedTypes?ref=shop_sugg_market" target="_blank">Etsy Shop</a>
        </nav>
    </div>
</header>