





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
  
  <title>userChromeJs/_addmenu.js at master · defpt/userChromeJs</title>
    <meta name="description" content="自用脚本（包括自写以及修改自其它大神的脚本）. Contribute to defpt/userChromeJs development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/4293031?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="defpt/userChromeJs" /><meta property="og:url" content="https://github.com/defpt/userChromeJs" /><meta property="og:description" content="自用脚本（包括自写以及修改自其它大神的脚本）. Contribute to defpt/userChromeJs development by creating an account on GitHub." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MzIxNjQzODU0OjRmOGYwZGJjMTgyNzlhYTdiZGJkMDk0OTI4NzUwNGJjNzNlMjRhMDViOWFmZjA4ZDljZGYwZjFlZjE4YjA3NTI=--a4b4174cfb407dc0972fee458e9155b2f6b85d2b">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="E75C:7F43:1B43C39:28EFCB5:5BF66814" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="E75C:7F43:1B43C39:28EFCB5:5BF66814" /><meta name="octolytics-dimension-region_edge" content="sea" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="38108376" /><meta name="octolytics-actor-login" content="ZhuningS" /><meta name="octolytics-actor-hash" content="4d2564fe80f8b5bcf0dde7bb80a52c79765b3d00cfce1df85135129a769570a9" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="9836b38cad680eb0b075c01103a9741f" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="ZhuningS">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZWMzZjZhYjMzMGRmYzVkYjZkMmE4ZWRlZWFhOTRhN2FkNWZiYTc3OWVkZThmOTQwNTc1NTZkMDQ2MmMxNDliMHx7InJlbW90ZV9hZGRyZXNzIjoiNjAuMTA2LjE3My4yMzkiLCJyZXF1ZXN0X2lkIjoiRTc1Qzo3RjQzOjFCNDNDMzk6MjhFRkNCNTo1QkY2NjgxNCIsInRpbWVzdGFtcCI6MTU0Mjg3NTE2MiwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR,NOTIFY_ON_BLOCK,SAVED_THREADS,TIMELINE_COMMENT_UPDATES,SUGGESTED_CHANGES_UX_TEST,SUGGESTED_CHANGES_BATCH,RELATED_ISSUES,MARKETPLACE_INSIGHTS_V2">

  <meta name="html-safe-nonce" content="dd3d42d06facacbccf690d8b5c9ec1faf0f8008e">

  <meta http-equiv="x-pjax-version" content="a88ab92561553ff58e9966b4ca4d0f75">
  

      <link href="https://github.com/defpt/userChromeJs/commits/master.atom" rel="alternate" title="Recent Commits to userChromeJs:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/defpt/userChromeJs git https://github.com/defpt/userChromeJs.git">

  <meta name="octolytics-dimension-user_id" content="4293031" /><meta name="octolytics-dimension-user_login" content="defpt" /><meta name="octolytics-dimension-repository_id" content="9753558" /><meta name="octolytics-dimension-repository_nwo" content="defpt/userChromeJs" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="9753558" /><meta name="octolytics-dimension-repository_network_root_nwo" content="defpt/userChromeJs" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/defpt/userChromeJs/blob/master/addMenuPlus/_addmenu.js" data-pjax-transient>


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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="9753558" data-scoped-search-url="/defpt/userChromeJs/search" data-unscoped-search-url="/search" action="/defpt/userChromeJs/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
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
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=Q3rquFcZX6S6qeaiJEVhAtdo2h5KNYoW9PQppxoSfCSP8fJRe52HDHK2HKo/9oQugcmsN9iBPrFsRRiuqbAzmw=="
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
    <span title="defpt/userChromeJs">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/defpt/userChromeJs/issues/new" data-ga-click="Header, create new issue">
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
            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="/PdbnCqkReECnBtQ4x4TdHt0b9XStUqsU333S0Hj6bULjzOxa+Ck4ExcI5djrU8tzdftphKNMXRHw9j0ZNOmWA==" />
              <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
                Sign out
              </button>
</form>          </li>
        </ul>
      </details-menu>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Pov6IH6XDC241jSdtKLiLUwZappdHwhwmFTx32rGSeTJ85INP9PtLPYWDFo0Eb50+rro6Z0nc6iM6t5gT/YGCQ==" />
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
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="K8xIOfkLYmg4kdkhcUebjZeeyIcuYtYISu9nP278VB5pVpyBQJtr4+iUOZs/yjp5uXvgpmNz6Jvs4zI1x5b4ag==" />      <input type="hidden" name="repository_id" id="repository_id" value="9753558" class="form-control" />

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
        href="/defpt/userChromeJs/watchers"
        aria-label="22 users are watching this repository">
        22
      </a>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/defpt/userChromeJs/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="LzQeA0aeIDhO50xX6K55l6eAMBWnGIbJmvEKPwIdocH9Ldt+r3/ZBgDk/q9DGjb/aUZa249IKvpPXdb7hlJU7A==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar defpt/userChromeJs"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/defpt/userChromeJs/stargazers"
           aria-label="106 users starred this repository">
          106
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/defpt/userChromeJs/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="YIbbTftue/uWM2dHtt6M7t3OZ41Ru1+CYiDesBKbASLgaHqrjLO/pthSDY+iJ5xL1+eTSNjCzFBRrUI+jq/ZaA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star defpt/userChromeJs"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/defpt/userChromeJs/stargazers"
           aria-label="106 users starred this repository">
          106
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/defpt/userChromeJs/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="3dv5jrnnMlL7Ltk95iwhJLSWqAv3dxw+muciIXNV22sSmAILAbbiMdycnB9sgyrnPhVTcvi1Ww7XnO3lhd+JnQ==" />
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of defpt/userChromeJs to your account"
                aria-label="Fork your own copy of defpt/userChromeJs to your account">
              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/defpt/userChromeJs/network/members" class="social-count"
       aria-label="89 users forked this repository">
      89
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=4293031" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/defpt">defpt</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/defpt/userChromeJs">userChromeJs</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /defpt/userChromeJs" href="/defpt/userChromeJs">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /defpt/userChromeJs/issues" href="/defpt/userChromeJs/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /defpt/userChromeJs/pulls" href="/defpt/userChromeJs/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /defpt/userChromeJs/projects" href="/defpt/userChromeJs/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /defpt/userChromeJs/wiki" href="/defpt/userChromeJs/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts /defpt/userChromeJs/pulse" href="/defpt/userChromeJs/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    

  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/defpt/userChromeJs/blob/99a79b74622ef310bf634668809f024ea862ac4a/addMenuPlus/_addmenu.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:7a51ca702251acf2d9f0b698662b7f45 -->

    

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
               href="/defpt/userChromeJs/blob/master/addMenuPlus/_addmenu.js"
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
        <a href="/defpt/userChromeJs/find/master"
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
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/defpt/userChromeJs"><span>userChromeJs</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/defpt/userChromeJs/tree/master/addMenuPlus"><span>addMenuPlus</span></a></span><span class="separator">/</span><strong class="final-path">_addmenu.js</strong>
      </div>
    </div>


    
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/defpt/userChromeJs/commit/9050f0e950789b7473298d57e77ab57794e47365" data-pjax>
          9050f0e
        </a>
        <relative-time datetime="2014-09-25T06:16:48Z">Sep 25, 2014</relative-time>
      </span>
      <div>
        <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=4293031" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/defpt"><img class="avatar" src="https://avatars3.githubusercontent.com/u/4293031?s=40&amp;v=4" width="20" height="20" alt="@defpt" /></a>
        <a class="user-mention" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=4293031" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/defpt">defpt</a>
          <a data-pjax="true" title="更新addmenu配置" class="message" href="/defpt/userChromeJs/commit/9050f0e950789b7473298d57e77ab57794e47365">更新addmenu配置</a>
      </div>

    <div class="commit-tease-contributors">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary class="btn-link" aria-haspopup="dialog"  >
    
    <span><strong>1</strong> contributor</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/defpt">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/4293031?s=40&amp;v=4" width="20" height="20" />
                defpt
</a>            </li>
        </ul>

  </details-dialog>
</details>
      
    </div>
  </div>



    <div class="file ">
      <div class="file-header">
  <div class="file-actions">


    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/defpt/userChromeJs/raw/master/addMenuPlus/_addmenu.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/defpt/userChromeJs/blame/master/addMenuPlus/_addmenu.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/defpt/userChromeJs/commits/master/addMenuPlus/_addmenu.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/defpt/userChromeJs?branch=master&amp;filepath=addMenuPlus%2F_addmenu.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/defpt/userChromeJs/edit/master/addMenuPlus/_addmenu.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="nhWY9ZML5zr343YiHoLNL80XtjJsNoRjhMlypJQ2NedXOpJ9OOib4GzOKuKHhsQcRVr8qJTtugaJ2/ucjAJGlQ==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/defpt/userChromeJs/delete/master/addMenuPlus/_addmenu.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="ObylhY+1RWWZcQphBBp9tmv6ZVV+mYx5gINkHWRlM/kDQw+2UenwjVZPJjeXqgRHpRN3H3s+vr3fAKAezJGLvQ==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      359 lines (347 sloc)
      <span class="file-info-divider"></span>
    23.9 KB
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>添加标签右键菜单项</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-en">tab</span>([{</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>复制 Favicon 的 URL<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">		text<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">	},{</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>复制 Favicon 的 Base64<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">		text<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>%FAVICON_BASE64%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">	},{</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>关闭所有标签页<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		oncommand<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>gBrowser.removeAllTabsBut(gBrowser.addTab(&#39;about:newtab&#39;));<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		insertAfter<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>context_closeOtherTabs<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">]);</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> 添加横排按钮 horizontal menu</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> HMenu <span class="pl-k">=</span> <span class="pl-en">GroupMenu</span>({</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>context-openIn<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>打开...<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>noselect noimage noinput nomailto nocanvas nomedia<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>context-sep-navigation<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-en">HMenu</span>([</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>复制链接+文本<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">		tooltiptext<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>左键:Discuz!代码|中键:MD代码|右键:普通<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onclick</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> formats <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&quot;</span>[url=%RLINK_OR_URL%]%RLT_OR_UT%[/url]<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&quot;</span>[%RLT_OR_UT%](%RLINK_OR_URL%)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&quot;</span>%RLT_OR_UT%<span class="pl-cce">\n</span>%RLINK_OR_URL%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">            ];</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> str <span class="pl-k">=</span> <span class="pl-smi">addMenu</span>.<span class="pl-en">convertText</span>(formats[<span class="pl-c1">event</span>.<span class="pl-smi">button</span>]);</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(str);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">1</span>)<span class="pl-c"><span class="pl-c">//</span> 中键点击后自动关闭菜单</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>contentAreaContextMenu<span class="pl-pds">&quot;</span></span>).<span class="pl-en">hidePopup</span>();</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACTSURBVDhPnZJBDoAgEAP5Gtz0/08w+gylZlnGlcTIJA10W5CDKVJKWar2qvND6ix2rGPB6MBIux37T7tk+sltPv3kNusbG97pAPaEewYsRNgT7hlwpTjTXrhnwEKEPeGeAVeKM+2FewYsRNgT7hmwEGFPuGfAQoQ9Yf6YviDnvFWtCv78iYed7+gWBaH4kn/xQUoXescBVG1EAoAAAAAASUVORK5CYII=<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>在其它浏览器中打开<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">		tooltiptext<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>左:IE、右:Chrome<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onclick</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">addMenu</span>.<span class="pl-en">convertText</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_OR_URL%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) </td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">addMenu</span>.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>C:<span class="pl-cce">\\</span>Program Files<span class="pl-cce">\\</span>Internet Explorer<span class="pl-cce">\\</span>iexplore.exe<span class="pl-pds">&quot;</span></span>, url);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>) </td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">addMenu</span>.<span class="pl-c1">exec</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>D:<span class="pl-cce">\\</span>Program Files<span class="pl-cce">\\</span>MyChrome<span class="pl-cce">\\</span>MyChrome.exe<span class="pl-pds">&quot;</span></span>, url);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIISURBVDhPYyADcAExPxAzgnlEAn4WFhYraWnpPFNT01ZDQ8Mebm7uSKA4M0QaFcBM9mJiYiphZ2dvBipelJCQMH3Xrl328fHxChMmTFBNTU3N4uLikoSqRQBmZubQgICA/9gwDw9PDVAJL0idn5+foZycHIoBTKysrGnYNCJjTk7OBUC1/P39/QKhoaGoXkBW6OzsfLS4uHhuQ0NDf0hIyA4dHZ1rSIZkA5WjaGYB+rMVpsDLy2sXVBwOCgsLpygrK98AyQsICIDkUf0vKSm5BWaAt7f3Bk1NzRo2NrYqoFQVBwdHFVBsiqqq6lWYGqB3jSE6gQCoQE5eXv4oTJIYDHSNH1Q7AwMwqlSALjgJk7S0tDwSGxu7BRh1YBwTEwNnw8STkpIsodoZGICBkolsuoGBwQqoFFFABBiAGzU0NA6LiorCQxro/+XAhBQHTBdeQP/2AL25DSg2G6i+EORliFYgACVRQUHBMwsWLIgDpq4pyC7BhoF+P5Senq4A1c7AICEh4QkM3X1QLkN+fv4EGRmZ8+ga+fn5r/n6+q5bsWKFNVAZE0Q1EGRkZNiqqKish3IZgAEmBkxlqcA0PzU4OHidp6cnKMDmLFq0KHPhwoVqQCUIzSAAzF3CwJQ2EWjDFF5e3gJFRcWUkpIS623btskA07tUYGCgjI+Pj4ixsTErVAsSYGAAAKvp5W/hT+VqAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>在隐私窗口|谷歌缓存打开<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		tooltiptext<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>左:Private、右:googleCache<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onclick</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">addMenu</span>.<span class="pl-en">convertText</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_OR_URL%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) </td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">openLinkIn</span>(url, <span class="pl-s"><span class="pl-pds">&#39;</span>window<span class="pl-pds">&#39;</span></span>,{private<span class="pl-k">:</span><span class="pl-c1">true</span>});</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>) </td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">gBrowser</span>.<span class="pl-smi">selectedTab</span> <span class="pl-k">=</span> <span class="pl-smi">gBrowser</span>.<span class="pl-en">addTab</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>http://webcache.googleusercontent.com/search?q=cache:<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>url);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEESURBVDhPxVE7CsJAFNwIViKCV4kgpMk/dW4hCDZeIKU2HsHCVo+hYCM2sUxlkUbvoDPyEtcoQmLhwJC8mXHcfVE/w3XdLSmjsiyri3kCzkFPyPcJPYk9EcfxjTRNs+04ztjzvEuhVUmPGWbDMOygdFEWNOVbAf4lrWoFP3llge/7Ux6N17Jte6CHSGr0mGGWGq5wLgvQvoRvMERgPmjeQWTCYFb01csVIKRo3eC5BnNNz6mJdyp0LHTYeIkoWj3Oowl7PfCNOMkxCILeSwG/K0pmWNaVM94zcCTMqNFjhtnHj4miQEaVJEkriqK+jCWo0ZPxiWpBbfy/ABvdYjE7GWtCqTvEsgXPOLjW9AAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>生成短网址到剪切板<span class="pl-cce">\n</span>左：is.gd、右：goo.gl<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEPSURBVDhPrVPbDYMwDGSALtAFugDfiAD/TMAGbMAKrMAMXYItWKa9c2wrWNCvWjrFj+TsHKH6iw3DkLquOxSjpiv4G7BfIaX01m1VxaDv+w+h/gJM2LhZ/gqo10IA57jaACw/apkAzhQLBeY74Nov6V6OD8ZdV3blNYhIKnANyMRAiVYWleCkAXOat3gXAgQzA8KKBTiubAZqiy1nBKcxUSg7+YEIJ6AhsfAKTMLnIfmMwBoIpQFX18BMNTiNCIzwTUzqw7qseiwbhVRmfvdSC+rj19Em1iA/Ilo4JI9HD5ZvxB+V1jMBElGoRfNy/1A7gf9QOb4rS/a4+QZZi6Zpnj6SGoqcwP++COrRtu3jC8H0RM7z4TSuAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onclick</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> url <span class="pl-k">=</span> <span class="pl-smi">addMenu</span>.<span class="pl-en">convertText</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%RLINK_OR_URL%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>();</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {	<span class="pl-c"><span class="pl-c">//</span> 调用isgd短网址API</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">				url <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>http://is.gd/api.php?longurl=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">encodeURIComponent</span>(url);</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>GET<span class="pl-pds">&quot;</span></span>, url, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(<span class="pl-smi">xhr</span>.<span class="pl-c1">responseText</span>);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">			}	</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>){	<span class="pl-c"><span class="pl-c">//</span> 调用google短网址API</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>https://www.googleapis.com/urlshortener/v1/url<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-c1">setRequestHeader</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Content-Type<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>application/json<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> obj <span class="pl-k">=</span> <span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">xhr</span>.<span class="pl-c1">responseText</span>);</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">id</span>);</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>(<span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>({longUrl<span class="pl-k">:</span> url}));</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">]);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-en">page</span>({id<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>context-sep-navigation<span class="pl-pds">&quot;</span></span>, condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>link<span class="pl-pds">&quot;</span></span>,insertBefore<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>page-menu-separator<span class="pl-pds">&quot;</span></span>, clone<span class="pl-k">:</span><span class="pl-c1">true</span>});</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>添加页面右键菜单项</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-en">page</span>([</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>复制<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">		tooltiptext<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>左:默认、右:纯文本<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">		accesskey<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>C<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>context-copy<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onclick</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) </td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cmd_copy<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-smi">button</span> <span class="pl-k">===</span> <span class="pl-c1">2</span>) </td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(<span class="pl-smi">addMenu</span>.<span class="pl-en">convertText</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>%SEL%<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACUSURBVDhPrZLNCcAgDIVdzIMeO4drdJ2O0WkKHaM1jwjxaamCHwSS9yM91C0nxpjyPAOTtFLTCX6OVuZpHggh7HlO+zqP+vjsoqEs/JXLSE7y5UZZaIQONtPk2YRIcKbKsWk1vnkHbEIkOFPl2LQa37wDNiESnKlyjdDBZnS/YQiz/4H3/sr7hrKQj9E/8dDKKpx7AU1z2m6NGyc/AAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>发送到 OneNote<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>nomailto noimage nomedia noinput<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACPSURBVDhPY6AKcHJy+u/o6PgfRBODYWqh2iEGkIOh2hEGQLkEAe0NUFdXX6empnZLQ0NDEsqvAvHBkkBA0ACgxsMgDSCDQHyyDADibqgrsskyAKQJiP2gLplDlgEgNkwz2QZoaWnxkGOAGkgjlAvmA7ExlEvYAEIAqwHA9P0PJkEshmpHmEgqhmqnBDAwAABoiM/FCYTHngAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>context-searchselect<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> onenotePath <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>C:<span class="pl-cce">\\</span>Program Files<span class="pl-cce">\\</span>Microsoft Office<span class="pl-cce">\\</span>Office15<span class="pl-cce">\\</span>Onenote.exe<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> focusedWindow <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-smi">commandDispatcher</span>.<span class="pl-smi">focusedWindow</span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> selection <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">String</span>(<span class="pl-smi">focusedWindow</span>.<span class="pl-c1">getSelection</span>());</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">selection</span>.<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">				 <span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cmd_selectAll<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">				 <span class="pl-k">var</span> allSelection <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">String</span>(<span class="pl-smi">focusedWindow</span>.<span class="pl-c1">getSelection</span>());</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">				 <span class="pl-k">if</span> (<span class="pl-smi">allSelection</span>.<span class="pl-c1">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>)<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">				 <span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cmd_copy<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">				 <span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cmd_selectNone<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			{</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">				 <span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cmd_copy<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> file <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/file/local;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">file</span>.<span class="pl-en">initWithPath</span>(onenotePath);</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> <span class="pl-c1">process</span> <span class="pl-k">=</span> <span class="pl-smi">Components</span>.<span class="pl-c1">classes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/process/util;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Components</span>.<span class="pl-smi">interfaces</span>.<span class="pl-smi">nsIProcess</span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">process</span>.<span class="pl-en">init</span>(file);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> args <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>/sidenote<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>/paste<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">process</span>.<span class="pl-en">run</span>(<span class="pl-c1">false</span>, args, <span class="pl-smi">args</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>粘贴并确定<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>input<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>context-paste<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cmd_paste<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">window</span>.<span class="pl-en">QueryInterface</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIInterfaceRequestor</span>).<span class="pl-en">getInterface</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIDOMWindowUtils</span>).<span class="pl-en">sendKeyEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keypress<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">KeyEvent</span>.<span class="pl-c1">DOM_VK_RETURN</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">]);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> 多功能js菜单</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">function</span> () {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> items <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>繁体转简体<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADlSURBVDhPrZLdDYJAEIRpwwZswGcSgXcqsAM6sAVaoAaboAua0fmOWYJ6iIluMtm9/Znb3bvir1JV1alpmqOPi+C3uS0qPNd1fTcuQYaNT+cJ39Yl3DKuCAJ9zg+Zy2YhMZM0Cm3OL927dBYcERQGgXZbxpLcHKebNIbLnoUABdKDk9Pt0pBOQYQtvJM4SHGHFiDoDBaZlgmyBHJOTuAFwl7jGvZHAmm6iNZ5tnT2CPsEL4nMm/N/14F0F4VfEwhp05FssMjlr+wRdHxVkgLyLQsEWwTpvXP/3ITEE8qyPDj0qxTFAyOH4j/JaiwmAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">content</span>.<span class="pl-smi">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">content</span>.<span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script<span class="pl-pds">&quot;</span></span>)).<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>http://tongwen.openfoundry.org/NewTongWen/tools/bookmarklet_cn2.js<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">content</span>.<span class="pl-smi">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">content</span>.<span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>style<span class="pl-pds">&quot;</span></span>)).<span class="pl-smi">textContent</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>body { font-family: &quot;微软雅黑&quot; }<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>自动刷新<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		url: &quot;javascript:(function(p)%7Bopen(&#39;&#39;,&#39;&#39;,p).document.write(&#39;%3Cbody%20id=1%3E%3Cnobr%20id=2%3E%3C/nobr%3E%3Chr%3E%3Cnobr%20id=3%3E%3C/nobr%3E%3Chr%3E%3Ca%20href=%22#%22onclick=%22return!(c=t)%22%3E%E7%82%B9%E5%87%BB%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%3C/a%3E%3Cscript%3Efunction%20i(n)%7Breturn%20d.getElementById(n)%7Dfunction%20z()%7Bc+=0.2;if(c%3E=t)%7Bc=0;e.location=u;r++%7Dx()%7Dfunction%20x()%7Bs=t-Math.floor(c);m=Math.floor(s/60);s-=m*60;i(1).style.backgroundColor=(r==0%7C%7Cc/t%3E2/3?%22fcc%22:c/t%3C1/3?%22cfc%22:%22ffc%22);i(2).innerHTML=%22%E5%88%B7%E6%96%B0%E8%AE%A1%E6%95%B0:%20%22+r;i(3).innerHTML=%22%E5%88%B7%E6%96%B0%E5%80%92%E8%AE%A1%E6%97%B6:%20%22+m+%22:%22+(s%3C10?%220%22+s:s)%7Dc=r=0;d=document;e=opener.top;u=prompt(%22%E9%93%BE%E6%8E%A5%E5%9C%B0%E5%9D%80%22,e.location.href);t=u?prompt(%22%E5%88%B7%E6%96%B0%E9%97%B4%E9%9A%94/%E7%A7%92%EF%BC%9A%22,300):0;setInterval(%22z()%22,200);if(!t)%7Bwindow.close()%7D%3C/script%3E%3C/body%3E&#39;)%7D)(&#39;status=0,scrollbars=0,width=240,height=160,left=1,top=1&#39;)&quot;,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVDhPzVPBEcMgDPMIHaEjdAMILJJRukFHyAgdiVFSqxHUpr6+8qjudJezEMiGyOmoteZlWZ6llN0SNWhcJimlGz8/yDk/ZuNMrOnraDswmZtyxYkgvllzm9F6xO5FjbppvAulgSgdJRHTc4vM0UxAyiKmuLLkoJtedZO76q4Nyv8AG0vZEBexKTuojhvxLfSCJQZHeQADVu09B6dbI4grozQAs5q2vsa+yijBz4f0dUAvRo9lZpTO/Rg4Ef3NRtRc7HMg8gLZYcKHnBAOtAAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">	    label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>GBK &lt;-&gt; UTF-8<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">	    image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACUSURBVDhPzVLbDYAgELsRHIER3IDAJG7oCI7gKI6AV+0lRPGFH9qERPpS8OR/8N63IYQhxtiREjyDg0aqDBjUPOlKCJAWFiZohyUqOAtvjXkxNUdphRKNCmNm2L1lUzIiY8Jl2FAs0fP1JNJZ2MCSxY/s+wJ8hm7qj0Ch/hINStT/RkNuxPCQvjdIBhgYeD7KH0BkBunBj8nDYt6dAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">	    <span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">	        <span class="pl-k">var</span> charset <span class="pl-k">=</span> <span class="pl-smi">gBrowser</span>.<span class="pl-smi">mCurrentBrowser</span>.<span class="pl-smi">_docShell</span>.<span class="pl-c1">charset</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">	        <span class="pl-en">BrowserSetForcedCharacterSet</span>(charset <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>UTF-8<span class="pl-pds">&quot;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>GBK<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>UTF-8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">	    }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">	{},</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>宽度匹配<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>javascript:(function(){function%20t(f){a=d.createNodeIterator(d,1,f,false);while(a.nextNode()){}}var%20d=document;t(function(e){x=e.offsetLeft;l=e.offsetParent;while(l!=null){x+=l.offsetLeft;l=l.offsetParent}var%20w=d.documentElement.clientWidth-x;var%20s=e.style;if(s.marginLeft)w-=s.marginLeft;if(s.marginRight)w-=s.marginRight;if(s.paddingLeft)w-=s.paddingLeft;if(s.paddingRight)w-=s.paddingRight;if(s.borderSize)w-=s.borderSize;w-=d.defaultView.innerWidth-d.documentElement.offsetWidth;if(e.tagName==&#39;IMG&#39;){h=e.clientHeight*w/e.clientWidth;s.maxHeight=h}s.maxWidth=w+&#39;px&#39;})})();<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABiSURBVDhPtYxbCsAwCAQ9ove/TB9BQRxrSNoO+OHusPIJqnrcZ+8U+DmYjbUDKAvgeNCdqQNkUXw6UwfIYoCyAE4OXg9UxH57wB34CC48687UnwYy0YGPoCD2WwORVb9B5ATEqLmh/a1suQAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>编辑当前网页<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAExSURBVDhPnVK9SgNhELwgGMFIKkGsrPMIx8Fxf3AP4CXvkkbbvIPYWKew0E6wt0hzagoLXyNpkpnNfPLl8osDm92dndlvORIQSZKMkFrWHIeWPCukaboA8VBV1YmonaAG+kd6RNkFnyQQ47Is26I3EMfxGTTP1NIj2i640wLGWxiGFxr9Ic/zLmbvTocF9xrZgp4bKD6iKLrUmC9fgZs0ND2NV+DGhuAbr17DfIP6x5+tve5jy5Ip4tfndpod/CWoXxlHmx3cEpzf4Qc9aMawD1GNPFN+ognxouACcr6mb2Y0txT8J2wJilrEkCczq7ezGa7nrKGpeT5PWuAvesqLJKB5ZicCezXcwgYxLIrinFl9bW6AtbhNDX4qNWuRZdlA/sMaFjjnC+Sc2Tc7bNcEwRIQgv380FfaywAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">		oncommand<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>content.document.body.contentEditable = content.document.body.contentEditable == &quot;true&quot; ? &quot;false&quot; : &quot;true&quot;;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>破解右键防复制<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">		url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>javascript:(function(){var%20doc=document;var%20bd=doc.body;bd.onselectstart=bd.oncopy=bd.onpaste=bd.onkeydown=bd.oncontextmenu=bd.onmousemove=bd.onselectstart=bd.ondragstart=doc.onselectstart=doc.oncopy=doc.onpaste=doc.onkeydown=doc.oncontextmenu=null;doc.onselectstart=doc.oncontextmenu=doc.onmousedown=doc.onkeydown=function%20(){return%20true;};with(document.wrappedJSObject||document){onmouseup=null;onmousedown=null;oncontextmenu=null;}var%20arAllElements=document.getElementsByTagName(&#39;*&#39;);for(var%20i=arAllElements.length-1;i&gt;=0;i--){var%20elmOne=arAllElements[i];with(elmOne.wrappedJSObject||elmOne){onmouseup=null;onmousedown=null;}}var%20head=document.getElementsByTagName(&#39;head&#39;)[0];if(head){var%20style=document.createElement(&#39;style&#39;);style.type=&#39;text/css&#39;;style.innerHTML=%22html,*{-moz-user-select:auto!important;}%22;head.appendChild(style);}void(0);})();<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVDhPpZNBDoAgDAT5lx4o4QLflqcYfYa2BhqCFStusgmw0z0V45wL6A19fDTNBCoYGS7eqOC6WGsno5T3fi5zXJAztR4L8JzKW2sAWDI2VoBOGXsuqKXKVJAgzlSQIM5UkCDOVJAgzlSQIM56UE+3gi+rTGxd8Ocz7QbXM9KhCV6NcysAxBMX5fcfN++yKAAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">    }, </td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">	{},</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>错误控制台<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		oncommand<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>toJavaScriptConsole();<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADWSURBVDhPYyAG2NvbCzg5OR10dHTUhgoRBj4+PlxWVla8QE1BQM03gPg/kP0SpyGhoaFsQEUTgQreAulPIA048CushgAFJ2BRjAtjGgIUuIVFIT58A6oVAkAmAgVfoSnCh4vBGoGMSUDNu2xsbESxGQIU+wOk1wDpDiDd7uzsXASkbcGaQQDIOQBSCMQXsBjyChiFFlCl2AFQgQRQ0zVshgDpWKgy/ADZECB9EWaIh4cHH1QJYQDULI5uCFSKeDA8DbkKNWQXVJg0ADVkP5DuggqhAQYGANCdt5rwHHceAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>权限管理器<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		oncommand<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>getBrowser().selectedTab = getBrowser().addTab (&#39;about:permissions&#39;)<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>chrome://mozapps/skin/passwordmgr/key.png<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>复制扩展清单<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEYSURBVDhPpZPNbcJAEIU3OcEpEeIIacGS/+SbazFFQC1UAD0kHYQbJSC4uAA48Pc9eTbBYMsoGenTzs7se9odsLuLlziOC9gZhWpV64mIomgI3wgvxko1a3fHnwyCIHhP03QkEIwRzFgPwvKx77N/M9lvUPyCjQfBjvUoLPf1LesC6iY0/HU7kZFuYtIqmg620WZwgtJQ3igWMoCPLMsGrBruq2YwD8MwgpB8ycHzvfAGzWQK+qVWUDjc+tVdnJMHRd2kSawbaLj7m9r2/wYUak/QIRptM9ETZuCfMKkNUWKZyEyhnPrPTNg/DtE3jVK66kGPT5JB1/+gTJIkttZzBhTX/gCc2c/zPO8J5ar5PvtPfTsmJZy7AuvoA2wi9C/vAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">Application</span>.<span class="pl-en">getExtensions</span>(<span class="pl-k">function</span>(<span class="pl-smi">extensions</span>) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> actives <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">					unActives <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">extensions</span>.<span class="pl-c1">all</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">item</span>) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> arr <span class="pl-k">=</span> <span class="pl-smi">item</span>.<span class="pl-smi">_item</span>.<span class="pl-smi">isActive</span> <span class="pl-k">?</span> actives <span class="pl-k">:</span> unActives;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">arr</span>.<span class="pl-c1">push</span>(<span class="pl-smi">item</span>.<span class="pl-smi">_item</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> str <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>目前启用的：<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">+=</span> <span class="pl-smi">actives</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> i <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> name;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">				}).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n\n</span>目前禁用的：<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">+=</span> <span class="pl-smi">unActives</span>.<span class="pl-en">map</span>(<span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">i</span>) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> i <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> name;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">				}).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(str);</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">];</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> menu <span class="pl-k">=</span> <span class="pl-en">PageMenu</span>({</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>多功能菜单<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>normal<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>context-openlinkincurrent<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABiSURBVDhPY6AKcHJyOhIQEPAfGTs6Oh6GShOUZ0CXhGGoNEH54WAAtkACiUGlCcoPAkAongnJExWIDg4O1lAug4uLiw2yPFEGQJlwgCKGrAkZQ6WpYwCyF0BsZPmBTAcMDACMLvUa5tdA9QAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">menu</span>(items);</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>图片</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">function</span> () {</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> items <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>谷歌以图搜图<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		url <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://www.google.com/searchbyimage?image_url=%IMAGE_URL%<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>打开图像RAR<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> imageUrl <span class="pl-k">=</span> (<span class="pl-smi">gContextMenu</span>.<span class="pl-smi">mediaURL</span> <span class="pl-k">||</span> <span class="pl-smi">gContextMenu</span>.<span class="pl-smi">imageURL</span>);</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			imageUrl <span class="pl-k">=</span> <span class="pl-smi">imageUrl</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>jpg<span class="pl-cce">\.</span>thumb<span class="pl-cce">\.</span>jpg<span class="pl-k">$</span><span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.jpg<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> file <span class="pl-k">=</span> Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/file/directory_service;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIProperties</span>).<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>TmpD<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Ci</span>.<span class="pl-smi">nsILocalFile</span>);</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">file</span>.<span class="pl-c1">append</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.rar<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/embedding/browser/nsWebBrowserPersist;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">createInstance</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIWebBrowserPersist</span>)</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">saveURI</span>(Cc[<span class="pl-s"><span class="pl-pds">&quot;</span>@mozilla.org/network/io-service;1<span class="pl-pds">&quot;</span></span>].<span class="pl-en">getService</span>(<span class="pl-smi">Ci</span>.<span class="pl-smi">nsIIOService</span>)</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">newURI</span>(imageUrl, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>), <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>, file, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">file</span>.<span class="pl-en">launch</span>();</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-c1">200</span>);</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>复制图片 Base64<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">		text<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>%IMAGE_BASE64%<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">	}];</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> menu <span class="pl-k">=</span> <span class="pl-en">PageMenu</span>({</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>image<span class="pl-pds">&#39;</span></span>, </td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>context-savelink<span class="pl-pds">&#39;</span></span>, </td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">		icon<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>image<span class="pl-pds">&#39;</span></span>, </td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		onpopupshowing<span class="pl-k">:</span> syncHidden,</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">menu</span>(items);</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">items</span>.<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">it</span>){</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-smi">it</span>.<span class="pl-smi">command</span>)</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#contentAreaContextMenu[addMenu~=&quot;image&quot;] #<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">it</span>.<span class="pl-smi">command</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{ display: none !important; }<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>快捷回复</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">function</span>(){</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> items <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>谢谢你的解答<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>非常感谢您的解答！！！<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>T<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>亲，要的就是<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>亲，要的就是这个，非常感谢！！！<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>D<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>不用客气~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>不用客气，大家互相帮助……<span class="pl-cce">\n\u256E\uFF08\u256F\u25C7\u2570\uFF09\u256D</span><span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Y<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>反馈情况再说<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Mark，看反馈情况再说。。。<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>M<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>收藏备用~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>看起来很不错哦，收藏之~~~<span class="pl-cce">\n</span>谢谢LZ啦！！！<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>G<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>谢谢楼主分享<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>谢谢楼主的分享!这个绝对要顶！！！<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>F<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>楼上正解~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>楼上正解……<span class="pl-cce">\u0285\uFF08\u00B4\u25D4\u0C6A\u25D4\uFF09\u0283</span><span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>R<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>坐等楼下解答<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>坐等楼下高手解答~~~⊙_⊙<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>V<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		{},</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>这个要支持~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>很好、很强大，这个一定得支持！！！<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>A<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>不明真相的~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>不明真相的围观群众~~~<span class="pl-cce">\u0285\uFF08\u00B4\u25D4\u0C6A\u25D4\uFF09\u0283</span><span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>S<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>没图没真相~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>没图没真相，纯支持下了~~~<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>C<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>不明觉厉~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>虽然不知道LZ在说什么但是感觉很厉害的样子~~~<span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>B<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>嘿嘿~~~<span class="pl-pds">&quot;</span></span>, input_text<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\u2606\u002E\u3002\u002E\u003A\u002A\u0028\u563F\u00B4\u0414\uFF40\u563F\u0029\u002E\u3002\u002E\u003A\u002A\u2606</span><span class="pl-pds">&quot;</span></span>,accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>X<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">	];</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> menu <span class="pl-k">=</span> <span class="pl-en">PageMenu</span>({</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">		label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>快速回复...<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>input<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">		accesskey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>W<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">		insertBefore<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>context-openlinkintab<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> position: 1,</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACGSURBVDhPYxh0gAWIw4B4rbe399+AgID/IAxig8SgciA1WIGWv7//b5gmXBikBqQWogUBlJBtJIShLlKCaIWAtdgU4sMgPRCtQODn5/cPKigAwkiKcPJBeoBsCKDYACCgzAtAQHEgggBF0QgDWBMSMoaqIRlEwAyE8skCYkCMEnCDATAwAACbYMG591LPcQAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">oncommand</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>){</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> input_text <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input_text<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(input_text) {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">addMenu</span>.<span class="pl-en">copy</span>(input_text);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">goDoCommand</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cmd_paste<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">menu</span>(items);</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>搜索所选文本</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class="pl-k">new</span> <span class="pl-en">function</span> () {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> items <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>搜索所选文本<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.baidu.com/s?wd=%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.baidu.com/favicon.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>翻译所选文本<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://translate.google.de/#auto/zh-CN/%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://translate.google.de/favicon.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>百度云搜索<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://www.google.de/search?q=site:pan.baidu.com%20%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jZ3MS0hUURwG8NOmVjGLFtGm9i1aGESRUItWs1CoICiKIMhtybSwKOhND1KooCGhF9j15kRBFDHgjIJiUmSOIyaak/mayTNzz/ucEL4Wl5ujbszFb/P9v+9PfN+PSSk9a61zzmE1rLVOSuml0+kYEUJ41lqshRDCI8YYt9YHxhhHjLFYjiuL9vwfXOxewNWeBWQn3IpOhBhjUE1rg2tdBodeWZz56HD6ncPhDos3w0t7EaJ1OIrkpxVqH5VxJ8uhtQaTGqc6GOqeVaC1xvI+CcOQmp5Bv9+JeKIbqS/lf/n5tyXUNBfRN2kQiMW+1hpEKQ2lNFKDAkeelzBUfxKVfQcw0dCI/GgR2e8MBz2OeJtEvE3i2GuJgSmJaEeUUsj94tj5YA5HX5Yw1dmL33dbUKjZi6b6G9h+bwa1ySK8rwypbwz7H5cQf1oEFxJKKRApFe53lbDlyjj6xyuQUkJKib66E9h9NoNt138gPbyYt2TD7sBPBikViBASD7OzWJ/Io+NzEUJIzFc49iQy2HAujye9YRbJTVbQ4E2iSDmEkOGDwhzDpgt5bGwawvEXE9hxewSkMYfL76cghFiiUBJo/cRBAxE+4FyAc4GeMYpdrQWsuzmGzc3juJWZBecc0T3yYXAeWy+NYHQ6AOcChDHuqgtBwMHYymG16M4Yd4RS6jEWjv4XpeV2kkwmY5RSLwiYW+0wCJijlHq+78f+AjFijgdXSBqcAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">		{},</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>BookLink<span class="pl-pds">&quot;</span></span>,keyword<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bl<span class="pl-pds">&#39;</span></span>, text<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>%SEL%<span class="pl-pds">&#39;</span></span>, where<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>tab<span class="pl-pds">&#39;</span></span>, image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://booklink.me/favicon.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>炫电影<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.xuandy.com/index.php?s=%s&amp;submit=%E7%AB%99%E5%86%85%E6%90%9C%E7%B4%A2<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.xuandy.com/favicon.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>YouTube<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://www.youtube.com/results?search_query=%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://s.ytimg.com/yts/img/favicon_32-vflWoMFGx.png<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>搜库搜索<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.soku.com/search_video/q_%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.soku.com/favicon.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">		{},</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>搜索相关图片<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://www.google.com/search?hl=zh-CN&amp;site=imghp&amp;tbm=isch&amp;source=hp&amp;q=%s<span class="pl-pds">&quot;</span></span>, image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH9SURBVDhPzVE7i5pREP1+gYWFIMKCIPgHfKyFoCkEwdbKQny/xbeCoCK4i6KfqCyCCGIlbGN+wgrCohAUY20TXEgXWEg7uWfwC0tIlSoDhzv3zpkzjyv9v2axWD4ZjUbv3d2dV6/X8wkYDAavzWbzqlQq9Y36d3t4eHgtlUqUTCYpk8kQ/EQiwVgsFiSE7pnocrme3G63bDKZZKEsW61W2Ww2yyLxLZfL0Wg0+sFEYcFg8HO326VarUYibwWeVC6XCUin01QoFPgURCoWi7TZbOh8Pv8Mh8PPgUDgWVQ+Hg4Hmk6n3Al4UiqVIuBWRPJ4PKtYLEar1Youlws9Pj6yWD6fp1arxaKn04mazSbF43GSIpEIAbd8yW63y9Vqle+z2ewNsWg0ytWQ0O/3OSbuX/AuifYIQEuohBHq9TqTRMVvSBLtswg4jUaDY8J/RadQYvVQKMQkPGazWXI6nZH5fP5dScQ7Cg2HQ/L5fHW/3/+VBZQRlKUo/nK5pOv1SpPJhLeOsTqdDm23W9rv91SpVLjg7xHw30oXEMK/r9dr2u1272gZNh6PX47HIw0GA+6IdwcHQKIygiKCzfd6vXeHwyGLf5dF7AU/ofBYoN1uE4C2P3aBIBYIIcSwF8ThA+DwN2q1WrtOp7tXq9UMjUbD+OgrAO/P+226fzVJ+gV+cHLx+IUV6AAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>搜索所选文本<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.bing.com/search?q=%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.bing.com/s/a/bing_p.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">		{},</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>汉典查寻<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://www.zdic.net/search?lb=1&amp;q=%s<span class="pl-pds">&quot;</span></span>, image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADwSURBVDhPrVPBDYMwEMsAXaALdAHeiAB/JmADNmAFVugMXaJbsEx7DnZCQ0Go6klWcne2eyGp+3uUZXmt67oAWHLK0WNpP4w4N03zIkbv/UO59Z6kbcMIPQgiUzBnhsHE1p6yFDnxCOBSlkIGXCfsMf6qfl9zKEuxaoYRsTdMzLEfThmcwaEB13gE3YLVfzsCgf3+EdZ3LYLI33IAGsrDr4cPRdJI4F1IiIlUEzc9Kks6EjBmNGvb9sanHUe3FUca0KM8vn9dV4RIMhCQf/wvrFDkBEPHtquq6pJ/JzP3bC8BgokwxcDSJmBKzrRUnHsDZiEGMEdIh0MAAAAASUVORK5CYII=<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>{label:&quot;Wiki-DE该词条&quot;,url:&quot;https://de.wikipedia.org/wiki/%s&quot;,image:&quot;http://bits.wikimedia.org/favicon/wikipedia.ico&quot;},</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>Wiki-EN该词条<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://en.wikipedia.org/wiki/%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://bits.wikimedia.org/favicon/wikipedia.ico<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		{label<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>Wiki-CN该词条<span class="pl-pds">&quot;</span></span>,url<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>https://zh.wikipedia.org/zh-cn/%s<span class="pl-pds">&quot;</span></span>,image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>http://bits.wikimedia.org/favicon/wikipedia.ico<span class="pl-pds">&quot;</span></span>}</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">		];</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> menu <span class="pl-k">=</span> <span class="pl-en">PageMenu</span>({</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		condition<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">		position<span class="pl-k">:</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">		image<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFRSURBVDhPrZI9S8NQFIbzoaiTH4tIJ6Gugrq4iZOKooOz2B/g4hhTE5QsDoL4C3R1dRLEBBx0dZEanAJuVlIVP2o1PicpGCEpWHzg4c09pOfe0xvlX7Ftu8MwjFFyzTTNsmVZq47jDEVRpDZfackgHqmqWic/sKZp2hfrKs8b2IW59OIZvuEejuGwruvT5Ck20MFs2KlMfJIrSeUXsvMhJ3klJ+NKmiAIeogrXrgk82Yt0vyR3E2WKWgwQDzjTlzI5xpPkscUYRj2S6DMngcH0G7J42SZwvd9mfECK6hLLYNxfMHteJVBif9Ark7G6I4rPxTwHOWURSlkIT86wAaNZM4SznLsdfIGI3zCBcxFRtnEO3ynUb15dXJDW2QNH/g2FsmW9OEUym4T2InCEsoYcpJ5KfwV+UaWURrc4wy2xRxWGWs/WbaB53kjrusyqqJ8A05wUqnA1dFgAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">menu</span>(items);</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span>隐藏相同项。必须，不能删除</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">syncHidden</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">Array</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">event</span>.<span class="pl-c1">target</span>.<span class="pl-smi">children</span>).<span class="pl-c1">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">elem</span>){</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> command <span class="pl-k">=</span> <span class="pl-smi">elem</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>command<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>command) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> original <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(command);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">!</span>original) {</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">elem</span>.<span class="pl-smi">hidden</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">elem</span>.<span class="pl-smi">hidden</span> <span class="pl-k">=</span> <span class="pl-smi">original</span>.<span class="pl-smi">hidden</span>;</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">elem</span>.<span class="pl-smi">collapsed</span> <span class="pl-k">=</span> <span class="pl-smi">original</span>.<span class="pl-smi">collapsed</span>;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">elem</span>.<span class="pl-c1">disabled</span> <span class="pl-k">=</span> <span class="pl-smi">original</span>.<span class="pl-c1">disabled</span>;</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">};</td>
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
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/defpt/userChromeJs/blame/99a79b74622ef310bf634668809f024ea862ac4a/addMenuPlus/_addmenu.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/defpt/userChromeJs/issues/new">Open new issue</a></li>
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
      <li class="mr-3">&copy; 2018 <span title="0.31637s from unicorn-6cc6d9bd76-6qvd9">GitHub</span>, Inc.</li>
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

