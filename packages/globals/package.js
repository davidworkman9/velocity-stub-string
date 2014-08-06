'use strict';
Package.describe({
    summary: 'Common Shore functionality'
});

Package.on_use(function (api) {
    api.add_files('main.js');
    api.export('SOMETHING_GLOBAL');
    api.export('GLOBAL_STRING');
});
