# Shapeless Router
simpe JS/Jquery page router
<ul>
<li>-a js/jquery based page router</li>
<li>Built for C# / MVC/ APS .NET, but should work for other Controller-Action-APIs</li>
</ul>
<h3>Basics</h3>
<p>You direct to certian controllers and actions using URLs containing Hash signs (#)
The controller or API call should return your HTML page</p>
<p>The default controller automatically pointed to by the router is "Home", so if you don't add another Controller name before your action name -it will look for your action in the "HomeController". For example  "home/SimpleAction"</p>
```html
<a href="#SimpleAction">Simple Action</a>
```
<p>You can add query paremeters right in your URL like you nomally would. These get passed into the controller action as they are named</p>


```html
<a href="#hashQuery?param1=test1&param2=test2&param3=test3">Query Strings</a>
```

<p>If you want to direct to a controller other than "Home", you can just add that before your Action after the "#", using a "/" to seperate controller/action names</p>


```html
<a href="#FormGenerator/hashQuery">Different Controller</a>
```





