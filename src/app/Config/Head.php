<?php

namespace App\Config;

class Head {

    public static function data () {
        $head['ssl'] = false;
        $head['serverName'] = 'www.example.com'; // Desktop version

        $head['twitter']['pseudo']  = '';
        $head['twitter']['creator'] = '';

        return $head;
    }

}
