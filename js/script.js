(() => {
    var link = document.querySelector('link[rel="import"]');
    var content = link.import;
    var el = content.querySelector('.silde');
    $("#insertTarget").append(el);
})();
