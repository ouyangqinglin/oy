<template>
  <div>
      <canvas id="hello">
          <p>矩形</p>
      </canvas>
      <br>
      <canvas id="triangle">
          <p>三角形</p>
      </canvas>
      <br>
      <canvas id="round">
          <p>圆形</p>
      </canvas>
  </div>
</template>

<script setup>
onMounted(() => {
    rectCanvas()
    triangleCanvas()
    roundCanvas()
})

// 绘制矩形
function rectCanvas() {
    const canvas = document.getElementById('hello')
    const ctx = canvas.getContext('2d')
    canvas.width = 300
    canvas.height = 200

    ctx.fillStyle = '#666'
    ctx.fillRect(30, 30, 100, 80)

    ctx.strokeRect(50, 50, 30, 30);

    ctx.fillStyle = '#999'
    ctx.fillRect(10, 10, 100, 80)

    ctx.clearRect(30, 30, 20, 20)
}

// 绘制三角形
function triangleCanvas() {
    const canvas = document.getElementById('triangle')
    canvas.width = 200
    canvas.height = 150
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(10, 60)
    ctx.lineTo(30, 35)
    ctx.fillStyle = '#666'
    ctx.fill() // 调用 fill() 函数时，所有没有闭合的形状都会自动闭合
    // ctx.stroke() // 调用 stroke() 时不会自动闭合。
}

// 绘制圆形
function roundCanvas() {
    console.log(Math.PI)
    const pi = Math.PI
    const canvas = document.getElementById('round')
    const ctx = canvas.getContext('2d')
    canvas.width = 600
    canvas.height = 500
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3; j++) {
            ctx.beginPath()
            let x = 25 + j*50
            let y = 25 + i*50
            const radius = 20
            const startAngle = 0
            let endAngle = pi + (pi * j) / 2
            let anticlockwise = i % 2 !== 0 // 顺时针或逆时针

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

            if (i > 1) ctx.fill()
            else ctx.stroke()
        }
    }
}
</script>

<style lang="scss">

</style>