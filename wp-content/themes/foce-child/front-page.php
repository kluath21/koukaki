<div id="div-1">
    <span class='flower'>
        <?php get_header(); ?>
        <main id="primary" class="site-main">
            <section class="banner">
                <video class="background_video" autoplay="autoplay" muted="" loop="infini">
                    <source src="<?php echo get_template_directory_uri() . '/assets/video/Studio_Koukaki_video.mp4'; ?>" type="video/mp4">
                </video>
                <img class="logo floating" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" 
                    data-0="top:460px;" data-200="top:600;" data-500="top:700px;" alt="logo Fleurs d'oranger & chats errants">
            </section>
            <section id="#story" class="story">
                <h2> <span>L'histoire</span></h2>
                <article id="" class="story__article">
                    <p>
                        <?php echo get_theme_mod('story'); ?>
                    </p>
                </article>
                <?php
                $args = array(
                    'post_type' => 'characters',
                    'posts_per_page' => -1,
                    'meta_key' => '_main_char_field',
                    'orderby' => 'meta_value_num',

                );
                $characters_query = new WP_Query($args);
                // var_dump($characters_query->posts);
                ?>
                <article id="characters">
                    <div class="main-character">
                        <h3><span>Les </span><span>personnages</span></h3>
                        <?php echo get_template_part('template/characters'); ?>
                        </p>

                    </div>
                </article>
                <article id="place">
                    <div id="clouds">
                        <img id="big_cloud"
                            src=" <?php echo get_stylesheet_directory_uri() . '/images/big_cloud.png'; ?>">
                        <img id="little_cloud"
                            src="<?php echo get_stylesheet_directory_uri() . '/images/little_cloud.png'; ?> ">

                    </div>
                    <div class="place_text">
                        <h3><span>Le</span> <span>Lieu</span></h3>

                        <p>
                            <?php echo get_theme_mod('place'); ?>
                        </p>

                    </div>

                </article>
            </section>
            <section id="studio">
                <h2><span>Studio</span> <span>Koukaki</span></h2>
                <div>
                    <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et
                        distribue
                        des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux
                        sections
                        en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
                        principalement autour de la culture de notre pays natal, le Japon.</p>
                    <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale
                        et
                        commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur
                        incontournable
                        dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et
                        capitalise
                        sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
                        errants”.</p>
                </div>
            </section>
            <!-- ajout de la section nomination -->
    </span>
</div>
</main>
<?php
get_footer();
