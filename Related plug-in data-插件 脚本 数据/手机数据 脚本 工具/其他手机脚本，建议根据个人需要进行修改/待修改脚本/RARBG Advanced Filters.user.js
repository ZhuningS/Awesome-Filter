// ==UserScript==
// @name         RARBG Advanced Filters
// @namespace    http://tampermonkey.net/
// @version      1.39
// @description  Additional quality of life filters: - Show or hide category icons; - Show or hide torrent thumbnails; - Show or hide movie and tv filters (Removes torrents with KORSUB and 720p); - Show or hide porn; - Filter based on minimum IMDB rating;
// @author       Kxmode
// @match        *://rarbg.to/*
// @match        *://rarbgmirror.org/*
// @match        *://rarbgmirror.com/*
// @match        *://rarbgproxy.org/*
// @match        *://rarbgunblock.com/*
// @match        *://www.rarbg.is/*
// @match        *://rarbgmirror.xyz/*
// @match        *://rarbg.unblocked.lol/*
// @match        *://rarbg.unblockall.org/*
// @match        *://rarbgaccess.org/*
// @match        *://rarbg2018.org/*
// @match        *://rarbgtorrents.org/*
// @grant        none
// @require      //ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

$(function() {
    // Define general variables
    var nonStandardUrlParams = (GetParameterByName("category%5B%5D") !== null || GetParameterByName("category[]") !== null) ? true : false,
        arrayCurrentUrlParams = -1,
        showAdvancedOptions = false,
        showIcon,
        showTorrentThumbnail, // TODO: child of showIcon (=true)
        showMoviesTVFilters,
        showPorn,
        genreFilter = "",
        currentUrlNormal,
        currentUrlAbnormal,
        i;

    // Define Category specific filters
    var minRating,
        gameGroup,
        musicGenre,
        showKORSUB,
        show720p;

    // Define array of known RARBG categories
    var arrayMovies         = ["movies", 14, 17, 42, 44, 45, 46, 47, 48, 50, 51, 52].map(String),
        arrayTVShows        = [18, 41, 49].map(String),
        arrayGames          = [27, 28, 29, 30, 31, 32, 40].map(String),
        arrayMusic          = [23, 24, 25, 26].map(String),
        arraySoftware       = [33, 34, 43].map(String),
        arrayNonPorn        = [14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52].map(String);

    // Define conditional checks
    var isCategoryMovies,
        isCategoryTVShows,
        isCategoryGames,
        isCategoryMusic,
        isCategorySoftware,
        isCategoryNonPorn;

    // Define booleans
    var categoryMoviesArray,
        categoryTVShowsArray,
        categoryGamesArray,
        categoryMusicArray,
        categorySoftwareArray,
        categoryNonPornArray;

    // This logic normalizes RARBG's inconsistent URL parameter types (e.g. category=movies, category%5B%5D=48, category=1;18;41;49;, and category[]=42)
    if (nonStandardUrlParams)
    {
        currentUrlNormal    = new RegExp("[\?&]category%5B%5D=([^]*)").exec(window.location.href);              // Grab all URL parameters %5B%5D
        currentUrlAbnormal  = new RegExp("[\?&]category\[[^\[\]]*\]=([^]*)").exec(window.location.href);        // Grab all URL parameters []
        if (currentUrlNormal === null && currentUrlAbnormal === null)                                           // If neither unique parameter exists, then stop this logic, and return nothing
        {
            return null;
        }
        else                                                                                                    // Otherwise...
        {
            if (currentUrlAbnormal !== null)                                                                    // If URL parameters is [] (abnormal)
            {
                arrayCurrentUrlParams = String(currentUrlAbnormal).match(/(=)\w+/g).map(String);                // Create an array of values separated by the equal sign
            }
            else                                                                                                // Otherwise conclude URL parameters are normal (%5B%5D)
            {
                arrayCurrentUrlParams = String(currentUrlNormal).match(/(=)\w+/g).map(String);                  // Create an array of values separated by the equal sign
            }
            for (i = 0; i < arrayCurrentUrlParams.length; i++)                                                  // Iterate through array look for equal signs
            {
                arrayCurrentUrlParams[i] = arrayCurrentUrlParams[i].replace("=", "");                           // Remove the equal sign from the array
            }
        }
    }
    else if (GetParameterByName("category") !== null || arrayCurrentUrlParams.length > -1)                      // Otherwise this is a standard URL parameter
    {
        arrayCurrentUrlParams = GetParameterByName("category").split(";").map(String);                          // Create an array of values separated by the semicolon
    }

    // Compares current url parameters with known RARBG categories. If the value is greater than -1 we have at least one match.
    if (GetParameterByName("category") !== null || arrayCurrentUrlParams.length > -1)
    {
        // Navigate through each array to find and set the match to true. For now there can only be one match.
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategoryMovies        = arrayMovies.indexOf(arrayCurrentUrlParams[i]);
            categoryMoviesArray     = (isCategoryMovies !== -1) ? true : false;
        }
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategoryTVShows       = arrayTVShows.indexOf(arrayCurrentUrlParams[i]);
            categoryTVShowsArray    = (isCategoryTVShows !== -1) ? true : false;
        }
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategoryGames         = arrayGames.indexOf(arrayCurrentUrlParams[i]);
            categoryGamesArray      = (isCategoryGames !== -1) ? true : false;
        }
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategoryMusic         = arrayMusic.indexOf(arrayCurrentUrlParams[i]);
            categoryMusicArray      = (isCategoryMusic !== -1) ? true : false;
        }
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategorySoftware      = arraySoftware.indexOf(arrayCurrentUrlParams[i]);
            categorySoftwareArray   = (isCategorySoftware !== -1) ? true : false;
        }
        for (i = 0; i < arrayCurrentUrlParams.length; i++)
        {
            isCategoryNonPorn       = arrayNonPorn.indexOf(arrayCurrentUrlParams[i]);
            categoryNonPornArray    = (isCategoryNonPorn !== -1) ? true : false;
        }
    }

    // Method to grab the Parameter name and value (Note: single use only. See line 60 for multiple URL parameters and if needed move to function.)
    function GetParameterByName(name, url) {
        // credit: https://stackoverflow.com/a/901144 (Modified by Kxmode)
        // Used under StackOverflow's standard CC BY-SA 3.0 license
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$|((%\d\D)*\D\d*))'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Method to activate and deactive filters inside the Advanced Filter's HTML box
    function ToggleFilter(target, data, bool, optional)
    {
        optional = (optional !== undefined) ? true : false;
        var targetID = target.replace("#","");
        if (bool)
        {
            if (!optional)
            {
                $(target).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
                $(target).removeClass("disabled");
            }
            $(target).attr(data, "true");
            window.localStorage.setItem(targetID, true);
        }
        else
        {
            if (!optional)
            {
                $(target).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
                $(target).addClass("disabled");
            }
            $(target).attr(data, "false");
            window.localStorage.setItem(targetID, false);
        }
    }

    // Method to show and hide the Advanced Filter's HTML box
    function ToggleAdvancedFilters(bool, isClicked)
    {
        isClicked = (isClicked !== undefined) ? true : false;
        var parentTarget = $(".new-search form");
        var target = $(".advanced-search");
        if (GetParameterByName("category") !== null && isClicked === false)
        {
            $("#shadvbutton").attr("data-shadvbutton", "true");
            window.localStorage.setItem("shadvbutton", true);
            parentTarget.removeAttr("style");
            parentTarget.removeClass("disabled");
            target.show();
        }
        else if (GetParameterByName("category") === null && isClicked === false)
        {
            $("#shadvbutton").attr("data-shadvbutton", "false");
            window.localStorage.setItem("shadvbutton", false);
            parentTarget.attr("style", "width: 100%; border-right: 1px solid #9faabc;");
            target.hide();
        }
        else
        {
            if (bool) {
                showhideadvsearch('show');
                parentTarget.removeAttr("style");
                parentTarget.removeClass("disabled");
                target.show();
            } else {
                parentTarget.attr("style", "width: 100%; border-right: 1px solid #9faabc;");
                target.hide();
            }
        }
    }

    $("#searchTorrent").parent().addClass("new-search");

    // Removes extra space between Recommended torrents and search bar
    $("#searchTorrent").parent().parent().find("div:nth-of-type(2)").remove();
    for(i = 1; i <= 4; i++)
    {
        $("#searchTorrent").parent().parent().find("br:nth-of-type(1)").remove();
    }

    // Attaches FontAwesome script to display active and inactive "eye" icons. fontawesome.io for more info.
    $("head").append(           '<script src="//use.fontawesome.com/2d73a39974.js"></script>');

    // Attaches CSS for the custom Advanced Filters HTML box.
    $("head").append(           '<style>\n' +
                                '.content-rounded .new-search,\n' +
                                '.content-rounded div.new-search div    { margin-left: auto; }\n' +
                                '.new-search                            { width: 1200px; display: flex; display: -webkit-flex; display: -moz-flex; margin: 30px auto; }\n' +
                                '.new-search div                        { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }\n' +
                                '.new-search div                        { border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }\n' +
                                '.new-search form                       { width: 70%; border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }\n' +
                                '.new-search form                       { border: 0; border-top: 1px solid #9faabc; border-bottom: 1px solid #9faabc; border-left: 1px solid #9faabc; }\n' +
                                '.new-search .divadvscat                { width: 157px; display: inline-block; height: auto; padding: 7px; float: none; }\n' +
                                '.new-search .divadvclearcats           { padding: 10px; }\n' +
                                '.new-search .advanced-search           { width: 30%; background: #e7f3fb; font-size: 110%; padding: 5px; border: 1px solid #9faabc; float: left; }\n' +
                                '.new-search .advanced-search           { border: 0; border-top: 1px solid #9faabc; border-bottom: 1px solid #9faabc; border-right: 1px solid #9faabc; }\n' +
                                '.new-search .advanced-search h4        { padding: 0; margin: 0 0 10px 0; text-align: center; }\n' +
                                '.advanced-search .section-wrapper      { border: 1px dotted #9faabc; padding: 10px; }\n' +
                                '.advanced-search .section-wrapper:first-child { border-bottom: 0; }\n' +
                                '.advanced-search .no-border            { border: 0; }\n' +
                                '.advanced-search .divadvscat           { width: auto; border: 1px solid transparent; cursor: pointer; }\n' +
                                '.advanced-search .divadvscat i         { padding-right: 2px; }\n' +
                                '.advanced-search .disabled             { border: 1px solid #DDD; background-color: #f5f5f5; color: #999; }\n' +
                                '.advanced-search .centered             { text-align: center; }\n' +
                                '.section-wrapper .imdb-rating-search   { width: 155px; }\n' +
                                '.section-wrapper .gaming-group-search  { width: auto; }\n' +
                                '.section-wrapper .imdb-rating-search input         { width: 30%; }\n' +
                                '.section-wrapper .gaming-group-search input        { width: 50%; }\n' +
                                '.section-wrapper input                 { border: 0; margin-left: 10px; border: 1px solid #9faabc; text-align: center; }\n' +
                                '.clearfix:before, .clearfix:after      { display: table; content: ""; line-height: 0;}\n' +
                                '.section-wrapper input.text-left       { text-align: left; }\n' +
                                '</style>');

    // Creates the HTML for category specific filters
    if (GetParameterByName("category") === null || categorySoftwareArray)
    {
        genreFilter = '<div class="section-wrapper no-border" style="border-top: 1px dotted #9faabc;">\n';
    }
    else
    {
        genreFilter = '<div class="section-wrapper">\n';
    }

    // TODO: Handle for: if (GetParameterByName("category") !== null || arrayCurrentUrlParams.length > -1 || nonStandardUrlParams) ----------
    if (GetParameterByName("category") !== null || nonStandardUrlParams)
    {
        if (categoryMoviesArray || categoryTVShowsArray)
        {
            genreFilter +=  '<div id="jQIMDB" class="divadvscat imdb-rating-search centered">Min Rating <input name="minprice" type="text" /></div>\n' +
                            '<div id="jQKORSUB" class="divadvscat" title="Hides low-quality KORSUB torrents"><i class="fa fa-eye fa-1x"></i> KORSUB</div>\n' +
                            '<div id="jQ720p" class="divadvscat" title="Hides 720p torrents"><i class="fa fa-eye fa-1x"></i> 720p</div>';
        }
        else if (categoryGamesArray)
        {
            genreFilter += '<div id="jQGamingGroup" class="divadvscat gaming-group-search centered">Torrent Group <input name="gamegroup" class="text-left" type="text" /></div>\n';
        }
        else if (categoryMusicArray)
        {
            genreFilter += '<div id="jQMusicGenre" class="divadvscat music-group-genre centered">Genre <input name="musicgenre" class="text-left" type="text" /></div>\n';
        }
        else if (categorySoftwareArray)
        {
            // genreFilter += '<div id="jQcategoryFilter" class="divadvscat centered">Software Filters Coming Soon</div>\n';    // Not enough to warrant this for now
        }
        else if (categoryNonPornArray)
        {
            genreFilter += '<div id="jQcategoryFilter" class="divadvscat centered">Non Porn Filters Coming Soon</div>\n';
        }
    }
    else
    {
        // genreFilter += '<div id="jQcategoryFilter" class="divadvscat centered">All Filters Coming Soon</div>\n';            // Not enough to warrant this for now
    }
    genreFilter += '</div>\n';

    // Creates the Advanced Filter HTML box
    var AdvancedFiltersHTML =   '<div class="advanced-search">\n' +
                                        '<div class="section-wrapper">\n' +
                                                '<div id="jQIcon" class="divadvscat"><i class="fa fa-eye fa-1x"></i> Category Icons</div>\n' +
                                                '<div id="jQTorrentThumbnail" class="divadvscat"><i class="fa fa-eye fa-1x"></i> Torrent Images</div>\n' +          // Eventually make this a child of Show Thumbnails
                                                '<div id="jQShowPorn" class="divadvscat"><i class="fa fa-eye fa-1x"></i> Porn</div>\n' +
                                        '</div>\n' +
                                        genreFilter +
                                        '<div class="section-wrapper no-border">\n' +
                                                '<span class="jQUpdateFilters btn btn-primary btn-mini">Update Page with Filters</span>\n' +
                                                '<span class="jQResetFilters btn btn-mini">Reset Filters</span>\n' +
                                        '</div>\n' +
                                        '<div class="clearfix"></div>\n' +
                                '</div>';

    // Attaches Advanced Filters HTML box to RARBG
    $("#searchTorrent").parent().append(AdvancedFiltersHTML);

    // TODO: Likely going to need to move the ToggleFilter and ToggleAdvancedFilters method calls into this gated logic
    if (nonStandardUrlParams)
    {
        ToggleFilter("#shadvbutton", "data-shadvbutton", showAdvancedOptions, true);
        ToggleAdvancedFilters(true, true);
    }
    else
    {
        showAdvancedOptions = ((window.localStorage.getItem("shadvbutton") == "true") ? true : false);
        ToggleFilter("#shadvbutton", "data-shadvbutton", showAdvancedOptions, true);
        ToggleAdvancedFilters(showAdvancedOptions);
    }

    // Logic for HTML box icons
    showIcon = ((window.localStorage.getItem("jQIcon") == "false") ? false : true);
    ToggleFilter("#jQIcon", "data-icon", showIcon);

    showTorrentThumbnail = ((window.localStorage.getItem("jQTorrentThumbnail") == "false") ? false : true);
    ToggleFilter("#jQTorrentThumbnail", "data-torrent-thumbs", showTorrentThumbnail);

    showPorn = ((window.localStorage.getItem("jQShowPorn") == "false") ? false : true);
    ToggleFilter("#jQShowPorn", "data-porn", showPorn);

    showKORSUB = ((window.localStorage.getItem("jQKORSUB") == "false") ? false : true);
    ToggleFilter("#jQKORSUB", "data-korsub", showKORSUB);

    show720p = ((window.localStorage.getItem("jQ720p") == "false") ? false : true);
    ToggleFilter("#jQ720p", "data-720p", show720p);

    $("#shadvbutton").on("click", function() {
        showAdvancedOptions = ($(this).attr("data-shadvbutton") == "false") ? true : false;
        ToggleFilter("#shadvbutton", "data-shadvbutton", showAdvancedOptions, true);
        ToggleAdvancedFilters(showAdvancedOptions, true);
    });

    $("#jQIcon").on("click", function() {
        showIcon = ($(this).attr("data-icon") == "false") ? true : false;
        ToggleFilter("#jQIcon", "data-icon", showIcon);
    });
    $("#jQTorrentThumbnail").on("click", function() {
        showTorrentThumbnail = ($(this).attr("data-torrent-thumbs") == "false") ? true : false;
        ToggleFilter("#jQTorrentThumbnail", "data-torrent-thumbs", showTorrentThumbnail);
    });
    $("#jQShowPorn").on("click", function() {
        showPorn = ($(this).attr("data-porn") == "false") ? true : false;
        ToggleFilter("#jQShowPorn", "data-porn", showPorn);
    });
    $("#jQKORSUB").on("click", function() {
        showKORSUB = ($(this).attr("data-korsub") == "false") ? true : false;
        ToggleFilter("#jQKORSUB", "data-korsub", showKORSUB);
    });
    $("#jQ720p").on("click", function() {
        show720p = ($(this).attr("data-720p") == "false") ? true : false;
        ToggleFilter("#jQ720p", "data-720p", show720p);
    });

    // Movies and TV Shows only
    if (categoryMoviesArray || categoryTVShowsArray)
    {
        if (window.localStorage.getItem("minimum-rating") > 0)
        {
            var mr = window.localStorage.getItem("minimum-rating");
            $("#jQIMDB").find("input").attr("value", mr);
            minRating = mr;
        }
        else
        {
            $("#jQIMDB").find("input").attr("value", 0);
        }
    }

    // Games only
    if (categoryGamesArray)
    {
        if(window.localStorage.getItem("game-group") !== undefined)
        {
            var gg = window.localStorage.getItem("game-group");
            $("#jQGamingGroup").find("input").attr("value", gg);
            gameGroup = gg;
        }
        else
        {
            $("#jQGamingGroup").find("input").removeAttr("value");
        }
    }
    // Music only
    if (categoryMusicArray)
    {
        if(window.localStorage.getItem("music-genre") !== undefined)
        {
            var mg = window.localStorage.getItem("music-genre");
            $("#jQMusicGenre").find("input").attr("value", mg);
            musicGenre = mg;
        }
        else
        {
            $("#jQMusicGenre").find("input").removeAttr("value");
        }
    }

    // Input click event
    $("#jQIMDB input, #jQGamingGroup input, #jQMusicGenre input").on("keydown", function() {
        if (event.which == 13 || event.keyCode == 13) {
            $(".jQUpdateFilters").click();
        }
    });

    // Events for the "Update Filters" button
    $(".jQUpdateFilters").on("click", function () {
        if (categoryMoviesArray || categoryTVShowsArray)
        {
            var minRating = $("#jQIMDB").parent().find("input").val();
            window.localStorage.setItem("minimum-rating", minRating);
        }
        if (categoryGamesArray)
        {
            var gameGroup = $("#jQGamingGroup").parent().find("input").val();
            window.localStorage.setItem("game-group", gameGroup);
        }
        if (categoryMusicArray)
        {
            var musicGenre = $("#jQMusicGenre").parent().find("input").val();
            window.localStorage.setItem("music-genre", musicGenre);
        }
        location.reload();
    });

    // Events for the "Reset Filters" button
    $(".jQResetFilters").on("click", function() {
        window.localStorage.removeItem("jQIcon");
        window.localStorage.removeItem("jQTorrentThumbnail");
        window.localStorage.removeItem("jQKORSUB");
        window.localStorage.removeItem("jQ720p");
        window.localStorage.removeItem("jQShowPorn");
        window.localStorage.removeItem("minimum-rating");
        window.localStorage.removeItem("game-group");
        window.localStorage.removeItem("music-genre");
        location.reload();
    });

    // Removes Movie filters after clicking the "View all" link
    $(".tdlinkfull2").on("click", function() {
        if ($(this).text() === "View all")
        {
            window.localStorage.removeItem("jQKORSUB");
            window.localStorage.removeItem("jQ720p");
            window.localStorage.removeItem("minimum-rating");
            window.localStorage.removeItem("game-group");
            window.localStorage.removeItem("music-genre");
        }
    });

    // CATEGORY SPECIFIC =================================================================================================

    // Hides torrents with seeders equal to or lower than a number [TODO: make this a form input filter]
    // use inArray method from work (Configurator height normalizer)
    /*
    if (parseInt(title.indexOf("720p")) > 0)
    {
        $(this).parents(".lista2").remove();
    }
    */

    // Logic to hide porn
    if (!showPorn)
    {
        $.each($(".tdlinkfull2"), function() {
            var targetText = $(this).text().toLowerCase();
            if (targetText == "xxx")
            {
                $(this).parent().parent().remove();
            }
        });
        $.each($(".divadvscat a"), function() {
            var targetText = $(this).text().toLowerCase();
            if(targetText == "xxx (18+)")
            {
                $(this).parent().remove();
            }
        });
    }

    // Loops through all available torrents
    $.each($(".lista a"), function(index, value) {
        var title = $(this).attr("title");
        var icon = $(this).find("img").attr("src");

        if (title !== undefined)
        {
            // Logic to hide KORSUB torrents
            if (!showKORSUB)
            {
                if (parseInt(title.indexOf("KORSUB")) > 0)
                {
                    $(this).parents(".lista2").remove();
                }
            }

            // Logic to hide 720p torrents
            if (!show720p)
            {
                if (parseInt(title.indexOf("720p")) > 0)
                {
                    $(this).parents(".lista2").remove();
                }
            }

            // Creates the logic for category specific filters
            if (GetParameterByName("category") !== null || nonStandardUrlParams)
            {
                if (categoryMoviesArray || categoryTVShowsArray)
                {
                    // IMDB Ratings
                    $.each($("span"), function(index, value) {
                        var ratings = $(this).text();
                        var imdb = ratings.indexOf("IMDB: ") + 6;
                        if (ratings !== undefined && imdb !== -1)
                        {
                            minRating = parseFloat(minRating);
                            var rateValue = parseFloat(ratings.substring(imdb,ratings.length-3));
                            if (!isNaN(rateValue))
                            {
                                if (showMoviesTVFilters) { $(this).attr("style", "display: block;"); }
                                if (rateValue <= minRating)
                                {
                                    $(this).parents(".lista2").remove();
                                }
                            }
                        }
                    });
                }
                // Game Torrent Group
                else if (categoryGamesArray)
                {
                    $.each($(".lista2t a"), function(index, value) {
                        if ($(this).attr("title") !== undefined)
                        {
                            var torrentTitle = $(this).attr("title");
                            var searchValue = torrentTitle.toLowerCase().indexOf(gameGroup);
                            var compareValue = torrentTitle.substring(searchValue,torrentTitle.length);
                            if (searchValue === -1 && gameGroup !== null)
                            {
                                $(this).parents(".lista2").remove();
                            }
                        }
                    });
                }
                else if (categoryMusicArray)
                {
                    $.each($(".lista2t .lista span:last-child"), function(index, value) {
                        $(this).addClass("RYANALLEN");
                        var genreTitle = $(this).text();
                        if (genreTitle !== undefined)
                        {
                            var searchValue = genreTitle.toLowerCase().indexOf(musicGenre);
                            var compareValue = genreTitle.substring(searchValue,genreTitle.length);
                            if (searchValue === -1 && musicGenre !== null)
                            {
                                $(this).parents(".lista2").remove();
                            }
                        }
                    });
                }
                // Coming soon
                else if (categorySoftwareArray) { }
                else if (categoryNonPornArray) { }
            }
        }

        // Logic to hide porn
        if (!showPorn)
        {
            if (title !== undefined)
            {
                title = title.indexOf("XXX");
                if (title >= 0)
                {
                    $(this).parents(".lista2").remove();
                }
            }
            if (icon !== undefined)
            {
                icon = icon.indexOf("cat_new4.gif");
                if (icon >= 0)
                {
                    $(this).parents(".lista2").remove();
                }
            }
        }
    });

    // NON-CATEGORY SPECIFIC =================================================================================================

    // Logic to hide icons
    if (!showIcon)
    {
        $(".lista2t tr td:nth-of-type(1)").attr("style","display:none;");
    }
    else
    {
        // TODO: Make child of showIcon (=true)
        // Logic to show torrent thumbnails
        if (showTorrentThumbnail)
        {
            $(".lista2t").find("tr:first-child td:first-child").text("Thumbnail");
            $.each($(".lista2t .lista2"), function() {
                var anchor = $(this);
                $.each(anchor.find(".lista"), function() {
                    var image = $(this).find("a");
                    var target = anchor.find(":nth-child(1) a");
                    if (image.attr("onmouseover") !== undefined)
                    {
                        var href = image.attr("href");
                        var sourceThumb = image.attr("onmouseover");
                        var val1 = sourceThumb.lastIndexOf("//dyncdn.me/");
                        var val2 = sourceThumb.indexOf("\' border=0>')")-1;
                        var imageID = sourceThumb.substring(val1,val2);
                        var thumbnailImage = "<img src=\'" + imageID + "' />";
                        image.removeAttr("onmouseover").removeAttr("onmouseout");
                        target.find("img").replaceWith(thumbnailImage);
                        target.attr("href", href);
                        anchor.find("td:nth-child(1)").attr( "align", "center" );
                    }
                });
            });
        }
    }

});