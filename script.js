let sBtn = document.getElementById('start');
let tBtn = document.getElementById('stop');
let rBtn = document.getElementById('reset');
let lBtn = document.getElementById('lap');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

sBtn.addEventListener('click',()=>{
	timer = true;
	stopWatch();
});

tBtn.addEventListener('click',()=> {
	timer = false;
});

rBtn.addEventListener('click',()=> {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
    count = 0;
	document.getElementById('Hr').innerHTML = "00";
	document.getElementById('Min').innerHTML = "00";
	document.getElementById('Sec').innerHTML = "00";
	document.getElementById('Count').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		count++;
        if(count==60){
            second++;
            count = 0
        }
		if (second == 60) {
			minute++;
			second = 0;
		}
        if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
        }

		let hr_v = hour;
		let min_v = minute;
		let sec_v = second;
		let c_v = count;
		if (hour < 10) {
			hr_v = "0" + hr_v;
		}
		if (minute < 10) {
			min_v = "0" + min_v;
		}
		if (second < 10) {
			sec_v = "0" + sec_v;
		}
        if (count < 10) {
			c_v = "0" + c_v;
		}

		document.getElementById('Hr').innerHTML = hr_v;
		document.getElementById('Min').innerHTML = min_v;
		document.getElementById('Sec').innerHTML = sec_v;
		document.getElementById('Count').innerHTML = c_v;
		setTimeout(stopWatch, 10);
	}
}
