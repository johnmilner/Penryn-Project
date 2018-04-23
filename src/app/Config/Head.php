<?php

namespace App\Config;

class Head {

    public static function data () {
        $head['urlBase'] = 'https://www.penryn.dev/src'; // Desktop version only with protocol
        $head['serverName'] = 'www.penryn.dev/src'; // Desktop or mobile without protocol

        $head['twitter']['pseudo']  = '';
        $head['twitter']['creator'] = '';

        return $head;
    }

}
