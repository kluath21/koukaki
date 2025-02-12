<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rpTH2OIRUh`TZpcJ1 > @4foK,Shu^`QWEk6IiRa.zH2RQkl;#0!4y.}6++M.#Rh' );
define( 'SECURE_AUTH_KEY',  'qak}OjpO=z]GaNqPHwkP`NsTsGi [,Bq.|9>7zrzjcHyJk!02W{ip I7l0<hrYJ#' );
define( 'LOGGED_IN_KEY',    '~W:u/nKV~Rn3=VTC];|WAXgk#5u+cijeJCw#P`w]#45x(`aJ?hHGy=lM>H.^6Gq2' );
define( 'NONCE_KEY',        '38[ !IPq4=:=6kk`BE!p:V5lbTF ixWc.+>u*_Q~0HGlKAUsu.apa7R[j7j&vfA7' );
define( 'AUTH_SALT',        '>Is_G)(h<H$p{<StQ0+J5M;[u,4DI.J1G5I>i]NRx]5#)mnk(Zww[FIdR51wCl;f' );
define( 'SECURE_AUTH_SALT', '^dU0]d={=SPjd+#%a/.c&rb:j)C3Y~)sGft6;])(UZf:F)2_E.LSQg#ICQfR3]g<' );
define( 'LOGGED_IN_SALT',   'FObeHM/O}kD$u_Y]l<8EVnX}_%:DLjjvA{/bAN;)?Hk-{oS226X=dRTAU#mSolFK' );
define( 'NONCE_SALT',       'PGNJB4$`NX)/@MhUEit<CW*u.2awWU2)][;tVAjlj}sC vAqo=IjYD *A/ZlS;5$' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
