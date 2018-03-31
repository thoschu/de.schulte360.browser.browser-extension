 /**
 * Created by Tom S.
 */
 (function (that) {
     $.get("https://jsonplaceholder.typicode.com/posts/1", function (data, status) {
         $("#content").text(_.property('title')(data));

         chrome.runtime.sendMessage({data: status});
     });
 })(this);