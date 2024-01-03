<?php
function my_theme_enqueue_styles() {
    $parent_style = 'Divi'; 
    $child_style = 'Divi child';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( $child_style, get_stylesheet_uri() );
}
function et_projects_custom_slug( $slug ) {
$slug = array( 'slug' => 'nos-projets' );

return $slug;
}
add_filter( 'et_project_posttype_rewrite_args', 'et_projects_custom_slug', 10, 2 );

// Désactiver notifications mises à jour
// Disable core update emails
add_filter( 'auto_core_update_send_email', '__return_false' );

// Disable plugin update emails
add_filter( 'auto_plugin_update_send_email', '__return_false' );

// Disable theme update emails
add_filter( 'auto_theme_update_send_email', '__return_false' );

?>
