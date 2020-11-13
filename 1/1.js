flatten([1, 'any [complex] string', null, function() {},
    [1, 2, [3, '4'], 0],
    [], { a: 1 }
]);
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

function flatten(list) {
    let result = [];
    console.log("1 result:", list);

    console.log("proverca na arr", result[5]);

    function upArr(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                if (arr[i] !== undefined) {
                    console.log("upArr(arr[i]);", arr[i]);
                    upArr(arr[i]);
                }
            } else {
                console.log("push arr");
                result.push(arr[i]);
            }
        }

        return result;
    }

    for (let i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            if (list[i] !== undefined) {
                console.log("go:", list[i]);
                upArr(list[i]);
            }
        } else {
            result.push(list[i]);
        }
    }
    console.log(result);
    return result;
}