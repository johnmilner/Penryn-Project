<?php

namespace App\Config;

class Head {

    public static function data () {
        $head['urlBase'] = 'https://127.0.1.1'; // Desktop version only with protocol
        $head['serverName'] = '127.0.1.1'; // Desktop or mobile without protocol

        $head['twitter']['pseudo']  = '';
        $head['twitter']['creator'] = '';

        return $head;
    }

}
