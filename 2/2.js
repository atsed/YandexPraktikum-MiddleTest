function get(obj, path, defaultValue) {
    console.log(path);
    let newObj = obj;
    let splitPath = path.split('.');
    let result;
    let prob = true;

    function retObj(obj, value, defaultValue) {
        //console.log("returner:", obj[value]);
        if (obj[value]) {
            return newObj = obj[value];
        } else {
            console.log("wfefwfwfwf", defaultValue);
            return prob = false;
        }
    }
    //console.log(splitPath[0]);
    for (let i = 0; i < splitPath.length; i++) {
        result = retObj(newObj, splitPath[i], defaultValue);
    }

    if (prob === true) {
        console.log("RESULT", result);
        return result;
    } else {
        console.log("RESULT", defaultValue);
        return defaultValue;
    }
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};

get(obj, 'a.b'); // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e'); // 'f'
get(obj, 'a.x.e'); // undefined
get(obj, 'a.x.e', true); // true
get(obj, 'a.x.e', 'My default value'); // My default value