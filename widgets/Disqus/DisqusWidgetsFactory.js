(function(widgets)
{
  var DisqusWidgetsFactory = function()
  {
  };

  DisqusWidgetsFactory.prototype.toString = function()
  {
    return "Disqus Widgets Factory";
  };

  widgets._disqus = new DisqusWidgetsFactory();

  widgets.disqus = function()
  {
    return this._disqus;
  };
})(Widgets);