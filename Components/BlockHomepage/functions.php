<?php

namespace Flynt\Components\BlockHomepage;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockHomepage',
        'label' => 'Block: Homepage',
        'sub_fields' => [
            [
                'label' => __('General', 'flynt'),
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => __('Info', 'flynt'),
                'name' => 'contentHtml',
                'type' => 'wysiwyg',
                'delay' => 1,
                'media_upload' => 0,
                'required' => 0,
            ],
            [
                'label' => __('About', 'flynt'),
                'name' => 'contentAboutHtml',
                'type' => 'wysiwyg',
                'delay' => 1,
                'media_upload' => 0,
                'required' => 0,
            ]
        ]
    ];
}
