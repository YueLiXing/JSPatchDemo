require('NSString,Audiences,User');
defineClass('ViewController', {
//            test: function() {
//                console.log("456");
//                var temp = "123";
//                var test = block('NSString*', function(error) {
//                                 console.log("开始刷新 error");
//                             });
//                test({""});
//                console.log("4567");
//            },
            temp: function() {
                console.log("2");
                var dict = {
                    "listflag": 110,
                    "user": {
                        "name": "name",
                        "uid": 120
                    }
                };
                console.log("1");
                var value = dict["listflag"];
                var buff = Audiences.alloc().init();
                buff.setListflag(value);
                console.log(buff.listflag());
                console.log(typeof(value));
                var user = User.alloc().init();
                console.log("+++++++++++++++");
                var userdict = dict["user"];
                user.setName(userdict["name"]);
                user.setUid(userdict["uid"]);
                console.log(value);
                buff.setUser(user);
//                var user = User.alloc().
                console.log("---------------");
                console.log(buff.listflag());
                console.log(buff.user().uid());
                console.log(buff.user().name());
            },
            });