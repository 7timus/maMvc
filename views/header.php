<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>DEFAULTAIS HEDERIS</title>
    <link rel="stylesheet" href="<?=URL ?>public/css/default.css">
    <script src="<?=URL ?>public/js/jquery.js"></script>
    <script src="<?=URL ?>public/js/custom.js"></script>


</head>
<body>
<?php Session::init(); ?>


<div id="header">
    header
    <a href="<?=URL ?>index">Index</a>
    <a href="<?=URL ?>help">Help</a>
    <?php if(Session::get('loggedIn') == true): ?>
        <a href="<?=URL ?>dashboard/logout">Logout</a>
    <?php else: ?>
        <a href="<?=URL ?>login">Login</a>
    <?php endif; ?>


    <a href="<?=URL ?>login">Login</a>
</div>

<div id="content">

