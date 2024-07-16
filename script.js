const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'https://i.imgur.com/Spey5mo.jpg'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width=1000, canvas.height=700)
	ctx.font = '70px monotype corsiva'
	ctx.fillStyle = '#022A3E'
	ctx.fillText(nameInput.value, 300, 370)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('https://i.ibb.co/hMv55Bm/sss.jpg')
	downloadBtn.download = 'https://i.ibb.co/hMv55Bm/sss.jpg - ' + nameInput.value

})
	
	