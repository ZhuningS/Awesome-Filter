
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



  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
  <meta name="selected-link" value="repo_source">

  
<meta name="octolytics-dimension-device" content="mobile" />
<meta name="octolytics-dimension-user_id" content="6745066" /><meta name="octolytics-dimension-user_login" content="cyanzhong" /><meta name="octolytics-dimension-repository_id" content="98434321" /><meta name="octolytics-dimension-repository_nwo" content="cyanzhong/xTeko" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="98434321" /><meta name="octolytics-dimension-repository_network_root_nwo" content="cyanzhong/xTeko" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="9DE2:1342:39FF81:747952:5BD36697" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">

  <meta class="js-ga-set" name="dimension3" content="mobile">


  

  <title>xTeko/zhihu.js at master · cyanzhong/xTeko · GitHub</title>

  <link crossorigin="anonymous" media="all" integrity="sha512-nswL/R8A0290SPI5djCYMLbbUbIl7bptftvuazcbC4fNS8lGJBD44QJSuQuCUblJef1aeys870UazDLefRO7mg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/mobile-ba1a4b7de898ed2903730d2850e1e86b.css" />


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">

  <link rel="apple-touch-icon" href="https://assets-cdn.github.com/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://assets-cdn.github.com/apple-touch-icon-180x180.png">
  <meta name="apple-mobile-web-app-title" content="GitHub">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="page-responsive">
    


  <header class="Header f4 lh-default clearfix">
    <div class="p-responsive flex-justify-between">
        <div class="d-flex flex-justify-between flex-items-center position-absolute right-0 left-0 px-3">
          <a class="brand-logo-invertocat touchable" href="https://github.com/" data-ga-click="Mobile, tap, location:header; text:Logged in logo">
            <svg height="32" class="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>

          <div class="px-3 overflow-hidden">
                <div class="css-truncate css-truncate-target width-fit">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <strong>
      <a class="text-white" href="/cyanzhong">cyanzhong</a>
    </strong> /
    <strong>
      <a class="text-white" href="/cyanzhong/xTeko">xTeko</a>
    </strong>
  </div>

          </div>

          <div class="d-flex">
            
            <div class="px-3"><!-- placeholder for hamburger --></div>
          </div>
        </div>


        <details class="details-reset">
          <summary class="mt-1 float-right position-relative user-select-none" data-ga-click="Mobile, tap, location:header; text:Hamburger">
            <svg height="24" class="octicon octicon-three-bars notification-indicator" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </summary>
              <div style="clear: both;">
        <div class="py-3">
          <div class="header-search scoped-search site-scoped-search js-site-search position-relative "
  role="search"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="98434321" data-scoped-search-url="/cyanzhong/xTeko/search" data-unscoped-search-url="/search" action="/cyanzhong/xTeko/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper  js-chromeless-input-container">
            <a class="header-search-scope no-underline" href="/cyanzhong/xTeko/blob/master/extension-scripts/zhihu.js">This repository</a>
        <input type="text"
          class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-label="Search this repository"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
      </label>
</form>  </div>
</div>

        </div>
      <ul class="text-bold list-style-none p-0 m-0">
              <li>
                <a class="js-selected-navigation-item HeaderNavlink py-2" data-ga-click="Mobile, tap, location:header; text:Marketplace" href="/marketplace">
                  Marketplace
</a>              </li>
          <li>
            <a href="/explore" data-ga-click="Mobile, tap, location:header; text:Explore" class="js-selected-navigation-item HeaderNavlink py-2">
              Explore
            </a>
          </li>
        <li>
          <a href="/login?return_to=%2Fcyanzhong%2FxTeko%2Fblob%2Fmaster%2Fextension-scripts%2Fzhihu.js" data-ga-click="Mobile, tap, location:header; text:Sign in" class="js-selected-navigation-item HeaderNavlink py-2">
            Sign in
          </a>
        </li>
      </ul>
    </div>

        </details>
    </div>
  </header>



    




<div class="reponav-wrapper lh-default">
  <nav class="reponav js-reponav"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /cyanzhong/xTeko" href="/cyanzhong/xTeko">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /cyanzhong/xTeko/issues" href="/cyanzhong/xTeko/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">7</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /cyanzhong/xTeko/pulls" href="/cyanzhong/xTeko/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">2</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links=" /cyanzhong/xTeko/projects" href="/cyanzhong/xTeko/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>


    <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /cyanzhong/xTeko/pulse" href="/cyanzhong/xTeko/pulse">
      Pulse
</a>
  </nav>
</div>

<div id="js-flash-container">


</div>




<div class="breadcrumb blob-breadcrumb">
  <label for="blob-history-checkbox" class="blob-history-label">
    <svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
  </label>
  <span class="filetype-icon"><svg class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg></span>
  <span class="js-path-segment"><a data-pjax="true" href="/cyanzhong/xTeko/tree/master/extension-scripts"><span>extension-scripts</span></a></span><span class="separator">/</span><strong class="final-path">zhihu.js</strong>
</div>


<input id="blob-history-checkbox"
       class="js-blob-history-checkbox blob-history-checkbox"
       type="checkbox"
       data-url="/cyanzhong/xTeko/latest_commit/master/extension-scripts/zhihu.js">

<div class="blob-history">
  <a class="js-blob-history-link" href="/cyanzhong/xTeko/commits/master/extension-scripts/zhihu.js">
    Loading latest commit…
</a></div>

  <div class="blob-file-content js-file-line-container">
    <div class="highlighted-blob tab-size" data-tab-size="8"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="pl-smi">$ui</span>.<span class="pl-en">render</span>({</div><div class='line js-file-line' id='LC2'>&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC3'>&nbsp;&nbsp;&nbsp;&nbsp;title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>知乎日报<span class="pl-pds">&quot;</span></span></div><div class='line js-file-line' id='LC4'>&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC5'>&nbsp;&nbsp;views<span class="pl-k">:</span> [{</div><div class='line js-file-line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>list<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rowHeight<span class="pl-k">:</span> <span class="pl-c1">64.0</span>,</div><div class='line js-file-line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;separatorInset<span class="pl-k">:</span> <span class="pl-en">$insets</span>(<span class="pl-c1">0</span>, <span class="pl-c1">5</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>),</div><div class='line js-file-line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;template<span class="pl-k">:</span> [{</div><div class='line js-file-line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span></div><div class='line js-file-line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">layout</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">make</span>, <span class="pl-smi">view</span>) {</div><div class='line js-file-line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">make</span>.<span class="pl-c1">left</span>.<span class="pl-c1">top</span>.<span class="pl-c1">bottom</span>.<span class="pl-en">inset</span>(<span class="pl-c1">5</span>)</div><div class='line js-file-line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">make</span>.<span class="pl-c1">width</span>.<span class="pl-en">equalTo</span>(<span class="pl-smi">view</span>.<span class="pl-c1">height</span>)</div><div class='line js-file-line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div><div class='line js-file-line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>label<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>label<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;font<span class="pl-k">:</span> <span class="pl-en">$font</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">17</span>),</div><div class='line js-file-line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lines<span class="pl-k">:</span> <span class="pl-c1">0</span></div><div class='line js-file-line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">layout</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">make</span>) {</div><div class='line js-file-line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">make</span>.<span class="pl-c1">left</span>.<span class="pl-en">equalTo</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">right</span>).<span class="pl-en">offset</span>(<span class="pl-c1">10</span>)</div><div class='line js-file-line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">make</span>.<span class="pl-c1">top</span>.<span class="pl-c1">bottom</span>.<span class="pl-en">equalTo</span>(<span class="pl-c1">0</span>)</div><div class='line js-file-line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">make</span>.<span class="pl-c1">right</span>.<span class="pl-en">inset</span>(<span class="pl-c1">10</span>)</div><div class='line js-file-line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],</div><div class='line js-file-line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;actions<span class="pl-k">:</span> [{</div><div class='line js-file-line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Share<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">handler</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tableView</span>, <span class="pl-smi">indexPath</span>) {</div><div class='line js-file-line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> object <span class="pl-k">=</span> <span class="pl-smi">tableView</span>.<span class="pl-c1">object</span>(indexPath)</div><div class='line js-file-line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">$share</span>.<span class="pl-en">sheet</span>([<span class="pl-smi">object</span>.<span class="pl-smi">url</span>, <span class="pl-smi">object</span>.<span class="pl-c1">label</span>.<span class="pl-c1">text</span>])</div><div class='line js-file-line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</div><div class='line js-file-line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Open<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">handler</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tableView</span>, <span class="pl-smi">indexPath</span>) {</div><div class='line js-file-line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">$app</span>.<span class="pl-en">openURL</span>(<span class="pl-smi">tableView</span>.<span class="pl-c1">object</span>(indexPath).<span class="pl-smi">url</span>)</div><div class='line js-file-line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</div><div class='line js-file-line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;layout<span class="pl-k">:</span> <span class="pl-smi">$layout</span>.<span class="pl-smi">fill</span>,</div><div class='line js-file-line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;events<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">didSelect</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">tableView</span>, <span class="pl-smi">indexPath</span>) {</div><div class='line js-file-line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">openURL</span>(<span class="pl-smi">tableView</span>.<span class="pl-c1">object</span>(indexPath).<span class="pl-smi">url</span>)</div><div class='line js-file-line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">pulled</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">sender</span>) {</div><div class='line js-file-line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">refetch</span>()</div><div class='line js-file-line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC58'>&nbsp;&nbsp;}]</div><div class='line js-file-line' id='LC59'>})</div><div class='line js-file-line' id='LC60'><br></div><div class='line js-file-line' id='LC61'><span class="pl-k">function</span> <span class="pl-en">refetch</span>() {</div><div class='line js-file-line' id='LC62'>&nbsp;&nbsp;<span class="pl-smi">$http</span>.<span class="pl-c1">get</span>({</div><div class='line js-file-line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>https://news-at.zhihu.com/api/4/news/latest<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">handler</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">resp</span>) {</div><div class='line js-file-line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">render</span>(<span class="pl-smi">resp</span>.<span class="pl-c1">data</span>.<span class="pl-smi">stories</span>)</div><div class='line js-file-line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">$cache</span>.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>stories<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">resp</span>.<span class="pl-c1">data</span>.<span class="pl-smi">stories</span>)</div><div class='line js-file-line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC68'>&nbsp;&nbsp;})</div><div class='line js-file-line' id='LC69'>}</div><div class='line js-file-line' id='LC70'><br></div><div class='line js-file-line' id='LC71'><span class="pl-k">function</span> <span class="pl-en">render</span>(<span class="pl-smi">stories</span>) {</div><div class='line js-file-line' id='LC72'>&nbsp;&nbsp;<span class="pl-k">var</span> data <span class="pl-k">=</span> []</div><div class='line js-file-line' id='LC73'>&nbsp;&nbsp;<span class="pl-k">for</span> (<span class="pl-k">var</span> idx <span class="pl-k">in</span> stories) {</div><div class='line js-file-line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> story <span class="pl-k">=</span> stories[idx]</div><div class='line js-file-line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">data</span>.<span class="pl-c1">push</span>({</div><div class='line js-file-line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>http://news-at.zhihu.com/story/<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">story</span>.<span class="pl-c1">id</span>,</div><div class='line js-file-line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src<span class="pl-k">:</span> <span class="pl-smi">story</span>.<span class="pl-c1">images</span>[<span class="pl-c1">0</span>]</div><div class='line js-file-line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text<span class="pl-k">:</span> <span class="pl-smi">story</span>.<span class="pl-c1">title</span></div><div class='line js-file-line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;})</div><div class='line js-file-line' id='LC84'>&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC85'>&nbsp;&nbsp;<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>list<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">data</span> <span class="pl-k">=</span> data</div><div class='line js-file-line' id='LC86'>&nbsp;&nbsp;<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>list<span class="pl-pds">&quot;</span></span>).<span class="pl-en">endRefreshing</span>()</div><div class='line js-file-line' id='LC87'>}</div><div class='line js-file-line' id='LC88'><br></div><div class='line js-file-line' id='LC89'><span class="pl-k">function</span> <span class="pl-en">openURL</span>(<span class="pl-smi">url</span>) {</div><div class='line js-file-line' id='LC90'>&nbsp;&nbsp;<span class="pl-smi">$ui</span>.<span class="pl-c1">push</span>({</div><div class='line js-file-line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title<span class="pl-k">:</span> url</div><div class='line js-file-line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;views<span class="pl-k">:</span> [{</div><div class='line js-file-line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>web<span class="pl-pds">&quot;</span></span>,</div><div class='line js-file-line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props<span class="pl-k">:</span> {</div><div class='line js-file-line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url<span class="pl-k">:</span> url</div><div class='line js-file-line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line js-file-line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;layout<span class="pl-k">:</span> <span class="pl-smi">$layout</span>.<span class="pl-smi">fill</span></div><div class='line js-file-line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;}]</div><div class='line js-file-line' id='LC101'>&nbsp;&nbsp;})</div><div class='line js-file-line' id='LC102'>}</div><div class='line js-file-line' id='LC103'><br></div><div class='line js-file-line' id='LC104'><span class="pl-k">var</span> cache <span class="pl-k">=</span> <span class="pl-smi">$cache</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>stories<span class="pl-pds">&quot;</span></span>)</div><div class='line js-file-line' id='LC105'><br></div><div class='line js-file-line' id='LC106'><span class="pl-k">if</span> (cache) {</div><div class='line js-file-line' id='LC107'>&nbsp;&nbsp;<span class="pl-en">render</span>(cache)</div><div class='line js-file-line' id='LC108'>}</div><div class='line js-file-line' id='LC109'><br></div><div class='line js-file-line' id='LC110'><span class="pl-en">refetch</span>()</div></pre></div></div>
  </div>


  <footer class="clearfix">
    <div class="container">
      <a href="#"><svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>

      <ul class="clearfix">
        <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-preference-form" action="/site/mobile_preference" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="7GhzGJpd1davGr2JlOsOWOorGCxSK3jTLtdeDODgGudSwn0j3BCqbz+naNVUQQ+dy62zt3RD6QD6Zm+lMwdCKw==" />
            <input type="hidden" name="mobile" value="false">
            <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

            <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
              Desktop version
            </button>
</form>        </li>
      </ul>
    </div>
  </footer>
  
    <script crossorigin="anonymous" async="async" integrity="sha512-qE1QZ+LBoYFIwSQtBHe5PKgOI4aYWjTlEB0vZvGWrSiBSBiQdcYyKuUX2YPj1S9Ge/ez0QwtkEJalPXqCvHWHg==" type="application/javascript" src="https://assets-cdn.github.com/assets/mobile-b776cc992ffa711ad39b4d29770d49e1.js"></script>

  </body>
</html>
