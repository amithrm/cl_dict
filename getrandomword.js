var http = require('http');

homeFields(name) {

    var p = new Promise (function (resolve, reject) {
        var userdata = {"columns":["id","full_name","dob","email"]}
        var postData = JSON.stringify(
            userdata
        );
        var options = {
                host: host,
                path: "/api/1/table/user/select",
                port: port,
                method: "POST",
                withCredentials : false
        };

        var req = http.request(options, response => {
            var str = ''

            response.on('data', function (chunk) {
                    str += chunk;
            });

            response.on('end', function () {
                var result = JSON.parse(str);
                    resolve({"fields":fields});
            });

        });

        req.on('error', e => {
            reject(e);
            });

        req.write(postData);
        req.end();

    });

return p;

}
