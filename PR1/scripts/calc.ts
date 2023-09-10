// Площадь комнаты
function RoomArea(lengthWall: number, wightWall: number, hight: number): number {
    return (lengthWall + wightWall) * 2 * hight;
}
// Периметр комнаты
function RoomPerimeter(lengthWall: number, wightWall: number): number {
    return (lengthWall + wightWall) * 2;
}
// Площадь обоев
function WallpaperArea(wightWallpaper: number, lengthWallpaper: number): number {
    return wightWallpaper * lengthWallpaper
}
// Кол-во обоев на комнату
function NumberOfRolls(rollArea: number, roomArea: number): number {
    return Math.ceil(roomArea / rollArea)
}
function Cost(quantity: number, price: number): number {
    return quantity * price;
}
// Кол-во литров краски
function NumberOfPaints(paintСonsumption: number, roomArea: number): number {
    return Math.floor(roomArea * paintСonsumption)
}

document.addEventListener("DOMContentLoaded", () => {
    const lengthWallInput = document.getElementById('lengthWall') as HTMLInputElement;
    const widthWallInput = document.getElementById('widthWall') as HTMLInputElement;
    const hightInput = document.getElementById('hight') as HTMLInputElement;
    const typeOfWork = document.getElementById('typeOfWork') as HTMLInputElement;

    const widthtWallpaperInput = document.getElementById('widthtWallpaper') as HTMLInputElement;
    const lengthWallpaperInput = document.getElementById('lengthWallpaper') as HTMLInputElement;
    const priceWallpaperInput = document.getElementById('priceWallpaper') as HTMLInputElement;

    const paintСonsumptionInput = document.getElementById('paintСonsumption') as HTMLInputElement;
    const pricePaintsInput = document.getElementById('pricePaints') as HTMLInputElement;

    const resultDiv = document.getElementById("result") as HTMLDivElement;
    const perimeterSpan = document.getElementById('perimeter') as HTMLSpanElement;
    const areaSpan = document.getElementById('area') as HTMLSpanElement;
    const quantitySpan = document.getElementById('quantity') as HTMLSpanElement;
    const costSpan = document.getElementById('cost') as HTMLSpanElement;

    const wallpaperDiv = document.getElementById("wallpaper");
    const paintsDiv = document.getElementById("paints");

    const calcButton = document.getElementById("calcButton") as HTMLButtonElement;

    console.log(typeOfWork, wallpaperDiv, paintsDiv);

    if (typeOfWork && wallpaperDiv && paintsDiv) {
        typeOfWork.addEventListener("change", function () {
            const selectedValue = typeOfWork.value;
            wallpaperDiv.style.display = "none";
            paintsDiv.style.display = "none";
            if (selectedValue === "Обои") {
                wallpaperDiv.style.display = "block";
            } else if (selectedValue === "Краска") {
                paintsDiv.style.display = "block";
            }
        });
    }
    calcButton.addEventListener("click", function () {
        try {
            const roomPerimeter: number = 2 * (parseInt(lengthWallInput.value) + parseInt(widthWallInput.value));
            const roomArea: number = roomPerimeter * parseInt(hightInput.value)
            if (typeOfWork.value === "Обои") {
                const wallpaperArea: number = WallpaperArea(parseInt(widthtWallpaperInput.value), parseInt(lengthWallpaperInput.value))
                const quantityWallpaper: number = NumberOfRolls(wallpaperArea, roomArea);
                const costWallpaper: number = Cost(quantityWallpaper, parseInt(priceWallpaperInput.value))

                perimeterSpan.textContent = roomPerimeter.toString();
                areaSpan.textContent = roomArea.toString();

                quantitySpan.textContent = quantityWallpaper.toString();
                costSpan.textContent = costWallpaper.toFixed(2);
                resultDiv.style.display = "block";

            } else if (typeOfWork.value === "Краска") {
                const quantityPaints = NumberOfPaints(parseFloat(paintСonsumptionInput.value), roomArea);
                const costPaints = Cost(quantityPaints, parseInt(pricePaintsInput.value));

                perimeterSpan.textContent = roomPerimeter.toString();
                areaSpan.textContent = roomArea.toString();
                quantitySpan.textContent = quantityPaints.toString();
                costSpan.textContent = costPaints.toFixed(2);
                resultDiv.style.display = "block";
            }
        } catch (error) {
            console.log(error);
        }
    })
})

