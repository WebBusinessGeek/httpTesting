<?php
/**
 * Created by PhpStorm.
 * User: MacBookEr
 * Date: 12/29/14
 * Time: 1:48 PM
 */

namespace App\Mystuff;


class object {

    public function show()
    {
        return json_encode([
            'message' => 'showing',
            'code' => 200
        ]);
    }

}