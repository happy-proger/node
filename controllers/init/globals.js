module.exports = function (app) {

    app.locals.roles = {
        admin: {
            fields : {
                username : {
                    label: 'Логин',
                    name : 'username',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'password',
                    length: 40
//                        ,validator:
                }
            }
        },
        upr: {
            fields : {
                login : {
                    name : 'username',
                    label: 'Логин',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                name : {
                    name : 'name',
                    label: 'Название',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'Пароль',
                    length: 40
//                        ,validator:
                }
            }
        },
        user: {
            fields : {
                login : {
                    label: 'Логин',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                name : {
                    label: 'Имя',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                secondName : {
                    label: 'Отчество',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                surname: {
                    label: 'Фамилия',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'password',
                    length: 40
//                        ,validator:
                }}
        }
    };
//    app.locals.menu = {
//        "Регистрация": {
//            name: 'Регистрация',
//            path: '/register',
//            visibility:['anonymous']},
//        "Авторизация": {
//            name: 'Авторизация',
//            path: '/login',
//            visibility:['anonymous']},
//        "Редактирование": {
//            name: 'Редактирование',
//            path: '/user',
//            visibility:['user', 'upr']},
//        "Выход": {
//            name: 'Выход',
//            path: '/logout',
//            visibility:['all']},
//        "Add": {
//            name: 'Add',
//            path: '/add',
//            visibility:['admin']},
//        "uedit": {
//            name: 'Редактирование',
//            path: '/upr',
//            visibility:['upr']},
//        "user:edit": {
//            name: 'user:edit',
//            path: '/user',
//            visibility:['admin']},
////        Upload: '/upload',        
//        "test": {
//            name: 'test',
//            path: '/test',
//            visibility:['admin']}
//    };
    app.locals.menu = [

         {
            name: 'Авторизація',
            path: '/login',
            visibility:['anonymous']},
        {
            name: 'Реєстрація',
            path: '/register',
            visibility:['anonymous']},
         {
            name: 'Редагування',
            path: '/user',
            visibility:['user']},

         {
            name: 'Add',
            path: '/add',
            visibility:['admin']},
         {
            name: 'Редагування',
            path: '/upr',
            visibility:['upr']},
         {
            name: 'user:edit',
            path: '/user',
            visibility:['admin']},
//        Upload: '/upload',        
         {
            name: 'test',
            path: '/test',
            visibility:['admin']}
//        {
//            name: 'Выход',
//            path: '/logout',
//            visibility:['user','upr','admin']}
    ];
    app.locals.ini_db_mapper = function (input,reverse){
        var Map = {
            'CPU.CPUID' : 'CPU_CPUID',
            'CPU.BrandName' : 'CPU_BrandName',
            'Board ser.N' : 'Board ser_N',
            'Chassis ser.N' : 'Chassis ser_N',
            'CPU1 ser.N' : 'CPU1 ser_N',
            'CPU2 ser.N' : 'CPU2 ser_N',
            'MEM1 Ser.N' : 'MEM1 Ser_N',
            'MEM2 Ser.N' : 'MEM2 Ser_N',
            'MEM3 Ser.N' : 'MEM3 Ser_N',
            'MEM4 Ser.N' : 'MEM4 Ser_N',
            'System ser.N': 'System ser_N',
            'S.M.A.R.T': 'S_M_A_R_T'
        }
        var invert = function (obj) {

            var new_obj = {};

            for (var prop in obj) {
                if(obj.hasOwnProperty(prop)) {
                    new_obj[obj[prop]] = prop;
                }
            }

            return new_obj;
        };
        if (reverse) {
            invert(Map);
        }
        if(typeof(input)=="undefined"){return false;};
        if(typeof(input)=="object")
        {
//        console.log(typeof(input));
//        console.log(Object.keys(input));
            for (var k in input){
                for(var key in Map)
                {
                    var kk = key ;
//                console.log (k + ': ' + input[k]);
                    if (input[k].hasOwnProperty(kk)){
//                    console.log(input[k][kk]);
                        input[k][Map[kk]] = input[k][kk];
                        delete input[k][kk];
                    }
                }

            };
            return input;
        }
    };


};
