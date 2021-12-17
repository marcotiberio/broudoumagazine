<?php

namespace Flynt\Components\BlockGridInfo;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockGridInfo',
        'label' => 'Block: Grid Info',
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Grid Columns', 'flynt'),
                'name' => 'gridColumns',
                'type' => 'repeater',
                'layout' => 'row',
                'min' => 1,
                'button_label' => __('Add Column', 'flynt'),
                'sub_fields' => [
                    [
                        'label' => __('Column Title', 'flynt'),
                        'name' => 'columnTitle',
                        'type' => 'text'
                    ],
                    [
                        'label' => __('Column Content', 'flynt'),
                        'name' => 'columnContent',
                        'type' => 'wysiwyg',
                        'tabs' => 'visual,text',
                        'media_upload' => 1,
                        'delay' => 1,
                    ],
                ],
            ],
        ]
    ];
}
