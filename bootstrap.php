<?php

/*
 * This file is part of davis/flarum-ext-widgets
 *
 * © Connor Davis <davis@produes.co>
 *
 * For the full copyright and license information, please view the MIT license
 *
 */

namespace Davis\Widgets;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listeners\AddClientAssets::class);
};
