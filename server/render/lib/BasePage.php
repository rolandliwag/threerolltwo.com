<?php

abstract class BasePage {
    public function getStylesheetHref() {
        return $this->config['stylesheetHref'];
    }
}

?>
