<?php

namespace App\Controller;

use \Engine\Controller\Controller;

class AboutController extends Controller {

    public function show () {

        /*------------------------------------
            HEAD
        ------------------------------------*/

        // SEO
        $this->head['title'] = 'About';
        $this->head['description'] = '';
        $this->head['keywords'] = '';
        $this->head['opengraph'] = '/static/media/fav/open-graph/1200-630.png';

        // Robots
        $this->head['allow-robots'] = true;

        /*------------------------------------
            RENDER
        ------------------------------------*/

        $this->render('about');
    }

}
