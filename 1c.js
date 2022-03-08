var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let lengkap_arr = [a, b, nama];

function perkenalan() {
	let asal = "indonesia";
	return console.log(
		"perkenalkan nama saya " +
		nama +
		" nomor urut " +
		a +
		" sekarang sedang mengikuti " +
		b + 
		" berasal dari " +
		asal
	);
}

perkenalan()