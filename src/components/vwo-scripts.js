/**
 * VWO has 3 scripts that need to be called in 3 diferent <script> tags.
 */
export const vmoScripts = [
  `
    var _vis_opt_account_id = ${process.env.VWO_ID};
    var _vis_opt_protocol = (('https:' == document.location.protocol) ? 'https://' : 'http://');
    document.write('<s' + 'cript src="' + _vis_opt_protocol +
      'dev.visualwebsiteoptimizer.com/deploy/js_visitor_settings.php?v=1&a='+_vis_opt_account_id+'&url='
      +encodeURIComponent(document.URL)+'&random='+Math.random()+'" type="text/javascript">' + '<\/s' + 'cript>');
  `,
  `
    if(typeof(_vis_opt_settings_loaded) == "boolean") { document.write('<s' + 'cript src="' + _vis_opt_protocol +
      'd5phz18u4wuww.cloudfront.net/vis_opt.js" type="text/javascript">' + '<\/s' + 'cript>'); }
  `,
  `
    if(typeof(_vis_opt_settings_loaded) == "boolean" && typeof(_vis_opt_top_initialize) == "function") {
      _vis_opt_top_initialize(); vwo_$(document).ready(function() { _vis_opt_bottom_initialize(); });
    }
  `
]
