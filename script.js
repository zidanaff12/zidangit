/*
let jawaban = prompt('kamu sayang aku gak? (sayang/gak)')


if (jawaban.toLocaleLowerCase() === "sayang") {
    alert('aku juga sayang kamu muacchhhh')
} else if (jawaban.toLocaleLowerCase() === "gak") {
    alert ('oke kita ga vc malem ini')
}  else {
    alert('bocah batu disuruh jawab sayang/gak doang :(')
}
*/

//https://assets-a1.kompasiana.com/items/album/2021/02/08/pexels-cottonbro-3825303-602155288ede48631102b322.jpg?t=o&v=770

function test() {
    let jawaban = prompt('kamu sayang aku gak? (sayang/gak)')
    if (jawaban.toLocaleLowerCase() === "sayang") {
        alert('coba aku test dulu')     

            let makanan = prompt('makanan kesukaan aku apa? (cumi/kepiting)')
            if (makanan.toLocaleLowerCase() === "cumi") {
                alert('good, lanjut')

                let tempat = prompt('coffeshop di bogor favorit aku (gayatri/moha)?')
                if (tempat.toLocaleLowerCase() === "gayatri") {
                    alert('nice thats ma girll')

                } else if (tempat.toLocaleLowerCase() === "moha") {
                    alert('dahlaah salah mulu ga sayang ini mah!!!!')
                }
                else {
                    alert('kocak!, ulangggg')
                }

            } else if (makanan.toLocaleLowerCase() === "kepiting") {
                alert('katanya sayang ko salah?, ULANGGG!!!')
            }
            else {
                alert('kocak!, ulangggg')
            }

    } else if (jawaban.toLocaleLowerCase() === "gak") {
        alert ('oke kita ga vc malem ini, bye!')
    }  else {
        alert('bocah batu disuruh jawab sayang/gak doang, tulis yang bner kaya diatas, ULANGGG! :(')
    }
    
    alert('coba copy paste --> https://assets-a1.kompasiana.com/items/album/2021/02/08/pexels-cottonbro-3825303-602155288ede48631102b322.jpg?t=o&v=770')

}
