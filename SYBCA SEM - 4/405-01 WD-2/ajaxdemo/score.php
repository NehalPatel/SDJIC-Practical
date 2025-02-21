<?php
$data = array(
    'match' => 'Ind Vs Aus',
    'score' => '140/6',
    'overs' => '30.3 Overs'
);

header('Content-Type: application/json');
echo json_encode($data);
