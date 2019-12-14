function findKey(obj, keyToFind, out = []){
	if (typeof(obj) === "object") {
		Object.keys(obj).some(key => {
			if(out.length > 0) {
				return;
            }

            if (key === keyToFind) {
				out.push(obj[key])
            } else {
				findKey(obj[key], keyToFind, out)
            }
    	})
	}
	return out
}

export default findKey;
// Test cases
// key = "images"
// 1. {}
// 2. 
const test2 = {
    "hello": {
        "images": {}
    }
}

const test3 = {
    "hello": {
        "key": "value"
    },
    "images": {}
}

const test4 = {
    "hello": [],
    "world": []
}