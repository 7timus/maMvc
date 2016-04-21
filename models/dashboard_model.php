<?php
class Dashboard_Model extends Model {

    function __construct()
    {
    }

    function xhrInsert() {
       echo $_POST['text'];
    }
}