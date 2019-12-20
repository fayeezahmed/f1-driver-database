function findKey(obj, keyToFind, out = []){
	if (typeof(obj) === "object") {
		Object.keys(obj).some(key => {

            if (key === keyToFind) {
				out.push(obj[key])
            } else {
				findKey(obj[key], keyToFind, out)
            }
    	})
        return out
	}
}

export default findKey;
