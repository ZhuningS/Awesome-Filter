





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-lLo2nlsdl+bHLu6PGvC2j3wfP45RnK4wKQLiPnCDcuXfU38AiD+JCdMywnF3WbJC1jaxe3lAI6AM4uJuMFBLEw==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-08fc49d3bd2694c870ea23d0906f3610.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-mv6mDRPrioZTM6DqvWmoRTqzLBRhHXVLHuh4NbZvbWLfjVpC7gqihEHCfY+IR3fRoQ3KD7FLLz422a7iH/HT/g==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-4d9ab9919c1f80062f9616df3655449f.css" />
  
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>userChromeJS/addMenuPlus.uc.js at master · ywzhaiqi/userChromeJS</title>
    <meta name="description" content="我原创或修改或自用的 userChromeJS 脚本. Contribute to ywzhaiqi/userChromeJS development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/3016136?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="ywzhaiqi/userChromeJS" /><meta property="og:url" content="https://github.com/ywzhaiqi/userChromeJS" /><meta property="og:description" content="我原创或修改或自用的 userChromeJS 脚本. Contribute to ywzhaiqi/userChromeJS development by creating an account on GitHub." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MzIxNjQzODU0OjE4NjMxYjFjZDQ5NGNhOGUzNTE0NDM5ZjEwZDNjMjAxODE2MDQ3NThkZWNjYmU0YzU4YmYxMjBlZmZlY2QzZDY=--b6012fcd087c0017b16ccc19a5ba6320e47d1bea">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="E75C:7F43:1B43AA4:28EF91A:5BF66805" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E75C:7F43:1B43AA4:28EF91A:5BF66805" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="38108376" /><meta name="octolytics-actor-login" content="ZhuningS" /><meta name="octolytics-actor-hash" content="4d2564fe80f8b5bcf0dde7bb80a52c79765b3d00cfce1df85135129a769570a9" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="9836b38cad680eb0b075c01103a9741f" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="ZhuningS">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OTMwNmJiZGE5YjI2MjE4ZWMyMDJhZWE5ZGFlYmE0MjIzOWUyNGQ0NjQ2NmIwN2IzNjQzZDM1NzU5NmFjNjE0Nnx7InJlbW90ZV9hZGRyZXNzIjoiNjAuMTA2LjE3My4yMzkiLCJyZXF1ZXN0X2lkIjoiRTc1Qzo3RjQzOjFCNDNBQTQ6MjhFRjkxQTo1QkY2NjgwNSIsInRpbWVzdGFtcCI6MTU0Mjg3NTE1NiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR,NOTIFY_ON_BLOCK,SAVED_THREADS,TIMELINE_COMMENT_UPDATES,SUGGESTED_CHANGES_UX_TEST,SUGGESTED_CHANGES_BATCH,RELATED_ISSUES,MARKETPLACE_INSIGHTS_V2">

  <meta name="html-safe-nonce" content="dd3d42d06facacbccf690d8b5c9ec1faf0f8008e">

  <meta http-equiv="x-pjax-version" content="a88ab92561553ff58e9966b4ca4d0f75">
  

      <link href="https://github.com/ywzhaiqi/userChromeJS/commits/master.atom" rel="alternate" title="Recent Commits to userChromeJS:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/ywzhaiqi/userChromeJS git https://github.com/ywzhaiqi/userChromeJS.git">

  <meta name="octolytics-dimension-user_id" content="3016136" /><meta name="octolytics-dimension-user_login" content="ywzhaiqi" /><meta name="octolytics-dimension-repository_id" content="9746015" /><meta name="octolytics-dimension-repository_nwo" content="ywzhaiqi/userChromeJS" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="9746015" /><meta name="octolytics-dimension-repository_network_root_nwo" content="ywzhaiqi/userChromeJS" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/ywzhaiqi/userChromeJS/blob/master/addmenuPlus/addMenuPlus.uc.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 ">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <nav class="d-flex" aria-label="Global">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="9746015" data-scoped-search-url="/ywzhaiqi/userChromeJS/search" data-unscoped-search-url="/search" action="/ywzhaiqi/userChromeJS/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=2Xtbmgce71stHIaofAqIlCDwHb28MlnjjlZc7i9vazAV8ENzK5o38+UDfKBnuW24dlFrlC6G7UQW523nnM0kjw=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item" role="option">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
                    </div>

                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" role="listbox" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
              <li class="position-relative">
                <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
                   Marketplace
</a>                  
              </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </nav>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:38108376" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown">
    <details class="details-overlay details-reset d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="ywzhaiqi/userChromeJS">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/ywzhaiqi/userChromeJS/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>


      </details-menu>
    </details>
  </li>

  <li class="dropdown">

    <details class="details-overlay details-reset d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@ZhuningS" class="avatar float-left mr-1" src="https://avatars3.githubusercontent.com/u/38108376?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>
      <details-menu class="dropdown-menu dropdown-menu-sw">
        <ul>
          <li class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/ZhuningS" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">ZhuningS</strong></a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="/ZhuningS" data-ga-click="Header, go to profile, text:your profile">Your profile</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/ZhuningS?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a></li>


          <li><a role="menuitem" class="dropdown-item" href="/ZhuningS?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a></li>
            <li><a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>
          <li class="dropdown-divider"></li>
          <li><a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a></li>
          <li><a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a></li>
          <li>
            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="4t92rA/HGE3hiDNa8Q2JdrZVa3PCWih9YwA9XLC41fQVpx6BToP5TK9IC51xvtUvAPbpAAJiU6V3vhLjlYiaGQ==" />
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
                Sign out
              </button>
</form>          </li>
        </ul>
      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="DHlV5/oSUMQZ6z/nag3tzQFMn5B/WFiz6AFQYvbMdgX7AT3Ku1axxVcrByDqvrGUt+8d479gI2v8v3/d0/w56A==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main " >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ChWUg4brvosz72tvL7Mn8Vcs8QT7xs765L4QL5VgoFVIj0A7P3u3AOPqi9VhPoYFecnZJbbX8GlCskUlPAoMIQ==" />      <input type="hidden" name="repository_id" id="repository_id" value="9746015" class="form-control" />

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="btn btn-sm btn-with-count select-menu-button" data-ga-click="Repository, click Watch settings, action:blob#show">
          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
        </summary>
        <details-menu class="select-menu-modal position-absolute mt-5" style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>


            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
      <a class="social-count js-social-count"
        href="/ywzhaiqi/userChromeJS/watchers"
        aria-label="56 users are watching this repository">
        56
      </a>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/ywzhaiqi/userChromeJS/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="FnzQSilTavuOyXKAoCJdz5UicZWTDrRcXYwD+h3uTAOWZxJSN9K0Q+OeKYk5B/wEiCHuMpEd1fLEYJKGvJMMNg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar ywzhaiqi/userChromeJS"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ywzhaiqi/userChromeJS/stargazers"
           aria-label="336 users starred this repository">
          336
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/ywzhaiqi/userChromeJS/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="nRaLjvneCaq8CxWd8uiapbsn6QszvHbehJwbe2T0adMAfOks/qDPKS9FFZvLjPP3vJoYfX97JdVxdZZ9C3zqrA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star ywzhaiqi/userChromeJS"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/ywzhaiqi/userChromeJS/stargazers"
           aria-label="336 users starred this repository">
          336
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/ywzhaiqi/userChromeJS/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="JwSVphJmy9LAlGVKkxnYWTtNi2X+xbF4L/xsjbc2WYzXmCNoJVvhdFrQQHJvGMLCZ/eTFA5cKNJUwCIGtnWZXQ==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of ywzhaiqi/userChromeJS to your account"
                aria-label="Fork your own copy of ywzhaiqi/userChromeJS to your account">
              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/ywzhaiqi/userChromeJS/network/members" class="social-count"
       aria-label="211 users forked this repository">
      211
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=3016136" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ywzhaiqi">ywzhaiqi</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/ywzhaiqi/userChromeJS">userChromeJS</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /ywzhaiqi/userChromeJS" href="/ywzhaiqi/userChromeJS">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /ywzhaiqi/userChromeJS/issues" href="/ywzhaiqi/userChromeJS/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">14</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /ywzhaiqi/userChromeJS/pulls" href="/ywzhaiqi/userChromeJS/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ywzhaiqi/userChromeJS/projects" href="/ywzhaiqi/userChromeJS/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /ywzhaiqi/userChromeJS/wiki" href="/ywzhaiqi/userChromeJS/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts /ywzhaiqi/userChromeJS/pulse" href="/ywzhaiqi/userChromeJS/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    

  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/ywzhaiqi/userChromeJS/blob/db7b53546739bb3f5aac6e451754ac5418af0d1a/addmenuPlus/addMenuPlus.uc.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:1eed69b3e319cb6879ce06b605b905ba -->

    

    <div class="file-navigation">
      
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs" role="tablist">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ywzhaiqi/userChromeJS/blob/master/addmenuPlus/addMenuPlus.uc.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

      <div class="BtnGroup float-right">
        <a href="/ywzhaiqi/userChromeJS/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/ywzhaiqi/userChromeJS"><span>userChromeJS</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/ywzhaiqi/userChromeJS/tree/master/addmenuPlus"><span>addmenuPlus</span></a></span><span class="separator">/</span><strong class="final-path">addMenuPlus.uc.js</strong>
      </div>
    </div>


    <include-fragment src="/ywzhaiqi/userChromeJS/contributors/master/addmenuPlus/addMenuPlus.uc.js" class="commit-tease commit-loader">
      <div>
        Fetching contributors&hellip;
      </div>

      <div class="commit-tease-contributors">
          <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
        <span class="loader-error">Cannot retrieve contributors at this time</span>
      </div>
</include-fragment>


    <div class="file ">
      <div class="file-header">
  <div class="file-actions">


    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/ywzhaiqi/userChromeJS/raw/master/addmenuPlus/addMenuPlus.uc.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/ywzhaiqi/userChromeJS/blame/master/addmenuPlus/addMenuPlus.uc.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/ywzhaiqi/userChromeJS/commits/master/addmenuPlus/addMenuPlus.uc.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/ywzhaiqi/userChromeJS?branch=master&amp;filepath=addmenuPlus%2FaddMenuPlus.uc.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/ywzhaiqi/userChromeJS/edit/master/addmenuPlus/addMenuPlus.uc.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Vde2wEzBtRvoYQiVEoh/VXVFA1RhjFlKHLvv2zna1LrLJ5mZhXTez5YQCn9QjVzh0kNNj0F1B4CXJH1Qb4g40Q==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/ywzhaiqi/userChromeJS/delete/master/addmenuPlus/addMenuPlus.uc.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="kYl8JrA5Fi25L3TO1HCMj0EDgxx6UmwutmzG1I3hxr+3JizW2ZAly9y86njgKaIclJYZK1fiYkkx2i/POHNjxw==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1228 lines (1099 sloc)
      <span class="file-info-divider"></span>
    51.4 KB
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ==UserScript==</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @name           addMenuPlus.uc.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @description    通过配置文件增加修改菜单，修改版</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @namespace      http://d.hatena.ne.jp/Griever/</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @author         Griever</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @include        main</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @license        MIT License</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @compatibility  Firefox 40</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @charset        UTF-8</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @version        2015.8.15</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @version        0.1.1</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @startup        window.addMenu.init();</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @shutdown       window.addMenu.destroy();</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @config         window.addMenu.edit(addMenu.FILE);</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @homepageURL    https://github.com/ywzhaiqi/userChromeJS/tree/master/addmenuPlus</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @ohomepageURL   https://github.com/Griever/userChromeJS/tree/master/addMenu</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @reviewURL      http://bbs.kafan.cn/thread-1554431-1-1.html</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @downloadURL    https://github.com/ywzhaiqi/userChromeJS/raw/master/addmenuPlus/addMenuPlus.uc.js</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.1.1 Places keywords API を使うようにした</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.1.0 menugroup をとりあえず利用できるようにした</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.9 Firefox 29 の Firefox Button 廃止に伴いファイルメニューに追加するように変更</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.8 Firefox 25 の getShortcutOrURI 廃止に仮対応</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.7 Firefox 21 の Favicon 周りの変更に対応</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.6 Firefox 19 に合わせて修正</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.5 Remove E4X</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.4 設定ファイルから CSS を追加できるようにした</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.4 label の無い menu を splitmenu 風の動作にした</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.4 Vista でアイコンがズレる問題を修正…したかも</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.4 %SEL% の改行が消えてしまうのを修正</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           0.0.3 keyword の新しい書式で古い書式が動かない場合があったのを修正</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           %URL_HTMLIFIED%, %EOL_ENCODE% が変換できなかったミスを修正</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           %LINK_OR_URL% 変数を作成（リンク URL がなければページの URL を返す）</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           タブの右クリックメニューでは %URL% や %SEL% はそのタブのものを返すようにした</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           keyword で &quot;g %URL%&quot; のような記述を可能にした</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> @note           ツールの再読み込みメニューの右クリックで設定ファイルを開くようにした</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> ==/UserScript==</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span>*** 説明 *****</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◆ 脚本说明 ◆</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c">通过配置文件自定义菜单</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c">在编写的时候，参考了 Copy URL Lite+，得到了作者允许。</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c">・http://www.code-404.net/articles/browsers/copy-url-lite</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◆ 如何使用？ ◆</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c">配置（_addmenu.js） 文件，请放在Chrome目录下。</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c">后缀名 .uc.js 可选。</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c">启动后，在浏览器中加载配置文件，并添加菜单。</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c">可以从“工具”菜单重新读取配置文件。</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◆ 格式 ◆</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c">page, tab, too, app 関数にメニューの素となるオブジェクトを渡す。</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c">オブジェクトのプロパティがそのまま menuitem の属性になります。</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○exec</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  启动外部应用程序。</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  パラメータは text プロパティを利用します。</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  自动显示该应用程序的图标。</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○keyword</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  指定了关键字的书签和搜索引擎。</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  text プロパティがあればそれを利用して検索などをします。</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  自动显示搜索引擎的图标。</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○text（変数が利用可能）</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  复制你想要的字符串到剪贴板。（Copy URL Lite+ 互換）</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  keyword, exec があればそれらの補助に使われます。</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○url（可用的变量）</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  打开你想要的网址。</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  内容によっては自動的にアイコンが付きます。</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○where</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  keyword, url でのページの開き方を指定できます（current, tab, tabshifted, window）</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  省略するとブックマークのように左クリックと中クリックを使い分けられます。</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○condition</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  メニューを表示する条件を指定します。（Copy URL Lite+ 互換）</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  省略すると url や text プロパティから自動的に表示/非表示が決まります。</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  select, link, mailto, image, media, input, noselect, nolink, nomailto, noimage, nomedia, noinput から組み合わせて使います。</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c">○oncommand, command</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c">  これらがある時は condition 以外の特殊なプロパティは無視されます。</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◆ サブメニュー ◆</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-c">PageMenu, TabMenu, ToolMenu, AppMenu 関数を使って自由に追加できます。</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◆ 利用可能な変数 ◆</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%EOL%            改行(\r\n)</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%TITLE%          ページタイトル</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%URL%            URI</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%SEL%            選択範囲の文字列</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%RLINK%          リンクアンカー先の URL</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%IMAGE_URL%      画像の URL</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%IMAGE_ALT%      画像の alt 属性</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%IMAGE_TITLE%    画像の title 属性</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%LINK%           リンクアンカー先の URL</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%LINK_TEXT%      リンクのテキスト</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%RLINK_TEXT%     リンクのテキスト</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%MEDIA_URL%      メディアの URL</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%CLIPBOARD%      クリップボードの内容</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%FAVICON%        Favicon の URL</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%EMAIL%          リンク先の E-mail アドレス</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%HOST%           ページのホスト(ドメイン)</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%LINK_HOST%      リンクのホスト(ドメイン)</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%RLINK_HOST%     リンクのホスト(ドメイン)</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%LINK_OR_URL%    リンクの URL が取れなければページの URL</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%RLINK_OR_URL%   リンクの URL が取れなければページの URL</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%XXX_HTMLIFIED%  HTML エンコードされた上記変数（XXX → TITLE などに読み替える）</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%XXX_HTML%       HTML エンコードされた上記変数</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%XXX_ENCODE%     URI  エンコードされた上記変数</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">◇ 簡易的な変数 ◇</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%h               ページのホスト(ドメイン)</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%i               画像の URL</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%l               リンクの URL</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%m               メディアの URL</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%p               クリップボードの内容</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%s               選択文字列</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%t               ページのタイトル</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c">%u               ページの URL</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c">基本的に Copy URL Lite+ の変数はそのまま使えます。</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c">大文字・小文字は区別しません。</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">css</span>){</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> useScraptchpad <span class="pl-k">=</span> <span class="pl-c1">true</span>;  <span class="pl-c"><span class="pl-c">//</span> 如果不存在编辑器，则使用代码片段速记器，否则设置编辑器路径</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> enableFileRefreshing <span class="pl-k">=</span> <span class="pl-c1">true</span>;  <span class="pl-c"><span class="pl-c">//</span> 打开右键菜单时，检查配置文件是否变化，可能会减慢速度</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> { classes<span class="pl-k">:</span> Cc, interfaces<span class="pl-k">:</span> Ci, utils<span class="pl-k">:</span> Cu, results<span class="pl-k">:</span> Cr } <span class="pl-k">=</span> Components;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">addMenu</span>) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-smi">addMenu</span>.<span class="pl-en">destroy</span>();</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">delete</span> <span class="pl-c1">window</span>.<span class="pl-smi">addMenu</span>;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.<span class="pl-smi">addMenu</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">get</span> <span class="pl-en">prefs</span>() {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">prefs</span>;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">prefs</span> <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">prefs</span>.<span class="pl-en">getBranch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>addMenu.<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">get</span> <span class="pl-en">FILE</span>() {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> aFile, path;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> addMenu.FILE_PATH があればそれを使う</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">            path <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">prefs</span>.<span class="pl-en">getCharPref</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>FILE_PATH<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">            path <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_addmenu.js<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">        aFile <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">dirsvc</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>UChrm<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">aFile</span>.<span class="pl-en">appendRelativePath</span>(path);</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">exists</span>()) {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">saveFile</span>(aFile, <span class="pl-s"><span class="pl-pds">&#39;</span>// 这是一个 addMenuPlus 配置文件<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>// 请到 http://ywzhaiqi.github.io/addMenu_creator/ 生成配置文件<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>tab({<span class="pl-cce">\n</span>    label: &quot;addMenuPlus 配置&quot;,<span class="pl-cce">\n</span>    oncommand: &quot;addMenu.edit(addMenu.FILE);&quot;<span class="pl-cce">\n</span>});<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>目前 addMenuPlus 的配置文件为空，请在打开的链接中生成配置并放入配置文件。<span class="pl-cce">\n</span>通过右键标签打开配置文件。<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://ywzhaiqi.github.io/addMenu_creator/<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">openUILinkIn</span>(url, <span class="pl-s"><span class="pl-pds">&#39;</span>tab<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">_modifiedTime</span> <span class="pl-k">=</span> <span class="pl-smi">aFile</span>.<span class="pl-smi">lastModifiedTime</span>;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-c1">FILE</span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">FILE</span> <span class="pl-k">=</span> aFile;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">get</span> <span class="pl-en">focusedWindow</span>() {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> gContextMenu <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">gContextMenu</span>.<span class="pl-c1">target</span> <span class="pl-k">?</span> <span class="pl-smi">gContextMenu</span>.<span class="pl-c1">target</span>.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">defaultView</span> <span class="pl-k">:</span> content;</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">init</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ((<span class="pl-s"><span class="pl-pds">&quot;</span>isInitialized<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> <span class="pl-smi">Services</span>.<span class="pl-smi">search</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">Services</span>.<span class="pl-smi">search</span>.<span class="pl-smi">isInitialized</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Services</span>.<span class="pl-smi">search</span>.<span class="pl-en">init</span>(<span class="pl-c1">this</span>.<span class="pl-smi">init</span>.<span class="pl-en">bind</span>(<span class="pl-c1">this</span>));</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> he <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(?:_HTML(?:IFIED)?|_ENCODE)?<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rTITLE     <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%TITLE<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%t<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rTITLES    <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%TITLES<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%t<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rURL       <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%(?:R?LINK_OR_)?URL<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%u<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rHOST      <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%HOST<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%h<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rSEL       <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%SEL<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%s<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rLINK      <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%R?LINK(?:_TEXT|_HOST)?<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%l<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rIMAGE     <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE(?:_URL|_ALT|_TITLE)<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%i<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rIMAGE_BASE64 <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_BASE64<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%i<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rMEDIA     <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%MEDIA_URL<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%m<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rCLIPBOARD <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%CLIPBOARD<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%|%p<span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rFAVICON   <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rEMAIL     <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%EMAIL<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rExt       <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%EOL<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rFAVICON_BASE64 <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON_BASE64<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> rRLT_OR_UT <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLT_OR_UT<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span> he <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>;  <span class="pl-c"><span class="pl-c">//</span> 链接文本或网页标题</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rTITLE</span>     <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rTITLE, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rTITLES</span>    <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rTITLES, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rURL</span>       <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rURL, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rHOST</span>      <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rHOST, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rSEL</span>       <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rSEL, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rLINK</span>      <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rLINK, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rIMAGE</span>     <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rIMAGE, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rMEDIA</span>     <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rMEDIA, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rCLIPBOARD</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rCLIPBOARD, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rFAVICON</span>   <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rFAVICON, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rEMAIL</span>     <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rEMAIL, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rExt</span>       <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rExt, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rFAVICON_BASE64</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rFAVICON_BASE64, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rIMAGE_BASE64</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rIMAGE_BASE64, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">rRLT_OR_UT</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(rRLT_OR_UT, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">regexp</span>     <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">            [rTITLE, rTITLES, rURL, rHOST, rSEL, rLINK, rIMAGE, rIMAGE_BASE64, rMEDIA, rCLIPBOARD, rFAVICON, rFAVICON_BASE64, rEMAIL, rExt, rRLT_OR_UT].<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&quot;</span>ig<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> ins;</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>context-viewinfo<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$C</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>, { id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-page-insertpoint<span class="pl-pds">&quot;</span></span>, class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-insert-point<span class="pl-pds">&quot;</span></span> }), <span class="pl-smi">ins</span>.<span class="pl-c1">nextSibling</span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>context_closeTab<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$C</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>, { id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-tab-insertpoint<span class="pl-pds">&quot;</span></span>, class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-insert-point<span class="pl-pds">&quot;</span></span> }), <span class="pl-smi">ins</span>.<span class="pl-c1">nextSibling</span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>prefSep<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>webDeveloperMenu<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$C</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>, { id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-tool-insertpoint<span class="pl-pds">&quot;</span></span>, class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-insert-point<span class="pl-pds">&quot;</span></span> }), <span class="pl-smi">ins</span>.<span class="pl-c1">nextSibling</span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>appmenu-quit<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menu_FileQuitItem<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$C</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>, { id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-app-insertpoint<span class="pl-pds">&quot;</span></span>, class<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-insert-point<span class="pl-pds">&quot;</span></span> }), ins);</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>devToolsSeparator<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-en">$C</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuitem<span class="pl-pds">&quot;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">            id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-rebuild<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">            label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>AddMenuPlus<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">            tooltiptext<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>左键：重载配置<span class="pl-cce">\n</span>右键：编辑配置<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            oncommand<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>setTimeout(function(){ addMenu.rebuild(true); }, 10);<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">            onclick<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>if (event.button == 2) { event.preventDefault(); addMenu.edit(addMenu.FILE); }<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        }), ins);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>contentAreaContextMenu<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabContextMenu<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menu_ToolsPopup<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-c1">style</span> <span class="pl-k">=</span> <span class="pl-en">addStyle</span>(css);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">rebuild</span>();</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">uninit</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>contentAreaContextMenu<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabContextMenu<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menu_ToolsPopup<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">this</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">destroy</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">uninit</span>();</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">removeMenuitem</span>();</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#addMenu-rebuild, .addMenu-insert-point<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>) e.parentNode.removeChild(e));</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">        if (this.style &amp;&amp; this.style.parentNode) this.style.parentNode.removeChild(this.style);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">        if (this.style2 &amp;&amp; this.style2.parentNode) this.style2.parentNode.removeChild(this.style2);</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">handleEvent</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">switch</span>(<span class="pl-c1">event</span>.<span class="pl-c1">type</span>){</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>popupshowing<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-c1">target</span> <span class="pl-k">!=</span> <span class="pl-c1">event</span>.<span class="pl-smi">currentTarget</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (enableFileRefreshing) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-en">updateModifiedFile</span>();</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-c1">id</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>contentAreaContextMenu<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> state <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onTextInput</span>)</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">isContentSelected</span> <span class="pl-k">||</span> <span class="pl-smi">gContextMenu</span>.<span class="pl-smi">isTextSelected</span>)</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onLink</span>)</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onMailtoLink</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>mailto<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>link<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onCanvas</span>)</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>canvas image<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onImage</span>)</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onVideo</span> <span class="pl-k">||</span> <span class="pl-smi">gContextMenu</span>.<span class="pl-smi">onAudio</span>)</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">state</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>media<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">event</span>.<span class="pl-smi">currentTarget</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>addMenu<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">state</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c1">this</span>.<span class="pl-smi">customShowings</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>){</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> curItem <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">item</span>;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c1">eval</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">obj</span>.<span class="pl-smi">fnSource</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>).call(curItem, curItem)<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">                        } <span class="pl-k">catch</span>(ex) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">                            <span class="pl-en">console</span>.<span class="pl-c1">error</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenuPlus 自定义显示错误<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">obj</span>.<span class="pl-smi">fnSource</span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">                        }</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">updateModifiedFile</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-c1">FILE</span>.<span class="pl-en">exists</span>()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_modifiedTime</span> <span class="pl-k">!=</span> <span class="pl-c1">this</span>.<span class="pl-c1">FILE</span>.<span class="pl-smi">lastModifiedTime</span>) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">_modifiedTime</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">FILE</span>.<span class="pl-smi">lastModifiedTime</span>;</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){ <span class="pl-smi">addMenu</span>.<span class="pl-en">rebuild</span>(<span class="pl-c1">true</span>); }, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">onCommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> menuitem <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> text     <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> keyword  <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keyword<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> url      <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>url<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> where    <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>where<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> exec     <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>exec<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (keyword) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> param <span class="pl-k">=</span> (text <span class="pl-k">?</span> (text <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">convertText</span>(text)) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> engine <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">search</span>.<span class="pl-en">getEngineByAlias</span>(keyword);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (engine) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> submission <span class="pl-k">=</span> <span class="pl-smi">engine</span>.<span class="pl-en">getSubmission</span>(param);</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-en">openCommand</span>(<span class="pl-c1">event</span>, <span class="pl-smi">submission</span>.<span class="pl-smi">uri</span>.<span class="pl-smi">spec</span>, where);</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">PlacesUtils</span>.<span class="pl-smi">keywords</span>.<span class="pl-en">fetch</span>(keyword<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">then</span>(<span class="pl-smi">entry</span> <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span>entry) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> 文字化けの心配が…</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> newurl <span class="pl-k">=</span> <span class="pl-smi">entry</span>.<span class="pl-smi">url</span>.<span class="pl-c1">href</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>%s<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">encodeURIComponent</span>(param));</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">this</span>.<span class="pl-en">openCommand</span>(<span class="pl-c1">event</span>, newurl, where);</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (url)</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">openCommand</span>(<span class="pl-c1">event</span>, <span class="pl-c1">this</span>.<span class="pl-en">convertText</span>(url), where);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (exec)</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">exec</span>(exec, <span class="pl-c1">this</span>.<span class="pl-en">convertText</span>(text));</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (text)</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">copy</span>(<span class="pl-c1">this</span>.<span class="pl-en">convertText</span>(text));</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">openCommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>, <span class="pl-smi">url</span>, <span class="pl-smi">where</span>, <span class="pl-smi">postData</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> uri;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">            uri <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">io</span>.<span class="pl-en">newURI</span>(url, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">log</span>(<span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>URL 不正确: <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> url);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">uri</span>.<span class="pl-c1">scheme</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>javascript<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">loadURI</span>(url);</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (where)</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">openUILinkIn</span>(<span class="pl-smi">uri</span>.<span class="pl-smi">spec</span>, where, <span class="pl-c1">false</span>, postData <span class="pl-k">||</span> <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">==</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">openNewTabWith</span>(<span class="pl-smi">uri</span>.<span class="pl-smi">spec</span>);</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-en">openUILink</span>(<span class="pl-smi">uri</span>.<span class="pl-smi">spec</span>, <span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">exec</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>, <span class="pl-smi">arg</span>){</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> file    <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/file/local;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-c1">process</span> <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/process/util;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIProcess</span>);</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> a;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> arg <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> arg <span class="pl-k">instanceof</span> <span class="pl-c1">String</span>) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                a <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>)</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">Array</span>.<span class="pl-en">isArray</span>(arg)) {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">                a <span class="pl-k">=</span> arg;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">                a <span class="pl-k">=</span> [arg];</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">file</span>.<span class="pl-en">initWithPath</span>(path);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">file</span>.<span class="pl-en">exists</span>()) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">Cu</span>.<span class="pl-en">reportError</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>File Not Found: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> path);</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">file</span>.<span class="pl-en">isExecutable</span>()) {</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">process</span>.<span class="pl-en">init</span>(file);</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">process</span>.<span class="pl-en">runw</span>(<span class="pl-c1">false</span>, a, <span class="pl-smi">a</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">file</span>.<span class="pl-en">launch</span>();</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">log</span>(e);</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">handleRelativePath</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">path</span>) {</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (path) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">            path <span class="pl-k">=</span> <span class="pl-smi">path</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\/</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span>).<span class="pl-en">toLocaleLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> ffdir <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/file/directory_service;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsIProperties</span>).<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ProfD<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsILocalFile</span>).<span class="pl-smi">path</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-cce">\\</span>)<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(path)) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> ffdir <span class="pl-k">+</span> path;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">            }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> path;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">rebuild</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">isAlert</span>) {</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aFile <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">FILE</span>;</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>aFile <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">exists</span>() <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">isFile</span>()) {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">log</span>(aFile<span class="pl-k">?</span> <span class="pl-smi">aFile</span>.<span class="pl-smi">path</span> <span class="pl-k">:</span> <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>配置文件<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span>  <span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> 不存在<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aiueo <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            { current<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>page<span class="pl-pds">&quot;</span></span>, submenu<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>PageMenu<span class="pl-pds">&quot;</span></span>, insertId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-page-insertpoint<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">            { current<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tab<span class="pl-pds">&quot;</span></span> , submenu<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>TabMenu<span class="pl-pds">&quot;</span></span> , insertId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-tab-insertpoint<span class="pl-pds">&quot;</span></span>  },</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">            { current<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tool<span class="pl-pds">&quot;</span></span>, submenu<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ToolMenu<span class="pl-pds">&quot;</span></span>, insertId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-tool-insertpoint<span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">            { current<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>app<span class="pl-pds">&quot;</span></span> , submenu<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>AppMenu<span class="pl-pds">&quot;</span></span> , insertId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-app-insertpoint<span class="pl-pds">&quot;</span></span>  },</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">            { current<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>group<span class="pl-pds">&quot;</span></span>, submenu<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>GroupMenu<span class="pl-pds">&quot;</span></span> , insertId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu-page-insertpoint<span class="pl-pds">&quot;</span></span>  },</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">        ];</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-en">loadText</span>(aFile);</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> sandbox <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Cu.Sandbox</span>( <span class="pl-k">new</span> <span class="pl-en">XPCNativeWrapper</span>(<span class="pl-c1">window</span>) );</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Components</span> <span class="pl-k">=</span> Components;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Cc</span> <span class="pl-k">=</span> Cc;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Ci</span> <span class="pl-k">=</span> Ci;</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Cr</span> <span class="pl-k">=</span> Cr;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Cu</span> <span class="pl-k">=</span> Cu;</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">Services</span> <span class="pl-k">=</span> Services;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">locale</span> <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">prefs</span>.<span class="pl-en">getCharPref</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>general.useragent.locale<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> includeSrc <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-en">include</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">aLeafName</span>) {</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-en">loadFile</span>(aLeafName);</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (data)</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">                includeSrc <span class="pl-k">+=</span> data <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">sandbox</span>.<span class="pl-smi">_css</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">aiueo</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>({ current, submenu }){</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (submenu <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>GroupMenu<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">				sandbox[current] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">itemObj</span>) {</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">ps</span>(itemObj, sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current]);</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">			sandbox[submenu] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">menuObj</span>) {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>menuObj)</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">					menuObj <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">menuObj</span>.<span class="pl-smi">_items</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (submenu <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>GroupMenu<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">menuObj</span>.<span class="pl-smi">_group</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">				sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current].<span class="pl-c1">push</span>(menuObj);</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">itemObj</span>) {</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">ps</span>(itemObj, <span class="pl-smi">menuObj</span>.<span class="pl-smi">_items</span>);</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">		}, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">ps</span>(<span class="pl-smi">item</span>, <span class="pl-smi">array</span>) {</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">            (<span class="pl-s"><span class="pl-pds">&quot;</span>join<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> item <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>unshift<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> item) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">                [].<span class="pl-smi">push</span>.<span class="pl-c1">apply</span>(array, item) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">array</span>.<span class="pl-c1">push</span>(item);</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> lineFinder <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>();</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Cu</span>.<span class="pl-en">evalInSandbox</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>function css(code){ this._css.push(code+&#39;&#39;) };<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> data, sandbox, <span class="pl-s"><span class="pl-pds">&quot;</span>1.8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Cu</span>.<span class="pl-en">evalInSandbox</span>(includeSrc, sandbox, <span class="pl-s"><span class="pl-pds">&quot;</span>1.8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> line <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">lineNumber</span> <span class="pl-k">-</span> <span class="pl-smi">lineFinder</span>.<span class="pl-smi">lineNumber</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-c1">alert</span>(e <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span>请重新检查配置文件第 <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> line <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> 行<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">null</span>, <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">addMenu</span>.<span class="pl-en">edit</span>(<span class="pl-smi">addMenu</span>.<span class="pl-c1">FILE</span>, line);</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">log</span>(e);</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">style2</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">style2</span>.<span class="pl-c1">parentNode</span>)</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">style2</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(<span class="pl-c1">this</span>.<span class="pl-smi">style2</span>);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">sandbox</span>.<span class="pl-smi">_css</span>.<span class="pl-c1">length</span>)</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">style2</span> <span class="pl-k">=</span> <span class="pl-en">addStyle</span>(<span class="pl-smi">sandbox</span>.<span class="pl-smi">_css</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">removeMenuitem</span>();</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">customShowings</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">aiueo</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>({ current, submenu, insertId }){</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current] <span class="pl-k">||</span> sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current].<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> insertPoint <span class="pl-k">=</span> <span class="pl-en">$</span>(insertId);</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">createMenuitem</span>(sandbox[<span class="pl-s"><span class="pl-pds">&quot;</span>_<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> current], insertPoint);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (isAlert) <span class="pl-c1">this</span>.<span class="pl-c1">alert</span>(<span class="pl-en">U</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>配置已经重新载入<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">newGroupMenu</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">menuObj</span>) {</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>menugroup<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(menuObj).<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> val <span class="pl-k">=</span> menuObj[key];</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_items<span class="pl-pds">&quot;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_group<span class="pl-pds">&quot;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> val <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">				menuObj[key] <span class="pl-k">=</span> val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-c1">toSource</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call(this, event);<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">group</span>.<span class="pl-c1">setAttribute</span>(key, val);</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">		}, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> cls <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-smi">classList</span>;</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenu<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> 表示 / 非表示の設定</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">menuObj</span>.<span class="pl-smi">condition</span>)</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">setCondition</span>(group, <span class="pl-smi">menuObj</span>.<span class="pl-smi">condition</span>);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">menuObj</span>.<span class="pl-smi">_items</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">group</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>.<span class="pl-en">newMenuitem</span>(obj, { isMenuGroup<span class="pl-k">:</span> <span class="pl-c1">true</span> }));</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">		}, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> group;</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">newMenu</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">menuObj</span>) {</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">menuObj</span>.<span class="pl-smi">_group</span>) {</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">newGroupMenu</span>(menuObj);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> menu <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menu<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> popup <span class="pl-k">=</span> <span class="pl-smi">menu</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menupopup<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">let</span> [key, val] <span class="pl-k">in</span> <span class="pl-en">Iterator</span>(menuObj)) {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>_items<span class="pl-pds">&quot;</span></span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>onshowing<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-smi">customShowings</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                    item<span class="pl-k">:</span> menu,</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">                    fnSource<span class="pl-k">:</span> <span class="pl-smi">menuObj</span>.<span class="pl-smi">onshowing</span>.<span class="pl-c1">toSource</span>()</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">delete</span> <span class="pl-smi">menuObj</span>.<span class="pl-smi">onshowing</span>;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> val <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">				menuObj[key] <span class="pl-k">=</span> val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-c1">toSource</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call(this, event);<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(key, val);</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> cls <span class="pl-k">=</span> <span class="pl-smi">menu</span>.<span class="pl-smi">classList</span>;</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>addMenu<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menu-iconic<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 表示 / 非表示の設定</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">menuObj</span>.<span class="pl-smi">condition</span>)</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">setCondition</span>(menu, <span class="pl-smi">menuObj</span>.<span class="pl-smi">condition</span>);</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">menuObj</span>.<span class="pl-smi">_items</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">popup</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>.<span class="pl-en">newMenuitem</span>(obj));</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">		}, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> menu に label が無い場合、最初の menuitem の label 等を持ってくる</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> menu 部分をクリックで実行できるようにする(splitmenu みたいな感じ)</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">menu</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> firstItem <span class="pl-k">=</span> <span class="pl-smi">menu</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>menuitem<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (firstItem) {</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> command <span class="pl-k">=</span> <span class="pl-smi">firstItem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>command<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (command)</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">                    firstItem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(command) <span class="pl-k">||</span> firstItem;</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">                [<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>accesskey<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>image<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>icon<span class="pl-pds">&#39;</span></span>].<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">n</span>){</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">menu</span>.<span class="pl-c1">hasAttribute</span>(n) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">firstItem</span>.<span class="pl-c1">hasAttribute</span>(n))</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(n, <span class="pl-smi">firstItem</span>.<span class="pl-c1">getAttribute</span>(n));</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>onclick<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>\</span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    if (event.target != event.currentTarget) return;\</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    var firstItem = event.currentTarget.querySelector(&#39;menuitem&#39;);\</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    if (!firstItem) return;\</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    if (event.button === 1) {\</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                        checkForMiddleClick(firstItem, event);\</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    } else {\</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                        firstItem.doCommand();\</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                        closeMenus(event.currentTarget);\</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                    }\</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line"><span class="pl-s">                <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> menu;</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">newMenuitem</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">opt</span>) {</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">        opt <span class="pl-k">||</span> (opt <span class="pl-k">=</span> {});</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> label == separator か必要なプロパティが足りない場合は区切りとみなす</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-c1">label</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>separator<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">		    (<span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-c1">label</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">image</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-c1">text</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">oncommand</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">command</span>)) {</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">			menuitem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">oncommand</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-smi">command</span>) {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> org <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">command</span> <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">command</span>) <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (org <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">org</span>.<span class="pl-c1">localName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">				menuitem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">				menuitem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuitem<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">command</span>)</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">menuitem</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>command<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">obj</span>.<span class="pl-smi">command</span>);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-c1">label</span>)</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">obj</span>.<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">command</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-smi">oncommand</span>;</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">			menuitem <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuitem<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> property fix</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-c1">label</span>)</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">obj</span>.<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">exec</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>;</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-c1">text</span>) {</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> index <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span>.<span class="pl-c1">search</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (index <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">obj</span>.<span class="pl-c1">text</span> <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span>.<span class="pl-c1">substr</span>(index).<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span> <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, index);</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">where</span> <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">\b</span>(tab<span class="pl-k">|</span>tabshifted<span class="pl-k">|</span>window<span class="pl-k">|</span>current)<span class="pl-k">\b</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">where</span>))</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">obj</span>.<span class="pl-smi">where</span> <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">where</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>acceltext<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> obj))</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">obj</span>.<span class="pl-smi">acceltext</span> <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">where</span>;</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">condition</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>)) {</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> 表示 / 非表示の自動設定</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> condition <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">rSEL</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>))   condition <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> select<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">rLINK</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>))  condition <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> link<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">rEMAIL</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>)) condition <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> mailto<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">rIMAGE</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>)) condition <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> image<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">rMEDIA</span>.<span class="pl-c1">test</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">url</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-c1">text</span>)) condition <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> media<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (condition)</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">obj</span>.<span class="pl-smi">condition</span> <span class="pl-k">=</span> condition;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">exec</span>){</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">obj</span>.<span class="pl-smi">exec</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">handleRelativePath</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">exec</span>);</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 右键第一层菜单添加 onpopupshowing 事件</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">opt</span>.<span class="pl-smi">isTopMenuitem</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">obj</span>.<span class="pl-smi">onshowing</span>) {</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-smi">customShowings</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">                item<span class="pl-k">:</span> menuitem,</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">                fnSource<span class="pl-k">:</span> <span class="pl-smi">obj</span>.<span class="pl-smi">onshowing</span>.<span class="pl-c1">toSource</span>()</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">delete</span> <span class="pl-smi">obj</span>.<span class="pl-smi">onshowing</span>;</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> obj を属性にする</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">let</span> [key, val] <span class="pl-k">in</span> <span class="pl-en">Iterator</span>(obj)) {</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>command<span class="pl-pds">&quot;</span></span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">typeof</span> val <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">				obj[key] <span class="pl-k">=</span> val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-c1">toSource</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call(this, event);<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">menuitem</span>.<span class="pl-c1">setAttribute</span>(key, val);</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> cls <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-smi">classList</span>;</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>addMenu<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>menuitem-iconic<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 表示 / 非表示の設定</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">condition</span>)</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">this</span>.<span class="pl-en">setCondition</span>(menuitem, <span class="pl-smi">obj</span>.<span class="pl-smi">condition</span>);</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> separator はここで終了</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">menuitem</span>.<span class="pl-c1">localName</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>menuseparator<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">onclick</span>)</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">menuitem</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>onclick<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>checkForMiddleClick(this, event)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 给 MenuGroup 的菜单加上 tooltiptext</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">opt</span>.<span class="pl-smi">isMenuGroup</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">obj</span>.<span class="pl-smi">tooltiptext</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">obj</span>.<span class="pl-c1">label</span>) {</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">menuitem</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tooltiptext<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">obj</span>.<span class="pl-c1">label</span>);</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> oncommand, command はここで終了</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">oncommand</span> <span class="pl-k">||</span> <span class="pl-smi">obj</span>.<span class="pl-smi">command</span>)</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">menuitem</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>oncommand<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu.onCommand(event);<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 可能ならばアイコンを付ける</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">setIcon</span>(menuitem, obj);</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">createMenuitem</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">itemArray</span>, <span class="pl-smi">insertPoint</span>) {</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> chldren <span class="pl-k">=</span> <span class="pl-en">$A</span>(<span class="pl-smi">insertPoint</span>.<span class="pl-c1">parentNode</span>.<span class="pl-smi">children</span>);</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">let</span> [, obj] <span class="pl-k">in</span> <span class="pl-en">Iterator</span>(itemArray)) {</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>obj) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> clone menuitem and set attribute</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> (menuitem <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">id</span>))){</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> dupMenuitem;</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> isDupMenu <span class="pl-k">=</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">clone</span> <span class="pl-k">!=</span> <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (isDupMenu) {</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">                    dupMenuitem <span class="pl-k">=</span> <span class="pl-smi">menuitem</span>.<span class="pl-c1">cloneNode</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> 隐藏原菜单</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> menuitem.classList.add(&quot;addMenuHide&quot;);</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">                }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">                    dupMenuitem <span class="pl-k">=</span> menuitem;</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">for</span> (<span class="pl-k">let</span> [key, val] <span class="pl-k">in</span> <span class="pl-en">Iterator</span>(obj)) {</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> val <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">                        obj[key] <span class="pl-k">=</span> val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">val</span>.<span class="pl-c1">toSource</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>).call(this, event);<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">dupMenuitem</span>.<span class="pl-c1">setAttribute</span>(key, val);</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> 如果没有则添加 menuitem-iconic 或 menu-iconic，给菜单添加图标用。</span></td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> type <span class="pl-k">=</span> <span class="pl-smi">dupMenuitem</span>.<span class="pl-c1">nodeName</span>,</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">                    cls <span class="pl-k">=</span> <span class="pl-smi">dupMenuitem</span>.<span class="pl-smi">classList</span>;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>menuitem<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> type <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>menu<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">cls</span>.<span class="pl-c1">contains</span>(type <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-iconic<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(type <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-iconic<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">cls</span>.<span class="pl-c1">contains</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenu<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenu<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>isDupMenu <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">cls</span>.<span class="pl-c1">contains</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenuNot<span class="pl-pds">&#39;</span></span>))</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">cls</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenuNot<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> // 没有插入位置的默认放在原来那个菜单的后面</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> if(isDupMenu &amp;&amp; !obj.insertAfter &amp;&amp; !obj.insertBefore &amp;&amp; !obj.position){</span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span>     obj.insertAfter = obj.id;</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> }</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> noMove <span class="pl-k">=</span> <span class="pl-k">!</span>isDupMenu;</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">insertMenuItem</span>(obj, dupMenuitem, noMove);</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">            menuitem <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">_items</span> <span class="pl-k">?</span> <span class="pl-c1">this</span>.<span class="pl-en">newMenu</span>(obj) <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-en">newMenuitem</span>(obj, { isTopMenuitem<span class="pl-k">:</span> <span class="pl-c1">true</span> });</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">insertMenuItem</span>(obj, menuitem);</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">insertMenuItem</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">menuitem</span>, <span class="pl-smi">noMove</span>){</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> ins;</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">insertAfter</span> <span class="pl-k">&amp;&amp;</span> (ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">insertAfter</span>))) {</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(menuitem, <span class="pl-smi">ins</span>.<span class="pl-c1">nextSibling</span>);</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">insertBefore</span> <span class="pl-k">&amp;&amp;</span> (ins <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">insertBefore</span>))) {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(menuitem, ins);</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">position</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">position</span>, <span class="pl-c1">10</span>) <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">                (ins <span class="pl-k">=</span> chldren[<span class="pl-c1">parseInt</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">position</span>, <span class="pl-c1">10</span>)<span class="pl-k">-</span><span class="pl-c1">1</span>]) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">ins</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(menuitem, ins)<span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">insertPoint</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">appendChild</span>(menuitem);</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>noMove) {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">insertPoint</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">insertBefore</span>(menuitem, insertPoint);</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">removeMenuitem</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> <span class="pl-en">remove</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">contains</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenuNot<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">e</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">removeChild</span>(e);</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>menu.addMenu, menugroup.addMenu<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">forEach</span>(remove);</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.addMenu<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">forEach</span>(remove);</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 恢复原隐藏菜单</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.addMenuHide<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>) { <span class="pl-smi">e</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>addMenuHide<span class="pl-pds">&#39;</span></span>);} );</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setIcon</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">menu</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">menu</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">menu</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">menu</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>icon<span class="pl-pds">&quot;</span></span>))</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">exec</span>) {</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> aFile <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/file/local;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">aFile</span>.<span class="pl-en">initWithPath</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">exec</span>);</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span> (e) {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> if (!aFile.exists() || !aFile.isExecutable()) {</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">exists</span>()) {</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>disabled<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>true<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">let</span> fileURL <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">io</span>.<span class="pl-en">getProtocolHandler</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>file<span class="pl-pds">&quot;</span></span>).<span class="pl-en">QueryInterface</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIFileProtocolHandler</span>).<span class="pl-en">getURLSpecFromFile</span>(aFile);</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>moz-icon://<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> fileURL <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?size=16<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span>) {</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> engine <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">search</span>.<span class="pl-en">getEngineByAlias</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span>);</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (engine <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">engine</span>.<span class="pl-smi">iconURI</span>) {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">engine</span>.<span class="pl-smi">iconURI</span>.<span class="pl-smi">spec</span>);</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-en">setIconCallback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">url</span>) {</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> uri, iconURI;</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">				uri <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">io</span>.<span class="pl-en">newURI</span>(url, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">catch</span> (e) { }</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>uri) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>scheme<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">uri</span>.<span class="pl-c1">scheme</span>);</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">PlacesUtils</span>.<span class="pl-smi">favicons</span>.<span class="pl-en">getFaviconDataForPage</span>(uri, {</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">onComplete</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">aURI</span>, <span class="pl-smi">aDataLen</span>, <span class="pl-smi">aData</span>, <span class="pl-smi">aMimeType</span>) {</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">						<span class="pl-c"><span class="pl-c">//</span> javascript: URI の host にアクセスするとエラー</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>, aURI <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">aURI</span>.<span class="pl-smi">spec</span><span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&quot;</span>moz-anno:favicon:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">aURI</span>.<span class="pl-smi">spec</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">							<span class="pl-s"><span class="pl-pds">&quot;</span>moz-anno:favicon:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">uri</span>.<span class="pl-c1">scheme</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>://<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">uri</span>.<span class="pl-c1">host</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/favicon.ico<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">catch</span> (e) { }</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">PlacesUtils</span>.<span class="pl-smi">keywords</span>.<span class="pl-en">fetch</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">keyword</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">then</span>(<span class="pl-smi">entry</span> <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> url;</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (entry) {</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">				url <span class="pl-k">=</span> <span class="pl-smi">entry</span>.<span class="pl-smi">url</span>.<span class="pl-c1">href</span>;</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">				url <span class="pl-k">=</span> (<span class="pl-smi">obj</span>.<span class="pl-smi">url</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-c1">this</span>.<span class="pl-smi">regexp</span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setIconCallback</span>(url);</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">		}, <span class="pl-smi">e</span> <span class="pl-k">=&gt;</span> {<span class="pl-en">console</span>.<span class="pl-c1">log</span>(e) }).<span class="pl-c1">catch</span>(<span class="pl-smi">e</span><span class="pl-k">=&gt;</span>{});</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">setCondition</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">menu</span>, <span class="pl-smi">condition</span>) {</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>normal<span class="pl-k">\b</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(condition)) {</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">menu</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>condition<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>normal<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> match <span class="pl-k">=</span> <span class="pl-smi">condition</span>.<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">\b</span>(?:no)<span class="pl-k">?</span>(?:select<span class="pl-k">|</span>link<span class="pl-k">|</span>mailto<span class="pl-k">|</span>image<span class="pl-k">|</span>canvas<span class="pl-k">|</span>media<span class="pl-k">|</span>input)<span class="pl-k">\b</span><span class="pl-pds">/</span>ig</span>);</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>match <span class="pl-k">||</span> <span class="pl-k">!</span>match[<span class="pl-c1">0</span>])</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">            match <span class="pl-k">=</span> <span class="pl-smi">match</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">c</span>,<span class="pl-smi">i</span>,<span class="pl-smi">a</span>) a.indexOf(c) === i);</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">            menu.setAttribute(&quot;condition&quot;, match.join(&quot; &quot;));</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">convertText</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> context <span class="pl-k">=</span> gContextMenu <span class="pl-k">||</span> { <span class="pl-c"><span class="pl-c">//</span> とりあえずエラーにならないようにオブジェクトをでっち上げる</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">            link<span class="pl-k">:</span> { href<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, host<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">            target<span class="pl-k">:</span> { alt<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> },</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">__noSuchMethod__</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">id</span>, <span class="pl-smi">args</span>) &quot;&quot;,</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> tab <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-smi">popupNode</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">document</span>.<span class="pl-smi">popupNode</span>.<span class="pl-c1">localName</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tab<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-smi">popupNode</span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> win <span class="pl-k">=</span> tab <span class="pl-k">?</span> <span class="pl-smi">tab</span>.<span class="pl-smi">linkedBrowser</span>.<span class="pl-smi">contentWindow</span> <span class="pl-k">:</span> <span class="pl-c1">this</span>.<span class="pl-smi">focusedWindow</span>;</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">text</span>.<span class="pl-c1">replace</span>(<span class="pl-c1">this</span>.<span class="pl-smi">regexp</span>, <span class="pl-k">function</span>(<span class="pl-smi">str</span>){</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">            str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">toUpperCase</span>().<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%LINK<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">str</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_HTMLIFIED<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-en">htmlEscape</span>(<span class="pl-en">convert</span>(<span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_HTMLIFIED<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">str</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_HTML<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-en">htmlEscape</span>(<span class="pl-en">convert</span>(<span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_HTML<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">str</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_ENCODE<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">encodeURIComponent</span>(<span class="pl-en">convert</span>(<span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>_ENCODE<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)));</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">convert</span>(str);</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">convert</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">switch</span>(str) {</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%T<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-smi">document</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%TITLE%<span class="pl-pds">&quot;</span></span>       : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-smi">document</span>.<span class="pl-c1">title</span>;</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%TITLES%<span class="pl-pds">&quot;</span></span>      : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-smi">document</span>.<span class="pl-c1">title</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span>-<span class="pl-c1">\s.</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-c1">[<span class="pl-k">^</span><span class="pl-cce">\[\]</span>【】]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%U<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>;</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%URL%<span class="pl-pds">&quot;</span></span>         : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>;</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%H<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-c1">location</span>.<span class="pl-c1">host</span>;</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%HOST%<span class="pl-pds">&quot;</span></span>        : <span class="pl-k">return</span> <span class="pl-smi">win</span>.<span class="pl-c1">location</span>.<span class="pl-c1">host</span>;</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%S<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">that</span>.<span class="pl-c1">getSelection</span>(win) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%SEL%<span class="pl-pds">&quot;</span></span>         : <span class="pl-k">return</span> <span class="pl-smi">that</span>.<span class="pl-c1">getSelection</span>(win) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%L<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">linkURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK%<span class="pl-pds">&quot;</span></span>       : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">linkURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_HOST%<span class="pl-pds">&quot;</span></span>  : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-c1">link</span>.<span class="pl-c1">host</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_TEXT%<span class="pl-pds">&quot;</span></span>  : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-en">linkText</span>() <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_OR_URL%<span class="pl-pds">&quot;</span></span>: <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">linkURL</span> <span class="pl-k">||</span> <span class="pl-smi">win</span>.<span class="pl-c1">location</span>.<span class="pl-c1">href</span>;</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%RLT_OR_UT%<span class="pl-pds">&quot;</span></span>   : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">onLink</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">context</span>.<span class="pl-en">linkText</span>() <span class="pl-k">||</span> <span class="pl-smi">win</span>.<span class="pl-smi">document</span>.<span class="pl-c1">title</span>;  <span class="pl-c"><span class="pl-c">//</span> 链接文本或网页标题</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_ALT%<span class="pl-pds">&quot;</span></span>   : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-c1">target</span>.<span class="pl-c1">alt</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_TITLE%<span class="pl-pds">&quot;</span></span> : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-c1">target</span>.<span class="pl-c1">title</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%I<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">imageURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_URL%<span class="pl-pds">&quot;</span></span>   : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">imageURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_BASE64%<span class="pl-pds">&quot;</span></span>: <span class="pl-k">return</span> <span class="pl-en">img2base64</span>(<span class="pl-smi">context</span>.<span class="pl-smi">imageURL</span>);</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%M<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">mediaURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%MEDIA_URL%<span class="pl-pds">&quot;</span></span>   : <span class="pl-k">return</span> <span class="pl-smi">context</span>.<span class="pl-smi">mediaURL</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%P<span class="pl-pds">&quot;</span></span>            : <span class="pl-k">return</span> <span class="pl-en">readFromClipboard</span>() <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%CLIPBOARD%<span class="pl-pds">&quot;</span></span>   : <span class="pl-k">return</span> <span class="pl-en">readFromClipboard</span>() <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON%<span class="pl-pds">&quot;</span></span>     : <span class="pl-k">return</span> <span class="pl-smi">gBrowser</span>.<span class="pl-en">getIcon</span>(tab <span class="pl-k">?</span> tab <span class="pl-k">:</span> <span class="pl-c1">null</span>) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON_BASE64%<span class="pl-pds">&quot;</span></span> : <span class="pl-k">return</span> <span class="pl-en">img2base64</span>(<span class="pl-smi">gBrowser</span>.<span class="pl-en">getIcon</span>(tab <span class="pl-k">?</span> tab <span class="pl-k">:</span> <span class="pl-c1">null</span>));</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%EMAIL%<span class="pl-pds">&quot;</span></span>       : <span class="pl-k">return</span> <span class="pl-en">getEmailAddress</span>() <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%EOL%<span class="pl-pds">&quot;</span></span>         : <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\r\n</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">htmlEscape</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> (s<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;amp;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;lt;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\&quot;</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;quot;<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\&#39;</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>&amp;apos;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">getEmailAddress</span>() {</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">context</span>.<span class="pl-smi">linkURL</span>;</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>url <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>mailto:(<span class="pl-c1">[<span class="pl-k">^</span>?]</span><span class="pl-k">+</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(url)) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> addresses <span class="pl-k">=</span> <span class="pl-c1">RegExp</span>.<span class="pl-smi">$1</span>;</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> characterSet <span class="pl-k">=</span> <span class="pl-smi">context</span>.<span class="pl-c1">target</span>.<span class="pl-c1">ownerDocument</span>.<span class="pl-c1">characterSet</span>;</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">const</span> <span class="pl-c1">textToSubURI</span> <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/intl/texttosuburi;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsITextToSubURI</span>);</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">                addresses <span class="pl-k">=</span> <span class="pl-smi">textToSubURI</span>.<span class="pl-en">unEscapeURIForUI</span>(characterSet, addresses);</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span> (ex) {</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> addresses;</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">img2base64</span>(<span class="pl-smi">imgsrc</span>) {</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">typeof</span> imgsrc <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">const</span> <span class="pl-c1">NSURI</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>http://www.w3.org/1999/xhtml<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> img <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Image</span>();</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> that <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> canvas,</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">                isCompleted <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">img</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> width <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">naturalWidth</span>,</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">                    height <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">naturalHeight</span>;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">                canvas <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElementNS</span>(<span class="pl-c1">NSURI</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">canvas</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> width;</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">canvas</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> height;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> ctx <span class="pl-k">=</span> <span class="pl-smi">canvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">ctx</span>.<span class="pl-en">drawImage</span>(<span class="pl-c1">this</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">                isCompleted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">img</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">Components</span>.<span class="pl-smi">utils</span>.<span class="pl-en">reportError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Count not load: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> imgsrc);</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">                isCompleted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">img</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> imgsrc;</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> thread <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/thread-manager;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">getService</span>().<span class="pl-smi">mainThread</span>;</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> (<span class="pl-k">!</span>isCompleted) {</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">thread</span>.<span class="pl-en">processNextEvent</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> data <span class="pl-k">=</span> canvas <span class="pl-k">?</span> <span class="pl-smi">canvas</span>.<span class="pl-c1">toDataURL</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image/png<span class="pl-pds">&quot;</span></span>) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">            canvas <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getSelection</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">win</span>) {</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> from getBrowserSelection Fx19</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">        win <span class="pl-k">||</span> (win <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">focusedWindow</span>);</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> selection  <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getRangeAll</span>(win).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>selection) {</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> element <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-smi">commandDispatcher</span>.<span class="pl-smi">focusedElement</span>;</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> <span class="pl-en">isOnTextInput</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> elem <span class="pl-k">instanceof</span> <span class="pl-c1">HTMLTextAreaElement</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">                    (elem <span class="pl-k">instanceof</span> <span class="pl-c1">HTMLInputElement</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">elem</span>.<span class="pl-en">mozIsTextField</span>(<span class="pl-c1">true</span>));</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">            };</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-en">isOnTextInput</span>(element)) {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">                selection <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-en">QueryInterface</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIDOMNSEditableElement</span>)</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">                    .<span class="pl-smi">editor</span>.<span class="pl-c1">selection</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (selection) {</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">            selection <span class="pl-k">=</span> <span class="pl-smi">selection</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">                .<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> selection;</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getRangeAll</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">win</span>) {</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">        win <span class="pl-k">||</span> (win <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">focusedWindow</span>);</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> sel <span class="pl-k">=</span> <span class="pl-smi">win</span>.<span class="pl-c1">getSelection</span>();</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> res <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">sel</span>.<span class="pl-smi">rangeCount</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">res</span>.<span class="pl-c1">push</span>(<span class="pl-smi">sel</span>.<span class="pl-en">getRangeAt</span>(i));</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> res;</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getInputSelection</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">elem</span>) {</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (elem <span class="pl-k">instanceof</span> <span class="pl-c1">HTMLTextAreaElement</span> <span class="pl-k">||</span> elem <span class="pl-k">instanceof</span> <span class="pl-c1">HTMLInputElement</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">elem</span>.<span class="pl-en">mozIsTextField</span>(<span class="pl-c1">false</span>))</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">elem</span>.<span class="pl-c1">value</span>.<span class="pl-c1">substring</span>(<span class="pl-smi">elem</span>.<span class="pl-smi">selectionStart</span>, <span class="pl-smi">elem</span>.<span class="pl-smi">selectionEnd</span>);</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">edit</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">aFile</span>, <span class="pl-smi">aLineNumber</span>) {</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>aFile <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">exists</span>() <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">isFile</span>()) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> editor;</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">            editor <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">prefs</span>.<span class="pl-en">getComplexValue</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>view_source.editor.path<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">catch</span>(e) {}</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>editor <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">editor</span>.<span class="pl-en">exists</span>()) {</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (useScraptchpad) {</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">this</span>.<span class="pl-en">openScriptInScratchpad</span>(<span class="pl-c1">window</span>, aFile);</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>请先设置编辑器的路径!!!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> fp <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/filepicker;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIFilePicker</span>);</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">fp</span>.<span class="pl-en">init</span>(<span class="pl-c1">window</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>设置全局脚本编辑器<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">fp</span>.<span class="pl-smi">modeOpen</span>);</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">fp</span>.<span class="pl-en">appendFilter</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>执行文件<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>*.exe<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">fp</span>.<span class="pl-en">show</span>() <span class="pl-k">==</span> <span class="pl-smi">fp</span>.<span class="pl-smi">returnCancel</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">fp</span>.<span class="pl-smi">file</span>)</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">                    editor <span class="pl-k">=</span> <span class="pl-smi">fp</span>.<span class="pl-smi">file</span>;</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">Services</span>.<span class="pl-smi">prefs</span>.<span class="pl-en">setCharPref</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>view_source.editor.path<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">editor</span>.<span class="pl-smi">path</span>);</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> 调用自带的</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aURL <span class="pl-k">=</span> <span class="pl-smi">userChrome</span>.<span class="pl-en">getURLSpecFromFile</span>(aFile);</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aDocument <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aCallBack <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> aPageDescriptor <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>aLineNumber<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>(<span class="pl-smi">gViewSourceUtils</span>.<span class="pl-smi">openInExternalEditor</span>.<span class="pl-c1">toSource</span>()))</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">gViewSourceUtils</span>.<span class="pl-en">openInExternalEditor</span>(aURL, aPageDescriptor, aDocument, aLineNumber, aCallBack);</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">gViewSourceUtils</span>.<span class="pl-en">openInExternalEditor</span>(aURL, aPageDescriptor, aDocument, aCallBack);</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">openScriptInScratchpad</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">parentWindow</span>, <span class="pl-smi">file</span>) {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">let</span> spWin <span class="pl-k">=</span> (<span class="pl-smi">parentWindow</span>.<span class="pl-smi">Scratchpad</span> <span class="pl-k">||</span> <span class="pl-smi">Services</span>.<span class="pl-smi">wm</span>.<span class="pl-en">getMostRecentWindow</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>navigator:browser<span class="pl-pds">&quot;</span></span>).<span class="pl-smi">Scratchpad</span>)</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">            .<span class="pl-en">openScratchpad</span>();</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">spWin</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span> <span class="pl-en">spWinLoaded</span>() {</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">spWin</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span>, spWinLoaded, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">let</span> Scratchpad <span class="pl-k">=</span> <span class="pl-smi">spWin</span>.<span class="pl-smi">Scratchpad</span>;</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Scratchpad</span>.<span class="pl-en">setFilename</span>(<span class="pl-smi">file</span>.<span class="pl-smi">path</span>);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">Scratchpad</span>.<span class="pl-en">addObserver</span>({</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onReady</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">Scratchpad</span>.<span class="pl-en">removeObserver</span>(<span class="pl-c1">this</span>);</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">Scratchpad</span>.<span class="pl-smi">importFromFile</span>.<span class="pl-c1">call</span>(Scratchpad, file);</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">copy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">aText</span>) {</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">        Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/widget/clipboardhelper;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIClipboardHelper</span>).<span class="pl-en">copyString</span>(aText);</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">XULBrowserWindow</span>.<span class="pl-smi">statusTextField</span>.<span class="pl-c1">label</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Copy: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> aText;</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">copyLink</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">copyURL</span>, <span class="pl-smi">copyLabel</span>) {</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> generate the Unicode and HTML versions of the Link</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> textUnicode <span class="pl-k">=</span> copyURL;</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> textHtml <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;a href=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> copyURL <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> copyLabel <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/a&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> make a copy of the Unicode</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> str <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/supports-string;1<span class="pl-pds">&quot;</span></span>].</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">createInstance</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsISupportsString</span>);</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>str) <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span> couldn&#39;t get string obj</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">str</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> textUnicode; <span class="pl-c"><span class="pl-c">//</span> unicode string?</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> make a copy of the HTML</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> htmlstring <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/supports-string;1<span class="pl-pds">&quot;</span></span>].</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">createInstance</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsISupportsString</span>);</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>htmlstring) <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span> couldn&#39;t get string obj</span></td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">htmlstring</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> textHtml;</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> add Unicode &amp; HTML flavors to the transferable widget</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> trans <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/widget/transferable;1<span class="pl-pds">&quot;</span></span>].</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">createInstance</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsITransferable</span>);</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>trans) <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span>no transferable widget found</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">trans</span>.<span class="pl-en">addDataFlavor</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text/unicode<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">trans</span>.<span class="pl-en">setTransferData</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text/unicode<span class="pl-pds">&quot;</span></span>, str, <span class="pl-smi">textUnicode</span>.<span class="pl-c1">length</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>); <span class="pl-c"><span class="pl-c">//</span> *2 because it&#39;s unicode</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">trans</span>.<span class="pl-en">addDataFlavor</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text/html<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">trans</span>.<span class="pl-en">setTransferData</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>text/html<span class="pl-pds">&quot;</span></span>, htmlstring, <span class="pl-smi">textHtml</span>.<span class="pl-c1">length</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>); <span class="pl-c"><span class="pl-c">//</span> *2 because it&#39;s unicode</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> copy the transferable widget!</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> clipboard <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/widget/clipboard;1<span class="pl-pds">&quot;</span></span>].</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">getService</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsIClipboard</span>);</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>clipboard) <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span> couldn&#39;t get the clipboard</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">clipboard</span>.<span class="pl-en">setData</span>(trans, <span class="pl-c1">null</span>, <span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsIClipboard</span>.<span class="pl-smi">kGlobalClipboard</span>);</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">alert</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">aMsg</span>, <span class="pl-smi">aTitle</span>, <span class="pl-smi">aCallback</span>) {</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> callback <span class="pl-k">=</span> aCallback <span class="pl-k">?</span> {</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">observe</span> <span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">subject</span>, <span class="pl-smi">topic</span>, <span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>alertclickcallback<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> topic)</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">aCallback</span>.<span class="pl-c1">call</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> alertsService <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/alerts-service;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIAlertsService</span>);</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">alertsService</span>.<span class="pl-en">showAlertNotification</span>(</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&quot;</span>chrome://global/skin/icons/information-32.png<span class="pl-pds">&quot;</span></span>, aTitle <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span>addMenu<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">            aMsg <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, <span class="pl-k">!!</span>callback, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, callback);</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">    $$<span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">exp</span>, <span class="pl-smi">context</span>, <span class="pl-smi">aPartly</span>) {</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">        context <span class="pl-k">||</span> (context <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">focusedWindow</span>.<span class="pl-smi">document</span>);</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> doc <span class="pl-k">=</span> <span class="pl-smi">context</span>.<span class="pl-c1">ownerDocument</span> <span class="pl-k">||</span> context;</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> elements <span class="pl-k">=</span> <span class="pl-en">$$</span>(exp, doc);</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">2</span>)</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> elements;</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> sel <span class="pl-k">=</span> <span class="pl-smi">doc</span>.<span class="pl-c1">defaultView</span>.<span class="pl-c1">getSelection</span>();</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">elements</span>.<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">q</span>) sel.containsNode(q, aPartly));</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">    log<span class="pl-k">:</span> log,</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.<span class="pl-smi">addMenu</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$</span>(<span class="pl-smi">id</span>) { <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(id); }</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$$</span>(<span class="pl-smi">exp</span>, <span class="pl-smi">doc</span>) { <span class="pl-k">return</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>((doc <span class="pl-k">||</span> <span class="pl-c1">document</span>).<span class="pl-c1">querySelectorAll</span>(exp)); }</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">$A</span>(<span class="pl-smi">args</span>) { <span class="pl-k">return</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(args); }</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">log</span>() { <span class="pl-smi">Application</span>.<span class="pl-smi">console</span>.<span class="pl-en">log</span>(<span class="pl-c1">Array</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">arguments</span>)); }</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">U</span>(<span class="pl-smi">text</span>) 1 &lt; &#39;あ&#39;.length ? decodeURIComponent(escape(text)) : text;</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">function $C(name, attr) {</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(name);</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (attr) <span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(attr).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">n</span>) el.setAttribute(n, attr[n]));</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">    return el;</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">addStyle</span>(<span class="pl-smi">css</span>) {</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> pi <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createProcessingInstruction</span>(</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>xml-stylesheet<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>type=&quot;text/css&quot; href=&quot;data:text/css;utf-8,<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">encodeURIComponent</span>(css) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">    );</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">document</span>.<span class="pl-c1">insertBefore</span>(pi, <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>);</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">loadText</span>(<span class="pl-smi">aFile</span>) {</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> fstream <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/network/file-input-stream;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIFileInputStream</span>);</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> sstream <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/scriptableinputstream;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIScriptableInputStream</span>);</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fstream</span>.<span class="pl-en">init</span>(aFile, <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">sstream</span>.<span class="pl-en">init</span>(fstream);</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">sstream</span>.<span class="pl-en">read</span>(<span class="pl-smi">sstream</span>.<span class="pl-en">available</span>());</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> { data <span class="pl-k">=</span> <span class="pl-c1">decodeURIComponent</span>(<span class="pl-c1">escape</span>(data)); } <span class="pl-k">catch</span>(e) {}</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">sstream</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fstream</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">loadFile</span>(<span class="pl-smi">aLeafName</span>) {</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> aFile <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/file/directory_service;1<span class="pl-pds">&quot;</span></span>]</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIDirectoryService</span>)</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">        .<span class="pl-en">QueryInterface</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIProperties</span>)</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">        .<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>UChrm<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">aFile</span>.<span class="pl-en">appendRelativePath</span>(aLeafName);</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">exists</span>() <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">aFile</span>.<span class="pl-en">isFile</span>()) <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> fstream <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/network/file-input-stream;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIFileInputStream</span>);</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> sstream <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/scriptableinputstream;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIScriptableInputStream</span>);</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fstream</span>.<span class="pl-en">init</span>(aFile, <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">sstream</span>.<span class="pl-en">init</span>(fstream);</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> data <span class="pl-k">=</span> <span class="pl-smi">sstream</span>.<span class="pl-en">read</span>(<span class="pl-smi">sstream</span>.<span class="pl-en">available</span>());</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> { data <span class="pl-k">=</span> <span class="pl-c1">decodeURIComponent</span>(<span class="pl-c1">escape</span>(data)); } <span class="pl-k">catch</span>(e) {}</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">sstream</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">fstream</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">saveFile</span>(<span class="pl-smi">fileOrName</span>, <span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> file;</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-k">typeof</span> fileOrName <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">        file <span class="pl-k">=</span> <span class="pl-smi">Services</span>.<span class="pl-smi">dirsvc</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>UChrm<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">file</span>.<span class="pl-en">appendRelativePath</span>(fileOrName);</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">    }<span class="pl-k">else</span>{</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">        file <span class="pl-k">=</span> fileOrName;</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> suConverter <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/intl/scriptableunicodeconverter<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIScriptableUnicodeConverter</span>);</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">suConverter</span>.<span class="pl-c1">charset</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>UTF-8<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">    data <span class="pl-k">=</span> <span class="pl-smi">suConverter</span>.<span class="pl-en">ConvertFromUnicode</span>(data);</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> foStream <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&#39;</span>@mozilla.org/network/file-output-stream;1<span class="pl-pds">&#39;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIFileOutputStream</span>);</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">foStream</span>.<span class="pl-en">init</span>(file, <span class="pl-c1">0x02</span> <span class="pl-k">|</span> <span class="pl-c1">0x08</span> <span class="pl-k">|</span> <span class="pl-c1">0x20</span>, <span class="pl-c1">0664</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">foStream</span>.<span class="pl-c1">write</span>(data, <span class="pl-smi">data</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">foStream</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">})(<span class="pl-s"><span class="pl-pds">&#39;</span>\</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenuHide\</span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  { display: none !important; }\</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;select&quot;]) .addMenu[condition~=&quot;select&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;link&quot;])   .addMenu[condition~=&quot;link&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;mailto&quot;]) .addMenu[condition~=&quot;mailto&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;image&quot;])  .addMenu[condition~=&quot;image&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;canvas&quot;])  .addMenu[condition~=&quot;canvas&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;media&quot;])  .addMenu[condition~=&quot;media&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu~=&quot;input&quot;])  .addMenu[condition~=&quot;input&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;select&quot;] .addMenu[condition~=&quot;noselect&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;link&quot;]   .addMenu[condition~=&quot;nolink&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;mailto&quot;] .addMenu[condition~=&quot;nomailto&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;image&quot;]  .addMenu[condition~=&quot;noimage&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;canvas&quot;]  .addMenu[condition~=&quot;nocanvas&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;media&quot;]  .addMenu[condition~=&quot;nomedia&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu[addMenu~=&quot;input&quot;]  .addMenu[condition~=&quot;noinput&quot;],\</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line"><span class="pl-s">#contentAreaContextMenu:not([addMenu=&quot;&quot;])  .addMenu[condition~=&quot;normal&quot;]\</span></td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  { display: none; }\</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu-insert-point\</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  { display: none !important; }\</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu[url] {\</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  list-style-image: url(&quot;chrome://mozapps/skin/places/defaultFavicon.png&quot;);\</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu.exec,\</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu[exec] {\</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  list-style-image: url(&quot;chrome://browser/skin/aboutSessionRestore-window-icon.png&quot;);\</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu.copy,\</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menuitem.addMenu[text]:not([url]):not([keyword]):not([exec])\</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line"><span class="pl-s">{\</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQCAYAAACBSfjBAAAJDUlEQVRYhcWYa1BTZxrH3w/b/dKd8QOjdnVdpATIRSQxCNRSpK5FlMglCOwoKUpoAiKGYFKLKBEQbzNtKIztrsZ1qTZiAcU0QzZLJDaGy9oVp1uHjptiULkIAoFwD9T/fsCEAAnFaWf2mfl9yDnv8+bk956T/zmHEBflm5Qa8M6pC/r3Pr0Cf8GHcldjnEuv12M+Op0OVqs19+d6CSGETchrESvJ63bWr1z5+vIVK75ZvuINA4Ox/HfO+9iEvLaUOf+vFbD/iJn2fmazV2xyIUskg29SasBi4/V6PaanpzA9Ncvdu3eh0Wh+Mj8xZ7zq90vFB+7tSeaN7knmjUqyM+8vta+jo4M3NjaOgYEBDAwMoL+/H319fejt7UVPbw+6urrQ0vItb37fFyFhtC9DthR9GbLVtDS2FH0REkZzeRBeXL4ngy/Gmu2x3qvj4jwYaTmgJOzbvNiB19fXY3pqClNTNgdGoxFjY2Oora2dfPjwYcpi/ZJ4arU0ngZpPA1q9ddof/wY5kePYDY/Qnt7O9Tqr2HfL4mnVrubR6lUYnBwED09Peh59gxdXV3o7OzE06dP8fjJE7S1tUGpVGJ+35Xg8KK2guIhVFdjKbQVFA9dCQ4vciuQvjcLXly+px9PKKenZFneTEhYZt/nSqZOp8PUlA3NTY1obmqEbXICWq0WGo0GGo0GWq12wUE7lzSehpJ9DJzcTYVUKgWPx5uDTHYcJ3dTcVFAhzSe5nYupVIJi8WC/v5+PO97jp7eXvQ8e4burm487eiA2fzIpcDywM2mFxUV+K6wEDeFQtwUCvFdYSFeVFTA3fbywM0mtz/IX3gYQUfOYoO4AJSktBhCCGGk5chD8uXY+fk1BH54cs5lVVdXB5ttEpMT4w5evPgJXZ2daDeb0dLS8rMCpfE0ZET5IPptb5dkRPlAFO2HjCgfl3NVVFREKJVKDFgsGBwcxMDAAPr6+tDT24vu7mfo7OiE2WyGUqlEZWVlhHPvxQ1hpunyctSkpsJetwsKcP/oUdw/ehS3Cwoc22tSUzFdXo6LG8LcC6TzxeZA6UnQkjNuEEIIPTX70vr0j7CWk3Tmj1EJgoDMvDmXtVarhW1yAo0NDWhsaMAPP/ywIFQWCxa7QGk8DRLuDMIdFAgiKfggkoK0bd7gR3gj9T1vt2eg0Wjk3tbXw2q1YnRsFCMjI7AOWTFosaB/oB99fc/R3d0Fg+E21Go117n3PHOTyVZWhhaxGPq8PIcsfV7egs8tYjFsZWU4z9y0iMCUA2DwxaAk7NscsP/Ipe1lSvjuEZYSQohPEl/E4IvnBItarcbE+BhGh4cxOjyMifFxvEqwzMqjQsKlIodLRWzIHxYsQF3dP/HXAv4Cgf+6d29bq6ntSUd3DxoaG6HX61FbW4uvvqqE4qICn3zyCfKPHYNIdBDNTXeh0dQ9uXz5yz32/nPrQkzjJ05g/MQJfCsQ4JZEgvl1SyLBtwIB7OPOrQtxLdCLy/ek8TLgk8iH758/QKD0JAIPn8LGj06DKcq3+Auk8N0tvOTcU1VVhdGRERgMBhgMBjx48ACvEiwz4UDDoTgacmKpyI6hYmfw6plFmJqaWYhpxwJg/gIcyT/+F3PXc9x/8F+UlpahpKQEp0+fRn5+PrLFYqSkpIDD4SAoKAhXLlfgG4MRaWnCK/b+EnqgqTUsDHZUTCaq4+Ic8qrj4qBiMuE8poQe6FogNTldxhLJ4LcnHT6JfFB56WY/nlBOSUyTURLTZK5uaRQKBUasVgwPDWF4aAjjo6NwBEtzE5qbm2CzTboNFmk8DYfiqBDHUiGO9YMoxg87g1ajvr4eU1M2xxnsZgF+o/7HLd3jrj4YGu7i5KlTyJfJkJ2djVQ+H7t27UJkZCTeCXsHvn5+KCgoQnnF33HqzFkDIeS3hBDysS/L5E6eO4kf+7IWCmRv3bqMvk+Ez86fB42XYXkzfq/IpeV5JZfLMWwdmiPQHiy2yQkHzsEyX6A41g+iWD+Iov2QtdMXUUGrodPpYLNNOs5gVwsQGvouW1Wr7b+svIaSss8RERGBP23dine3bMG7W7YgPDwcYWFhCAl5C2u91iKNL0C1qgry0tL+9evZGwgh5LS3v6k1PBwqFgvVXO6sNC53wWcVi4XW8HCc9vafKzA5KysgOjHx/qbjn2J9+keg8jIWvfdzrtzcXDhTXl4Oe7A0NTY6cL7N0Wg0cwSKYvxw8KW8TI4vdgSugkqlwtjoKMbHFqJSqUAIIcHBwbtuqtQwNjTi7MdyJO/ZDX7q++Al70Ziwi4kxMeDGxeHqB2RCH37LeTkSGFsaMRNlRpMJjuBEEJOeNFNDyMicJ7BcMi6npAAdVAQ1EFBuJ6Q4Nh+nsHAw4gInPCizwoU5uQEFMvlluNnzuDf33+PvQcPypYqz13Zg2V8bJaJ8VnUavUcgVkOeT7I2OGD7exVqKysxIjV6ggnZyorK0EIIQEBAanGhka0tra+EsaGRrBYLD4hhMjWUE0/RkejNjQUCiYTCiYTtaGh+DE6Gu62y9ZQTQ558gsXLGdKS3G1pgaKq1fNv1QeIbPBYjQYZrlzB8Y7dzA6MoKqqqo5AjM5Ptgf5YOMHRSkb6dg24bfQ6FQYNhqxYgLFAoFCCFk3bp1/JqaGmi1WmTtF0J2QY/Ykqeo+E83SnW3EJnNA5UTgw18OfI/v4aDBzKh1Wpx48YNMBiMNEIIyVtNMbUnJeFVyFtNmRHIF4ks+w8dunTg8OEbd+7dg/jYsSVfuouVI1iccCXALjB9OwXCSG98sM0badu88R7zDcjl8pn/VetC5HI5CCHEw8NjI4fD+RuHw7keGxOja+8dwWLExsboojmc61FRUZc8PDw2EkJI7kqvoqa9/KGRs2exFJr28odyV3rNPMrt5vM9CSHk7Llz9yXHj//sm5el1vxgmS/CLoCQuc/Cdrib1qC4uBjWwcG5c7ykuLjY3r+MELKKEOJFCNlIp1MlLH9GIYNGK/T39y9ksdiFbDa7kM0OKKTT6RJCyMaXY1e97CXZHp406XLPog+Xe5qWgnS5Z1G2h+fclwlCicQiEAiW/VoC5weLK37pHL/Wsf6S+h8RTLmSwZ62UAAAAABJRU5ErkJggg==);\</span></td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-image-region: rect(0pt, 32px, 16px, 16px);\</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu.checkbox .menu-iconic-icon {\</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-appearance: checkbox;\</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line"><span class="pl-s">.addMenu &gt; .menu-iconic-left {\</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-appearance: menuimage;\</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line"><span class="pl-s">\</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu {\</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  background-color: menu;\</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  padding-bottom: 4px;\</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu &gt; .menuitem-iconic {\</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-box-flex: 1;\</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-box-pack: center;\</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-box-align: center;\</span></td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu &gt; .menuitem-iconic &gt; .menu-iconic-left {\</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  -moz-appearance: none;\</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu &gt; .menuitem-iconic &gt; .menu-iconic-left &gt; .menu-iconic-icon {\</span></td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  width: 16px;\</span></td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  height: 16px;\</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  margin: 7px;\</span></td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu &gt; .menuitem-iconic &gt; .menu-iconic-text,\</span></td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line"><span class="pl-s">menugroup.addMenu &gt; .menuitem-iconic &gt; .menu-accel-container {\</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line"><span class="pl-s">  display: none;\</span></td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line"><span class="pl-s">}\</span></td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/ywzhaiqi/userChromeJS/blame/db7b53546739bb3f5aac6e451754ac5418af0d1a/addmenuPlus/addMenuPlus.uc.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/ywzhaiqi/userChromeJS/issues/new">Open new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.59985s from unicorn-7586c446c8-cc94m">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-Ax8so2RYXS5IplklIjBUPCs/H8jumancM4AKLTR35EuK3eUxGRyo1EkTBkTQnSUzk5ZQ9pYsHYLJ1ImS2Fcerg==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-755e0c008571c9f249a478f4cda76ecf.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-dkdH2wr/47zzPhe2GKRC7/hHiWGCHiWvTE2aQyEVMBegZUOqqExW8MQ4xKfULPT1mcxE8bpGFIZQfWFgctAy5A==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-0521d9b5cebb43a33b119a78ce13f853.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

