
const removeDuplicates = function(nums) {
	for(let x = (nums.length - 1); x > 0; x--){
		for(let v = (nums.length - 1); v >= 0; v--){
			if(v === x){
				continue
			}
			if(nums[x] === nums[v]){
				nums[v] = "_"
				let value = nums.splice(v, 1)
				nums.push(value[0])
			}
		}
	}
	for(let i = 0; i < nums.length; i++){
		if(nums[i] === "_"){
			return i
		}
	}
}

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([0,0,0,0,0]))
