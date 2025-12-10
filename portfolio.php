<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - The Organised Types</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* CSS Variables (Keep these here for all pages) */
        :root {
            --primary-color: #1a1a1a; 
            --accent-color: #A9B897; 
            --cream-bg: #FAF8F5; 
            --logo-bg: #EFE6E1; 
            --card-bg: #F5F2EF; 
            --text-color: #444444; 
            --font-main: 'Poppins', sans-serif;
        }
        body { 
            font-family: var(--font-main); 
            margin: 0; 
            padding: 0; 
            background-color: var(--cream-bg); 
            color: var(--text-color); 
            line-height: 1.7; 
            min-height: 100vh; 
            display: flex; 
            flex-direction: column; 
        }
        .container { 
            width: 90%; 
            max-width: 1200px; 
            margin: auto; 
            padding: 30px 0; 
            box-sizing: border-box; 
        }

        /* --- HEADER & NAVIGATION (Common Styles - Must match index.php) --- */
        header { 
            background-color: var(--logo-bg); 
            border-bottom: 1px solid #e0e0e0; 
            padding: 5px 0; 
            position: fixed; 
            top: 0; 
            width: 100%; 
            z-index: 20; 
        }
        .navbar { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            width: 90%; 
            max-width: 1200px; 
            margin: 0 auto;
            padding: 0 15px; 
            box-sizing: border-box;
        }
        .logo-area img { 
            height: 150px; 
            margin-right: 10px; 
        } 
        #main-nav { display: flex; align-items: center; }
        #main-nav a { 
            color: var(--primary-color); 
            text-decoration: none; 
            margin-left: 25px; 
            font-weight: 500; 
            transition: color 0.3s ease; 
            white-space: nowrap;
        }
        #main-nav a:hover, 
        #main-nav a.active { color: var(--accent-color); }
        .menu-icon { display: none; cursor: pointer; font-size: 2em; line-height: 0; }
        .menu-icon span { display: block; width: 25px; height: 3px; margin: 5px 0; background: var(--primary-color); transition: 0.4s; }

        /* --- BUTTON & LINK STYLES (Common) --- */
        .cta-button {
            display: inline-block;
            background: var(--accent-color);
            color: var(--primary-color); 
            padding: 15px 35px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 1.1em;
            font-weight: 600;
            transition: background-color 0.3s ease;
            border: none;
            cursor: pointer;
        }
        .cta-button:hover { background-color: #92a487; }
        
        /* --- FOOTER (Common Style - Included for reference) --- */
        footer { 
            background-color: var(--logo-bg); 
            color: var(--primary-color); 
            text-align: center; 
            padding: 20px 0; 
            font-size: 0.9em; 
            margin-top: auto; 
        }
        footer a { color: var(--accent-color); text-decoration: none; }

        /* --- PAGE-SPECIFIC STYLES: PORTFOLIO (Coming Soon) --- */
        .main-content {
            flex-grow: 1; 
            text-align: center;
            padding: 100px 20px;
            min-height: calc(100vh - 200px); 
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 170px; /* OFFSET FOR FIXED HEADER CLEARANCE */
        }
        .main-content h1 {
            font-size: 4em;
            color: var(--accent-color); 
            margin-bottom: 10px;
        }
        .main-content p {
            font-size: 1.5em;
            color: var(--primary-color);
            max-width: 600px;
            margin: 0 auto 30px;
        }
        .main-content a {
            color: var(--accent-color);
            font-weight: 600;
            text-decoration: underline;
            transition: color 0.3s ease;
        }
        .main-content a:hover {
            color: var(--primary-color);
        }
        
        /* --- MOBILE SPECIFIC STYLES --- */
        @media (max-width: 768px) {
            .navbar { padding: 0 15px; }
            .menu-icon { display: block; }
            #main-nav {
                display: none; 
                flex-direction: column;
                width: 100%;
                background-color: #ffffff; 
                position: absolute; 
                top: 160px; 
                left: 0;
                border-top: 1px solid #e0e0e0;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                z-index: 10;
                padding: 10px 0;
            }
            #main-nav.show-menu { display: flex; }
            #main-nav a { text-align: center; margin: 10px 0 0; padding: 10px 0; margin-left: 0; border-bottom: 1px solid #f5f5f5; font-size: 1.2em; }

            /* Mobile Portfolio */
            .main-content { 
                padding: 80px 10px; 
                margin-top: 170px; 
            }
            .main-content h1 { font-size: 3em; }
            .main-content p { font-size: 1.2em; }
        }
    </style>
</head>
<body>

    <?php include 'header.inc.php'; ?>

    <div class="main-content">
        <div class="container">
            <h1>Portfolio Under Construction 🚧</h1>
            <p>We are currently compiling and curating recent case studies to showcase our work in **organisational** systems and custom digital solutions.</p>
            <p>Please check back soon! In the meantime, you can <a href="contact.php">contact us directly</a> to discuss your project needs.</p>
            <a href="services.php" class="cta-button">View Our Solutions</a>
        </div>
    </div>

    <?php include 'footer.inc.php'; ?>

</body>
</html>