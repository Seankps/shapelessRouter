
/////////////////////////////////// Router begin ///////////////////////////////////////////
//window.onhashchange = routePage;

$(window).on('load', loadpage);

function loadpage() {
    routePage();
    $(window).on('hashchange', routePage);
};

function routePage() {

    $("#body").html('');

    var route = (window.location.hash)
    getPageContent(route);
};

function getPageContent(pageHash) { //Has AJAX

    var queryString = "";
    var controller = "FormGenerator";
    var action = pageHash.replace("#", "");


    var pagedata = {};

    if (action.includes("?")) {
        getActionStrings();
    }

    if (action.includes("/")) {
        getControllerStrings();
    }

    var url = "/" + controller + "/" + action;

    //debugger;

    if (action.length > 0) {                //AJAX
        $("#body").html('<p>Loading...</p>');

        $.ajax({
            url: url,
            data: pagedata,
            success: function (data) {
                //var test = data;
                //debugger;
                $("#body").html(data);
            }
        });
    }


    function getQueryStrings() {
        var jsonString = queryString;
        pagedata = jsonString ? JSON.parse('{"' + jsonString.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
                         function (key, value) { return key === "" ? value : decodeURIComponent(value) }) : {}
        //debugger;
    };

    function getActionStrings() {
        var query = action.split('?');
        action = query[0];
        queryString = query[1];

        if (queryString) {
            getQueryStrings();
            //debugger;
        }

    };

    function getControllerStrings() {
        var totalString = action.split('/');
        controller = totalString[0];
        action = totalString[1];
        //debugger;

        //if (queryString) {
        //    getQueryStrings();
        //debugger;
        //}

    };

};
