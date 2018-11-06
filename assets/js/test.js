$(document).ready(function () {
    // $('#get-data').click(function () {
        //var showData = $('#show-data');

        $.getJSON('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json', function (data) {
            console.log(data);
            // var items = data.map(function (item) {
            //     return item.nm + '</br> ' + item.cty+ '</br> ' + item.hse+ '</br> ' + item.yrs;
            // });
            //showData.empty();

            $('.ui.search')
                .search({

                    searchFields:'nm',
                    source: data,
                    fields: {
                        results : 'nm',
                        title   : 'name',
                    },
                    minCharacters : 3
                })
            ;
            // if (items.length) {
            //     var content = '<li>' + items.join('</li><li>') + '</li>';
            //     var list = $('<ul />').html(content);
            //     showData.append(list);
            // }
        });

        //showData.text('Loading the JSON file.');
    //});
});