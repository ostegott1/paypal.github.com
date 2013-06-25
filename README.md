paypal.github.com
=================
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>SDKs and Tools - PayPal Developer</title>
    <link href='https://www.paypalobjects.com/en_US/i/icon/pp_favicon_x.ico' rel='shortcut icon' />
    <link href='https://www.paypalobjects.com/eboxapps/css/f2/2a93ea0626628fda8ba38e96147df7/app.css' rel='stylesheet' />
    <link href='css/sdk.css' rel='stylesheet' />
  </head>
  <body data-spy='scroll' data-target='#sdk-menus'>
    <div class='wrapper'>
      <div class='navbar navbar-fixed-top'>
        <div class='topnav'>
          <div class='container'>
            <a class='btn btn-navbar' data-target='.nav-collapse' data-toggle='collapse'>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
              <span class='icon-bar'></span>
            </a>
            <a class='brand' href='./'>
              PayPal on GitHub
            </a>
            <div class='pull-right'>
              <a href='https://developer.paypal.com/'>
                <img alt='PayPal Developer' class='siteLogo' src='https://www.paypalobjects.com/webstatic/i/ex_ce2/logo/logo_paypal_106x29.png' />
              </a>
            </div>
          </div>
        </div>
        <div class='navbar-inner mainnav'>
          <div class='container'>
            <nav class='nav-collapse collapse' role='navigation'>
              <ul class='nav'>
                <li class='active'>
                  <a href='./'>SDKs</a>
                </li>
                <li>
                  <a href='toolkits/'>Toolkits</a>
                </li>
                <li>
                  <a href='sample-apps/'>Samples</a>
                </li>
                <li>
                  <a href='https://github.com/paypal' target='_blank'>
                    All Projects
                    <span class='pop-out-icon'></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class='centerContent'>
        <div class='view'>
          <!-- Begin docs item "<%= @item[:title] %>" last modified <%= @item[:mtime] %> -->
<div class='container' id='docsContainer'>
  <div class='row'>
  <div class='span2' id='docsNav'>
    <div class='row'>
      <div class='sidebar span2'>
        <ul class='nav nav-list' id='sdk-menus'>
          <li class='nav-header'>REST APIs</li>
          <li class='active'><a href="#payments">REST SDK</a></li>
          <li class='nav-header'>Classic APIs</li>
          <li><a href="#adaptive-payments">Adaptive Payments</a></li>
          <li><a href="#adaptive-accounts">Adaptive Accounts</a></li>
          <li><a href="#invoice">Invoice</a></li>
          <li><a href="#permissions">Permissions</a></li>
          <li><a href="#merchant">Merchant</a></li>
          <li><a href="#button-manager">Button Manager</a></li>
          <li><a href="#payflow-gateway">Payflow Gateway</a></li>
          <li><a title="PayPal Payments Pro(Payflow edition)" href="#ppo-payflow">Payments Pro</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class='span10'>
    <div class='mainContainer'>
      <div class='sdk-install'>
  <h1 id='payments'>REST API SDK</h1>
  <p>The PayPal REST SDK provides APIs to create, process and manage payments.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#payments-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payments-tab-python'>Python</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payments-tab-nodejs'>Node.js</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payments-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payments-tab-php'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payments-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='payments-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-rest'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-rest</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/rest-api-sdk/ruby/rest-api-sdk-ruby-0.6.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-ruby">https://github.com/paypal/rest-api-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='payments-tab-python'>
        <h2>Prerequisites</h2>
<ul>
  <li>Python 2.7 or 3.2</li>
  <li>httplib2</li>
</ul>
        <h2>Installation</h2>
<p>Install using <code>pip</code></p>
<pre>pip install paypalrestsdk&#x000A;</pre>
<p>(or) from github:</p>
<pre>pip install git+https://github.com/paypal/rest-api-sdk-python.git</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-python">https://github.com/paypal/rest-api-sdk-python</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='payments-tab-nodejs'>
        <h2>Prerequisites</h2>
<ul>
  <li>node.js 0.6.x or above</li>
</ul>
        <h2>Installation</h2>
<p>Install using <code>npm</code></p>
<pre>npm install paypal-rest-sdk</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-nodejs">https://github.com/paypal/rest-api-sdk-nodejs</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='payments-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;rest-api-sdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;0.7.0&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/rest-api-sdk/java/rest-api-sdk-java-0.7.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-java">https://github.com/paypal/rest-api-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='payments-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3.0",&#x000A; "ext-curl": "*",&#x000A; "ext-json": "*",&#x000A; "paypal/rest-api-sdk-php" : "0.7.*"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/rest-api-sdk/php/rest-api-sdk-php-0.7.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-php">https://github.com/paypal/rest-api-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='payments-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package RestApiSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/rest-api-sdk/dotnet/rest-api-sdk-dotnet-0.7.1.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/rest-api-sdk-dotnet">https://github.com/paypal/rest-api-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='adaptive-payments'>Adaptive Payments SDK</h1>
  <p>SDK provides APIs to create, process and manage simple and complex (parallel and chained) payments, and pre-approvals using the Adaptive Payments API.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#adaptive-payments-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-payments-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-payments-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-payments-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-payments-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='adaptive-payments-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-adaptivepayments'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-adaptivepayments</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptivepayments-sdk/ruby/adaptivepayments-sdk-ruby-1.103.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptivepayments-sdk-ruby">https://github.com/paypal/adaptivepayments-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-payments-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;adaptivepaymentssdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.4.103&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptivepayments-sdk/java/adaptivepayments-sdk-java-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptivepayments-sdk-java">https://github.com/paypal/adaptivepayments-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-payments-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/adaptivepayments-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/adaptivepayments-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptivepayments-sdk/php/adaptivepayments-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptivepayments-sdk-php/tree/namespace-php5.3">https://github.com/paypal/adaptivepayments-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-payments-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/adaptivepayments-sdk-php":"v2.4.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/adaptivepayments-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptivepayments-sdk/php/adaptivepayments-sdk-php-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptivepayments-sdk-php">https://github.com/paypal/adaptivepayments-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-payments-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalAdaptivePaymentsSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptivepayments-sdk/dotnet/adaptivepayments-sdk-dotnet-2.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptivepayments-sdk-dotnet">https://github.com/paypal/adaptivepayments-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='adaptive-accounts'>Adaptive Accounts SDK</h1>
  <p>The SDK provides APIs to create and manage PayPal accounts, add payment methods to accounts and obtain account verification status using the PayPal Adaptive Accounts API.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#adaptive-accounts-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-accounts-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-accounts-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-accounts-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#adaptive-accounts-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='adaptive-accounts-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-adaptiveaccounts'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-adaptiveaccounts</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptiveaccounts-sdk/ruby/adaptiveaccounts-sdk-ruby-1.102.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptiveaccounts-sdk-ruby">https://github.com/paypal/adaptiveaccounts-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-accounts-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;adaptiveaccountssdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.3.102&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptiveaccounts-sdk/java/adaptiveaccounts-sdk-java-2.3.102.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptiveaccounts-sdk-java">https://github.com/paypal/adaptiveaccounts-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-accounts-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/adaptiveaccounts-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/adaptiveaccounts-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptiveaccounts-sdk/php/adaptiveaccounts-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptiveaccounts-sdk-php/tree/namespace-php5.3">https://github.com/paypal/adaptiveaccounts-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-accounts-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/adaptiveaccounts-sdk-php":"v2.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/adaptiveaccounts-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptiveaccounts-sdk/php/adaptiveaccounts-sdk-php-2.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptiveaccounts-sdk-php">https://github.com/paypal/adaptiveaccounts-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='adaptive-accounts-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalAdaptiveAccountsSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/adaptiveaccounts-sdk/dotnet/adaptiveaccounts-sdk-dotnet-2.4.102.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/adaptiveaccounts-sdk-dotnet">https://github.com/paypal/adaptiveaccounts-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='invoice'>Invoice SDK</h1>
  <p>The SDK provides APIs to create and manage Invoices using the PayPal's Invoicing Service API.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#invoice-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#invoice-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#invoice-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#invoice-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#invoice-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='invoice-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'invoice-sdk-ruby'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install invoice-sdk-ruby</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/invoice-sdk/ruby/invoice-sdk-ruby-1.103.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/invoice-sdk-ruby">https://github.com/paypal/invoice-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='invoice-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;invoicesdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.3.103&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/invoice-sdk/java/invoice-sdk-java-2.3.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/invoice-sdk-java">https://github.com/paypal/invoice-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='invoice-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/invoice-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/invoice-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/invoice-sdk/php/invoice-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/invoice-sdk-php/tree/namespace-php5.3">https://github.com/paypal/invoice-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='invoice-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/invoice-sdk-php":"v2.4.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/invoice-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/invoice-sdk/php/invoice-sdk-php-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/invoice-sdk-php">https://github.com/paypal/invoice-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='invoice-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalInvoiceSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/invoice-sdk/dotnet/invoice-sdk-dotnet-2.3.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/invoice-sdk-dotnet">https://github.com/paypal/invoice-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='permissions'>Permissions SDK</h1>
  <p>The SDK provides APIs for developers to request and obtain permissions from merchants and consumers, to execute APIs on behalf of them. The permissions include variety of operations from processing payments to accessing account transaction history.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#permissions-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#permissions-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#permissions-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#permissions-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#permissions-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='permissions-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-permissions'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-permissions</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/permissions-sdk/ruby/permissions-sdk-ruby-1.96.1.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/permissions-sdk-ruby">https://github.com/paypal/permissions-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='permissions-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;permissionssdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.3.103&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/permissions-sdk/java/permissions-sdk-java-2.3.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/permissions-sdk-java">https://github.com/paypal/permissions-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='permissions-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/permissions-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/permissions-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/permissions-sdk/php/permissions-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/permissions-sdk-php/tree/namespace-php5.3">https://github.com/paypal/permissions-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='permissions-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/permissions-sdk-php":"v2.4.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/permissions-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/permissions-sdk/php/permissions-sdk-php-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/permissions-sdk-php">https://github.com/paypal/permissions-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='permissions-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalPermissionsSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/permissions-sdk/dotnet/permissions-sdk-dotnet-2.3.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/permissions-sdk-dotnet">https://github.com/paypal/permissions-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='merchant'>Merchant SDK</h1>
  <p>The SDK provides APIs for processing payments, recurring payments, subscriptions and transactions using PayPal's Merchant APIs, which include Express Checkout, Recurring Payments, Direct Payment and Transactional APIs.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#merchant-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#merchant-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#merchant-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#merchant-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#merchant-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='merchant-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-merchant'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-merchant</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/merchant-sdk/ruby/merchant-sdk-ruby-1.103.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/merchant-sdk-ruby">https://github.com/paypal/merchant-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='merchant-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;merchantsdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.4.103&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/merchant-sdk/java/merchant-sdk-java-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/merchant-sdk-java">https://github.com/paypal/merchant-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='merchant-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/merchant-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/merchant-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/merchant-sdk/php/merchant-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/merchant-sdk-php/tree/namespace-php5.3">https://github.com/paypal/merchant-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='merchant-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/merchant-sdk-php":"v2.4.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/merchant-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/merchant-sdk/php/merchant-sdk-php-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/merchant-sdk-php">https://github.com/paypal/merchant-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='merchant-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalMerchantSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/merchant-sdk/dotnet/merchant-sdk-dotnet-2.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/merchant-sdk-dotnet">https://github.com/paypal/merchant-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='button-manager'>Button Manager SDK</h1>
  <p>The SDK provides APIs to create, and manage PayPal Payments Standard buttons programmatically.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#button-manager-tab-ruby'>Ruby</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#button-manager-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#button-manager-tab-php-5-3'>PHP</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#button-manager-tab-php'>PHP 5.2</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#button-manager-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='button-manager-tab-ruby'>
        <h2>Prerequisites</h2>
<ul>
  <li>Ruby 1.8.7 or above</li>
  <li>Bundler</li>
</ul>
        <h2>Installation</h2>
<p>Bundler</p>
<pre>gem 'paypal-sdk-buttonmanager'&#x000A;</pre>
<p>Rubygems</p>
<pre>gem install paypal-sdk-buttonmanager</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/buttonmanager-sdk/ruby/buttonmanager-sdk-ruby-1.103.0.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/buttonmanager-sdk-ruby">https://github.com/paypal/buttonmanager-sdk-ruby</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='button-manager-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java jdk-1.5 or higher</li>
  <li>Apache Maven 3 or higher</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>pom.xml</code> as below.</p>
<pre>&lt;dependency&gt;&#x000A; &lt;groupId&gt;com.paypal.sdk&lt;/groupId&gt;&#x000A; &lt;artifactId&gt;buttonmanagersdk&lt;/artifactId&gt;&#x000A; &lt;version&gt;2.4.103&lt;/version&gt;&#x000A;&lt;/dependency&gt;</pre>
<p>Run <code>mvn install</code>, to install dependency</p>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/buttonmanager-sdk/java/buttonmanager-sdk-java-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/buttonmanager-sdk-java">https://github.com/paypal/buttonmanager-sdk-java</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='button-manager-tab-php-5-3'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.3</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.3",&#x000A; "ext-curl": "*",&#x000A; "paypal/buttonmanager-sdk-php":"v3.5.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/buttonmanager-sdk-php/stable-php5.3/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/buttonmanager-sdk/php/buttonmanager-sdk-php-3.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/buttonmanager-sdk-php/tree/namespace-php5.3">https://github.com/paypal/buttonmanager-sdk-php/tree/namespace-php5.3</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='button-manager-tab-php'>
        <h2>Prerequisites</h2>
<ul>
  <li>PHP <b>5.2</b> or above</li>
  <li>curl & openssl extensions must be enabled</li>
  <li>composer</li>
</ul>
        <h2>Installation</h2>
<p>Add dependency to your application <code>composer.json</code> as below</p>
<pre>"require": {&#x000A; "php": ">=5.2",&#x000A; "ext-curl": "*",&#x000A; "paypal/buttonmanager-sdk-php":"v2.4.103"&#x000A;}</pre>
<p>Run <code>composer update</code>, to install dependency</p>
<p>Without composer</p>
<pre>curl https://raw.github.com/paypal/buttonmanager-sdk-php/stable/samples/install.php | php</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/buttonmanager-sdk/php/buttonmanager-sdk-php-2.4.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/buttonmanager-sdk-php">https://github.com/paypal/buttonmanager-sdk-php</a>
          </li>
        </ul>
      </div>
      <div class='tab-pane' id='button-manager-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>Visual Studio 2008 or higher</li>
  <li>log4net 1.2.10</li>
  <li>NuGet 2.2 Note: NuGet 2.2 requires .NET Framework 4.0</li>
</ul>
        <h2>Installation</h2>
<p>Run the following command in the Package Manager Console:</p>
<pre>Install-Package PayPalButtonManagerSDK</pre>
        <h2>Links</h2>
        <ul>
          <li>
            Download
            <a href="https://github.com/paypal/sdk-packages/raw/gh-pages/buttonmanager-sdk/dotnet/buttonmanager-sdk-dotnet-2.5.103.zip">SDK</a>
          </li>
          <li>
            Source at
            <a href="https://github.com/paypal/buttonmanager-sdk-dotnet">https://github.com/paypal/buttonmanager-sdk-dotnet</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='payflow-gateway'>Payflow Gateway</h1>
  <p>Payflow Gateway enables you to use hosted checkout pages with the Payflow SDK to integrate the Payflow payments solution into your website or application.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#payflow-gateway-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payflow-gateway-tab-oscommerce'>OSCommerce</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#payflow-gateway-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='payflow-gateway-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java 2 Platform, Standard Edition (J2SE) 1.4 or later.</li>
  <li>Xerces Java Parser version 2.7.1 from Apache.</li>
</ul>
        <h2>Installation</h2>
        <ul>
          <li>
            Download
            <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/payflow-gateway/java/Payflow_SDK_for_Java_v440.zip'>SDK</a>
          </li>
          <li>Copy <code>payflow.jar</code> from <code>lib</code> folder to your appropriate lib folder.</li>
        </ul>
      </div>
      <div class='tab-pane' id='payflow-gateway-tab-oscommerce'>
        These payment modules add support for additional features of PayPal PayFlow Link Hosted Pages to osCommerce 2.3.x.
        <h2>Installation</h2>
<p>To install the module, back up your existing osCommerce installation files and database.</p>
<ul>
  <li>
    Download
    <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/payflow-gateway/oscommerce-2.3/OsC23PayPalPayFlow.zip'>SDK</a>
  </li>
  <li>Copy/upload all files in the /catalog/ directory over your existing osCommerce /catalog/ directory. This will replace files in your current osCommerce installation and add the new files to support additional features.</li>
  <li>If you have customised the design or program code of your osCommerce installation, you will need to manually compare the updated files with your existing files, and manually merge any code or design changes.</li>
</ul>
If you are installing osCommerce for the first time, the installation instructions are available at http://www.oscommerce.info/confluence/display/OSCOM23/osCommerce+Online+Merchant+v2.3 . You will need to turn on register_globals and enable the MySQL extension in php.ini, at a minimum
      </div>
      <div class='tab-pane' id='payflow-gateway-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>.NET Framework 1.1 or later</li>
</ul>
        <h2>Installation</h2>
        <ul>
          <li>
            Download
            <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/payflow-gateway/dotnet/payflow_dotnet_setup_v4.33.zip'>SDK</a>
          </li>
          <li>The <code>Payflow_dotNET_Setup.msi</code> file will install all 'samples' and 'dll' for you.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class='sdk-install'>
  <h1 id='ppo-payflow'>PayPal Payments Pro(Payflow Edition)</h1>
  <p>PayPal Payments Pro (Also known as Website Payments Pro outside the US) enables merchants and developers to accept credit cards,debit cards, and PayPal payments directly on their website. PayPal Payments Pro also includes Express Checkout and Virtual Terminal. Add-on services like Recurring Billing are also available.</p>
  <div class='tabbable'>
    <ul class='nav btn-group'>
      <li class='btn active'>
        <a data-toggle='tab' href='#ppo-payflow-tab-java'>Java</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#ppo-payflow-tab-oscommerce'>OSCommerce</a>
      </li>
      <li class='btn'>
        <a data-toggle='tab' href='#ppo-payflow-tab-csharp'>.NET</a>
      </li>
    </ul>
    <div class='tab-content'>
      <div class='tab-pane active' id='ppo-payflow-tab-java'>
        <h2>Prerequisites</h2>
<ul>
  <li>Java 2 Platform, Standard Edition (J2SE) 1.4 or later.</li>
  <li>Xerces Java Parser version 2.7.1 from Apache.</li>
</ul>
        <h2>Installation</h2>
        <ul>
          <li>
            Download
            <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/paypal-payments-pro-payflow-edition/java/Payflow_SDK_for_Java_v440.zip'>SDK</a>
          </li>
          <li>Copy <code>payflow.jar</code> from <code>lib</code> folder to your appropriate lib folder.</li>
        </ul>
      </div>
      <div class='tab-pane' id='ppo-payflow-tab-oscommerce'>
        These payment modules add support for additional features of PayPal PayFlow Link Hosted Pages to osCommerce 2.3.x.
        <h2>Installation</h2>
<p>To install the module, back up your existing osCommerce installation files and database.</p>
<ul>
  <li>
    Download
    <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/paypal-payments-pro-payflow-edition/oscommerce-2.3/OsC23PayPalPayFlow.zip'>SDK</a>
  </li>
  <li>Copy/upload all files in the /catalog/ directory over your existing osCommerce /catalog/ directory. This will replace files in your current osCommerce installation and add the new files to support additional features.</li>
  <li>If you have customised the design or program code of your osCommerce installation, you will need to manually compare the updated files with your existing files, and manually merge any code or design changes.</li>
</ul>
If you are installing osCommerce for the first time, the installation instructions are available at http://www.oscommerce.info/confluence/display/OSCOM23/osCommerce+Online+Merchant+v2.3 . You will need to turn on register_globals and enable the MySQL extension in php.ini, at a minimum
      </div>
      <div class='tab-pane' id='ppo-payflow-tab-csharp'>
        <h2>Prerequisites</h2>
<ul>
  <li>.NET Framework 1.1 or later</li>
</ul>
        <h2>Installation</h2>
        <ul>
          <li>
            Download
            <a href='https://github.com/paypal/sdk-packages/raw/gh-pages/paypal-payments-pro-payflow-edition/dotnet/Payflow_dotNET_v4.50RC.zip'>SDK</a>
          </li>
          <li>Copy <code>Payflow_dotNET.dll</code> to your appropriate lib folder.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
</div>
<!-- End docs item "<%= @item[:title] %>" -->
        </div>
        <div class='docsScroller'>
          <a class='gotoTop hide' href='#'></a>
        </div>
        <div class='footer span12'>
          <p class='copyright'>Copyright &copy; 1999 - 2013 PayPal. All rights reserved.</p>
          <ul class='footerNav'>
            <li>
              <a href='https://www.paypal.com/us/cgi-bin/webscr?cmd=p/gen/ua/policy_privacy-outside'>Privacy policy</a>
            </li>
            <li>
              <a href='https://cms.paypal.com/us/cgi-bin/?cmd=_render-content&amp;content_ID=ua/Legal_Hub_full'>Legal agreements</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <script src='https://www.paypalobjects.com/eboxapps/js/e9/fc24408d5d85bb4f8d8b5c252fb483/lib/require-2.0.1.js' type='text/javascript'></script>
    <script src='https://www.paypalobjects.com/eboxapps/js/e9/fc24408d5d85bb4f8d8b5c252fb483/main.js' type='text/javascript'></script>
    <script src='js/sdk.js' type='text/javascript'></script>
    <script type='text/javascript'>
      //<![CDATA[
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36123826-1']);
        _gaq.push(['_trackPageview']);
        
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
        
        function trackOutboundLink(link) {
          try {
            _gaq.push(['_trackEvent', "Outbound Links", link.href]);
            setTimeout(function() {
              document.location.href = link.href;
            }, 100);
            return false;
          } catch(err){
            return true;
          }
        }
        
        jQuery(document).on('click', 'a[href^="http"]', function(){
          return trackOutboundLink(this);
        })
      //]]>
    </script>
  </body>
</html>
